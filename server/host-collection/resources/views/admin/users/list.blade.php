@extends('admin.admin')
@section('content')
	<!-- Breadcrumb-->
    <div class="breadcrumb-holder">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">User</a></li>
                <li class="breadcrumb-item active">User list</li>
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
    <section class="forms">
        <div class="container-fluid">
            <header>
                <h1 class="h3 display">User list</h1>
            </header>
            {!! Form::open(["method"=>"post"])!!}
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <strong>Search information</strong>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group row" id='yume-label'>
                                        <label class="col-sm-4 form-control-label">Full Name</label>
                                        <div class="col-sm-8">
                                           {!! Form::text("name",@$search['name'], ['class'=>'form-control', 'placeholder'=>''])!!}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group row" id='yume-label'>
                                        <label class="col-sm-4 form-control-label">Phone</label>
                                        <div class="col-sm-8">
                                           {!! Form::text("phone", @$search['phone'], ['class'=>'form-control', 'placeholder'=>''])!!}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group row" id='yume-label'>
                                        <label class="col-sm-4 form-control-label">User name</label>
                                        <div class="col-sm-8">
                                           {!! Form::text("username", @$search['username'], ['class'=>'form-control', 'placeholder'=>''])!!}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group row" id='yume-label'>
                                        <label class="col-sm-4 form-control-label">Email</label>
                                        <div class="col-sm-8">
                                           {!! Form::text("email", @$search['email'], ['class'=>'form-control', 'placeholder'=>''])!!}
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
                        <i class="fa fa-align-justify"></i> User ( {{$data->total()}} )
                    </div>
                    <div class="card-block">
                        <table class="table table-sm" id="ym-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>General information</th>
                                    <th>Create time</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($data as $list)
                                    <tr>
                                        <td>{{$list['id']}}</td>
                                        <td>
                                            Email : <strong>{{$list['email']}}</strong><br/>
                                            Phone : <strong>{{$list['phone']}}</strong><br />
                                            User name : <strong>{{$list['username']}}</strong><br/>
                                            Full name : <strong>{{$list['name']}}</strong>
                                        </td>
                                        <td>
                                            Create time  : {{$list['created_at']}}<br />
                                            Update time: {{$list['updated_at']}}
                                        </td>
                                        <td>
                                            <div class="badge badge-warning"> {{$list->RoleName()->name}}</div>
                                        </td>
                                        <td>
                                            @if($list['status']=='1')
                                            <a class="badge badge-info"> Show  </a>
                                            @else
                                            <div class="badge badge-warning"> Hidden</div>
                                            @endif
                                        </td>

                                        <td>
                                            <input type='hidden' name='_token' value='{{ csrf_token()}}' />
                                            <a class="btn btn-sm btn-success" href="/admin/users/edit/{{$list['id']}}"><i class="fas fa-edit"></i> Edit</a>
                                            <a class="btn btn-sm btn-danger" onclick="return confirm('Are you sure delete this user?')" href="/admin/users/delete/{{$list['id']}}"><i class="far fa-trash-alt"></i> Delete </a></td>
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
