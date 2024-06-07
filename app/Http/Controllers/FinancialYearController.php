<?php

namespace App\Http\Controllers;

use Log;
use App\Models\FinancialYear;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\FinancialYearResource;
use App\Http\Requests\StoreFinancialYearRequest;
use App\Http\Requests\UpdateFinancialYearRequest;

class FinancialYearController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = FinancialYear::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }

        $years = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
    //    dd(ProgramResource::collection($programs));
        return inertia('Year/Index',[
            'years' => FinancialYearResource::collection($years),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Year/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFinancialYearRequest $request)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        $data['added_by'] = Auth::id();
        $program = FinancialYear::create($data);
        return to_route('year.index')->with('success','Financial Year Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(FinancialYear $financialYear)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($financialYear)
    {
        $year = FinancialYear::find($financialYear);
        return inertia('Year/Edit',[
            'year' => new FinancialYearResource($year)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFinancialYearRequest $request, $financialYear)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;

        $year = FinancialYear::find($financialYear);
        $year->update($data);
        return to_route('year.index')->with('success','Financial Year Updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $financialYear)
    {


        try {
            $year = FinancialYear::find($financialYear);
            $year->delete();
            return to_route('year.index')->with('success','Financial Year Deleted');

          } catch (\Illuminate\Database\QueryException $e) {
            return to_route('year.index')->with('success','Financial year  Can not be deleted as this financial year is used in other sections');
          }
    }
}