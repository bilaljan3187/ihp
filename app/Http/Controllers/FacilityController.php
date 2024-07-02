<?php

namespace App\Http\Controllers;

use App\Models\Facility;
use App\Http\Requests\StoreFacilityRequest;
use App\Http\Requests\UpdateFacilityRequest;
use App\Http\Resources\DistrictResource;
use App\Http\Resources\FacilityResource;
use App\Models\District;
use App\Models\FacilityType;
use App\Models\Tehsil;
use App\Models\UnionCouncil;
use Illuminate\Support\Facades\Auth;

class FacilityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = Facility::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }

        $facility = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
    //    dd(ProgramResource::collection($programs));
        return inertia('Facility/Index',[
            'facility' => FacilityResource::collection($facility),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $districts = District::all();
        $facilitytypes = FacilityType::all();
        return inertia('Facility/Create',[
            'districts' => $districts,
            'facilitytypes' => $facilitytypes
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFacilityRequest $request)
    {
        $data = $request->validated();
        $data['added_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;
        Facility::create($data);
        return to_route('facility.index')->with('success','Facility Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Facility $facility)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Facility $facility)
    {
        $districts  = District::all();
        $facilitytypes = FacilityType::all();
        $tehsils = Tehsil::where('district_id',$facility->district_id)->get();
        $unioncouncil = UnionCouncil::where('tehsil_id',$facility->tehsil)->get();

        return inertia('Facility/Edit',[
            'facility' => $facility,
            'districts' => $districts,
            'facilitytypes' => $facilitytypes,
            'tehsils'=>$tehsils,
            'unioncouncils' => $unioncouncil
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFacilityRequest $request, Facility $facility)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;
        $facility->update($data);
        return to_route('facility.index')->with('success','Facility Updated');

    }

    // testing
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Facility $facility)
    {
        try {
            $facility->delete();
            return to_route('facility.index')->with('success','Facility Deleted');
          } catch (\Illuminate\Database\QueryException $e) {
            return to_route('facility.index')->with('success','Facility Can not be deleted as this facility is used in other sections');
          }
    }
}