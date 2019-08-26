<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePicUpHostTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hc_pic_up_host', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('cid_host');
            $table->string('content');
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
        Schema::dropIfExists('hc_pic_up_host');
    }
}
