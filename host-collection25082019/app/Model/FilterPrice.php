<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FilterPrice extends Model
{
    protected $table="dobo_filter_price";
    protected $primary="id";
    protected $timestamp=true;
}
