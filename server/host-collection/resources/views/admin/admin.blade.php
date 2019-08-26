<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Admin Control</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">

    <meta name="csrf-token" content="{{ csrf_token() }}">
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

    <link href="{{asset('frontend/fontawesome_5.6.1/css/all.min.css')}}" rel="stylesheet" media="screen">
    <script src="{{asset('frontend/admin/vendor/jquery/jquery-1.11.2.min.js')}}"></script>
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
        
    <!--js main-->
    
    <script src="{{asset('frontend/admin/js/admin_scripts.js')}}"></script>

  </head>
  <body>
    @include("admin.master.side")
    <div class="page">
      @include("admin.master.header")
      @yield('content')
      @include("admin.master.footer")
    </div>

    <script src="{{asset('frontend/admin/vendor/popper.js/umd/popper.min.js')}}"> </script>
    <script src="{{asset('frontend/admin/vendor/bootstrap/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('frontend/admin/js/grasp_mobile_progress_circle-1.0.0.min.js')}}"></script>
    <script src="{{asset('frontend/admin/vendor/jquery.cookie/jquery.cookie.js')}}"> </script>
    <script src="{{asset('frontend/admin/vendor/chart.js/Chart.min.js')}}"></script>
    <script src="{{asset('frontend/admin/vendor/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('frontend/admin/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js')}}"></script>
    <script src="{{asset('frontend/admin/js/charts-home.js')}}"></script>
    <!-- Main File-->
    <script src="{{asset('frontend/admin/js/front.js')}}"></script>
  </body>
</html>