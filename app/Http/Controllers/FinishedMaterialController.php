<?php

namespace App\Http\Controllers;

use App\Models\FinishedMaterial;
use Illuminate\Http\Request;

class FinishedMaterialController extends Controller
{
    public function create($materialId)
    {
        if (!self::checkFinishedMaterial($materialId)) {
            $user=(new UserController())->getUser();
            FinishedMaterial::create([
                'user_id'     => $user['id'],
                'material_id'   => $materialId
            ]);
        }
        // try {
        //     return array(true,"Registrasi Berhasil !!!");
        // } catch (\Illuminate\Database\QueryException $exception) {
        //     return array(true,"Registrasi Gagal, Username telah digunakan");
        // }
    }

    public function countFinishedmaterials($courseId)
    {
        $materials=(new MaterialController())->getMaterialsByCourseId($courseId);
        $user=(new UserController())->getUser();
        $materialId=array();
        foreach ($materials as $value ) {
            array_push($materialId,$value['id']);
        }
        if ($user==null){
            return array(count($materials),null);
        }
        $finished= FinishedMaterial::whereIn('material_id', $materialId)->where('user_id', '=', $user['id'])->count()/count($materials)*100;
        return array(count($materials),$finished);
    }

    public function checkFinishedMaterial($materialId)
    {
        $user=(new UserController())->getUser();
        $finished= FinishedMaterial::where('material_id', $materialId)->where('user_id', '=', $user['id'])->count();
        if($finished>0){
            return true;
        }else{
            return false;
        }
    }
}
