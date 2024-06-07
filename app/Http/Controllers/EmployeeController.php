<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Models\Designation;
use App\Models\District;
use App\Models\EmployeeType;
use App\Models\Facility;
use App\Models\FinancialYear;
use App\Models\Program;
use App\Models\Qualification;
use Illuminate\Support\Facades\Auth;

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

        return inertia('Employee/Index',[
            'employees' => EmployeeResource::collection($employees),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
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
        Employee::create($data);
        return to_route('employee.index')->with('success','Employee Added');

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

        return inertia('Employee/View',[
            'employee' => new EmployeeResource($employee),
            'employee_types' => $employee_type,
            'districts' => $districts,
            'designations' => $designations,
            'qualifications' => $qualifications,
            'financials'=> $financial_year,
            'facilities' => $facilities,
            'programs' => $programs
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        $employee_type = EmployeeType::all();
        $districts  = District::all();
        $facilities  = Facility::all();
        $designations = Designation::all();
        $qualifications = Qualification::all();
        $financial_year = FinancialYear::all();
        $programs = Program::all();

        return inertia('Employee/Edit',[
            'employee' => new EmployeeResource($employee),
            'employee_types' => $employee_type,
            'districts' => $districts,
            'designations' => $designations,
            'qualifications' => $qualifications,
            'financials'=> $financial_year,
            'facilities' => $facilities,
            'programs' => $programs
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;
        $employee->update($data);
        return to_route('employee.index')->with('success','Employee Updated');

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

    public function facilities($district){
        $facilities = Facility::where('district_id', $district)->get();
        return response()->json($facilities);
    }
}