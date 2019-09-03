<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Validator;
use App;

class PageController extends Controller
{
	protected $View = [];

    public function add(Request $request){
        $this->View['data']=[];
        if($request->isMethod("post")){
            $Validator=Validator::make($request->all(),[
                    "name"=>"required|unique:hc_page"
            ]);
            if($Validator->fails()){
                return redirect()->back()->withErrors($Validator)->withInput();
            }else{
                $TNew=new App\Model\Page();
                $TNew->name=$request->input("name");
                $TNew->alias=App\MrData::toAlias2($request->input("name"));
                $TNew->content=$request->input("content");
                $TNew->status =$request->input("status");
                $TNew->save();
                $request->session()->flash("success","Add page success.");
                return redirect()->back();
            }
        }
        $data['status'] = 1;

        $this->View['data'] = $data;

        return view("admin.page.add",$this->View);
    }
    public function list(Request $request){
        $search="";
        if($request->isMethod("get")){
            $search=$request->input("search");
        }
        $this->View['search']=$search;
        $this->View['data']=App\Model\Page::where("name","LIKE","%{$search}%")->paginate(20);
        return view("admin.page.list",$this->View);
    }
    public function edit($id,Request $request){
        $data=[];
        $get_page=App\Model\Page::find($id);
        if($request->isMethod("post")){
            $validator=Validator::make($request->all(),[
                "name"=>"required|unique:hc_page,name,{$id},id"
            ],[
                "name.required"=>"Please enter page name",
                "name.unique"=>" Page name already exists. "
            ]);
            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }else{
                $get_page->name=$request->input("name");
                $get_page->alias=App\MrData::toAlias2($get_page->name);
                $get_page->content=$request->input("content");
                $get_page->status =$request->input("status");
                $get_page->save();
                $request->session()->flash("success"," Update success. ");
                return redirect()->back();
            }
       	}

        $data=$get_page->toArray();
        $this->View['data']=$data;

        return view("admin.page.edit",$this->View);

    }
}
