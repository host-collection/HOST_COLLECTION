<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShopTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hc_shop', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->string('cid_location');
            $table->string('job_name');
            $table->string('cid_user');
            $table->string('phone');
            $table->string('email');
            $table->string('address');
            $table->text('social');

            $table->string('open_time');
            $table->string('close_time');
            $table->text('description');

            $table->string('google_map');
            $table->string('cid_coupon');
            $table->string('cid_topic');
            $table->string('cover_image');

            $table->string('avatar_image');

            $table->string('favorite_list');
            $table->integer('access_count');
            $table->string('system');
            $table->string('hp');

            $table->enum('status',['1','2'])->comment='1: Enable; 2: Disable';


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hc_shop');
    }
}
