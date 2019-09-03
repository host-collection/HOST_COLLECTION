<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Slideshow extends Model
{
    protected $table = "hc_slideshow";
    protected $primary = "id";
    protected $timestamp = true;
}
