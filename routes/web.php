<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseTakenController;
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
| be assigned to the "web" middleware group. Make something great!4
|
*/

// Route::get('/home', [ViewController::class, 'home'])->middleware(['auth:sanctum']);


// Route::view()
// Route::get('/signup', [ViewController::class, 'signupCreate']);
// Route::post('/signup', [ViewController::class, 'signupStore']);

// Route::get('/login', [ViewController::class, 'loginCreate'])->name('login');
// Route::post('/login', [ViewController::class, 'loginStore']);
// Route::get('/logout', [ViewController::class, 'logout'])->middleware(['auth:sanctum']);

Route::get('/', [ViewController::class, 'front'])->name('front');

Route::post('/login', [AuthController::class, 'login']);
Route::inertia('/login', 'Login')->name('login');
Route::post('/logout', [AuthController::class, 'logout']);

Route::post('/register', [UserController::class, 'store']);
Route::inertia('/register', 'Register')->name('register');

Route::middleware(Authenticate::class)->group(function() {
    Route::get('/dashboard', [ViewController::class, 'dashboard'])->name('dashboard');

    Route::post('/course/{id}', [CourseTakenController::class, 'addCourse']);
    Route::get('/course/{id}', [ViewController::class, 'course']);

    Route::get('/material/{courseId}', [ViewController::class, 'material']);
    Route::get('/search/{key}', [ViewController::class, 'search']);

    Route::post('/dashboard', [ViewController::class, 'updateUserData']);
    Route::get('/sertif/{courseId}', [ViewController::class, 'certificate']);

    Route::post('/upload-photo', [ViewController::class, 'uploadPhoto']);
    Route::post('/change-password', [UserController::class, 'updatePassword']);
});
