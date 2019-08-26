@extends('admin.admin')
@section('content')
	 <!-- Breadcrumb-->
    <div class="breadcrumb-holder">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Người dùng</a></li>
                <li class="breadcrumb-item active">Thêm danh người dùng</li>
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
                    <h1 class="h3 display">Thay đổi người dùng</h1>
                </header>
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <strong>Thông tin người dùng</strong>
                        </div>
                        <div class="card-body">
                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Họ và tên</label>
                                <div class="col-sm-10">
                                   {!! Form::text("name", @$data['name'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Số điện thoại</label>
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
                                <label class="col-sm-2 form-control-label">Địa chỉ</label>
                                <div class="col-sm-10">
                                   {!! Form::text("address", @$data['address'], ['class'=>'form-control', 'placeholder'=>''])!!}
                                </div>
                            </div>
                            
                            <div class="form-group row" id="yume-label">
                                <label class="col-sm-2 form-control-label"> Tình trạng</label>
                                <div class="col-sm-10">
                                    <div class="radio">
                                        <label>
                                            {!! Form::radio('status','1', (($data['status']=='1')? true : false) ) !!} Hiển thị
                                        </label>
                                     </div>
                                    <div class="radio">
                                        <label>
                                            {!! Form::radio('status','2', (($data['status']=='2')? true : false) ) !!} Ẩn  
                                        </label>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Thông tin đăng nhập </h4>
                        </div>
                        <div class="card-body">
                            <div class="form-group row" id='yume-label'>
                                <label class="col-sm-2 form-control-label">Tên đăng nhập</label>
                                <div class="col-sm-10">
                                   {!! Form::text("username", @$data['username'], ['class'=>'form-control'])!!}
                                </div>
                            </div>

                            <div class="form-group row" id="yume-label">
                                <label class="col-sm-2">Mật khẩu</label>
                                <div class="col-sm-10">
                                    {!! Form::password("password", ['class'=>'form-control', 'placeholder' =>''])!!}
                                </div>
                            </div>

                            <div class="form-group row" id="yume-label">
                                <div class="col-sm-2">Nhắc lại mật khẩu</div>
                                <div class="col-sm-10">
                                    {!! Form::password("password_confirmation", ["class"=>"form-control", "placeholder"=>""])!!}
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <input type='hidden' name='_token' value='{{ csrf_token()}}' />
                            <button type="submit" class="btn btn-sm btn-primary"><i class="fas fa-save"></i> LƯU</button>
                            <button type="reset" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> LÀM LẠI</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    {!! Form::close()!!}
@endsection