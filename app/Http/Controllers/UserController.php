<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
// use Auth;
use Illuminate\Validation\ValidationException;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    public function getUser()
    {
        $user = Auth::user();
        return $user;
    }

    public function updateData($request)
    {
        $validator = Validator::make($request->all(), [
            'username'     => 'required',
            'fullName'    => 'required',
        ],
            [
                'username.required' => 'Masukkan username',
                'fullName.required' => 'Masukkan full name',
            ]
        );

        $user=self::getUser();
        if($validator->fails()) {
            return array(false,"Silahkan Isi Data Yang Kosong");
        } else {
            try {
                $user = User::where('id',$user['id'])->update([
                    'username'     => $request->input('username'),
                    'full_name'     => $request->input('fullName')
                ]);

                return array(true,"Update data user Berhasil !!!");
            } catch (\Illuminate\Database\QueryException $exception) {
                return array(false,"Update data user Gagal, Username telah digunakan");
            }
        }
    }

    function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        try {
            $user = User::create([
                'full_name' => $request->name,
                'username' => $request->username,
                'password' => Hash::make($request->password),
            ]);
        } catch(Exception $e) {
            return redirect()->back()->withErrors([
                'username' => 'Username already taken',
            ]);
        }

        event(new Registered($user));
        Auth::login($user);
        return redirect('/');
    }
}
