<?php

namespace App\Http\Controllers;

use GuzzleHttp\Psr7\Request;
use Inertia\Inertia;

class ViewController extends Controller {
    public function front() {
        $courses = [];

        for ($i=0; $i < 6; $i++) { 
            $courses[] = [
                'title' => "Course $i",
                'slug' => "course-$i",
                'description' => 'lorem ipsum dolor sir amet'
            ];
        }

        return Inertia::render('index', [
            'courses' => $courses,
        ]);
    }

    public function course(string $slug) {
        $materials = [];

        for ($i=0; $i < 10; $i++) { 
            $materials[] = [
                'title' => "Material $i",
                'slug' => "material-$i",
                'completed' => rand()&1 == 0,
            ];
        }

        $course = [
            'title' => $slug,
            'slug' => $slug,
            'description' => 'lorem ipsum dolor sir amet',
            'materials' => $materials,
        ];

        return Inertia::render('course', [
            'course' => $course,
        ]);
    }

    public function material($course, $slug) {
        $material = [
            'title' => 'Material Title',
            'slug' => 'material-title',
            'content' => '<h2>sub title</h2><p>some paragraph</p>',
            'completed' => false,
        ];

        return Inertia::render('material', [
            'material' => $material,
        ]);
    }
}
