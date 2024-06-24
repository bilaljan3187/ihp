<?php

namespace App\Http\Resources;

use App\Models\District;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UnionCouncilResource extends JsonResource
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
            'district' =>new DistrictResource($this->district),
            'tehsil' =>new TehsilResource($this->tehsil),
            'createdBy'=>new UserResource($this->createdBy),
            'updatedBy'=>new UserResource($this->updatedBy),
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'district' => new DistrictResource($this->districtt),
            'tehsil' => new TehsilResource($this->tehsill),

        ];
    }
}