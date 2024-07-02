<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class BiometricController extends Controller
{
    public function index(Employee $id){
        $employee = $id;
        return view('bio',compact('employee'));
    }

    public function save(Request $request){
        $id = $request->employee_id;
        $biometric = $request->biometric_value;

        $employee = Employee::where('id',$id)->first();
        $employee->update(['biometric'=>$biometric]);
        return to_route('employee.index', ['cnic' => $employee->cnic])->with('success','Biometric Added');
    }
}