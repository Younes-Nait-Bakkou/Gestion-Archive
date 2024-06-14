<?php

namespace Database\Seeders;

use App\Models\Formateur;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormateurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Formateur::insert([
            [
                'prenom' => 'John',
                'nom' => 'Doe',
                'email' => 'john.doe@example.com',
                'telephone' => '1234567890',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'prenom' => 'Jane',
                'nom' => 'Smith',
                'email' => 'jane.smith@example.com',
                'telephone' => '0987654321',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'prenom' => 'Alice',
                'nom' => 'Johnson',
                'email' => 'alice.johnson@example.com',
                'telephone' => '1122334455',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'prenom' => 'Bob',
                'nom' => 'Williams',
                'email' => 'bob.williams@example.com',
                'telephone' => '5566778899',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'prenom' => 'Charlie',
                'nom' => 'Brown',
                'email' => 'charlie.brown@example.com',
                'telephone' => '6677889900',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'prenom' => 'Diana',
                'nom' => 'Prince',
                'email' => 'diana.prince@example.com',
                'telephone' => '2233445566',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'prenom' => 'Eve',
                'nom' => 'Adams',
                'email' => 'eve.adams@example.com',
                'telephone' => '3344556677',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'prenom' => 'Frank',
                'nom' => 'Green',
                'email' => 'frank.green@example.com',
                'telephone' => '4455667788',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],            
        ]);
    }
}
