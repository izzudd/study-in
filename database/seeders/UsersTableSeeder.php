<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = faker::create('id_ID');
        for ($i=1; $i < 20; $i++) {
            User::create([
                'username'     => $faker->username,
                'full_name'     => $faker->name,
                'password'   => Hash::make($faker->password())
            ]);
        }
    }
}
