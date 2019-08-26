<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

//Api
use App\Model\General as DTGeneral;
use App\Http\Controllers\Api\BaseController as BaseController;
use App\Http\Resources\General as GeneralResources;
use Validator;


class GeneralController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $general = DTGeneral::get();
        // //return GeneralResources::collection($general);

        // return response()->json($general, 200);

        $general = DTGeneral::all();

        //return $this->sendResponse($general->toArray(), 'Products retrieved successfully.');
        return response()->json($general, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $request->headers->set('Accept', 'application/json');

        $validator = Validator::make($input, [
            'phone' => 'required',
            'address' => 'required'
        ]);


        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }


        $general = DTGeneral::create($input);


        return $this->sendResponse($general->toArray(), 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
