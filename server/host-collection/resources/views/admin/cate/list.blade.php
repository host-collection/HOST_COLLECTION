@extends('admin.admin')
@section('content')
	<!-- Breadcrumb-->
    <div class="breadcrumb-holder">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html"> Category</a></li>
                <li class="breadcrumb-item active"> Category list</li>
            </ul>
        </div>
    </div>
   	<section class="forms">
        <div class="container-fluid">
            <header>
                <h1 class="h3 display"> Category list</h1></h1>
            </header>
            {!! Form::open(["method"=>"get"])!!}
            	<div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <strong>Search imformation</strong>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-10">
                                    <div class="form-group row" id='yume-label'>
                                        <label class="col-sm-4 form-control-label"> Category name</label>
                                        <div class="col-sm-8">
                                           {!! Form::text("search",@$search['name'], ['class'=>'form-control', 'placeholder'=>'Nhập tên danh mục cần tìm'])!!}
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
                    <div class="card-heade r">
                        <i class="fa fa-align-justify"></i> Category ( {{$data->total()}} )
                    </div>
                    <div class="card-block">
                        <table class="table table-sm" id="ym-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Category name</th>
                                    <th>Created date</th>
                                    <th>Status</th>
                                    <th>Orderby</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($data as $list)
                                    <tr>
                                        <td>{{$list['id']}}</td>
                                        <td>
                                            <strong>{{$list['name']}}</strong>
                                        </td>
                                        <td>
                                            Thời gian tạo : {{$list['created_at']}}<br />
                                            Thời gian cập nhật: {{$list['updated_at']}}
                                        </td>

                                        <td>
                                            @if($list['status']=='1')
                                            <a class="badge badge-info"> Show  </a>
                                            @else
                                            <div class="badge badge-warning"> Hidden... </div>
                                            @endif
                                        </td>
                                        <td>
                                            {{$list['orderby']}}
                                        </td>
                                        <td>
                                            <a class="btn btn-sm btn-success" href="/admin/cate/edit/{{$list['id']}}"><i class="fas fa-edit"></i> Sửa</a>

                                            <a class="btn btn-sm btn-danger click_remove" href="/admin/cate/remove?id=<?php echo $list['id'];?>&_token={{ csrf_token() }}"><i class="far fa-trash-alt"></i> Xóa </a></td>
                                        </td>
                                    </tr>
                                    @if(count($list->Child())>0)
                                        <tr>
                                            <td></td>
                                            <td colspan="4">
                                                <p>Child Category</p>
                                                <table class="table table-responsive table-striped table-sm">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Category name</th>
                                                            <th>Created date</th>
                                                            <th>Status</th>
                                                            <th>Orderby</th>
                                                            <th>Option</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach($list->Child() as $cc)
                                                            <tr>
                                                                <td>{{$cc['id']}}</td>
                                                                <td>{{$cc['name']}}</td>
                                                                <td>
                                                                    Created date : {{$list['created_at']}}<br />
                                                                    Updated date: {{$list['updated_at']}}
                                                                </td>

                                                                <td>
                                                                    @if($cc['status']=='1')
                                                                    <a class="badge badge-info"> Show  </a>
                                                                    @else
                                                                    <div class="badge badge-warning"> Hidden... </div>
                                                                    @endif
                                                                </td>
                                                                <td>
                                                                    {{$cc['orderby']}}
                                                                </td>
                                                                <td>
                                                                    <a class="btn btn-sm btn-success" href="/admin/cate/edit/{{$cc['id']}}"><i class="fas fa-edit"></i> Sửa</a>

                                                                    <a class="btn btn-sm btn-danger click_remove" href="/admin/cate/remove?id=<?php echo $cc['id'];?>&_token={{ csrf_token() }}"><i class="far fa-trash-alt"></i> Xóa </a>
                                                                </td>
                                                            </td>
                                                            </tr>
                                                        @endforeach
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    @endif

                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
