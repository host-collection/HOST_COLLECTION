@extends('admin.admin')
@section('content')
	 <!-- Breadcrumb-->
    <div class="breadcrumb-holder">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Home</a></li>
                <li class="breadcrumb-item active">General information</li>
            </ul>
        </div>
    </div>
    <div class="row-fluid">
        @if(count($errors)>0)
        <div class="alert alert-danger">
            <ul>
                @foreach($errors->all() as $error)
                <li>{{$error}}</li>
                @endforeach
            </ul>
        </div>
        @endif
        @if(!empty(session('success')))
            <div class="alert alert-success">
                <ul>
                    <li>
                        <p>{!!session('success')!!}</p>
                    </li>
                </ul>
            </div>
        @endif
    </div>
    {!! Form::open(['method'=>'post','files'=>true, 'class'=>'form-horizontal']) !!}
    	<section class="forms">
        	<div class="container-fluid">
        		<header>
	                <h1 class="h3 display">Edit general information</h1>
	            </header>
	            <div class="col-sm-12">
	            	<div class="card">
	            		<div class="card-header d-flex align-items-center">
	                        <h4>Information</h4>
	                    </div>
	                    <div class="card-body">
	                    	<div class="form-group row" id="yume-label">
	                    		<label class="col-sm-2 form-control-label">
	                    			LOGO
	                    		</label>
	                    		<div class="col-sm-10">
	                    			{!! Form::file('logo',['class'=>'form-control inputfile', 'id'=>'fileInput',
                                    'accept'=>'image/*'])!!}
	                    		</div>

                                <div class="image-wrapper">
                                    <img src="/upload/logo/logo.png">
                                </div>
	                    	</div>

	                    	<!-- <div class="form-group row" id='yume-label'>
	                            <label class="col-sm-2 form-control-label">Name</label>
	                            <div class="col-sm-10">
	                               {!! Form::text("name", @$data['name'], ['class'=>'form-control'])!!}
	                            </div>
	                        </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">SITE name</label>
                                <div class="col-sm-10">
                                   {!! Form::text("sitename", @$data['sitename'], ['class'=>'form-control'])!!}
                                </div>
                            </div> -->

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Phone</label>
                                <div class="col-sm-10">
                                   {!! Form::text("phone", @$data['phone'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Note</label>
                                <div class="col-sm-10">
                                   {!! Form::text("note", @$data['note'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <!-- <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Hotline1</label>
                                <div class="col-sm-10">
                                   {!! Form::text("hotline1", @$data['hotline1'], ['class'=>'form-control'])!!}
                                </div>
                            </div> -->
                            <!-- <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Hotline 2</label>
                                <div class="col-sm-10">
                                   {!! Form::text("hotline2", @$data['hotline2'], ['class'=>'form-control'])!!}
                                </div>
                            </div>
                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Hotline 3</label>
                                <div class="col-sm-10">
                                   {!! Form::text("hotline3", @$data['hotline3'], ['class'=>'form-control'])!!}
                                </div>
                            </div>
                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Hotline 4</label>
                                <div class="col-sm-10">
                                   {!! Form::text("hotline4", @$data['hotline4'], ['class'=>'form-control'])!!}
                                </div>
                            </div> -->


                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Địa chỉ</label>
                                <div class="col-sm-10">
                                   {!! Form::text("address", @$data['address'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Email</label>
                                <div class="col-sm-10">
                                   {!! Form::text("email", @$data['email'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Mô tả</label>
                                <div class="col-sm-10">
                                    {!! Form::textarea("description", @$data['description'], ['class'=>'form-control', 'id'=>'description'])!!}
                                </div>
                            </div>
	                    </div>
	            	</div>
	            </div>

                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Social Network</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2">Facebook</label>
                                <div class="col-sm-10">
                                    {!! Form::text("facebook", @$data['facebook'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2">Google</label>
                                <div class="col-sm-10">
                                    {!! Form::text("google", @$data['google'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2">Youtube</label>
                                <div class="col-sm-10">
                                    {!! Form::text("youtube", @$data['youtube'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2">Skype</label>
                                <div class="col-sm-10">
                                    {!! Form::text("skype", @$data['skype'], ['class'=>'form-control'])!!}
                                </div>
                            </div>
                        </div>

                        <div class="card-footer">
                            <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                            <button type="submit" class="btn btn-sm btn-primary"><i class="fas fa-save"></i> SAVE </button>
                            <button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> RESET </button>
                        </div>
                    </div>
                </div>


                <!-- <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Seo</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2">Title</label>
                                <div class="col-sm-10">
                                    {!! Form::text("seo_title", @$data['seo_title'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2">Description</label>
                                <div class="col-sm-10">
                                    {!! Form::textarea("seo_description", @$data['seo_description'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2">Keyword</label>
                                <div class="col-sm-10">
                                    {!! Form::textarea("seo_keyword", @$data['seo_keyword'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                        </div>

                        <div class="card-footer">
                            <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                            <button type="submit" class="btn btn-sm btn-primary"><i class="fas fa-save"></i> LƯU </button>
                            <button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> LÀM LẠI </button>
                        </div>
                    </div>
                </div> -->
        	</div>
        </section>
    {!! Form::close()!!}
@endsection

@section('script_js')
    <script >
        initEditorSmall('description');
    </script>
@endsection
