@extends('admin.admin')
@section('content')
     <!-- Breadcrumb-->
    <div class="breadcrumb-holder">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Users</a></li>
                <li class="breadcrumb-item active">Add user</li>
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
                <h1 class="h3 display">Add user</h1>
            </header>
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header d-flex align-items-center">
                        <h4>User infomation </h4>
                    </div>
                    <div class="card-body">
                        <div class="form-group row" id='yume-label'>
                            <label class="col-sm-2 form-control-label">Full name</label>
                            <div class="col-sm-10">
                               {!! Form::text("name", @$data['name'], ['class'=>'form-control'])!!}
                            </div>
                        </div>

                        <div class="form-group row" id='yume-label'>
                            <label class="col-sm-2 form-control-label">Phone</label>
                            <div class="col-sm-10">
                               {!! Form::text("phone", @$data['phone'], ['class'=>'form-control', 'placeholder'=>''])!!}
                            </div>
                        </div>

                        <div class="form-group row" id='yume-label'>
                            <label class="col-sm-2 form-control-label">Email</label>
                            <div class="col-sm-10">
                               {!! Form::text("email", @$data['email'], ['class'=>'form-control', 'placeholder'=>''])!!}
                            </div>
                        </div>

                        <div class="form-group row" id='yume-label'>
                            <label class="col-sm-2 form-control-label">Address</label>
                            <div class="col-sm-10">
                               {!! Form::text("address", @$data['address'], ['class'=>'form-control', 'placeholder'=>''])!!}
                            </div>
                        </div>
                        <div class="form-group row" id='yume-label'>
                            <label class="col-sm-2"> Chose role</label>
                            <div class="col-sm-10">
                                {!! Form::select("cid_role", $cid_role, @$data['cid_role'] , ['class'=> 'form-control js-example-basic-single'])!!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Login information</h4>
                    </div>
                    <div class="card-body">
                        <div class="form-group row" id='yume-label'>
                            <label class="col-sm-2 form-control-label">Login name</label>
                            <div class="col-sm-10">
                               {!! Form::text("username", @$data['username'], ['class'=>'form-control'])!!}
                            </div>
                        </div>

                        <div class="form-group row" id="yume-label">
                            <label class="col-sm-2">Password</label>
                            <div class="col-sm-10">
                                {!! Form::password("password", ['class'=>'form-control', 'placeholder' =>''])!!}
                            </div>
                        </div>

                        <div class="form-group row" id="yume-label">
                            <label class="col-sm-2"> Re Password</label>
                            <div class="col-sm-10">
                                {!! Form::password("password_confirmation", ["class"=>"form-control", "placeholder"=>""])!!}
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <input type='hidden' name='_token' value='{{ csrf_token()}}' />
                        <button type="submit" class="btn btn-sm btn-primary"><i class="fas fa-save"></i> SAVE</button>
                        <button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> RESET</button>
                    </div>
                </div>
            </div>
         </div>
    </section>
    {!! Form::close()!!}
@endsection
