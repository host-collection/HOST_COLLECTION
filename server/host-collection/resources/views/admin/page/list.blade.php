@extends('admin.admin')
@section('content')
	<!-- Breadcrumb-->
    <div class="breadcrumb-holder">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">PAGE</a></li>
                <li class="breadcrumb-item active">Page list</li>
            </ul>
        </div>
    </div>
   	<section class="forms">
        <div class="container-fluid">
            <header>
                <h1 class="h3 display">Page list</h1>
            </header>
            {!! Form::open(["method"=>"get"])!!}
            	<div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <strong>Search information</strong>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-10">
                                    <div class="form-group row" id='yume-label'>
                                        <label class="col-sm-4 form-control-label">Name</label>
                                        <div class="col-sm-8">
                                           {!! Form::text("search",@$search['name'], ['class'=>'form-control', 'placeholder'=>''])!!}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer">
                            <div class="col-sm-5">
                                <button type="submit" name='is_search' value='1' class="btn btn-sm btn-warning"><i class="fa fa-ban"></i> SEARCH  </button>
                            </div>
                        </div>
                    </div>
                </div>
            {!! Form::close()!!}

            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <i class="fa fa-align-justify"></i> Page ( {{$data->total()}} )
                    </div>
                    <div class="card-block">
                        <table class="table table-sm" id="ym-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Create date</th>
                                    <th>Status</th>
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
                                            Create date : {{$list['created_at']}}<br />
                                            Update date: {{$list['updated_at']}}
                                        </td>
                                        <td>
                                            @if($list['status']=='1')
                                            <span class="badge badge-info"> Show  </span>
                                            @else
                                            <span class="badge badge-warning"> Hidden </span>
                                            @endif
                                        </td>
                                        <td>
                                            <a class="btn btn-sm btn-success" href="/admin/page/edit/{{$list['id']}}"><i class="fas fa-edit"></i> Edit</a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
