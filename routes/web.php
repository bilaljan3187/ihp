<?php

use Inertia\Inertia;
use App\Models\Program;
use App\Models\District;
use App\Models\Employee;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\TehsilController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\UserTypeController;
use App\Http\Controllers\BiometricController;
use App\Http\Controllers\DesignationController;
use App\Http\Controllers\EmployeeTypeController;
use App\Http\Controllers\FacilityTypeController;
use App\Http\Controllers\UnionCouncilController;
use App\Http\Controllers\FinancialYearController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\UserAttendanceController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    // $employeeCounts = Program::select('programs.title', DB::raw('count(employees.id) as total'))
    //                              ->leftJoin('employees', 'programs.id', '=', 'employees.program_id')
    //                              ->groupBy('programs.id', 'programs.title')
    //                              ->where('employees.employee_type_id','=',1)
    //                              ->get();
        $employeeCounts = Program::select('programs.title', DB::raw('count(employees.id) as total'))
                        ->leftJoin('employees', 'programs.id', '=', 'employees.program_id')
                        ->where('employees.employee_type_id', 1) // Filter for employees with program_type_id = 1
                        ->groupBy('programs.id','programs.title') // Group by program ID to ensure all programs are included
                        ->get();


                                // dd($employeeCounts);
    $totalEmployees = Employee::where('employee_type_id',1)->get()->count();
    $verifiedEmployees = Employee::where(['verified'=>'Yes','employee_type_id'=>1])->get()->count();


    $districts = District::withCount([
                                    'employees as total_employees'=>function($query1){
                                        $query1->where('employee_type_id',1);
                                    },
                                    'employees as verified_employees' => function ($query2) {
                                        $query2->where('verified', 'Yes');
                                        $query2->where('employee_type_id',1);
                                    }
                                ])->get();

    // Transform the data into an array
    $districtData = $districts->map(function ($district) {
        return [
            'district_name' => $district->title,
            'total_employees' => $district->total_employees,
            'verified_employees' => $district->verified_employees,
        ];
    });

    // dd($districtData);

    return Inertia::render('Dashboard',[
        'employeeCounts'=>$employeeCounts,
        'totalEmployees'=>$totalEmployees,
        'verifiedEmployees' => $verifiedEmployees,
        'districtData'=>$districtData
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('employee',EmployeeController::class);
    Route::resource('program',ProgramController::class);
    Route::resource('year',FinancialYearController::class);
    Route::resource('usertype',UserTypeController::class);
    Route::resource('facility',FacilityController::class);
    Route::resource('facilitytype',FacilityTypeController::class);
    Route::resource('qualification',QualificationController::class);
    Route::resource('designation',DesignationController::class);
    Route::resource('employeetype',EmployeeTypeController::class);
    Route::resource('district',DistrictController::class);
    Route::resource('tehsil',TehsilController::class);
    Route::resource('unioncouncil',UnionCouncilController::class);
    Route::get('users',[RegisteredUserController::class, 'index'])->name('users');
    Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);
    Route::get('districts-tehsils/{district}',[EmployeeController::class,'tehsils'])->name('tehsils');
    Route::get('tehsil-councils/{tehsil}',[EmployeeController::class,'councils'])->name('councils');
    Route::get('council-facilites/{council}',[EmployeeController::class,'facilities'])->name('facilities');
    Route::get('facility-employee/{facility}',[EmployeeController::class,'employees'])->name('employees');
    Route::resource('document',DocumentController::class);
    Route::get('bio/{id}',[BiometricController::class,'index'])->name('biometric.index');
    Route::post('bio',[BiometricController::class,'save'])->name('biometric.save');
    Route::get('reports',[ReportController::class,'index'])->name('report.index');
    Route::post('reports',[ReportController::class,'search'])->name('report.search');
    Route::get('bio_delete/{id}',[BiometricController::class,'delete'])->name('bio_delete');
    Route::get('attendance',[UserAttendanceController::class,'index'])->name('att.index');
    Route::post('attendance_store',[UserAttendanceController::class,'store'])->name('att.store');
});

require __DIR__.'/auth.php';