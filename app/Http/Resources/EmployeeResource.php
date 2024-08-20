<?php

namespace App\Http\Resources;

use App\Models\District;
use Illuminate\Http\Request;
use App\Http\Resources\BiometricResource;
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

        // dd(new BiometricResource($this->biometricc));
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
            'program' => new ProgramResource($this->program),
            'dob' => $this->dob,
            'contact_no' =>$this->contact_no,
            'account_no' =>$this->account_no,
            'address' =>$this->address,
            'domicile' => new DistrictResource($this->domicilee),
            'reporting_officer' => new UserResource($this->reporting_officerr),
            'appointed_tehsil' => new TehsilResource($this->appointed_tehsill),
            'appointed_union_council' => new UserResource($this->appointed_union_councill),
            'current_district' => new DistrictResource($this->current_districtt),
            'current_tehsil' => new TehsilResource($this->current_tehsill),
            'current_union_council' => new UnionCouncilResource($this->current_union_councill),
            'current_facility' => new FacilityResource($this->current_facilityy),
            'appointed_catchment_area' => $this->appointed_catchment_area,
            'current_catchment_area' => $this->current_catchment_area,
            'biometrics' =>  BiometricResource::collection($this->biometrics),
            'is_biometric' => $this->is_biometric,
            'biometric' =>  $this->biometric,
            'remarks' => $this->remarks

        ];
    }
}