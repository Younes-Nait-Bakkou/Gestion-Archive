<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // User::insert([
        //     [
        //         'name' => 'Younes Nait Bakkou',
        //         'email' => 'john@example.com',
        //         'password' => Hash::make('123123'),
        //         'created_at' => Carbon::now(),
        //         'updated_at' => Carbon::now(),
        //     ],
        //     [
        //         'name' => 'Jane Smith',
        //         'email' => 'jane@example.com',
        //         'password' => Hash::make('password'),
        //         'created_at' => Carbon::now(),
        //         'updated_at' => Carbon::now(),
        //     ],
        // ]);
    }
}
