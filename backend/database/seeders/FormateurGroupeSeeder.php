<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FormateurGroupeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $formateurGroupeData = [
            [
                'formateur_id' => 1, 
                'groupe_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'formateur_id' => 2, 
                'groupe_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'formateur_id' => 3, 
                'groupe_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'formateur_id' => 4, 
                'groupe_id' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'formateur_id' => 1, 
                'groupe_id' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'formateur_id' => 2, 
                'groupe_id' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'formateur_id' => 3, 
                'groupe_id' => 7,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'formateur_id' => 4, 
                'groupe_id' => 8,
                'created_at' => now(),
                'updated_at' => now(),
            ],            
        ];

        
        DB::table('formateur_groupe')->insert($formateurGroupeData);
    }
}
