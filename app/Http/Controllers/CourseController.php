<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function getAllCourses($key,$pagination)
    {
        $courses = Course::orderBy('id', 'desc')->where('title', 'like', '%'.$key.'%')->paginate($pagination);
        // return response()->json(array('meta'=>$meta,'data'=>$courses),200);
        // return response()->json(array('meta'=>self::metaSuccessResponse("Querying courses data successfully"),'data'=>CourseResource::collection($courses)));
        return $courses;
    }

    public function getCourseById($id)
    {
        $course = Course::findOrFail($id);
        // return response()->json(array('meta'=>self::metaSuccessResponse("Querying course details data successfully"),'data'=>$course));
        // return response()->json(array('meta'=>self::metaSuccessResponse("Querying courses data successfully"),'data'=>new CourseDetailResource($course)));
        return $course;
    }
}
