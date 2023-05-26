<?php

namespace App\Http\Controllers;

use App\Models\CourseTaken;
use Illuminate\Http\Request;

class CourseTakenController extends Controller
{
    public function addCourse($request)
    {
        $user=(new UserController())->getUser();
        CourseTaken::create([
            'user_id'     => $user['id'],
            'course_id'   => $request->input('id')
        ]);
    }

    public function getCourseStudents($courseId)
    {
        $students= CourseTaken::where('course_id', '=', $courseId)->count();
        return $students;
    }

}
