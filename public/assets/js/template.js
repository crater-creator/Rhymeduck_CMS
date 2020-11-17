module.exports = {
    HTML:function(head_memberName, display='none',display1="none", dis='none',display2='none',display3='none', display4='none'){
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main - Wantreez</title>
    
    <link rel="stylesheet" href="./assets/css/bootstrap.css">
    <link rel="stylesheet" href="./assets/css/mdb.min.css">
    <!-- <link rel="stylesheet" href="assets/css/mdb.min.css.map"> -->
    <link rel="stylesheet" href="./assets/vendors/chartjs/Chart.min.css">

    <link rel="stylesheet" href="./assets/vendors/perfect-scrollbar/perfect-scrollbar.css">
    <link rel="stylesheet" href="./assets/css/app.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <!-- <link rel="shortcut icon" href="assets/images/favicon.svg" type="image/x-icon"> -->
    <link rel="stylesheet" type="text/css" href="./assets/DataTables/datatables.min.css"/>
    <style>
        @media(max-width: 500px){
        #lbs9{display: block;}

        }
    </style>
</head>
<body>
<input type="hidden" id="hdnSession" data-value="@Request.RequestContext.HttpContext.Session['member_name']" />
    <div id="app" >
        <div id="sidebar" class=''>
            <div class="sidebar-wrapper ">
    <div id="sidebar-headbox" class="sidebar-header">
        <img src="./assets/images/gold_full_medium.png" alt="" srcset="">
    </div>
    <div class="sidebar-menu">
        <ul class="menu">
            
            
                <li class='sidebar-title'>회원 관리</li>
            
      
                <li  style="display:${display}" class="sidebar-item">
                    <a href="#"  onclick="pagereload('member')" class='sidebar-link'>
                        <i data-feather="user" width="20"></i> 
                        <span>라임덕 계정 관리</span>
                    </a>    
                </li>

                <li  style="display:${display1}" class="sidebar-item">
                    <a href="#"  onclick="pagereload('member_nodetail')" class='sidebar-link'>
                        <i data-feather="user" width="20"></i> 
                        <span>라임덕 계정 관리</span>
                    </a>    
                </li>
            
                <li style="display:${dis}" class="sidebar-item">
                    <a href="#" onclick="pagereload('TTS')" class='sidebar-link'>
                        <i data-feather="layers" width="20"></i> 
                        <span>TTS 계정관리</span>
                    </a>
                     
                </li>

                <li style="display:${display2}" class="sidebar-item">
                    <a href="#" onclick="pagereload('settop')" class='sidebar-link'>
                        <i data-feather="grid" width="20"></i> 
                        <span>셋톱 박스 관리</span>
                    </a>    
                </li>

                <li class='sidebar-title'>음원 관리</li>
            
      
                <li style="display:${display3}" class="sidebar-item">
                    <a href="javascript:channelList()" onclick="pagereload('update')" class='sidebar-link'>
                        <i data-feather="file-plus" width="20"></i> 
                        <span>채널 업데이트 Log</span>
                    </a>    
                </li>

                <li style="display:${display4}" class="sidebar-item">
                    <a href="javascript:unsafeList()" onclick="pagereload('unsafe')" class='sidebar-link'>
                        <i data-feather="file-plus" width="20"></i> 
                        <span>UNSAFE 리스트</span>
                    </a>    
                </li>

                


        </ul>
    </div>
    <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
</div>
        </div>
        <div id="main">
            <nav style="background-color: rgb(185, 153, 65);" class="navbar navbar-header navbar-expand navbar-light">
                <p class="header_title">라임덕 CMS</p>
                <a class="sidebar-toggler" href="#"><span id="lbs9" class="navbar-toggler-icon"></span></a>
                <button class="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav d-flex align-items-center navbar-light ml-auto">
                        <div class="avatar mr-1">
                            <div id="duck1" style="margin: 10px 10px 0 0; color: white;">Welcome. ${head_memberName}</div>
                            <form action="/logout" method="get">
                            <input type="submit" class="btn btn-warning btn-rounded waves-effect" value="Logout" >
                            </form>
                        </div>
                    </ul>
                </div>
            </nav>
            
            <div  id="bodycontents" class="main-content container-fluid">

                <div  class="auth1" >
                    <div  class="container text-center pt-32">
                        <div style="margin-top:10%">
                        <span id="mainHome">Wantreez Music</span><br>
                        <span id="mainHome1">WORLD'S BEST B2B MUSIC SERVICE</span> 
                        </div>
                    </div>
                </div>
                

            </div>

            <footer>
                
                <div class="footer clearfix mb-0 text-muted">
                    <div class="float-left">
                        <p>2020 &copy; wantreez</p>
                    </div>
                    
                </div>
            </footer>
        </div>
    </div>
    
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="./assets/js/feather-icons/feather.min.js"></script>
<script src="./assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
<script src="./assets/js/app.js"></script>
<script src="./assets/js/index.js"></script>
<script src="./assets/js/mdb.min.js"></script>
<!-- <script src="assets/js/mdb.min.js.map"></script> -->

<script src="./assets/vendors/chartjs/Chart.min.js"></script>
<script src="./assets/vendors/apexcharts/apexcharts.min.js"></script>
<!-- <script src="assets/js/pages/dashboard.js"></script> -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="./assets/js/main.js"></script>
<script type="text/javascript" src="./assets/DataTables/datatables.min.js"></script>
</body>
</html>
`
    }
}