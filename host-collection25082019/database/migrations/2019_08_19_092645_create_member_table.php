<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hc_member', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->string('username');
            $table->string('password');
            $table->string('avatar');
            $table->string('email');
            $table->string('phone');
            $table->string('address');
            $table->string('cid_location');
            $table->enum('status',['1','2']) ->comment='1: Enable, 2: Disable';

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
        Schema::dropIfExists('hc_member');
    }
}
