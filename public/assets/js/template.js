module.exports = {
    HTML:function(head_memberName){
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
            
            
                <li class='sidebar-title'>계정 관리</li>
            
      
                <li class="sidebar-item">
                    <a href="/main"  class='sidebar-link'>
                        <i data-feather="user" width="20"></i> 
                        <span>멤버 계정 관리</span>
                    </a>    
                </li>
            
                <li class="sidebar-item">
                    <a href="#" onclick="pagereload('TTS')" class='sidebar-link'>
                        <i data-feather="layers" width="20"></i> 
                        <span>TTS 계정관리</span>
                    </a>
                     
                </li>

                <li class='sidebar-title'>음원 관리</li>
            
      
                <li class="sidebar-item">
                    <a href="javascript:channelList()" onclick="pagereload('update')" class='sidebar-link'>
                    <i data-feather="file-plus" width="20"></i> 
                        <span>채널 업데이트 Log</span>
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
            
<div id="bodycontents"class="main-content container-fluid">
<div class="page-title">
<h3>멤버 계정 관리</h3>
<p class="text-subtitle text-muted">멤버 계정 조회</p>
</div>
<section class="section">
<div class="row mb-4">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="card-title"></h4>
                <div class="d-flex ">
                    <input id="stora" type="text" placeholder="업체명,매장명,ID" onkeypress="enter_test2()" >
                    <input id="stora2"type="button" class="btn  btn-outline-warning waves-effect" onclick="member_tableCreate()" value="검색">
                </div>
              
            </div>
            <table class="table table-bordered table-striped mb-0" id="table2">
                    <thead>
                        <tr>
                            <th id="mid3">MID</th>
                            <th id="name3">업체명</th>
                            <th id="member_name3">매장명</th>
                            <th id="id3">아이디</th>
                            <th id="version3">버전</th>
                            <th id="recentLog3">최근로그인</th>
                            <th id="src3">신탁/비신탁</th>
                            <th id="hardSerial3">하드시리얼<br id="br1">초기화</th>
                            <th id="chpwd3">비밀번호<br id="br2">변경</th>
                            <th id="g3">자세히</th>
                        </tr>
                    </thead>
                </table>
            <div class="card-body px-0 pb-0 table-wrapper-scroll-y my-custom-scrollbar">
                <div class="table-responsive">
                    <table class="table table-striped mb-0" id="table1">
                        
                        <tbody id="dynamicTbody">
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
</div>
</section>
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