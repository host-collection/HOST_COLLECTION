<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGalleryShopTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hc_gallery_shop', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('image');
            $table->string('cid_shop');
            $table->string('description');
            $table->string('image_type');
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
        Schema::dropIfExists('hc_gallery_shop');
    }
}
