<?php

namespace App\Http\Controllers;

use App\Models\UserType;
use App\Http\Requests\StoreUserTypeRequest;
use App\Http\Requests\UpdateUserTypeRequest;
use App\Http\Resources\UserTypeResource;
use Illuminate\Support\Facades\Auth;

class UserTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query    = UserType::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('title')){
            $query->where('title','like','%'.request('title').'%');
        }

        $userTypes = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        //dd($userType);
        return inertia('UserType/Index',[
            'usertypes' => UserTypeResource::collection($userTypes),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('UserType/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserTypeRequest $request)
    {
        $data = $request->validated();
        $data['added_by'] = Auth::user()->id;
        $data['updated_by'] = Auth::user()->id;
        UserType::create($data);
        return to_route('usertype.index')->with('success','UserType Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(UserType $userType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserType $usertype)
    {

        return inertia('UserType/Edit',[
            'type' => new UserTypeResource($usertype)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserTypeRequest $request, UserType $usertype)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::user()->id;
        $usertype->update($data);
        return to_route('usertype.index')->with('success','User Type Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserType $usertype)
    {
        try {
            $usertype->delete();
            return to_route('usertype.index')->with('success','User Type Deleted');
          } catch (\Illuminate\Database\QueryException $e) {
            return to_route('usertype.index')->with('success','User Type Can not be deleted as this user type is used in other sections');
          }
    }
}