<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>HOST COLLECTION</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="{{asset('frontend/admin/vendor/bootstrap/css/bootstrap.min.css')}}">
    <!-- Font Awesome CSS-->
    <link rel="stylesheet" href="{{asset('frontend/admin/vendor/font-awesome/css/font-awesome.min.css')}}">
    <!-- Fontastic Custom icon font-->
    <link rel="stylesheet" href="{{asset('frontend/admin/css/fontastic.css')}}">
    <!-- Google fonts - Roboto -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <!-- jQuery Circle-->
    <link rel="stylesheet" href="{{asset('frontend/admin/css/grasp_mobile_progress_circle-1.0.0.min.css')}}">
    <!-- Custom Scrollbar-->
    <link rel="stylesheet" href="{{asset('frontend/admin/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css')}}">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="{{asset('frontend/admin/css/style.default.css')}}" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="{{asset('frontend/admin/css/custom.css')}}">
    <!-- Favicon-->
    <link rel="shortcut icon" href="{{asset('frontend/admin/img/favicon.ico')}}">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
  </head>
  <body>
    <div class="page login-page">
      <div class="container">
        <div class="form-outer text-center d-flex align-items-center">
          <div class="form-inner">
            <div class="logo text-uppercase"><span>HOST</span><strong class="text-primary">COLLECTION</strong></div>
            <p></p>

            @if(count($errors)>0)
                <div class='alert alert-danger'>
                        <ul>
                        @foreach($errors->all() as $error)
                            <li>
                                {{$error}}
                            </li>
                        @endforeach
                    </ul>
                </div>
            @endif
                 
            {!! Form::open(['method'=>'post', 'class'=>'text-left form-validate'])!!}       
                <div class="form-group-material">
                    <input id="login-username" type="text" name="username" required data-msg="Please enter your username" class="input-material">
                    <label for="login-username" class="label-material">Username</label>
                </div>
                <div class="form-group-material">
                    <input id="login-password" type="password" name="password" required data-msg="Please enter your password" class="input-material">
                    <label for="login-password" class="label-material">Password</label>
                </div>
                <div class="form-group text-center">

                    <button type="submit" class="btn btn-primary px-4">Login</button>
                <!-- This should be submit button but I replaced it with <a> for demo purposes-->
                </div>
            {!! Form::close()!!}
            <a href="#" class="forgot-pass">Forgot Password?</a>
          </div>
          <div class="copyrights text-center">
            <p>Design by <a href="https://bootstrapious.com/p/bootstrap-4-dashboard" class="external">Host collection</a></p>
            <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
          </div>
        </div>
      </div>
    </div>
    <!-- JavaScript files-->
    <script src="{{asset('frontend/admin/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('frontend/admin/vendor/popper.js/umd/popper.min.js')}}"> </script>
    <script src="{{asset('frontend/admin/vendor/bootstrap/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('frontend/admin/js/grasp_mobile_progress_circle-1.0.0.min.js')}}"></script>
    <script src="{{asset('frontend/admin/vendor/jquery.cookie/jquery.cookie.js')}}"> </script>
    <script src="{{asset('frontend/admin/vendor/chart.js/Chart.min.js')}}"></script>
    <script src="{{asset('frontend/admin/vendor/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('frontend/admin/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js')}}"></script>
    <!-- Main File-->
    <script src="{{asset('frontend/admin/js/front.js')}}"></script>
  </body>
</html>