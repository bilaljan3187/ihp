<?php

namespace App\Http\Controllers;

use App\Models\Tehsil;
use App\Models\District;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\TehsilResource;
use Illuminate\Database\QueryException;
use App\Http\Requests\StoreTehsilRequest;
use App\Http\Requests\UpdateTehsilRequest;

class TehsilController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $query    = Tehsil::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");
        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }
        $tehsils = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
// dd($tehsils);
        return inertia('Tehsil/Index',[
            'tehsils' => TehsilResource::collection($tehsils),
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
        return inertia('Tehsil/Create',[
                'districts' => $districts,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTehsilRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;

        Tehsil::create($data);
        return to_route('tehsil.index')->with('success','Tehsil Added');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tehsil $tehsil)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tehsil $tehsil)
    {
        $districts = District::all();
        return inertia('Tehsil/Edit',['tehsil'=>$tehsil , 'districts'=> $districts]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTehsilRequest $request, Tehsil $tehsil)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;
        $tehsil->update($data);
        return to_route('tehsil.index')->with('success','Tehsil Updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tehsil $tehsil)
    {
        try{
            $tehsil->delete();
            return to_route('tehsil.index')->with('success','Tehsil deleted');
        }catch(QueryException $e){
            return to_route('tehsil.index')->with('success','Tehsil Can not be deleted as this Tehsil is used in other sections');
        }
    }
}