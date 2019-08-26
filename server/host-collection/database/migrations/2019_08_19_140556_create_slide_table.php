<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSlideTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hc_slide', function (Blueprint $table) {
            $table->bigIncrements('id');


            $table->string('name');
            $table->string('image');
            $table->string('link');
            $table->string('description');

            $table->string('position');
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
        Schema::dropIfExists('hc_slide');
    }
}
