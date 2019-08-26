<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\Slideshow as DTSlideshow;

use Validator;
use Image;


class SlideshowController extends Controller
{
	protected $View = [];

    public function add(Request $request){
    	if($request->isMethod("post")){
    		$validator = Validator::make($request->all(),[
    			"name"=>"required",
                "links"=>"required",
                "picture"=>"required|mimes:jpg,jpeg,png"
    		],[
    			"name.required"=>"Vui lòng nhập tên",
                "links.required"=>"Vui lòng nhập đường dẫn ",
                "picture.required"=>"Vui lòng nhập hình ảnh ",
                "picture.mimes"=>" Vui lòng chọn đúng định dạng hình ảnh "
    		]);
    		if($validator->fails()){
    			return redirect()->back()->withErrors($validator)->withInput();
    		}
    		else{

    			$TNew = new DTSlideshow();

                $TNew->name = $request->input("name");
                $TNew->links = $request->input("links");
                $TNew->orderby = $request->input("orderby");
                $TNew->status = $request->input("status");

                $pic = $request->file("picture");

                $name_pic = "slide_".date('dmy').time().".".$pic->getClientOriginalExtension();

                Image::make($pic)->resize(
                    config("constants.Slideshow.Current.Width"),
                    config("constants.Slideshow.Current.Height"))->save(public_path("/upload/slideshow/".$name_pic)
                );
                
                $TNew->picture = $name_pic;

                $TNew->save();

                $request->session()->flash("success", "Thêm slideshow thành công.");

                return redirect()->back();
    		}
    	}

    	$data = [];

    	$data['status'] = 1;
    	$data['orderby'] = DTSlideshow::count();

        $this->View['data'] = $data;

    	return view("admin.slideshow.add", $this->View);
    }

    public function list(Request $request){
        $search = "";

        if(!empty($request->input("search"))){
            $search= $request->input("search");
        }

        $data = DTSlideshow::where("name", "LIKE", "%{$search}%")->orderBy("id","DESC")->paginate(20);

        $this->View['data'] = $data;

        return view("admin.slideshow.list", $this->View);
    }

    public function edit($id, Request $request){
        if($request->isMethod("post")){
            $validator = Validator::make($request->all(),[
                "name"=>"required",
                "links"=>"required",
            ],[
                "name.required"=>"Vui lòng nhập tên",
                "links.required"=>"Vui lòng nhập đường dẫn ",
            ]);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }
            else{

                $TUpdate = DTSlideshow::find($id);

                $TUpdate->name = $request->input("name");
                $TUpdate->links = $request->input("links");
                $TUpdate->status = $request->input("status");
                $TUpdate->orderby = $request->input("orderby");

                $pic = $request->file("picture");

                if(!empty($pic)){

                    @unlink(public_path("/upload/slideshow/".$TUpdate['picture']));

                    $name_pic = "slide_".date('dmy').time().".".$pic->getClientOriginalExtension();

                    Image::make($pic)->resize(
                        config("constants.Slideshow.Current.Width"),
                        config("constants.Slideshow.Current.Height"))->save(public_path("/upload/slideshow/".$name_pic));

                    $TUpdate->picture = $name_pic;
                }

                $TUpdate->save();

                $request->session()->flash("success", "Cập nhật slideshow thành công.");
            }
        }

        $data = [];

        $data = DTSlideshow::find($id);

        $this->View['data'] = $data;

        return view("admin.slideshow.edit", $this->View);
    }

    public function remove(Request $request){
        $id = $request->input("id");

        if($request->isMethod("post")){
            $remove = DTSlideshow::find($id);

            if(!empty($remove)){
                @unlink(public_path("/upload/slideshow/".$remove->picture));
                $remove->delete();
            }

            return 'success';
        }
    }
}
