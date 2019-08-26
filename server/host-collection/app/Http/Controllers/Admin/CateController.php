<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\Cate as DTCate;

use Validator;
use Image;
use App;


class CateController extends Controller
{
    protected $View = [];

    public function add(Request $request){
    	if($request->isMethod("post")){
    		$validator = Validator::make($request->all(), [
    			"name"=>"required|unique:host_cate"
    		],[
    			"name.required"=>"Category names cannot be blank.",
	    		"name.unique"=>"Category already exists."
    		]);
    		if($validator->fails()){
   				return redirect()->back()->withErrors($validator)->withInput();
   			}
   			else{

   				$TNew = new DTCate();

   				$TNew->name = $request->input("name");
   				$TNew->alias = App\MrData::toAlias2($request->input("name"));

   				$TNew->status = $request->input("status");
   				$TNew->picture = "";
   				$TNew->orderby = $request->input("orderby");

   				$TNew->content = "";
                $TNew->cid_parent = $request->input("cid_parent");

   				// $TNew->seo = json_encode([
   				// 	'seo_title'=>($request->input('seo_title'))? $request->input("seo_title") : $request->input('name'),
                //     'seo_description'=>($request->input('seo_description'))? $request->input('seo_description') : $request->input('name'),
                //     'seo_keyword'=>($request->input('seo_keyword'))? $request->input('seo_keyword') : $request->input('name'). str_replace("-", " ", $TNew->alias),
   				// ]);

            $picture = $request->file("picture");
            if($picture){
                $picture_name= $TNew->alias.".".$picture->getClientOriginalExtension();

                Image::make($picture)->resize(config('constants.Cate.Current.Width'),config('constants.Cate.Current.Height'))->save(public_path("/upload/cate/".$picture_name));

                Image::make($picture)->resize(config('constants.Cate.Small.Width'),config('constants.Cate.Small.Height'))->save(public_path("/upload/cate/small/".$picture_name));

                Image::make($picture)->resize(config('constants.Cate.Big.Width'),config('constants.Cate.Big.Height'))->save(public_path("/upload/cate/big/".$picture_name));

                $TNew->picture=$picture_name;

            }

   			$TNew->save();

   			$request->session()->flash("success", "Add category success.");
   			}
    	}

    	$data = [];

        $this->View['cid_parent'] = DTCate::where("cid_parent", "0")->orderBy("orderby", "ASC")->get()->pluck("name", "id");

        $this->View['cid_parent'][0]="Parent category";

   		$data['orderby']=DTCate::count();
        $data['status']=1;

        $data['cid_parent'] = 0;

   		$this->View['data'] = $data;

   		return view("admin.cate.add", $this->View);
    }

    public function list(Request $request){

		  $search = "";

    	if($request->isMethod("get")){
    		$search = $request->input("search");
    	}

    	$this->View['data'] = DTCate::where("cid_parent", "0")->where("name", "LIKE", "%{$search}%")->orderBy("orderby", "DESC")->paginate(20);

    	return view("admin.cate.list", $this->View);
    }


    public function edit($id, Request $request){
        if($request->isMethod("post")){
            $validator = Validator::make($request->all(), [
              "name"=>"required|unique:host_cate,name,{$id},id"
            ],[
                "name.required"=>"Category names cannot be blank.",
	    		"name.unique"=>"Category already exists."
            ]);
            if($validator->fails()){
              return redirect()->back()->withErrors($validator)->withInput();
            }
            else{


                $TUpdate = DTCate::find($id);

                $TUpdate->name = $request->input("name");
                $TUpdate->alias = App\MrData::toAlias2($request->input("name"));

                $TUpdate->status = $request->input("status");

                $TUpdate->orderby = $request->input("orderby");

                $TUpdate->content = "";

                $TUpdate->cid_parent = $request->input("cid_parent");

                // $TUpdate->seo = json_encode([
                //     'seo_title'=>($request->input('seo_title'))? $request->input("seo_title") : $request->input('name'),
                //     'seo_description'=>($request->input('seo_description'))? $request->input('seo_description') : $request->input('name'),
                //     'seo_keyword'=>($request->input('seo_keyword'))? $request->input('seo_keyword') : $request->input('name'). str_replace("-", " ", $TUpdate->alias),
                // ]);

                $picture = $request->file("picture");

                if($picture){

                    @unlink(public_path("/upload/cate/".$TUpdate['picture']));
                    @unlink(public_path("/upload/cate/small/".$TUpdate['picture']));
                    @unlink(public_path("/upload/cate/big/".$TUpdate['picture']));

                    $picture_name= $TUpdate->alias.".".$picture->getClientOriginalExtension();

                    Image::make($picture)->resize(config('constants.Cate.Current.Width'),config('constants.Cate.Current.Height'))->save(public_path("/upload/cate/".$picture_name));

                       Image::make($picture)->resize(config('constants.Cate.Small.Width'),config('constants.Cate.Small.Height'))->save(public_path("/upload/cate/small/".$picture_name));

                          Image::make($picture)->resize(config('constants.Cate.Big.Width'),config('constants.Cate.Big.Height'))->save(public_path("/upload/cate/big/".$picture_name));

                    $TUpdate->picture=$picture_name;

                }

                //dd($TUpdate);
                $TUpdate->save();

                $request->session()->flash("success", "Update category success.");
            }
        }

        $data = [];

        $this->View['cid_parent'] = DTCate::where("cid_parent", "0")->orderBy("orderby", "ASC")->get()->pluck("name", "id");

        $this->View['cid_parent'][0]="";


        $data['orderby']=DTCate::count();
        $data['status']=1;

        $data = DTCate::find($id)->toArray();

        $data = array_merge($data, (array) json_decode($data['seo']));

        //dd($data);
        $this->View['data'] = $data;

        return view("admin.cate.edit", $this->View);
    }

    public function remove(Request $request)
    {
        $id = $request->input("id");
        if($request->isMethod("post")){
            $remove=DTCate::find($id);
            if(!empty($remove)){
                $remove->delete();
            }
            return 'success';
        }
    }
}
