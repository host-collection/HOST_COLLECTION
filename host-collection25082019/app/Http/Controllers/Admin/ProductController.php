<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App;
use Validator;
use Image;

use App\Model\Product as DTProduct;
use App\Model\Cate as DTCate;

use App\Model\Tag as DTTag;

class ProductController extends Controller
{
    public function add(Request $request){
  		if($request->isMethod("post")){
    		$validator = Validator::make($request->all(),[
    			"name" => "required|unique:dobo_product",
    			"description"=>"required",
                "picture"=>"required"
    		],[
    			"name.required" => "Tên sản phẩm không được để trống.",
    			"name.unique" => "Tên sản phẩm đã tồn tại.",
    			"description.required"=>"Vui lòng nhập mô tả ",
                "picture.required"=>"Vui lòng chọn hình ảnh sản phẩm"
    		]);
    		if($validator->fails()){
    			return redirect()->back()->withErrors($validator)->withInput();
    		}
    		else{

    			$TNew = new DTProduct();

    			$TNew->name = $request->input("name");
    			$TNew->alias = App\MrData::toAlias2($request->input("name"));

    			$TNew->code = $request->input("code");

    			$TNew->sales_price = $request->input("sales_price");
    			$TNew->price = $request->input("price");
    			$TNew->is_stock = $request->input("is_stock");

    			$TNew->cid_cate = $request->input("cid_cate");
    			$TNew->cid_type = 0;
    			$TNew->cid_user = 0;

    			$TNew->cid_origin = 0;
    			$TNew->cid_trademark = 0;

    			$TNew->is_hot = $request->input("is_hot");

    			$TNew->is_new = $request->input("is_new");

    			$TNew->status = $request->input("status");
    			$TNew->description = $request->input("description");
    			$TNew->content = $request->input("content");
                $TNew->orderby = $request->input("orderby");

    			$picture=$request->file("picture");

                if($picture){
                    $picture_name= $TNew->alias.".".$picture->getClientOriginalExtension();

                    Image::make($picture)->resize(
                        config('constants.Product.Current.Width'),
                        config('constants.Product.Current.Height'))
                            ->save(public_path("/upload/product/".$picture_name));

                    Image::make($picture)->resize(
                        config('constants.Product.Small.Width'),
                        config('constants.Product.Small.Height'))
                            ->save(public_path("/upload/product/small/".$picture_name));

                    Image::make($picture)->resize(
                        config('constants.Product.Big.Width'),
                        config('constants.Product.Big.Height'))
                        ->save(public_path("/upload/product/big/".$picture_name));
                  
                    $TNew->picture=$picture_name;
                }


                $multi_picture= $request->file("multi_picture");

                $name_multi_picture=[];

                if($multi_picture){
                    foreach ($multi_picture as $k=>$multi) {
                        $name_multi="multi_".$k.time().".".$multi->getClientOriginalExtension();

                        Image::make($multi)->resize(config('constants.Product.Current.Width'),config('constants.Product.Current.Height'))->save(public_path("/upload/product/".$name_multi));

                         Image::make($multi)->resize(config('constants.Product.Small.Width'),config('constants.Product.Small.Height'))->save(public_path("/upload/product/small/".$name_multi));

                          Image::make($multi)->resize(config('constants.Product.Big.Width'),config('constants.Product.Big.Height'))->save(public_path("/upload/product/big/".$name_multi));

                          $name_multi_picture[]=$name_multi;

                    }
                }
                $TNew->multi_picture= json_encode($name_multi_picture);

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
                           $check_tag->Product()->attach($TNew->id);
                      }
                }

                $request->session()->flash("success", "Thêm sản phẩm thành công.");
    		}
    	}
    	$data = [];

        $data['status'] = 1;
        $data['is_hot'] = 1;
        $data['is_new'] = 1;
        $data['is_stock'] = 100;
        $data['sale_price'] = 0;
        $data['price'] = 0;
        $data['orderby'] = 0;
        $data['sales_price'] = 0;

        $data['cid_cate']= 1;

        $get_parent = DTCate::where("cid_parent","0")->where("status", "1")->orderBy("orderby","ASC")->get()->pluck("name","id");
        foreach($get_parent as $k=>$v){
          $this->View['cid_cate'][$v]=DTCate::where("cid_parent",$k)->where("status","1")->orderBy("orderby","ASC")->get()->pluck("name","id");
        }

		$this->View['data'] = $data;

		return view("admin.product.add", $this->View);
  	}

    public function list(Request $request){

        $search = "";

        if($request->isMethod("get")){
            $search = $request->input("search");
        }

        $this->View['search'] = $search;
        
        $this->View['data'] = DTProduct::where("name", "LIKE", "%{$search}%")->orderBy("id","DESC")->paginate(20);

        return view("admin.product.list", $this->View);
    }

    public function edit($id, Request $request){

        $data=[];
        
        $TUpdated=DTProduct::find($id);

        if($request->isMethod("post")){
            $validator=Validator::make($request->all(),[
                "name"=>"required|unique:dobo_product,name,{$id},id",
                "cid_cate"=>"required",
                "description"=>"required",
                 
            ],[
                "name.required"=>"Vui lòng nhập tên sản phẩm",
                "name.unique"=>"Sản phẩm này đã tồn tại ",
                "cid_cate.required"=>"Vui lòng chọn danh mục sản phẩm",
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

                $TUpdated->sales_price = $request->input("sales_price");
                $TUpdated->price = $request->input("price");
                $TUpdated->is_stock = $request->input("is_stock");

                $TUpdated->cid_cate = $request->input("cid_cate");
                $TUpdated->cid_type = 0;
                $TUpdated->cid_user = 0;

                $TUpdated->cid_origin = 0;
                $TUpdated->cid_trademark = 0;

                $TUpdated->is_hot = $request->input("is_hot");

                $TUpdated->is_new = $request->input("is_new");

                $TUpdated->orderby = $request->input("orderby");


                $TUpdated->seo=json_encode([
                    'seo_title'=> (empty($request->input("seo_title"))) ? $request->input("name") : $request->input("seo_title"),

                    'seo_description'=> (empty($request->input("seo_description"))) ? $request->input("name") : $request->input("seo_description"),

                    'seo_keyword'=> (empty($request->input("seo_keyword"))) ? $request->input("name") : $request->input("seo_keyword"),
                ]);

                $picture=$request->file("picture");

                if($picture){
                    @unlink(public_path("/upload/product/".$TUpdated->picture));
                    @unlink(public_path("/upload/product/big/".$TUpdated->picture));
                    @unlink(public_path("/upload/product/small/".$TUpdated->picture));

                    $picture_name= $TUpdated->alias.".".$picture->getClientOriginalExtension();

                    Image::make($picture)->resize(
                        config('constants.Product.Current.Width'),
                        config('constants.Product.Current.Height'))
                        ->save(public_path("/upload/product/".$picture_name));

                    Image::make($picture)->resize(
                        config('constants.Product.Small.Width'),
                        config('constants.Product.Small.Height'))
                        ->save(public_path("/upload/product/small/".$picture_name));

                    Image::make($picture)->resize(
                        config('constants.Product.Big.Width'),
                        config('constants.Product.Big.Height'))
                        ->save(public_path("/upload/product/big/".$picture_name));
              
                    $TUpdated->picture=$picture_name;
                }

                $multi_picture= $request->file("multi_picture");

                $name_multi_picture=(array)json_decode($TUpdated->multi_picture);
                if($multi_picture){
                    foreach ($multi_picture as $k=>$multi) {
                        $name_multi="multi_".$k.time().".".$multi->getClientOriginalExtension();

                         Image::make($multi)->resize(config('constants.Product.Current.Width'),config('constants.Product.Current.Height'))->save(public_path("/upload/product/".$name_multi));

                         Image::make($multi)->resize(config('constants.Product.Small.Width'),config('constants.Product.Small.Height'))->save(public_path("/upload/product/small/".$name_multi));

                          Image::make($multi)->resize(config('constants.Product.Big.Width'),config('constants.Product.Big.Height'))->save(public_path("/upload/product/big/".$name_multi));

                          $name_multi_picture[]=$name_multi;

                    }
                }
                $TUpdated->multi_picture= json_encode($name_multi_picture);


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

                        $check_tag->Product()->attach($TUpdated->id);
                    }
                }

                $request->session()->flash("success"," Cập nhật sản phẩm thành công thành công.");
                return redirect()->back();
            }

        }

        $my_data=DTProduct::find($id);
        
        $get_data=$my_data->toArray();

        $data=array_merge($get_data,(array)json_decode($get_data['seo']));

        $tag= $my_data->Tag()->pluck("name")->toArray();
        
        $data['tag']=implode(",", $tag);   
        
        $get_parent = DTCate::where("cid_parent","0")->where("status", "1")->orderBy("orderby","ASC")->get()->pluck("name","id");
        foreach($get_parent as $k=>$v){
          $this->View['cid_cate'][$v]=DTCate::where("cid_parent",$k)->where("status","1")->orderBy("orderby","ASC")->get()->pluck("name","id");
        }

        $this->View['data']=$data;
        return view("admin.product.edit",$this->View);

    }

    public function remove(Request $request){
        $id = $request->input("id");

        if($request->isMethod("post")){            
            $remove = DTProduct::find($id);

            @unlink(public_path("/upload/product/".$remove->picture));
            @unlink(public_path("/upload/product/big/".$remove->picture));
            @unlink(public_path("/upload/product/small/".$remove->picture));

            $remove->delete();
        }
        return 'success';
    }

    public function removepicture($id,Request $request){
        if($request->isMethod("get")){
            $data=DTProduct::find($id);
            $pic= $request->input("pic");
            
            $multi=(array)json_decode($data['multi_picture']);
            $result=[];
            foreach ($multi as $key => $value) {
                if($value != $pic){
                  $result[]=$value;
                }else{
                    @unlink(public_path("/upload/product/small/".$pic));
                    @unlink(public_path("/upload/product/big/".$pic));
                    @unlink(public_path("/upload/product/".$pic));
                }
            }
            $data->multi_picture=json_encode($result);
            $data->save();
            echo 'destroy success';exit;
        }
            
    }
}
