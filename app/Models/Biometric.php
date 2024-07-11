<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Biometric extends Model
{
    use HasFactory;

    protected $fillable = ['biometric','employee_id','finger','created_by'];

    public function employee(){
        return $this->belongsTo(Employee::class,'employee_id','id');
    }

    public function createdBy(){
        return $this->belongsTo(User::class,'created_by','id');
    }
}