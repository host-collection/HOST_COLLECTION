<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InitController extends Controller
{
    //
    public $View=[];


    public function __construct(Request $request){
    	//$this->View['is_sidebar']=1;

    	$this->View['Config']=[
    		'Project'=> [
    			"Width"=>645,
    			"Height"=>430
    		],
            'State'=>[
                "Width"=>400,
                "Height"=>400
            ],
            'Slideshow'=>[
                "Width"=>1280, 
                "Height"=>400
            ],
             'Evaluate'=>[
                "Width"=>80, 
                "Height"=>80
            ],
            "News"=>[
                "Small"=>[
                    "Width"=>271,
                    "Height"=>271
                ],
                "Big"=>[
                    "Width"=>279,
                    "Height"=>200
                ],
                "Current"=>[
                    "Width"=>1024,
                    "Height"=>1024
                ]
            ],
            "Banner"=>[
                "Banner_type"=>[
                    "Width"=>1280,
                    "Height"=>372
                ],
                "Banner_home"=>[ 
                    "Width"=>555,
                    "Height"=>356
                ]
            ],
            "Cate"=>[
				"Small"=>[
					"Width"=>100,
					"Height"=>100
				],
				"Big"=>[
					"Width"=>264,
					"Height"=>264
				],
				"Current"=>[
					"Width"=>1024,
					"Height"=>1024
				]
			],

            "Product"=>[
                "Small"=>[
                    "Width"=>100,
                    "Height"=>100
                ],
                "Big"=>[
                    "Width"=>264,
                    "Height"=>264
                ],
                "Current"=>[
                    "Width"=>1024,
                    "Height"=>1024
                ]
            ],

    	];
    }
}
