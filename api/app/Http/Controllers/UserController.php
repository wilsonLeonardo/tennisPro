<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Model\User;

class UserController extends Controller
{
    public function updateDeviceIdentifier(Request $request)
    {
        $roles = [ 'device_identifier' => 'required' ];
        $labels = [ 'device_identifier' => 'ID do Aparelho' ];
        
        $request->validate($roles, [], $labels);

        $user = User::findOrFail(auth()->user()->getAuthIdentifier());

        $user->setDeviceIdentifier($request->device_identifier);
        $user->save();
    }
}
