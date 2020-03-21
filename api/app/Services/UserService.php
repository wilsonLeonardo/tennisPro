<?php

namespace App\Services;

use App\Model\ActivityBranch;
use App\Model\Media;
use App\Model\User;

class UserService
{
    public static function create($data) {
        $user = new User();


        $user->fill($data);
        $user->username = $data['name'];
        $user->profile = $data['profile'];
        $user->remember_token = str_random(10);
        $user->status = 'ACTIVE';

        $user->save();

        return $user;
    }

    public static function update($data) {
        $user = User::findOrFail($data['id']);
        $user->fill($data);

        return $user->save();
    }
    public static function updateTeacher($data) {
        $user = User::findOrFail($data['id']);
        $user->fill($data);

        return $user->save();
    }

    public static function updateOrCreate($data, $profile) {
        return isset($data['id'])
            ? self::update($data)
            : self::create($data, $profile);
    }

    public static function findPage($specification)
    {
        if (isset($specification['keyword']))
        {
            $keyword = '%' . trim(strtolower($specification['keyword'])) . '%';

            return User::query()
                ->orWhereRaw('LOWER(name) LIKE ?', [$keyword])
                ->orWhereRaw('LOWER(email) LIKE ?', [$keyword])
                ->orderBy('name');
        }
        
        return User::query()->orderBy('name');
    }
}