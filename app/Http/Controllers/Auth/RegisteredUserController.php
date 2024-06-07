<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\UserType;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     */
    public function index()
    {
        $query    = User::query();
        $sortField = request("sort_field",'created_at');
        $sortDirection = request("sort_direction","desc");

        if(request('name')){
            $query->where('name','like','%'.request('name').'%');
        }

        $users = $query->orderBy($sortField,$sortDirection)->paginate(10)->onEachSide(1);
        // dd($users);
        return inertia('User/Index',[
            'users' => UserResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    public function create(): Response
    {
        $user_types = UserType::all();
        return Inertia::render('Auth/Register',['types'=>$user_types]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'user_type' => ['required']
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'user_type' => $request->user_type,
            'password' => Hash::make($request->password),
        ]);
        event(new Registered($user));
        //Auth::login($user);
        return to_route('users')->with('success','User Created');
        // return redirect(route('dashboard', absolute: false));
    }
}