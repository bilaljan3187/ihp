<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\District;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\EmployeeResource;

class ReportController extends Controller
{
    public function index(){
        return inertia('Report/Index',[
            'districts' => District::all(),
            'users' => User::all(),
        ]);
    }


    public function search(Request $request){
        // dd(request('reporting_officer'));
        $employeeQuery = Employee::query()->where('employee_type_id',1);
        $officerQuery  = Employee::select('reporting_officer', DB::raw('count(*) as total'))->where('employee_type_id',1);
        $operatorQuery = Employee::select('updated_by', DB::raw('count(*) as total'))->where('employee_type_id',1);

        if(request('verified')){
            $employeeQuery->where('employees.verified','=',request('verified'));
            $officerQuery->where('employees.verified','=',request('verified'));
            $operatorQuery->where('employees.verified','=',request('verified'));
        }
        if(request('reporting_officer')){
        // dd(request('reporting_officer'));
             $employeeQuery->where('employees.reporting_officer','=',request('reporting_officer'));

            $officerQuery->where('employees.reporting_officer','=',request('reporting_officer'));
            $operatorQuery->where('employees.reporting_officer','=',request('reporting_officer'));

          //  dd($officerQuery);

        }
        if(request('current_district')){
            $employeeQuery->where('employees.current_district','=',request('current_district'));
            $officerQuery->where('employees.current_district','=',request('current_district'));
            $operatorQuery->where('employees.current_district','=',request('current_district'));
        }
        if(request('updated_by')){
            $employeeQuery->where('employees.updated_by','=',request('updated_by'));
            $officerQuery->where('employees.updated_by','=',request('updated_by'));
            $operatorQuery->where('employees.updated_by','=',request('updated_by'));
        }
        if(request('updated_at')){
            $employeeQuery->whereDate('employees.updated_at','=',request('updated_at'));
            $officerQuery->whereDate('employees.updated_at','=',request('updated_at'));
            $operatorQuery->whereDate('employees.updated_at','=',request('updated_at'));
        }
        $employees = $employeeQuery->orderBy('employees.current_facility','DESC')
                                ->with('program','domicilee','district','employee_typee','current_districtt','current_tehsill','designation','current_union_councill','current_facilityy','reporting_officerr','updated_byy','updatedBy','documents')
                                ->get();
        $officers  = $officerQuery->groupBy('employees.reporting_officer')->with('reporting_officerr')->get();
        $operators  = $operatorQuery->groupBy('employees.updated_by')->with('updated_byy')->get();
        // dd(request('verified'));
        return inertia('Report/Report',[
            'employees' => $employees,
            'officers' => $officers,
            'operators' => $operators,
            'queryParams' => request()->query() ?: null,
            'date' => request('updated_at'),
            'user' => auth()->user()->name,
            'verified' => request('verified')
        ]);
    }
}