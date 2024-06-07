<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'id' => $this->id,
            'name' => $this->name,
            'father_name' => $this->father_name,
            'husband_name' => $this->husband_name,
            'cnic' => $this->cnic,
            'gender' => $this->gender,
            'doa' => $this->doa,
            'doj' => $this->doj,
            'status' => $this->status,
            'verified' => $this->verified,
            'station' => $this->station,
            'financial_year' => new FinancialYearResource($this->financialYear),
            'employee_type_id'	 => new EmployeeTypeResource($this->employeeType),
            'facility' => new FacilityResource($this->facility),
            'district' => new DistrictResource($this->district),
            'designation' => new DesignationResource($this->designation),
            'qualification' =>  new QualificationResource($this->qualification),
            'createdBy'=>new UserResource($this->createdBy),
            'updatedBy'=>new UserResource($this->updatedBy),
            'program' => new ProgramResource($this->program)
        ];

    }
}