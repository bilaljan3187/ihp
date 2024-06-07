<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;
    protected $fillable = ['title','added_by','updated_by'];
    public function employees()
    {
        return $this->hasMany(Employee::class);
    }
    public function createdBy(){
        return $this->belongsTo(User::class,'added_by','id');
    }

    public function updatedBy(){
        return $this->belongsTo(User::class,'updated_by','id');
    }
}