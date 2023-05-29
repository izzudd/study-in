<?php

namespace Database\Seeders;

use App\Models\CourseTaken;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CoursesTakenTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = faker::create('id_ID');
        for ($i=1; $i < 20; $i++) {
            for ($j=1; $j <19 ; $j++) {
                CourseTaken::create([
                    'user_id'=>$i, 'course_id'=>$j
                ]);
            }
        }
    }
}
