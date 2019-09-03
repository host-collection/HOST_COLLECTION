<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $table = "hc_page";
    protected $primary = "id";
    protected $timestamp = true;
}
