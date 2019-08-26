<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShopTradingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hc_shop_trading', function (Blueprint $table) {
            $table->bigIncrements('id');


            $table->string('cid_shop');
            $table->string('bank');
            $table->string('account_name');
            $table->string('account_number');
            $table->string('amount');
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
        Schema::dropIfExists('hc_shop_trading');
    }
}
