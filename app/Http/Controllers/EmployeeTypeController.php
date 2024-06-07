<?php

namespace App\Http\Controllers;

use App\Models\EmployeeType;
use App\Http\Requests\StoreEmployeeTypeRequest;
use App\Http\Requests\UpdateEmployeeTypeRequest;
use App\Http\Resources\EmployeeTypeResource;
use Illuminate\Support\Facades\Auth;

class EmployeeTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = EmployeeType::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }

        $employeeTypes = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);

        return inertia('EmployeeType/Index',[
            'employeetypes' => EmployeeTypeResource::collection($employeeTypes),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('EmployeeType/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEmployeeTypeRequest $request)
    {
        $data = $request->validated();
        $data['added_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;
        EmployeeType::create($data);

        return to_route('employeetype.index')->with('success','Employee Type Added');

    }

    /**
     * Display the specified resource.
     */
    public function show(EmployeeType $employeetype)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EmployeeType $employeetype)
    {
       return  inertia('EmployeeType/Edit',['employeetype'=> $employeetype]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeeTypeRequest $request, EmployeeType $employeetype)
    {

        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;
        $employeetype->update($data);
        return to_route('employeetype.index')->with('success','Employee Type Updated');


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EmployeeType $employeetype)
    {
        try {
            $employeetype->delete();
            return to_route('employeetype.index')->with('success','Employee Type Deleted');

          } catch (\Illuminate\Database\QueryException $e) {
            return to_route('employeetype.index')->with('success',' Can not be deleted as this Employee type is used in other sections');
          }
    }
}