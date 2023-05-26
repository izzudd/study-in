<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{
    function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        try {
            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'password' => Hash::make($request->password),
            ]);
        } catch(Exception $e) {
            return redirect()->back()->withErrors([
                'username' => 'Username already taken'
            ]);
        }

        event(new Registered($user));
        Auth::login($user);
        return redirect('/');
    }
}
