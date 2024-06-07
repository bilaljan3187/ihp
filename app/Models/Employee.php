<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [	'name',	'father_name',	'husband_name'	,'gender','cnic'	,'doa'	,'doj'	,'status'	,'verified'	,'station',	'employee_type_id'	,'facility_id',	'district_id',	'designation_id','is_deleted',	'qualification_id','added_by','updated_by','financial_year_id','program_id'];

    public function employeeType(){
        return $this->belongsTo(EmployeeType::class,'employee_type_id','id');
    }
    public function facility(){
        return $this->belongsTo(Facility::class,'facility_id','id');
    }
    public function district(){
        return $this->belongsTo(District::class,'district_id','id');
    }
    public function designation(){
        return $this->belongsTo(Designation::class,'designation_id','id');
    }
    public function qualification(){
        return $this->belongsTo(Qualification::class,'qualification_id','id');
    }
    public function financialYear(){
        return $this->belongsTo(FinancialYear::class,'financial_year_id','id');
    }
    public function createdBy(){
        return $this->belongsTo(User::class,'added_by','id');
    }

    public function updatedBy(){
        return $this->belongsTo(User::class,'updated_by','id');
    }

    public function program(){
        return $this->belongsTo(Program::class,'program_id','id');
    }
}