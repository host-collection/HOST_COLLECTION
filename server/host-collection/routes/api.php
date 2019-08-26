<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::apiresource('index', 'Api\GeneralController');

Route::middleware('auth:api')->group( function () {
    Route::resource('index', 'Api\GeneralController');
});

//Route::apiResource('index', 'Api\GeneralController');
