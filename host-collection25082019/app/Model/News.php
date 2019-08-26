<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
   	protected $table = "dobo_news";
   	protected $primary = "id";
   	protected $timestamp = true;
   	
   	public function Tag(){
        return $this->belongsToMany(Tag::class,"tag_news","cid_news","cid_tag")->getResults();
    }
    public function MyTag(){
            return $this->belongsToMany(Tag::class,"tag_news","cid_news","cid_tag");
    }

    public function NewsCate(){
      return $this->belongsTo(NewsCate::class, "cid_cate")->where("status","1")->getResults();
    }
}
