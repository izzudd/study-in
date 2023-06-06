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
                    'content'=>$this->generateContent($faker),
                    'course_id'=>$i,
                ]);
            }
        }
    }

    private function generateContent(\Faker\generator $faker): string {
        $content = "";

        $paragraphs = $faker->paragraphs(rand(4, 8));
        $listItems = $faker->sentences(rand(4, 8));
        
        foreach ($paragraphs as $para) {
            $content .= "<p>{$para}</p>";
        }

        $content .= "<h2>{$faker->sentence}</h2>";

        $content .= "<ul>";
        foreach ($listItems as $item) {
            $content .= "<li>{$item}</li>";
        }
        $content .= "</ul>";

        $content .= "<h2>{$faker->sentence}</h2>";
        
        foreach ($paragraphs as $para) {
            $content .= "<p>{$para}</p>";
        }

        return $content;
    }
}
