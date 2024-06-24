<?php

use Inertia\Inertia;
use App\Models\Program;
use App\Models\District;
use App\Models\Employee;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\UserTypeController;
use App\Http\Controllers\DesignationController;
use App\Http\Controllers\EmployeeTypeController;
use App\Http\Controllers\FacilityTypeController;
use App\Http\Controllers\FinancialYearController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\TehsilController;
use App\Http\Controllers\UnionCouncilController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $employeeCounts = Program::select('programs.title', DB::raw('count(employees.id) as total'))
                                 ->leftJoin('employees', 'programs.id', '=', 'employees.program_id')
                                 ->groupBy('programs.id', 'programs.title')
                                 ->get();
    $totalEmployees = Employee::all()->count();
    $verifiedEmployees = Employee::where('verified','Yes')->get()->count();


    $districts = District::withCount([
        'employees as total_employees',
        'employees as verified_employees' => function ($query) {
            $query->where('verified', 'Yes');
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
});

require __DIR__.'/auth.php';