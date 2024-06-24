<?php

namespace App\Http\Controllers;

use App\Models\UnionCouncil;
use App\Http\Requests\StoreUnionCouncilRequest;
use App\Http\Requests\UpdateUnionCouncilRequest;
use App\Http\Resources\DistrictResource;
use App\Http\Resources\UnionCouncilResource;
use App\Models\District;
use App\Models\Tehsil;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;

class UnionCouncilController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = UnionCouncil::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");
        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }
        $unioncouncils = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
// dd($tehsils);
        return inertia('Uc/Index',[
            'unioncouncils' => UnionCouncilResource::collection($unioncouncils),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $districts  = District::all();
        return inertia('Uc/Create',[
                'districts' => $districts,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUnionCouncilRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;

        UnionCouncil::create($data);
        return to_route('unioncouncil.index')->with('success','Union Council Added');
    }

    /**
     * Display the specified resource.
     */
    public function show(UnionCouncil $unionCouncil)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UnionCouncil $unioncouncil)
    {

        $districts = District::all();
        $tehsils = Tehsil::where('district_id',$unioncouncil->district_id)->get();
        return inertia('Uc/Edit',['tehsils'=>$tehsils , 'districts'=> $districts,'unioncouncil'=>$unioncouncil]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUnionCouncilRequest $request, UnionCouncil $unioncouncil)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;
        $unioncouncil->update($data);
        return to_route('unioncouncil.index')->with('success','Union Council Updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UnionCouncil $unioncouncil)
    {
        try{
            $unioncouncil->delete();
            return to_route('unioncouncil.index')->with('success','Union Council deleted');
        }catch(QueryException $e){
            return to_route('unioncouncil.index')->with('success','Union Council Can not be deleted as this Union Council is used in other sections');
        }
    }
}