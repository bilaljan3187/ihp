<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinancialYear extends Model
{
    use HasFactory;
    protected $fillable = ['title','start_date','end_date','added_by','updated_by'];


    public function createdBy(){
        return $this->belongsTo(User::class,'added_by','id');
    }

    public function updatedBy(){
        return $this->belongsTo(User::class,'updated_by','id');
    }
}