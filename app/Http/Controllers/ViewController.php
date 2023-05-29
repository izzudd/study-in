<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewController extends Controller {
    public function front() {
        $courses = (new CourseController())->getAllCourses('',99);
        foreach ($courses as $value) {
            $value['students']=(new CourseTakenController())->getCourseStudents($value['id']);
            $finishedMaterial=(new FinishedMaterialController())->countFinishedmaterials($value['id']);
            $value['material']=$finishedMaterial[0];
            $value['progress']=$finishedMaterial[1];
        }

        return Inertia::render('Index', [
            'courses' => $courses,
        ]);
    }

    public function course(string $id) {
        $course = (new CourseController())->getCourseById($id);
        $materials = (new MaterialController())->getMaterialsByCourseId($id);
        foreach ($materials as $value)
            $value['isFinished'] = (new FinishedMaterialController())->checkFinishedMaterial($value['id']);

        $course['progress']=(new FinishedMaterialController())->countFinishedmaterials($course['id'])[1];
        $course['materials'] = $materials;
        $course['taken'] = (new CourseTakenController())->checkIsTaken(auth()->user()->id, $id);

        return Inertia::render('Course', [
            'course' => $course
        ]);
    }

    public function material($courseId) {
        $material=(new MaterialController())->getMaterialDetails($courseId,1);
        $course=(new CourseController())->getCourseById($courseId);
        if (count($material)!=0){
            (new FinishedMaterialController())->create($material[0]['id']);
        }
        $course['materials'] = (new MaterialController())->getMaterialsByCourseId($courseId);
        foreach ($course['materials'] as $value) {
            $value['isFinished'] = (new FinishedMaterialController())->checkFinishedMaterial($value['id']);
            unset($value['content']);
        }

        return Inertia::render('Material', [
            'course' => $course,
            'prev' => $material->previousPageUrl(),
            'next' => $material->nextPageUrl(),
            'material' => $material[0],
        ]);
    }

    public function search(string $key)
    {
        $courses = (new CourseController())->getAllCourses($key,8);
        foreach ($courses as $value) {
            $value['students']=(new CourseTakenController())->getCourseStudents($value['id']);
            $finishedMaterial=(new FinishedMaterialController())->countFinishedmaterials($value['id']);
            $value['material']=$finishedMaterial[0];
            $value['progress']=$finishedMaterial[1];
        }
        // return response()->json($courses, 200);
        return Inertia::render('Index', [
            'courses' => $courses,
        ]);
    }

    public function dashboard()
    {
        $user=(new UserController())->getUser();
        $courses=(new CourseTakenController())->getCourseTaken();
        foreach ($courses as $value) {
            $value['students']=(new CourseTakenController())->getCourseStudents($value['id']);
            $finishedMaterial=(new FinishedMaterialController())->countFinishedmaterials($value['id']);
            $value['material']=$finishedMaterial[0];
            $value['progress']=$finishedMaterial[1];
        }

        return Inertia::render('Dashboard', [
            'user' => $user,
            'courses' => $courses,
        ]);
    }

    public function updateUserData(Request $request)
    {
        $response=(new UserController())->updateData($request);
        return response()->json([
            'isSuccess' => $response[0],
            'message' => $response[1],
        ], 200);
    }

    public function certificate($courseId)
    {
        $course = (new CourseController())->getCourseById($courseId);
        if((new FinishedMaterialController())->countFinishedmaterials($course['id'])[1]==100){
            $user=(new UserController())->getUser();
            // return here
            return response()->json(array($course,$user), 200);
        }else{
            self::course($courseId);
        }
    }

    public function uploadPhoto(Request $request)
    {
        $this->validate($request, [
			'file' => 'required|mimes:jpeg,png,jpg',
		]);
		$file = $request->file('file');
        $user=(new UserController())->getUser();
        $tujuan_upload = 'C:\Users\yogip\CODING\Coding-Laravel\tugas-akhir-pemweb\public\assets\profile-photo';
		$file->move($tujuan_upload,$user['id'].'.'.$file->getClientOriginalExtension());
        self::dashboard();
    }
}
