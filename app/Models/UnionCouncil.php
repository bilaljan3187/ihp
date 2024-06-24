<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnionCouncil extends Model
{
    use HasFactory;
    protected $fillable = ['district_id','tehsil_id','title','created_by','updated_by'];


    public function createdBy(){
        return $this->belongsTo(User::class,'created_by','id');
    }

    public function updatedBy(){
        return $this->belongsTo(User::class,'updated_by','id');
    }

    public function tehsill(){
        return $this->belongsTo(Tehsil::class,'tehsil_id','id');

    }

    public function districtt(){
        return $this->belongsTo(District::class,'district_id','id');

    }
}