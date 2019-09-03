<?php
    header('Access-Control-Allow-Origin:  *');
    header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// "middleware"=>"auth"

Route::group(['namespace'=>'Admin','prefix'=>'admin'],function(){
	Route::group(['prefix'=>'users'], function(){
		Route::any('list','UserController@list');
		Route::any('add','UserController@add');
		Route::any('edit/{id}','UserController@edit');
		Route::any('delete/{id}','UserController@delete');
	});

	Route::group(["prefix"=>"index"], function(){
		Route::any("index", "IndexController@index");
	});

	Route::group(["prefix"=>"cate"], function(){
		Route::any("/add", "CateController@add");
		Route::any("/list", "CateController@list");
		Route::any("/edit/{id}", "CateController@edit");
		Route::any("/remove", "CateController@remove");
	});

	Route::group(["prefix"=>"slideshow"], function(){
		Route::any("/add", "SlideshowController@add");
		Route::any("/list", "SlideshowController@list");
		Route::any("/edit/{id}", "SlideshowController@edit");
		Route::any("/remove", "SlideshowController@remove");
	});

	Route::group(["prefix"=>"news"], function(){
		Route::any("/addcate", "NewsController@addcate");
		Route::any("/listcate", "NewsController@listcate");
		Route::any("/editcate/{id}", "NewsController@editcate");
		Route::any("/removecate", "NewsController@removecate");

		Route::any("/add", "NewsController@add");
		Route::any("/list", "NewsController@list");
		Route::any("/edit/{id}", "NewsController@edit");
		Route::any("/remove", "NewsController@remove");
	});

	Route::group(["prefix"=>"project"], function(){
		Route::any("/add", "ProjectController@add");
		Route::any("/list", "ProjectController@list");
		Route::any("/edit/{id}", "ProjectController@edit");
		Route::any("/remove", "ProjectController@remove");
	});

	Route::group(["prefix"=>"page"], function(){
		Route::any("/add", "PageController@add");
		Route::any("/list", "PageController@list");
		Route::any("/edit/{id}", "PageController@edit");
	});

	Route::group(["prefix"=>"product"], function(){
		Route::any("/add", "ProductController@add");
		Route::any("/list", "ProductController@list");
		Route::any("/edit/{id}", "ProductController@edit");
		Route::any("/remove", "ProductController@remove");
		Route::get("/removepicture/{id}","ProductController@removepicture");
    });

    Route::group(["prefix"=>"location"], function(){
		Route::any("/add", "LocationController@add");
		Route::any("/list", "LocationController@list");
		Route::any("/edit/{id}", "LocationController@edit");
		Route::any("/remove", "LocationController@remove");
    });

    Route::group(['prefix'=>'banner'], function(){
        Route::any('/add', 'BannerController@add');
        Route::any('/list', 'BannerController@list');
        Route::any('/edit/{id}', 'BannerController@edit');
        Route::any('/remove', 'BannerController@remove');
    });

});

Route::group(['namespace'=>"Auth"],function(){

	Route::get("/login",['as'=>'login','uses'=>"LoginController@login"]);
	Route::post("/login",['as'=>'postlogin','uses'=>"LoginController@postlogin"]);
});
Route::get('/logout', 'AuthController@getLogout');

Route::group(['namespace'=>'Defaults'], function(){
	Route::get('/', 'IndexController@index');
	Route::get('/sitemap.xml', "IndexController@sitemap");
	Route::get('/sitemap/{key}', "IndexController@sitemapkey");

	Route::get('/tin-tuc', 'NewsController@index');
	Route::get("/tin-tuc/{alias}/", "NewsController@cate");
	Route::get("/tin-tuc/{cate}/{alias}/", "NewsController@detail");

	Route::get("/du-an", "ProjectController@index");
	Route::get("/du-an/{alias}", "ProjectController@detail");

	Route::get('/clear-cache', function() {

	   Artisan::call('cache:clear');
	   Artisan::call('config:clear');
	   Artisan::call('config:cache');
	   Artisan::call('view:clear');

	   return "Cleared!";

	});

	Route::get("/test", "ProductController@test");

	Route::get("/tuyen-dung", "PageController@jobs");

	Route::get("/lien-he", "PageController@contact");

	Route::get("/tim-kiem", "ProductController@search");

	Route::get("/download-catalogue", "ProductController@downloadCatalogue");

	Route::get("/san-pham", "ProductController@index");

	Route::get("/loadproduct","ProductController@loadproduct");

	Route::get('/trang-{alias}', "PageController@page");

	Route::get("/{alias}", "ProductController@cate");
	Route::get("/{cate}/{alias}/", "ProductController@detail");

	//Route::get('ajax-pagination','AjaxController@ajaxPagination')->name('ajax.pagination');


});
