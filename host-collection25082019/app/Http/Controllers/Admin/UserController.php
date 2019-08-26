<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\Users as DTUsers;

use Validator;
use DB;

class UserController extends InitController
{
    public function add(Request $request){
    	$data=[];
    	if($request->isMethod("post")){
    		 $validator= Validator::make($request->all(),[
                "name"=>"required|max:225",
                "email"=>"required|email|max:225|unique:users",
                "phone"=>"required",
                "username"=>"required|max:225|unique:users",
                "password"=>"required|confirmed|min:6",

            ],[
                "name.required"=>"Vui lòng nhập tên.",
                "name.max"=>"Vượt quá ký tự giới hạn",
                "email.required"=>" Vui lòng nhập Email",
                "email.email"=>"Vui lòng nhập đúng định dạng Email",
                "email.unique"=>"Email đã tồn tại",
                "phone.required"=>"Vui lòng số điện thoại",
                "username.required"=>"Vui lòng nhập tên đăng nhập",
                "username.unique"=>"Tên đăng nhập đã tồn tại ",
                "password.required"=>"Vui lòng nhập mật khẩu",
                "password.min"=>"Mật khẩu không nhỏ hơn 6 ký tự",

                "password.confirmed"=>"Nhập lại mật khẩu không chính xác"
    		]);
    		if($validator->fails()){
    			return redirect()->back()->withErrors($validator)->withInput();
    		}
    		else{

    			$TUsers = new DTUsers();
    			$TUsers->name=$request->input("name");
    			$TUsers->username=$request->input("username");
    			$TUsers->email= $request->input("email");
                $TUsers->phone = $request->input("phone");
                $TUsers->address= $request->input("address");
                $TUsers->role = "1";
    			$TUsers->password=bcrypt($request->input("password"));

    			$TUsers->save();

    			$request->session()->flash("success","Thêm mới người dùng thành công.");
    			return redirect()->back();

    		}
    	}
    	$this->View['data']=$data;
    	return view('admin.users.add', $this->View);
    }
    public function list(Request $request){
        $search=[];

        $sql = "id > 0";
        if($name=$request->input('name')){
            $search['name']=$name;
            $sql="name LIKE '%{$name}%'";
        }
        //$this->View['search']=$search;

        $this->View['data']=DTUsers::whereRaw(DB::raw($sql))->orderBy("id","ASC")->paginate(10);
        return view('admin.users.list', $this->View);
    }
    public function edit($id,Request $request){
        if($request->isMethod("post")){
            $validator=Validator::make($request->all(),[
                "name"=>"required|max:225",
                "email"=>"required|email|max:225|unique:users,email,{$id},id",
                "phone"=>"required",
                "username"=>"required|max:225|unique:users,username,{$id},id",
                "password"=>"required|confirmed|min:6",
            ],[
                "name.required"=>"Vui lòng nhập tên.",
                "name.max"=>"Vượt quá ký tự giới hạn",
                "email.required"=>" Vui lòng nhập Email",
                "email.email"=>"Vui lòng nhập đúng định dạng Email",
                "email.unique"=>"Email đã tồn tại",
                "phone.required"=>"Vui lòng số điện thoại",
                "username.required"=>"Vui lòng nhập tên đăng nhập",
                "username.unique"=>"Tên đăng nhập đã tồn tại ",
                "password.required" => "Không được bỏ trống mật khẩu",
                "password.confirmed"=>"Nhập lại mật khẩu không chính xác"
            ]);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }
            else{

                $TUPdated=DTUsers::find($id);
                $TUPdated->name=$request->input("name");
                $TUPdated->email=$request->input("email");

                $TUPdated->phone=$request->input("phone");
                $TUPdated->address=$request->input("address");
                $TUPdated->username=$request->input("username");
                $TUPdated->status=$request->input("status");

                $password = $request->input("password");

                if(!empty($password)){
                    $TUPdated->password=bcrypt($request->input("password"));
                }

                $TUPdated->save();

                $request->session()->flash("success"," Bạn đã cập nhật thành công. ");
                return redirect()->back();
            }
        }

        $data = DTUsers::find($id);

        $this->View['data']=$data;

        return view('admin.users.edit', $this->View);
    }
    public function remove($id, Request $request){
        $remove=DTUsers::find($id);
        if(!empty($remove)){
            $remove->delete();
        }
        return redirect()->back();
    }
}
