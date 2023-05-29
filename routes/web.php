<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ViewController;
use App\Http\Middleware\Authenticate;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [ViewController::class, 'front'])->name('front');

Route::post('/login', [AuthController::class, 'login']);
Route::inertia('/login', 'Login')->name('login');
Route::post('/logout', [AuthController::class, 'logout']);

Route::post('/register', [UserController::class, 'store']);
Route::inertia('/register', 'Register')->name('register')->name('register');

// Route::middleware(Authenticate::class)->group(function() {
  Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
  Route::get('/{slug}', [ViewController::class, 'course'])->name('course');
  Route::get('/{course}/{slug}', [ViewController::class, 'material'])->name('material');
// });