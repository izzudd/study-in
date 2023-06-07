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
        $images = ['cpp.png', 'bootstrap.png', 'css.png', 'javascript.png', 'cpp.png', 'html.png', 'python.png', 'vuejs.png', 'laravel.png'];
        $faker = faker::create('id_ID');
        for ($i=1; $i < 20; $i++) {
            Course::create([
                'title' => $faker->sentence(2), 
                'description' => $faker->paragraph,
                'image' => '/assets/images/language-logo/' . $images[array_rand($images)],
            ]);
        }
    }
}
