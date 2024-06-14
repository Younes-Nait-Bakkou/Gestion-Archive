<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GroupeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,
            'intitule' => $this->intitule,
            'filiere' => $this->filiere,
            'secteur' => $this->secteur,
            'annee' => $this->annee,
            'anneeFormation' => $this->anneeFormation,
            'effectif' => $this->effectif,
            'details' => null,
        ];
    }
}
