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

Route::middleware('auth:api')->group( function () {
    Route::resource('index', 'Api\GeneralController');
    Route::resource('location', 'Api\LocationController');
    Route::post('register', 'Api\RegisterController@register');
    Route::resource('galleryshop', 'Api\GalleryShopController');

    Route::resource('banner', 'Api\BannerController');

    Route::resource('users', 'Api\UsersController');

    Route::get('/search-user', 'Api\UsersController@search');

    Route::resource('/topicshop', 'Api\TopicShopController');

    Route::resource('/topic', 'Api\TopicController');
});

//Route::apiResource('index', 'Api\GeneralController');
