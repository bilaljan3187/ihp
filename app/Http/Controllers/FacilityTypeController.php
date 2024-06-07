<?php

namespace App\Http\Controllers;

use App\Models\FacilityType;
use App\Http\Requests\StoreFacilityTypeRequest;
use App\Http\Requests\UpdateFacilityTypeRequest;
use App\Http\Resources\FacilityTypeResource;
use Illuminate\Support\Facades\Auth;

class FacilityTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = FacilityType::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }

        $facilitytypes = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
    //    dd(ProgramResource::collection($programs));
        return inertia('FacilityType/Index',[
            'facilitytypes' => FacilityTypeResource::collection($facilitytypes),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('FacilityType/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFacilityTypeRequest $request)
    {
        $data = $request->validated();
        $data['added_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;
        FacilityType::create($data);
        return to_route('facilitytype.index')->with('success','Facility Type Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(FacilityType $facilitytype)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FacilityType $facilitytype)
    {
        return inertia('FacilityType/Edit',[
            'facilitytype' => new FacilityTypeResource($facilitytype)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFacilityTypeRequest $request, FacilityType $facilitytype)
    {
        $data = $request->validated();
        $facilitytype->update($data);
        return to_route('facilitytype.index')->with('success','Facility Type Updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FacilityType $facilitytype)
    {

        try {
            $facilitytype->delete();
        return to_route('facilitytype.index')->with('success','Facility Type Delete');

          } catch (\Illuminate\Database\QueryException $e) {
            return to_route('facilitytype.index')->with('success','Facility Type Can not be deleted as this facility type is used in other sections');
          }

    }
}