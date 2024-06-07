<?php

namespace App\Http\Controllers;

use App\Models\Qualification;
use App\Http\Requests\StoreQualificationRequest;
use App\Http\Requests\UpdateQualificationRequest;
use App\Http\Resources\QualificationResource;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;

class QualificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = Qualification::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }

        $qualification = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        return inertia('Qualification/Index',[
            'qualifications' => QualificationResource::collection($qualification),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Qualification/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreQualificationRequest $request)
    {
        $data = $request->validated();
        $data['added_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;
        Qualification::create($data);

        return to_route('qualification.index')->with('success','Qualification Added');

    }

    /**
     * Display the specified resource.
     */
    public function show(Qualification $qualification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Qualification $qualification)
    {
        return inertia('Qualification/Edit',['qualification'=>$qualification]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQualificationRequest $request, Qualification $qualification)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;
        $qualification->update($data);
        return to_route('qualification.index')->with('success','Qualification Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Qualification $qualification)
    {
        try{
            $qualification->delete();
            return to_route('qualification.index')->with('success','Qualification deleted');
        }catch(QueryException $e){
            return to_route('qualification.index')->with('success','Qualification Can not be deleted as this Qualification is used in other sections');
        }
    }
}