<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
// use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'John Doe',
                'username' => 'john@example.com',
                // 'password' => Hash::make('password123'),
                'password' => 'pass123',
                'age' => 16,
                'address' => 'maria st. ice city'
                // 'created_at' => Carbon::now(),
                // 'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Jane Doe',
                'username' => 'jane@example.com',
                // 'password' => Hash::make('password123'),
                'password' => 'password',
                'age' => 18,
                'address' => 'maharlika st.'
                // 'created_at' => Carbon::now(),
                // 'updated_at' => Carbon::now(),
            ]
        ]);
    }
}
