<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;
use App\Model\User;

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
    public function findTeacher()
    {
        $query = User::query()
        ->where('profile', '=', 'TEACHER')
        ->get()->toArray();

        
        return $query;

    }
}
