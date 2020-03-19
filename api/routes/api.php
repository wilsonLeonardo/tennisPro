<?php

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
Route::post('login', 'AuthController@login')->middleware('request.snake.case.transform');
Route::post('register', 'MobileUserController@store')->middleware('request.snake.case.transform');

Route::group(['middleware' => ['auth', 'request.snake.case.transform']], function(){
    Route::patch('users/device-identifier', 'UserController@updateDeviceIdentifier');
});
