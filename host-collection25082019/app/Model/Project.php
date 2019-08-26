<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = "dobo_project";
    protected $primary = "id";
    protected $timestamp = true;
}
