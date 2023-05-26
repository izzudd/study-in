<?php

use App\Http\Controllers\ViewController;
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

Route::get('/home', [ViewController::class, 'home'])->middleware(['auth:sanctum']);
Route::get('/course/{id}', [ViewController::class, 'course'])->middleware(['auth:sanctum']);
Route::post('/course/{id}', [ViewController::class, 'addCourse'])->middleware(['auth:sanctum']);
Route::get('/course/{id}/{materialId}', [ViewController::class, 'material'])->middleware(['auth:sanctum']);
Route::get('/search/{key}', [ViewController::class, 'search'])->middleware(['auth:sanctum']);
// Route::view()
Route::get('/signup', [ViewController::class, 'signupCreate']);
Route::post('/signup', [ViewController::class, 'signupStore']);

Route::get('/login', [ViewController::class, 'loginCreate'])->name('login');
Route::post('/login', [ViewController::class, 'loginStore']);
Route::get('/logout', [ViewController::class, 'logout'])->middleware(['auth:sanctum']);
