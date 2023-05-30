<?php

namespace App\Http\Controllers;

use App\Models\CourseTaken;
use Illuminate\Http\Request;

class CourseTakenController extends Controller
{
    public function addCourse(Request $request)
    {
        $user=(new UserController())->getUser();
        if (!self::checkIsTaken($user['id'],$request->input('id'))) {
            CourseTaken::create([
                'user_id'     => $user['id'],
                'course_id'   => $request->input('id')
            ]);
        }else{
            CourseTaken::where('course_id', '=', $request->input('id'))->where('user_id', '=', $user['id'])->delete();
        }
    }

    public function checkIsTaken($userId,$courseId)
    {
        $courseTaken=CourseTaken::where('course_id', '=', $courseId)->where('user_id', '=', $userId)->count();
        return $courseTaken>0;
    }

    public function getCourseStudents($courseId)
    {
        $students= CourseTaken::where('course_id', '=', $courseId)->count();
        return $students;
    }

    public function getCourseTaken()
    {
        $user=(new UserController())->getUser();
        $courses=CourseTaken::join('courses', 'courses_taken.course_id', '=', 'courses.id')->where('courses_taken.user_id',$user['id'])->select('courses.*')->paginate(8);
        return $courses;
    }
}
