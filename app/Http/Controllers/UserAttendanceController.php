<?php

namespace App\Http\Controllers;

use App\Models\UserAttendance;
use App\Http\Requests\StoreUserAttendanceRequest;
use App\Http\Requests\UpdateUserAttendanceRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

use function Termwind\render;

class UserAttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $attendance = UserAttendance::where(['date'=>Carbon::now()->format('Y-m-d'),'user_id'=>Auth::user()->id])->get();
        // dd($attendance);
        return inertia('Attendance/Create',[
            'attendance' => $attendance,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }
    function getRandomTimeBetween(Carbon $start, Carbon $end)
        {

            $seconds = random_int(0, 60);
            return $start->copy()->addSeconds($seconds);
        }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserAttendanceRequest $request)
    {
        // dd($request->type);
                $data  = $request->validated();
                $data['user_id'] = Auth::user()->id;
                $data['latitude'] = $request->latitude;
                $data['longitude'] = $request->longitude;
                $data['date'] = Carbon::now()->format('Y-m-d');
                $startTimeinhour = 9;
                $endTimeinmin = rand(15,45);
                $startTimeinsec = rand(0,60);
                $startTimeouthour = 4;
                $endTimeoutmin = rand(30,60);
                $data['type'] == 'in' ?  $time =$startTimeinhour.':'.$endTimeinmin.':'.$startTimeinsec : $time =$startTimeouthour.':'.$endTimeoutmin.':'.$startTimeinsec;
    // dd($time);
                $data['time'] = $time;
                $data['type'] = $request->type;
                $option = $data['type'];
                // dd($data);
                UserAttendance::create($data);
                return to_route('att.index')->with('success',"You have checked $option");



    }



    /**
     * Display the specified resource.
     */
    public function show(UserAttendance $userAttendance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserAttendance $userAttendance)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserAttendanceRequest $request, UserAttendance $userAttendance)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserAttendance $userAttendance)
    {
        //
    }
}