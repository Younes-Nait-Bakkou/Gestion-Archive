<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;
    
    protected $fillable=[
        'code',
        'intitule',
        'dateEFM',
        'datePrevueEFM',
        'status',
        'EFM',
        'modulesDossiers',
        'nombreCopies',
        'emplacementArchiv',
        'motif',
        'demandeur',
        'dateOuverture',
        'datePrevueRetour',
        'dateRetour',
        'remarques',
    ];

    public function formateur(){
        return $this->belongsTo(Formateur::class);
    }

    public function groupe(){
        return $this->belongsTo(Groupe::class);
    }
}
