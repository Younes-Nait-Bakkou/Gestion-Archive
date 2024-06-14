<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ModuleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = [
            'id'=> $this->id,
            'code' => $this->code,
            'intitule' => $this->intitule,
            'groupe' => $this->groupe->intitule,
            'formateur' => $this->formateur->prenom . ' ' . $this->formateur->nom,
            'status' => $this->status,
            'datePrevueEFM' => $this->datePrevueEFM,
            'details' => null
        ];

        if ($this->resource->includesDetails) {
            $data['details'] = $this->getDetailsBasedOnStatus();
        }

        return $data;
    }

    protected function getDetailsBasedOnStatus()
    {

        switch ($this->status) {
            case 'in progress':
                return [
                    'regional' => (bool) $this->regional,
                    'filiere' => $this->groupe->filiere,
                    'masseHoraireP' => $this->masseHoraireP,
                    'masseHoraireFAD' => $this->masseHoraireFAD,
                    'anneeFormation' => $this->anneeFormation,
                    'semestre' => $this->semestre,
                    'datePrevueEFM' => $this->datePrevueEFM,
                    'EFM' => (bool) $this->EFM
                ];

            case 'on hold':
                return [
                    'regional' => (bool) $this->regional,
                    'filiere' => $this->groupe->filiere,
                    'masseHoraireP' => $this->masseHoraireP,
                    'masseHoraireFAD' => $this->masseHoraireFAD,
                    'anneeFormation' => $this->anneeFormation,
                    'semestre' => $this->semestre,
                    'dateEFM' => $this->dateEFM,

                ];

            case 'archived':
                return [
                    'regional' => (bool) $this->regional,
                    'filiere' => $this->groupe->filiere,
                    'masseHoraireP' => $this->masseHoraireP,
                    'masseHoraireFAD' => $this->masseHoraireFAD,
                    'anneeFormation' => $this->anneeFormation,
                    'semestre' => $this->semestre,
                    'dateEFM' => $this->dateEFM,
                    'modulesDossiers' => $this->modulesDossiers,
                    'nombreCopies' => $this->nombreCopies,
                    'emplacementArchiv' => $this->emplacementArchiv,
                ];

            case 'opened':
                return [
                    'regional' => (bool) $this->regional,
                    'filiere' => $this->groupe->filiere,
                    'masseHoraireP' => $this->masseHoraireP,
                    'masseHoraireFAD' => $this->masseHoraireFAD,
                    'anneeFormation' => $this->anneeFormation,
                    'semestre' => $this->semestre,
                    'dateEFM' => $this->dateEFM,
                    'demandeur' => $this->demandeur,
                    'dateOuverture' => $this->dateOuverture,
                    'datePrevueRetour' => $this->datePrevueRetour,
                    'motif' => $this->motif,
                    'dateRetour' => $this->dateRetour,
                    'remarques' => $this->remarques
                ];

            default:
                return null;
        }
    }
}
