@extends("admin.admin")
@section("content")
	<!-- Breadcrumb-->
	<div class="breadcrumb-holder">
        <div class="container-fluid">
            <ul class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Slideshow</a></li>
                <li class="breadcrumb-item active">Thay đổi slideshow</li>
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
	{!! Form::open(["method"=>"post", 'files'=>true, 'form-control'=>'horizontal'])!!}
		<section class="forms">
			<div class="container-fluid">
				<header>
					<h1 class="h3 display">Thay đổi slideshow</h1>
				</header>
				<div class="row">
					<div class="col-sm-12">
						<div class="card">
							<div class="card-header">
								<h4>Thông tin</h4>
							</div>
							<div class="card-body">
								<div class="form-group row" id="yume-label">
									<label class="col-sm-2 form-control-label"> Tên slideshow </label>
									<div class="col-sm-10">
										{!! Form::text("name", @$data['name'], ['class'=>'form-control'])!!}
									</div>
								</div>

								<div class="form-group row" id="yume-label">
									<label class="col-sm-2"> Links </label>
									<div class="col-sm-10">
										{!! Form::text('links', @$data['links'], ['class'=>'form-control'])!!}
									</div>
								</div>

								<div class="form-group row" id="yume-label">
									<label class="col-sm-2"> Sắp xếp </label>
									<div class="col-sm-10">
										{!! Form::text('orderby', @$data['orderby'], ['class'=>'form-control'])!!}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-12">
						<div class="card">
							<div class="card-header">
								<h4>Tùy chọn</h4>
							</div>
							<div class="card-body">
								<div class="form-group row" id="yume-label">
									<label class="col-sm-2"> Hình ảnh</label>
									<div class="col-sm-10">
										{!! Form::file('picture', ['class'=>'form-control inputfile', 'id'=>'fileInput', 'accept'=>'image/*']) !!}
									</div>
									<div class="image-wrapper">
										<img src="/upload/slideshow/{{$data['picture']}}">
									</div>
								</div>

								<div class="form-group row" id="yume-label">
									<label class="col-sm-2"> Tình trạng</label>
									<div class="col-sm-10">
										<div class="radio">
											<label>
												{!! Form::radio('status', '1', (($data['status']=='1')? true : false)) !!} Hiển thị
											</label>
										</div>
										<div class="radio">
											<label>
												{!! Form::radio('status', '2', (($data['status']=='2')? true : false)) !!} Ẩn
											</label>
										</div>
									</div>
								</div>
							</div>
							<div class="card-footer">
								<input type="hidden" name="_token" value="<?php echo csrf_token();?>">
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
