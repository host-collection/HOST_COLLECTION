<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class General extends Model
{
    protected $table = "hc_general";
    protected $primary = "id";
    protected $timestamp = true;

    protected $fillable = [
        'phone', 'address'
    ];
}
