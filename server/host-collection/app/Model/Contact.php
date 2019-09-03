<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table = "hc_contact";
    protected $primary = "id";
    protected $timestamp = true;
}
