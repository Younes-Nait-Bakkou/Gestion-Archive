<?php

use App\Http\Controllers\ModuleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FormateurController;
use App\Http\Controllers\GroupeController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', [StudentController::class,'index']);
Route::post('/test', [StudentController::class,'store']);
Route::get('/test/{student}', [StudentController::class,'show']);
Route::put('/test/{student}', [StudentController::class,'update']);
Route::delete('/test/{student}', [StudentController::class,'destroy']);

Route::post('/register',[AuthController::class,"register"]);
Route::post('/login',[AuthController::class,"login"]);

Route::get('/dashboard',function(){
    return response()->json(['message'=>'you have entered to the dashboard']);
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function (){
    /* ---------------- Modules ----------------*/
    Route::resource('/modules',ModuleController::class)->except(['edit','create']);

    /* ---------------- Modules Dashboard  ----------------*/
    Route::get('/modules-stats', [ModuleController::class, 'getModulesStats']);
    Route::get('/modules-recent', [ModuleController::class, 'recent']);

    /* ---------------- Modules Select Options ----------------*/
    Route::get('/filiere-options', [ModuleController::class, 'getFiliereOptions']);
    Route::get('/groupe-options', [ModuleController::class, 'getGroupeOptions']);
    Route::get('/module-options', [ModuleController::class, 'getModuleOptions']);

    /* ---------------- Modules Actions ----------------*/
    
    
    /* ---------------- Formateurs  ----------------*/
    Route::resource('/formateurs',FormateurController::class)->except(['edit','create']);

    /* ---------------- Groupes  ----------------*/
    Route::resource('/groupes',GroupeController::class)->except(['edit','create']);

    /* ---------------- Users ----------------*/
    Route::resource('/users', UserController::class)->except(['edit','create']);
});


Route::patch('/modules/{module}/on-hold',[ModuleController::class, 'onHold']);
Route::patch('/modules/{module}/archive',[ModuleController::class, 'archive']);
Route::patch('/modules/{module}/open',[ModuleController::class, 'open']);