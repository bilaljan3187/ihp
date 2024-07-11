<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'father_name' => ['required'],
            'cnic' => ['required','unique:employees,cnic'],
            'gender' => ['required'],
            'doa' => ['required'],
            'doj' => ['required'],
            'station' => ['required'],
            'employee_type_id' => ['required'],
            'district_id' => ['required'],
            'facility_id' => ['required'],
            'designation_id' => ['required'],
            'qualification_id' => ['required'],
            'financial_year_id' => ['required'],
            'program_id' => 'required',
            'domicile' => 'required',
            'dob' => 'required',
            'account_no' => ['required'],
            'contact_no' => 'required',
            'address' => 'required',
            'appointed_tehsil'=> "required",
            'appointed_union_council'=>"required",
            'current_district'=>"required",
            'current_tehsil'=>"required",
            'current_union_council'=>"required",
            'current_facility'=>"required",
            'appointed_catchment_area'=>"required",
            'current_catchment_area'=>"required"
         ];
    }
}
