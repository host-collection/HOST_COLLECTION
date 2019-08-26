@extends('admin.admin')
@section('content')
  	<!-- Breadcrumb-->
    <div class="breadcrumb-holder">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html"> Category </a></a></li>
                <li class="breadcrumb-item active">Category edit</li>
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
                <!-- Page Header-->
                <header>
                    <h1 class="h3 display">Category edit</h1>
                </header>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header d-flex align-items-center">
                                <h4>Thông tin </h4>
                            </div>
                            <div class="card-body">
                                <div class="form-group row" id='yume-label'>
                                    <label class="col-sm-2 form-control-label">Category name</label>
                                    <div class="col-sm-10">
                                        {!! Form::text("name", @$data['name'], ['class'=>'form-control'])!!}
                                    </div>
                                </div>

                                <div class="form-group row" id='yume-label'>
                                    <label class="col-sm-2 form-control-label">Status</label>
                                    <div class="col-sm-10">
                                        <div class="radio" >
                                            <label>
                                                {!! Form::radio('status','1',
                                                (($data['status'])=='1')? true: false) !!} Show
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                {!! Form::radio('status','2', (($data['status'])=='2')? true : false ) !!} Hidden
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row" id='yume-label'>
                                    <label class="col-sm-2 form-control-label">Orderby</label>
                                    <div class="col-sm-10">
                                        {!! Form::text("orderby", @$data['orderby'], ['class'=>'form-control'])!!}
                                    </div>
                                </div>
                                <div class="form-group row" id="yume-label">
                                    <div class="col-sm-2 form-control-label">
                                        Chose catelogy
                                    </div>
                                    <div class="col-sm-10">
                                        {!! Form::select("cid_parent", $cid_parent, @$data['cid_parent'], ['class'=>'form-control'])!!}
                                    </div>
                                </div>
                                <div class="form-group row" id="yume-label">
                                    <label class="col-sm-2"> Picture</label>
                                    <div class="col-sm-10">
                                        {!! Form::file('picture', ['class'=>'form-control inputfile', 'id'=>'fileInput', 'accept'=>'image/*']) !!}
                                    </div>
                                    <div class="image-wrapper">
                                        <img src="/upload/cate/small/{{$data['picture']}}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12">
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
                    </div>
                </div>
            </div>
        </section>
	{!! Form::close()!!}
@endsection
