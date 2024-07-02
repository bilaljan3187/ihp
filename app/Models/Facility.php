<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;

    protected $fillable = ['title',	'facility_type','district_id','tehsil','union_council',	'added_by',	'updated_by'];

    public function facilityType(){
        return $this->belongsTo(FacilityType::class,'facility_type','id');
    }
    public function district(){
        return $this->belongsTo(District::class,'district_id','id');
    }

    public function createdBy(){
        return $this->belongsTo(User::class,'added_by','id');
    }

    public function updatedBy(){
        return $this->belongsTo(User::class,'updated_by','id');
    }
}
