<?php

namespace Database\Seeders;

use App\Models\Material;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class MaterialsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = faker::create('id_ID');
        for ($i=1; $i < 20; $i++) {
            for ($j=0; $j < 8 ; $j++) {
                Material::create([
                    'title'=>$faker->sentence,
                    'content'=>$faker->paragraph,
                    'course_id'=>$i,
                ]);
            }
        }
    }
}
