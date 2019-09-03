<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\General as DTGeneral;


use Validator;
use Image;

class IndexController extends Controller
{
    protected $View = [];

   	public function index(Request $request){
   		if($request->isMethod("post")){
   			$validator = Validator::make($request->all(),[
   				//"name"=>"required",
	    		//"sitename" => "required",
	    		"email" => "email|required",
	    		"description" => "required"
   			],[
   				//"name.required"=>"Name not be empty.",
	    		//"sitename.required"=>"Site not be empty.",
	    		"phone.required" => "Phone not be empty..",
	    		"email.email" => "Invalid format email",
	    		"email.required" => "Email not be empty.",
	    		"description.required" => "Description not be empty."
   			]);

   			if($validator->fails()){
   				return redirect()->back()->withErrors($validator)->withInput();
   			}
   			else{
   				$logo = $request->file("logo");

   				if($logo){

   					@unlink("/upload/logo/logo.png");

   					Image::make($logo)->save(public_path("/upload/logo/logo.png"));
   				}

   				$TNew = DTGeneral::findOrNew(1);

   				//$TNew->name = $request->input("name");
   				//$TNew->sitename = $request->input("sitename");
   				$TNew->phone = $request->input("phone");
                $TNew->email = $request->input("email");
                $TNew->note = $request->input("note");
   				//$TNew->hotline1 = $request->input("hotline1");
            //    $TNew->hotline2 = $request->input("hotline2");
            //    $TNew->hotline3 = $request->input("hotline3");
            //    $TNew->hotline4 = $request->input("hotline4");
   				$TNew->address = $request->input("address");
   				$TNew->description = $request->input("description");

   				$TNew->social = json_encode([
   					"twitter" => $request->input("twitter"),
   					"line" => $request->input("line"),
   					"facebook" => $request->input("facebook"),
   				]);

   				// $TNew->seo = json_encode([
   				// 	'seo_title'=>$request->input('seo_title'),
                //     'seo_description'=>$request->input('seo_description'),
                //     'seo_keyword'=>$request->input('seo_keyword'),
   				// ]);

   				$TNew->save();

   				$request->session()->flash("success", "Update general information success .");
   			}
   		}

   		$data = [];

   		$data = DTGeneral::find(1)->toArray();

   		$data = array_merge($data,(array) json_decode($data['social']));

        $this->View['data'] = $data;

        //dd($data);

   		return view("admin.index.index", $this->View);
   	}
}
