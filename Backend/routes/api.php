<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RegionesController;
use App\Http\Controllers\ProvinciasController;
use App\Http\Controllers\CiudadesController;
use App\Http\Controllers\CallesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('regiones',[RegionesController::class,'index']);
Route::get('provincias/{id_region}',[ProvinciasController::class,'provincias']);
Route::get('ciudades/{id_provincia}',[CiudadesController::class,'ciudades']);
Route::get('calles/{id_ciudad}',[CallesController::class,'calles']);

Route::post('add-calle',[CallesController::class,'store']);

Route::get('calle/{id_calle}',[CallesController::class,'show']);
Route::post('update-calle/{id_calle}',[CallesController::class,'update']);
