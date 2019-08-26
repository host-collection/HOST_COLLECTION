<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $table='users';
    protected $primary = 'id';
    protected $timestamp = true;

    public function RoleName(){
        return $this->belongsto(RoleName::class, 'role')->getResults();
    }
}
