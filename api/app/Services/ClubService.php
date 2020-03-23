<?php

namespace App\Services;

use App\Model\User;
use App\Model\Club;

class ClubService
{
    // public static function create($data) {
    //     $user = new User();


    //     $user->fill($data);
    //     $user->username = $data['name'];
    //     $user->profile = $data['profile'];
    //     $user->remember_token = str_random(10);
    //     $user->status = 'ACTIVE';

    //     $user->save();

    //     return $user;
    // }
    public static function createClub($data) {

        $club = new Club();
        $club->fill($data);

        $club->save();

        return $club->id;
    }
    public static function createUser($data, $clubId) {
        $user = new User();
        
        $user->fill($data);
        $user->username = $data['name'];
        $user->profile = $data['profile'];
        $user->remember_token = str_random(10);
        $user->status = 'ACTIVE';
        $user->club()->associate(Club::findOrfail($clubId));

        $user->save();

        return $user;
    }
    public static function updateUser($data) {
        $user = User::findOrFail($data['id']);
        $user->name = $data['name'];
        $clubId = $user['club_id'];
        $user->save();

        return $clubId;
    }

    public static function update($data) {
        $club = Club::findOrFail($data['id']);
        $club->fill($data);

        return $club->save();
    }

}