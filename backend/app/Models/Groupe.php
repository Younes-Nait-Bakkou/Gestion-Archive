<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Groupe extends Model
{
    use HasFactory;

    protected $fillable= [
        'intitule',
        'filiere',
        'secteur',
        'anneeFormation',
        'annee',
        'effectif'
    ];

    public function modules(){
        return $this->hasMany(Module::class);
    }

    public function formateurs(){
        return $this->belongsToMany(Formateur::class);
    }
}
