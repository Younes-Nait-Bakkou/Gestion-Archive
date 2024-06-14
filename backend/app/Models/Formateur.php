<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formateur extends Model
{
    use HasFactory;

    protected $fillable= [
        'prenom',
        'nom',
        'email',
        'telephone'
    ];
    
    public function modules(){
        return $this->hasMany(Module::class);
    }

    public function groupes(){
        return $this->belongsToMany(Groupe::class);
    }
    
}
