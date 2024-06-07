<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProgramResource;
use App\Http\Requests\StoreProgramRequest;
use App\Http\Requests\UpdateProgramRequest;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = Program::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }

        $programs = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
    //    dd(ProgramResource::collection($programs));
        return inertia('Program/Index',[
            'programs' => ProgramResource::collection($programs),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
            return inertia('Program/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProgramRequest $request)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        $data['created_by'] = Auth::id();
        //dd($data);

        $program = Program::create($data);
        return to_route('program.index')->with('success','Program Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Program $program)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Program $program)
    {
        //dd(new ProgramResource($program));
        // return new ProgramResource($program);
        return inertia('Program/Edit',[
            'program' => new ProgramResource($program)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProgramRequest $request, Program $program)
    {
        $data = $request->validated();
        $program->update($data);
        return to_route('program.index')->with('success','Program Updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Program $program)
    {
        try {
            $program->delete();
            return to_route('program.index')->with('success','Program Deleted');

          } catch (\Illuminate\Database\QueryException $e) {
            return to_route('program.index')->with('success','Program Can not be deleted as this program is used in other sections');
          }

    }
}