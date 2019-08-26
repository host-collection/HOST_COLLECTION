@extends('admin.admin')
@section('content')
	<!-- Breadcrumb-->
    <div class="breadcrumb-holder">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Sản phẩm</a></li>
                <li class="breadcrumb-item active">Danh sách sản phẩm</li>
            </ul>
        </div>
    </div>
   	<section class="forms">
        <div class="container-fluid">
            <header> 
                <h1 class="h3 display">Danh sách sản phẩm</h1>
            </header>
            {!! Form::open(["method"=>"get"])!!}
            	<div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <strong>Thông tin tìm kiểm</strong>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-10">
                                    <div class="form-group row" id='yume-label'>
                                        <label class="col-sm-4 form-control-label">Tên</label>
                                        <div class="col-sm-8">
                                           {!! Form::text("search",@$search['name'], ['class'=>'form-control', 'placeholder'=>'Nhập tên cần tìm'])!!}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer">
                            <div class="col-sm-5">
                                <button type="submit" name='is_search' value='1' class="btn btn-sm btn-warning"><i class="fa fa-ban"></i> TÌM KIẾM  </button>
                            </div>
                        </div>
                    </div>
                </div>
            {!! Form::close()!!}

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <i class="fa fa-align-justify"></i> Sản phẩm ( {{$data->total()}} )
                    </div>
                    <div class="card-block">
                        <table class="table table-sm" id="ym-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Thời gian tạo</th>
                                    <th> Giá bán</th>
                                    <th> Giá thị trường</th>
                                    <th>Sắp xếp</th>
                                    <th>Tình trạng</th>

                                    <th>Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($data as $list)
                                    <tr>
                                        <td>{{$list['id']}}</td>
                                        <td>
                                            <strong>{{$list['name']}}</strong></br>
                                            <img src="/upload/product/big/{{$list['picture']}}" style="width: 200px;">
                                        </td>
                                        <td>
                                            Thời gian tạo : {{$list['created_at']}}<br />
                                            Thời gian cập nhật: {{$list['updated_at']}}
                                        </td>
                                        <td>
                                            {{App\MrData::toPrice($list['sales_price'])}}
                                        </td>
                                        <td>
                                            {{App\MrData::toPrice($list['price'])}}
                                        </td>
                                        <td>
                                            {{$list['orderby']}}
                                        </td>
                                        <td>
                                            @if($list['status']=='1')
                                            <a class="badge badge-info"> Hiển thị  </a>
                                            @else
                                            <div class="badge badge-warning"> Ẩn... </div>
                                            @endif
                                        </td>
                                        <td>
                                            <a class="btn btn-sm btn-success" href="/admin/product/edit/{{$list['id']}}"><i class="fas fa-edit"></i> Sửa</a>

                                            <a class="btn btn-sm btn-danger click_remove" href="/admin/product/remove?id=<?php echo $list['id'];?>&_token={{ csrf_token() }}"><i class="far fa-trash-alt"></i> Xóa </a></td>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        <nav>
                            {!! $data->appends($search)->render() !!}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection