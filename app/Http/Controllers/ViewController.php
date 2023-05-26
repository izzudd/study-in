<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewController extends Controller {
    public function home() {
        $courses = (new CourseController())->getAllCourses('',2);
        foreach ($courses as $value) {
            $value['students']=(new CourseTakenController())->getCourseStudents($value['id']);
            $finishedMaterial=(new FinishedMaterialController())->countFinishedmaterials($value['id']);
            $value['material']=$finishedMaterial[0];
            $value['progress']=$finishedMaterial[1];
          }
        return Inertia::render('index', [
            'courses' => $courses,
        ]);
    }

    public function course(string $id) {
        $course = (new CourseController())->getCourseById($id);
        $course['progress']=(new FinishedMaterialController())->countFinishedmaterials($course['id'])[1];
        $materials = (new MaterialController())->getMaterialsByCourseId($id);
        foreach ($materials as $value) {
            $value['isFinished']=(new FinishedMaterialController())->checkFinishedMaterial($value['id']);
        }
        return Inertia::render('course', [
            'course' => array($course,'materials'=>$materials),
        ]);
    }

    public function material($id, $materialId) {
        $material=(new MaterialController())->getMaterialById($materialId,$id);
        $course=(new CourseController())->getCourseById($id);
        if (count($material)!=0){
            (new FinishedMaterialController())->create($materialId);
        }
        return Inertia::render('material', [
            'material' => array($course,$material),
        ]);
    }

    public function signupCreate()
    {
        return Inertia::render('signup',[

            ]);
    }

    public function signupStore(Request $request)
    {
        $response=(new UserController())->signup($request);
        return response()->json([
                    'isSuccess' => $response[0],
                    'message' => $response[1],
                ], 200);
        // return Inertia::render('signup',[
        //     'isSuccess'=>$response[0],
        //     'message'=>$response[1],
        // ]);
    }

    public function loginCreate()
    {
        return Inertia::render('login',[

        ]);
    }

    public function loginStore(Request $request)
    {
        $response=(new UserController())->login($request);
        return response()->json([
                    'isSuccess' => $response[0],
                    'message' => $response[1],
                    'token'=>$response[2]
                ], 200);
        // return Inertia::render('login',[
        //     'isSuccess'=>$response[0],
        //     'message'=>$response[1],
        // ]);
    }

    public function logout(Request $request)
    {
        (new UserController())->logout($request);
        self::loginCreate();
    }

    public function addCourse(Request $request)
    {
        (new CourseTakenController())->addCourse($request);
    }

    public function search(string $key)
    {
        $courses = (new CourseController())->getAllCourses($key,2);
        foreach ($courses as $value) {
            $value['students']=(new CourseTakenController())->getCourseStudents($value['id']);
            $finishedMaterial=(new FinishedMaterialController())->countFinishedmaterials($value['id']);
            $value['material']=$finishedMaterial[0];
            $value['progress']=$finishedMaterial[1];
        }
        return Inertia::render('index', [
            'courses' => $courses,
        ]);
    }

    public function profile()
    {
        $user=(new UserController())->getUser();
        return Inertia::render('index', [
            'courses' => $user,
        ]);
    }

    public function updateUserData(Request $request)
    {
        $response=(new UserController())->updateData($request);
        return response()->json([
            'isSuccess' => $response[0],
            'message' => $response[1],
        ], 200);
        // return Inertia::render('index', [
        //     'courses' => $response,
        // ]);
    }
}
