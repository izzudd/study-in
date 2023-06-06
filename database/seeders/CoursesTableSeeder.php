<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = faker::create('id_ID');
        for ($i=1; $i < 20; $i++) {
            Course::create([
                'title'=>$faker->sentence, 'description'=>$faker->paragraph
            ]);
        }
    }
}
