<?php

namespace App\Http\Controllers;

use App\Models\Biometric;
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
        // $biometric = $request->biometric_value;



        $data['biometric'] = $request->biometric_value;
        $data['employee_id'] = $request->employee_id;
        $data['created_by'] = auth()->user()->id;
        Biometric::create($data);
        $employee = Employee::where('id',$id)->first();
        $employee->update(['is_biometric'=>1 , 'updated_by'=>auth()->user()->id]);
        return to_route('employee.index', ['cnic' => $employee->cnic])->with('success','Biometric Added');
    }
}