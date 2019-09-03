<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecruitTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hc_recruit', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('title');
            $table->string('cid_location');
            $table->string('job_name');
            $table->string('salary');
            $table->string('cid_shop');

            $table->string('treatment'); //quyền lợi
            $table->string('time_expired');
            $table->string('date_of');
            $table->string('qualification'); //chuyen mon
            $table->string('address');
            $table->string('phone');
            $table->string('email');
            $table->string('line');

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
        Schema::dropIfExists('hc_recruit');
    }
}
