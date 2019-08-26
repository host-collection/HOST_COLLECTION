<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App;
use Validator;
use Image;
use App\Model\Project as DTProject;

class ProjectController extends Controller
{
	protected $View =[];

    public function add(Request $request){
  		if($request->isMethod("post")){
    		$validator = Validator::make($request->all(),[
    			"name" => "required|unique:dobo_project",
    			"description"=>"required",
                "picture"=>"required"
    		],[
    			"name.required" => "Tên dự án không được để trống.",
    			"name.unique" => "Tên dự án đã tồn tại.",
    			"description.required"=>"Vui lòng nhập mô tả ",
                "picture.required"=>"Vui lòng chọn hình ảnh"
    		]);
    		if($validator->fails()){
    			return redirect()->back()->withErrors($validator)->withInput();
    		}
    		else{

    			$TNew = new DTProject();

    			$TNew->name = $request->input("name");
    			$TNew->alias = App\MrData::toAlias2($request->input("name"));
    		
    			$TNew->is_hot = $request->input("is_hot");
    			$TNew->status = $request->input("status");
    			$TNew->description = $request->input("description");
    			$TNew->content = $request->input("content");


    			$picture=$request->file("picture");

                if($picture){
                    $picture_name= $TNew->alias.".".$picture->getClientOriginalExtension();

                    Image::make($picture)->resize(
                        config('constants.Project.Current.Width'),
                        config('constants.Project.Current.Height'))
                        ->save(public_path("/upload/project/".$picture_name));
                    Image::make($picture)->resize(
                        config('constants.Project.Big.Width'),
                        config('constants.Project.Big.Height'))
                        ->save(public_path("/upload/project/big/".$picture_name));
                    Image::make($picture)->resize(
                        config('constants.Project.Small.Width'),
                        config('constants.Project.Small.Height'))
                        ->save(public_path("/upload/project/small/".$picture_name));
                  
                    $TNew->picture=$picture_name;
                }

                $TNew->save();

                $request->session()->flash("success", "Thêm dự án thành công.");
    		}
    	}
    	$data = [];

        $data['status'] = 1;
        $data['is_hot'] = 1;

        $data['cate'] = DTProject::where("status","1")->get()->pluck("name", "id"); 

		$this->View['data'] = $data;

		return view("admin.project.add", $this->View);
  	}

    public function list(Request $request){

        $search = "";

        if($request->isMethod("get")){
            $search = $request->input("search");
        }

        $this->View['data'] = DTProject::where("name", "LIKE", "%{$search}%")->paginate(20);

        return view("admin.project.list", $this->View);
    }

    public function edit($id, Request $request){

        $data=[];
        
        $TUpdated=DTProject::find($id);

        if($request->isMethod("post")){
            $validator=Validator::make($request->all(),[
                "name"=>"required|unique:dobo_project,name,{$id},id",
                "description"=>"required",
                 
            ],[
                "name.required"=>"Vui lòng nhập tên dự án",
                "name.unique"=>"Dự án này đã tồn tại ",
                "description.required"=>"Vui lòng nhập mô tả ",
                       
            ]);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }else{
                $TUpdated->name=$request->input("name");
                $TUpdated->alias=App\MrData::toAlias2($request->input("name"));
                $TUpdated->description=$request->input("description");
          
                $TUpdated->content=$request->input("content");

                $TUpdated->status=$request->input("status");

                $picture=$request->file("picture");

                if($picture){
                    @unlink(public_path("/upload/project/".$TUpdated->picture));
                    @unlink(public_path("/upload/project/small/".$TUpdated->picture));
                    @unlink(public_path("/upload/project/big/".$TUpdated->picture));

                    $picture_name= $TUpdated->alias.".".$picture->getClientOriginalExtension();

                    Image::make($picture)->resize(
                        config('constants.Project.Current.Width'),
                        config('constants.Project.Current.Height'))
                        ->save(public_path("/upload/project/".$picture_name));
                    Image::make($picture)->resize(
                        config('constants.Project.Big.Width'),
                        config('constants.Project.Big.Height'))
                        ->save(public_path("/upload/project/big/".$picture_name));
                    Image::make($picture)->resize(
                        config('constants.Project.Small.Width'),
                        config('constants.Project.Small.Height'))
                        ->save(public_path("/upload/project/small/".$picture_name));

                    $TUpdated->picture=$picture_name;
                }

                $TUpdated->save();

                $request->session()->flash("success","Câp nhật dự án thành công.");
                return redirect()->back();
            }

        }

        $data=DTProject::find($id);

        $this->View['data']=$data;
        return view("admin.project.edit",$this->View);

    }

    public function remove(Request $request){
        $id = $request->input("id");

        if($request->isMethod("post")){            
            $remove = DTProject::find($id);

            @unlink(public_path("/upload/project/".$remove->picture));
            @unlink(public_path("/upload/project/small/".$remove->picture));
            @unlink(public_path("/upload/project/big/".$remove->picture));
            
            $remove->delete();
        }
        return 'success';
    }
}
