<?php

namespace App\Http\Controllers;

use App\Models\Tehsil;
use App\Models\Program;
use App\Models\District;
use App\Models\Employee;
use App\Models\Facility;
use App\Models\Designation;
use App\Models\EmployeeType;
use App\Models\UnionCouncil;
use App\Models\FinancialYear;
use App\Models\Qualification;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\DistrictResource;
use App\Http\Resources\EmployeeResource;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Http\Resources\UserResource;
use App\Models\Document;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $query    = Employee::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('name')){
            $query->where('name','like','%'.request('name').'%');
        }
        if(request('cnic')){
            $query->where('cnic','like','%'.request('cnic').'%');
        }

        $employees = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);

        dd(request()->input('page', 1));

        return inertia('Employee/Index',[
            'employees' => EmployeeResource::collection($employees),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'currentPage' => request()->input('page', 1), // Get current page from request
            'pageSize' => 10, // Replace with your actual page size
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $employee_type = EmployeeType::all();
        $districts  = District::all();
        $designations = Designation::all();
        $qualifications = Qualification::all();
        $financial_year = FinancialYear::all();
        $programs = Program::all();

        return inertia('Employee/Create',[
                'employee_types' => $employee_type,
                'districts' => $districts,
                'designations' => $designations,
                'qualifications' => $qualifications,
                'financials'=> $financial_year,
                'programs' => $programs
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEmployeeRequest $request)
    {

        $data = $request->validated();
        $data['added_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;
        $employee = Employee::create($data);
        return to_route('employee.index', ['cnic' => $employee->cnic])->with('success','Employee Added');

    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        $employee_type = EmployeeType::all();
        $districts  = District::all();
        $facilities  = Facility::all();
        $designations = Designation::all();
        $qualifications = Qualification::all();
        $financial_year = FinancialYear::all();
        $programs = Program::all();
        $atehsils = Tehsil::where('district_id',$employee->district_id)->get();
        $aunion_councils = UnionCouncil::where('tehsil_id',$employee->appointed_tehsil)->get();
        $afacilities  = Facility::where('union_council',$employee->appointed_union_council )->get();
        $ctehsils = Tehsil::where('district_id',$employee->current_district)->get();
        $cunion_councils = UnionCouncil::where('tehsil_id',$employee->current_tehsil)->get();
        $cfacilities  = Facility::where('union_council',$employee->current_union_council )->get();
        $officers  = Employee::where('current_facility',$employee->current_facility )->get();
        $documents = Document::where('employee',$employee->id)->get();
        $documents = json_decode($documents, true);
        $documents = array_map(function($document) {
            return [
                'id' => $document['id'],
                'document' => $document['document'],
                'file' => asset('storage/' . $document['file']),
                'remarks' => $document['remarks'],
                // 'added_by' => new UserResource($document['added_by'])
            ];
        }, $documents);
// dd($documents);
        return inertia('Employee/View',[
            'employee' => new EmployeeResource($employee),
            'employee_types' => $employee_type,
            'districts' => $districts,
            'designations' => $designations,
            'qualifications' => $qualifications,
            'financials'=> $financial_year,
            'afacilities' => $facilities,
            'programs' => $programs,
            'atehsils' => $atehsils,
            'aunion_councils' => $aunion_councils,
            'ctehsils' => $ctehsils,
            'cunion_councils' => $cunion_councils,
            'cfacilities' => $cfacilities,
            'officers' => $officers,
            'documents' => $documents
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        $employee_type = EmployeeType::all();
        $districts  = District::all();

        $designations = Designation::all();
        $qualifications = Qualification::all();
        $financial_year = FinancialYear::all();
        $programs = Program::all();
        $atehsils = Tehsil::where('district_id',$employee->district_id)->get();
        $aunion_councils = UnionCouncil::where('tehsil_id',$employee->appointed_tehsil)->get();
        $afacilities  = Facility::where('union_council',$employee->appointed_union_council )->get();
        $ctehsils = Tehsil::where('district_id',$employee->current_district)->get();
        $cunion_councils = UnionCouncil::where('tehsil_id',$employee->current_tehsil)->get();
        $cfacilities  = Facility::where('union_council',$employee->current_union_council )->get();
        $officers  = Employee::where('current_facility',$employee->current_facility )->get();


        return inertia('Employee/Edit',[
            'employee' => new EmployeeResource($employee),
            'employee_types' => $employee_type,
            'districts' => $districts,
            'designations' => $designations,
            'qualifications' => $qualifications,
            'financials'=> $financial_year,
            'afacilities' => $afacilities,
            'programs' => $programs,
            'atehsils' => $atehsils,
            'aunion_councils' => $aunion_councils,
            'ctehsils' => $ctehsils,
            'cunion_councils' => $cunion_councils,
            'cfacilities' => $cfacilities,
            'officers' => $officers
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {

        $data = $request->validated();
        $data['husband_name'] = $request->husband_name;
        $data['updated_by'] = Auth::user()->id;
        $employee->update($data);
        return to_route('employee.index', ['cnic' => $employee->cnic])->with('success','Employee Updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        try {
            $employee->delete();
            return to_route('employee.index')->with('success','Employee deleted');
          } catch (\Illuminate\Database\QueryException $e) {
            return to_route('employee.index')->with('success','Employee Can not be deleted as this employee is used in other sections');
          }
    }

    public function tehsils($district){
        $tehsils = Tehsil::where('district_id', $district)->get();
        return response()->json($tehsils);
    }
    public function councils($tehsil){
        $councils = UnionCouncil::where('tehsil_id', $tehsil)->get();
        return response()->json($councils);
    }
    public function facilities($council){
        $facilities = Facility::where('union_council', $council)->get();
        return response()->json($facilities);
    }
    public function employees($facility){
        $employees = Employee::where('current_facility', $facility)->get();
        return response()->json($employees);
    }
}
