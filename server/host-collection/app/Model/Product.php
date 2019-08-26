<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "dobo_product";
    protected $primary = "id";
    protected $timestamp = true;

    public function Tag(){
    	return $this->belongsToMany(Tag::class, "tag_product", "cid_product", "cid_tag")->getResults();
    }

    public function MyTag(){
        return $this->belongsToMany(Tag::class,"tag_product","cid_product","cid_tag");
    }

    public function Cate(){
    	return $this->belongsTo(Cate::class, "cid_cate")->getResults();
    }
}
