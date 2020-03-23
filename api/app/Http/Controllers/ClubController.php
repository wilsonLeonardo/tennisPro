<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\User;
use App\Model\Club;
use App\Services\ClubService;
use App\Traits\RestControllerTrait;

class ClubController extends Controller
{
    use RestControllerTrait;

    public function store(Request $request)
    {
        $clubId = ClubService::createClub($request->all());
        
        return $this->respondWithToken(
            auth('api')->login(ClubService::createUser($request->all(), $clubId)));
    }

    public function update(Request $request)
    {
   
        $data = $request->all();
        $data['id'] = auth()->user()->getAuthIdentifier();
 
        $clubId = ClubService::updateUser($data);
        $data['id'] = $clubId;

        return $this->response(ClubService::update($data));
    }

    public function index()
    {
        $user = User::findOrFail(auth()->user()->getAuthIdentifier());
        $club = Club::findOrFail($user['club_id']);


        return [
            "name" => $club['name'],
            "email" => $user['email'],
            "telefone"=> $club['telefone'],
            "cep"=> "".$club['cep']."",
            "quadras"=> "".$club['quadras']."",
            "aluguel_price"=> $club['aluguel_price'],
            "mensal_price"=> $club['mensal_price'],
        ];
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'user' => [
                'id' => auth('api')->user()->id,
                'username' => auth('api')->user()->username,
                'profile' => auth('api')->user()->profile,
            ],
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60 * 24
        ]);
    }
}
