<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Material;

class MaterialController extends Controller
{
    public function getMaterialsByCourseId($courseId)
    {
        $materials=Material::where('course_id', '=', $courseId)->get();
        return $materials;
    }

    public function getMaterialDetails($courseId,$pagination)
    {
        $materials=Material::where('course_id', '=', $courseId)->paginate($pagination);
        return $materials;
    }

    public function getMaterialById($id,$courseId)
    {
        $materials=Material::where('course_id', '=', $courseId)->where('id', '=', $id)->get();
        return $materials;
    }
}
