<?php

namespace App\Http\Controllers;

use App\Models\Designation;
use App\Http\Requests\StoreDesignationRequest;
use App\Http\Requests\UpdateDesignationRequest;
use App\Http\Resources\DesignationResource;
use Illuminate\Support\Facades\Auth;

class DesignationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = Designation::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }

        $designations = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        return inertia('Designation/Index',[
            'designations' => DesignationResource::collection($designations),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return inertia('Designation/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDesignationRequest $request)
    {
        $data = $request->validated();
        $data['added_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;
        Designation::create($data);
        return to_route('designation.index')->with('success','Designation Added');
    }

    /**
     * Display the specified resource.
     */
    public function show(Designation $designation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Designation $designation)
    {
        return inertia('Designation/Edit',['designation'=>$designation]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDesignationRequest $request, Designation $designation)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;

        $designation->update($data);
        return to_route('designation.index')->with('success','Designation Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Designation $designation)
    {
        try {
            $designation->delete();
            return to_route('designation.index')->with('success','Designation deleted');
          } catch (\Illuminate\Database\QueryException $e) {
            return to_route('designation.index')->with('success','Designation Can not be deleted as this designation is used in other sections');
          }
    }
}