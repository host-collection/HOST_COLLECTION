<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(){
        return view("auth.login",[]);
    }
    public function postLogin(Request $request){
        $validator=Validator::make($request->all(),[
                "username"=>"required",
                "password"=>"required"
        ],[
                "username.required"=>"Vui lòng nhập tên đăng nhập ",
                "password.required"=>"Vui lòng nhập mật khẩu "
        ]);
        if($validator->fails()){
            return redirect("/login")->withErrors($validator)->withInput();
        }else{
            if(Auth::attempt(['username'=>$request->input("username"),'password'=>$request->input("password")])){
                return redirect("/admin/index/index");
            }else{
                $validator->errors()->add("username"," Tên đăng nhập hoặc mật khẩu không chính xác");
                return redirect("/login")->withErrors($validator);
            }
        }
    }
}
