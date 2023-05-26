<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Auth;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function signup($request)
    {
        $validator = Validator::make($request->all(), [
            'username'     => 'required',
            'fullName'    => 'required',
            'password'   => 'required',
        ],
            [
                'username.required' => 'Masukkan username',
                'fullName.required' => 'Masukkan full name',
                'password.required' => 'Masukkan password',
            ]
        );

        if($validator->fails()) {
            return array(false,"Silahkan Isi Data Yang Kosong");
        } else {
            try {
                $user = User::create([
                    'username'     => $request->input('username'),
                    'full_name'     => $request->input('fullName'),
                    'password'   => Hash::make($request->input('password'))
                ]);
                return array(true,"Registrasi Berhasil !!!");
            } catch (\Illuminate\Database\QueryException $exception) {
                return array(false,"Registrasi Gagal, Username telah digunakan");
            }
        }
    }

    public function login($request)
    {
        $validator = Validator::make($request->all(), [
            'username'     => 'required',
            'password'   => 'required',
        ],
            [
                'username.required' => 'Masukkan username',
                'password.required' => 'Masukkan password',
            ]
        );

        if($validator->fails()) {
            return array(false,"Silahkan Isi Data Yang Kosong",'');
        }

        $user = User::where('username', $request->username)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            // throw ValidationException::withMessages([
            //     'username' => ['The provided credentials are incorrect.'],
            // ]);
            return array(false,"Username/password salah",'');
        }

        return array(true,"Login berhasil !!!","Bearer ".$user->createToken('Token')->plainTextToken);
    }

    public function getUser()
    {
        $user = Auth::user();

        return $user;
    }

    public function logout($request)
    {
        $request->user()->currentAccessToken()->delete();
    }
}
