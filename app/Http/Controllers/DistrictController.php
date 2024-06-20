<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Http\Requests\StoreDistrictRequest;
use App\Http\Requests\UpdateDistrictRequest;
use App\Http\Resources\DistrictResource;
use Illuminate\Support\Facades\Auth;

class DistrictController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = District::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");
        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }
        $districts = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
    //    dd(ProgramResource::collection($programs));
        return inertia('District/Index',[
            'districts' => DistrictResource::collection($districts),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('District/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDistrictRequest $request)
    {
        $data = $request->validated();
        $data['added_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;
        District::create($data);
        return to_route('district.index')->with('success','District Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(District $district)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(District $district)
    {
        return inertia('District/Edit',[
            'district' => $district,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDistrictRequest $request, District $district)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;
        $district->update($data);
        return to_route('district.index')->with('success','District Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(District $district)
    {
        try {
            $district->delete();
            return to_route('district.index')->with('success','District deleted');
          } catch (\Illuminate\Database\QueryException $e) {
            return to_route('district.index')->with('success','District Can not be deleted as this district is used in other sections');
          }
    }
}