<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class Users extends Model
{
    protected $table='users';
    protected $primary = 'id';
    protected $timestamp = true;

    public function RoleName(){
        return $this->belongsto(RoleName::class, 'role')->getResults();
    }
}
