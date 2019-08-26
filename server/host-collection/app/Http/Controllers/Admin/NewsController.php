<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App;
use Validator;
use Image;

use App\Model\NewsCate as DTNewsCate;
use App\Model\News as DTNews;

use App\Model\Tag as DTTag;

class NewsController extends Controller
{
	protected $View=[];

  	public function addcate(Request $request){
  		if($request->isMethod("post")){
    		$validator = Validator::make($request->all(),[
    			"name" => "required|unique:dobo_newscate"
    		],[
    			"name.required" => "Tên danh mục tin tức không được để trống.",
    			"name.unique" => "Tên danh mục đã tồn tại."
    		]);
    		if($validator->fails()){
    			return redirect()->back()->withErrors($validator)->withInput();
    		}
    		else{

    			$TNew = new DTNewsCate();

    			$TNew->name = $request->input("name");
    			$TNew->alias = App\MrData::toAlias2($request->input("name"));

    			$TNew->description = $request->input("description");
    			$TNew->orderby = $request->input("orderby");
    			$TNew->status = $request->input("status");

    			$TNew->seo = json_encode([
    				'seo_title'=> ($request->input("seo_title"))? $request->input("seo_title") : $request->input("name"),
                    'seo_description'=>($request->input("seo_description"))? $request->input("seo_description") : $request->input("name"),
                    'seo_keyword'=>($request->input("seo_keyword"))? $request->input("seo_keyword") : $request->input("name"). str_replace("-", " ", $TNew->alias )
    			]);

    			$TNew->save();

    			$request->session()->flash("success","Thêm mới danh mục tin tức thành công. ");
                return redirect()->back();
    		}
    	}

    	$data=[];
    	$data['status']=1;
    	$data['orderby'] = DTNewsCate::count();

        $this->View['data']=$data;

        return view("admin.news.addcate",$this->View);
  	}

  	public function listcate(Request $request){

		$search = "";

    	if($request->isMethod("get")){
    		$search = $request->input("search");
    	}

    	$this->View['data'] = DTNewsCate::where("name", "LIKE", "%{$search}%")->orderBy("orderby", "DESC")->paginate(20);

    	return view("admin.news.listcate", $this->View);
  	}

  	public function editcate($id, Request $request){
  		$data=[];
     	
        if($request->isMethod("post")){
            $validator=Validator::make($request->all(),[
                "name"=>"required|unique:dobo_newscate,name,{$id},id"
            ],[
                "name.required"=>"Vui lòng nhập tên ",
                "name.unique"=>"Tên đã tồn tại "
            ]);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }
            else{

            	$TUpdate = DTNewsCate::find($id);

            	$TUpdate->name = $request->input("name");
    			$TUpdate->alias = App\MrData::toAlias2($request->input("name"));

    			$TUpdate->description = $request->input("description");
    			$TUpdate->orderby = $request->input("orderby");
    			$TUpdate->status = $request->input("status");

    			$TUpdate->seo = json_encode([
    				'seo_title'=> ($request->input("seo_title"))? $request->input("seo_title") : $request->input("name"),
                    'seo_description'=>($request->input("seo_description"))? $request->input("seo_description") : $request->input("name"),
                    'seo_keyword'=>($request->input("seo_keyword"))? $request->input("seo_keyword") : $request->input("name"). str_replace("-", " ", $TUpdate->alias )
    			]);

    			$TUpdate->save();

    			$request->session()->flash("success","Cập nhật danh mục tin tức thành công. ");
                return redirect()->back();
            }
        }

		$data=[];
    	$data['status']=1;
    	$data['orderby'] = DTNewsCate::count();        

        $data= DTNewsCate::find($id)->toArray();

        $data= array_merge($data,(array)json_decode($data['seo']));
        $this->View['data']=$data;
        return view("admin.news.editcate",$this->View);
  	}

    public function removecate(Request $request){
        $id = $request->input("id");

        if($request->isMethod("post")){            
            $remove = DTNewsCate::find($id);
            $remove->delete();
        }
        return 'success';
    }
    //news

  	public function add(Request $request){
  		if($request->isMethod("post")){
    		$validator = Validator::make($request->all(),[
    			"name" => "required|unique:dobo_news",
    			"description"=>"required",
                "picture"=>"required"
    		],[
    			"name.required" => "Tên tin tức không được để trống.",
    			"name.unique" => "Tên tin tức đã tồn tại.",
    			"description.required"=>"Vui lòng nhập mô tả ",
                "picture.required"=>"Vui lòng chọn hình ảnh tin tức "
    		]);
    		if($validator->fails()){
    			return redirect()->back()->withErrors($validator)->withInput();
    		}
    		else{

    			$TNew = new DTNews();

    			$TNew->name = $request->input("name");
    			$TNew->alias = App\MrData::toAlias2($request->input("name"));
    			$TNew->cid_cate = $request->input("cid_cate");
    			$TNew->cid_user = "0";
    			$TNew->is_hot = $request->input("is_hot");
    			$TNew->status = $request->input("status");
    			$TNew->description = $request->input("description");
    			$TNew->content = $request->input("content");

    			$picture=$request->file("picture");

                if($picture){
                    $picture_name= $TNew->alias.".".$picture->getClientOriginalExtension();

                    Image::make($picture)->resize(
                        config('constants.News.Current.Width'),
                        config('constants.News.Current.Height'))
                            ->save(public_path("/upload/news/".$picture_name));

                    Image::make($picture)->resize(
                        config('constants.News.Small.Width'),
                        config('constants.News.Small.Height'))
                            ->save(public_path("/upload/news/small/".$picture_name));

                    Image::make($picture)->resize(
                        config('constants.News.Big.Width'),
                        config('constants.News.Big.Height'))
                        ->save(public_path("/upload/news/big/".$picture_name));
                  
                    $TNew->picture=$picture_name;
                }

                $TNew->seo=json_encode([
                    'seo_title'=> (empty($request->input("seo_title"))) ? $request->input("name") : $request->input("seo_title"),

                    'seo_description'=> (empty($request->input("seo_description"))) ? $request->input("name") : $request->input("seo_description"),

                    'seo_keyword'=> (empty($request->input("seo_keyword"))) ? $request->input("name") : $request->input("seo_keyword")
                ]);

                $TNew->save();


                $tag=explode(",", $request->input("tag"));
                if(!empty($tag)){
                      foreach ($tag as $e_tag) {
                          $alias_e_tag=App\MrData::toAlias2($e_tag);

                          $check_tag=DTTag::where("alias",$alias_e_tag)->first();
                          if(empty($check_tag['id'])){
                             $check_tag=new DTTag();
                             $check_tag->name = $e_tag;
                             $check_tag->alias=$alias_e_tag;
                             $check_tag->save();                            
                          }
                           $check_tag->News()->attach($TNew->id);
                      }
                }

                $request->session()->flash("success", "Thêm tin tức thành công.");
    		}
    	}
    	$data = [];

        $data['status'] = 1;
        $data['is_hot'] = 1;

        $this->View['cid_cate'] = 1;

        $data['cate'] = DTNewsCate::where("status","1")->get()->pluck("name", "id"); 

		$this->View['data'] = $data;

		return view("admin.news.add", $this->View);
  	}

    public function list(Request $request){

        $search = "";

        if($request->isMethod("get")){
            $search = $request->input("search");
        }

        $this->View['data'] = DTNews::where("name", "LIKE", "%{$search}%")->paginate(20);

        return view("admin.news.list", $this->View);
    }

    public function edit($id, Request $request){

        $data=[];
        
        $TUpdated=DTNews::find($id);

        if($request->isMethod("post")){
            $validator=Validator::make($request->all(),[
                "name"=>"required|unique:dobo_news,name,{$id},id",
                "cid_cate"=>"required",
                "description"=>"required",
                 
            ],[
                "name.required"=>"Vui lòng nhập tên tin tức",
                "name.unique"=>"Tin tức này đã tồn tại ",
                "cid_cate.required"=>"Vui lòng chọn danh mục tin tức",
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
                $TUpdated->cid_cate=$request->input("cid_cate");
                $TUpdated->seo=json_encode([
                    'seo_title'=> (empty($request->input("seo_title"))) ? $request->input("name") : $request->input("seo_title"),

                    'seo_description'=> (empty($request->input("seo_description"))) ? $request->input("name") : $request->input("seo_description"),

                    'seo_keyword'=> (empty($request->input("seo_keyword"))) ? $request->input("name") : $request->input("seo_keyword"),
                ]);

                $picture=$request->file("picture");

                if($picture){
                    @unlink(public_path("/upload/news/".$TUpdated->picture));
                    @unlink(public_path("/upload/news/big/".$TUpdated->picture));
                    @unlink(public_path("/upload/news/small/".$TUpdated->picture));

                    $picture_name= $TUpdated->alias.".".$picture->getClientOriginalExtension();

                    Image::make($picture)->resize(
                        config('constants.News.Current.Width'),
                        config('constants.News.Current.Height'))
                        ->save(public_path("/upload/news/".$picture_name));

                    Image::make($picture)->resize(
                        config('constants.News.Small.Width'),
                        config('constants.News.Small.Height'))
                        ->save(public_path("/upload/news/small/".$picture_name));

                    Image::make($picture)->resize(
                        config('constants.News.Big.Width'),
                        config('constants.News.Big.Height'))
                        ->save(public_path("/upload/news/big/".$picture_name));
              
                    $TUpdated->picture=$picture_name;
                }

                $TUpdated->save();

                foreach ($TUpdated->Tag() as $t) {
                    $TUpdated->MyTag()->detach($t->id);
                }

                $tag=explode(",", $request->input("tag"));

                if(!empty($tag)){

                    foreach ($tag as $e_tag) {
                        $alias_e_tag=App\MrData::toAlias2($e_tag);

                        $check_tag=DTTag::where("alias",$alias_e_tag)->first();
                        if(empty($check_tag['id'])){
                           $check_tag=new DTTag();
                           $check_tag->name = $e_tag;
                           $check_tag->alias=$alias_e_tag;
                           $check_tag->save();
                        }

                        $check_tag->News()->attach($TUpdated->id);
                    }
                }

                $request->session()->flash("success","Câp nhật danh mục tin tức thành công.");
                return redirect()->back();
            }

        }

        $my_data=DTNews::find($id);
        
        $get_data=$my_data->toArray();

        $data=array_merge($get_data,(array)json_decode($get_data['seo']));

        $tag= $my_data->Tag()->pluck("name")->toArray();
        
        $data['tag']=implode(",", $tag);   
        
        $this->View['cid_cate']= DTNewsCate::orderBy("name","DESC")->pluck("name",'id');


        $this->View['data']=$data;
        return view("admin.news.edit",$this->View);

    }

    public function remove(Request $request){
        $id = $request->input("id");

        if($request->isMethod("post")){            
            $remove = DTNews::find($id);

            @unlink(public_path("/upload/news/".$remove->picture));
            @unlink(public_path("/upload/news/big/".$remove->picture));
            @unlink(public_path("/upload/news/small/".$remove->picture));

            $remove->delete();
        }
        return 'success';
    }
}
