<?php

namespace Database\Seeders;

use App\Models\Groupe;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GroupeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Groupe::insert([
            [
                'intitule' => 'Groupe A',
                'filiere' => 'Informatique',
                'secteur' => 'IT',
                'anneeFormation' => 2023,
                'annee' => 1,
                'effectif' => 25,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'intitule' => 'Groupe B',
                'filiere' => 'Gestion',
                'secteur' => 'Commerce',
                'anneeFormation' => 2022,
                'annee' => 1,
                'effectif' => 30,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'intitule' => 'Groupe C',
                'filiere' => 'Marketing',
                'secteur' => 'Commerce',
                'anneeFormation' => 2020,
                'annee' => 2,
                'effectif' => 28,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'intitule' => 'Groupe D',
                'filiere' => 'Réseaux',
                'secteur' => 'IT',
                'anneeFormation' => 2021,
                'annee' => 2,
                'effectif' => 22,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'intitule' => 'Groupe E',
                'filiere' => 'Finance',
                'secteur' => 'Commerce',
                'anneeFormation' => 2020,
                'annee' => 3,
                'effectif' => 32,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'intitule' => 'Groupe F',
                'filiere' => 'Informatique',
                'secteur' => 'IT',
                'anneeFormation' => 2023,
                'annee' => 3,
                'effectif' => 27,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'intitule' => 'Groupe G',
                'filiere' => 'Gestion',
                'secteur' => 'Commerce',
                'anneeFormation' => 2021,
                'annee' => 2,
                'effectif' => 29,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'intitule' => 'Groupe H',
                'filiere' => 'Marketing',
                'secteur' => 'Commerce',
                'anneeFormation' => 2022,
                'annee' => 1,
                'effectif' => 31,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'intitule' => 'Groupe I',
                'filiere' => 'Réseaux',
                'secteur' => 'IT',
                'anneeFormation' => 2023,
                'annee' => 1,
                'effectif' => 26,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            
        ]);
    }
}
