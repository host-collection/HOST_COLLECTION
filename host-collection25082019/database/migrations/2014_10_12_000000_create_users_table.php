<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            

            $table->string('nick_name');
            $table->string('username');
            $table->string('password');
            $table->string('email');

            $table->string('phone');
            $table->string('line');
            $table->string('address');
            $table->integer('height');
            $table->string('blood_group');
            $table->string('zodiac');
            $table->string('date_of_birth');
            $table->text('descriptiom');
            $table->string('cid_location');
            $table->string('role');
            $table->string('accessed_count');
            $table->string('favorite_list');
            $table->string('book_list');
            $table->string('cid_shop');
            $table->string('cid_position');
            $table->string('rank_in_shop');
            $table->enum('status',['1','2']) ->comment='1: Enable, 2: Disable';

            $table->timestamp('email_verified_at')->nullable();
            
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
