<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;

class AuthController extends Controller
{
   public function getlogout(){
    	Auth::logout();
    	return redirect("/");
    }
}
