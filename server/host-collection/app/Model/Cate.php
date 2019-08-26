<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Cate extends Model
{
    protected $table = "host_cate";
    protected $primary = "id";
    protected $timestamp = true;

    public function Child(){
    	return $this->hasMany(Cate::class, "cid_parent")->where("status", "1")->orderBy("orderby", "DESC")->getResults();
    }

    public function Home(){
        return $this->hasManyThrough(Product::class,Cate::class,"cid_parent","cid_cate")->where("dobo_product.status","1")->orderBy("dobo_product.id","DESC")->limit(16)->getResults();
    }
}
