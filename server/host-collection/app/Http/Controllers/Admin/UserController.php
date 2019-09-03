<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\Users as DTUsers;
use App\Model\RoleName as DTRoleName;

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
                "name.required"=>"Please input full name",
                "name.max"=>"Exceeds the character limit",
                "email.required"=>"Please input email",
                "email.email"=>"Please enter the correct format Email",
                "email.unique"=>"Email already exist",
                "phone.required"=>"Please input Phone",
                "username.required"=>"Please user name login",
                "username.unique"=>"User name already exist",
                "password.required"=>"Please input password",
                "password.min"=>"Password is not less than 6 characters",

                "password.confirmed"=>"Re password incorrect"
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
                $TUsers->role = $request->input("cid_role");
    			$TUsers->password=bcrypt($request->input("password"));

    			$TUsers->save();

    			$request->session()->flash("success","Add user success.");
    			return redirect()->back();

    		}
        }
        $this->View['cid_role'] = DTRoleName::where('status','1')->pluck('name', 'id');
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
                "name.required"=>"Please input full name",
                "name.max"=>"Exceeds the character limit",
                "email.required"=>"Please input email",
                "email.email"=>"Please enter the correct format Email",
                "email.unique"=>"Email already exist",
                "phone.required"=>"Please input Phone",
                "username.required"=>"Please user name login",
                "username.unique"=>"User name already exist",
                "password.required"=>"Please input password",
                "password.min"=>"Password is not less than 6 characters",

                "password.confirmed"=>"Re password incorrect"
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
                $TUPdated->role = $request->input("cid_role");

                $password = $request->input("password");

                if(!empty($password)){
                    $TUPdated->password=bcrypt($request->input("password"));
                }

                $TUPdated->save();

                $request->session()->flash("success"," Update success. ");
                return redirect()->back();
            }
        }

        $data = DTUsers::find($id);

        $this->View['cid_role'] = DTRoleName::where('status','1')->pluck('name', 'id');

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
