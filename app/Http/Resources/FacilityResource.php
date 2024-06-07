<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FacilityResource extends JsonResource
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
            'title' => $this->title,
            'facility_type' => new FacilityTypeResource($this->facilityType),
            'district' => new DistrictResource($this->district),
            'createdBy'=>new UserResource($this->createdBy),
            'updatedBy'=>new UserResource($this->updatedBy)
        ];
    }
}