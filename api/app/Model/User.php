<?php

namespace App\Model;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\Uuids;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Model\Club;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use Uuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    
    protected $fillable = [
        'name', 'email', 'password', 'username', 'preço','telefone', 'nascimento'
    ];    
    /** 
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token','device_identifier', 'created_at', 'updated_at'
    ];

    protected $keyType = 'uuid';
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'uuid',
        'email_verified_at' => 'datetime',
    ];

    public function club()
    {
        return $this->belongsTo(Club::class, 'club_id');
    }
    
    public function setPasswordAttribute($value){
        $this->attributes['password'] = bcrypt($value);
    }
    public function setDeviceIdentifier($value){
        $this->attributes['device_identifier'] = $value;
    }
    public function getDeviceIdentifier(){
        return $this->attributes['device_identifier'];
    }
    public function getJWTIdentifier()
    {
      return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
      return [];
    }

    public static function registerRoles() {
        return [
            'name' => 'required|max:200',
            'email' => 'required|email|max:200',
            'password' => 'required|max:20',
        ];
    }
    public static function roles() {
        return [
            'name' => 'required|max:200',
            'email' => 'required|email|max:200',
            'username' => 'required|max:100',
            'telefone' => 'required',
        ];
    }
    public static function mappedProperties()
    {
        return [
            'name' => 'Nome',
            'email' => 'E-mail',
            'password' => 'Senha',
        ];
    }
}
