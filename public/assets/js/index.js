
$(document).ready(function(){  
    var width = window.outerWidth;
        if (width <= 450) {
            $('#sidebar').attr('class','');
            $('#member_name3').css('display','none');
            $('#set2').css('class', 'md-3');
            
        }else if(width>=450){
            $('#sidebar').attr('class','active');
        }
    });

function pagereload(id){
    $("#bodycontents").load(`./assets/js/side_menu/${id}.html`);
    var width = window.outerWidth;
    if (width <= 450) {
        var sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('active')) sidebar.classList.remove('active');
    }
}

function logout(){
    location.href='/'
}

function register1(){
    location.href='register'
}

function register(){
    var name = document.getElementsByClassName('form-control')[0].value
    var ID = document.getElementsByClassName('form-control')[1].value
    var pw = document.getElementsByClassName('form-control')[2].value
    var pw1 = document.getElementsByClassName('form-control')[3].value
    const data = { reg_user: ID, reg_pw: pw, name: name };
    fetch('http://webapi.rhymeduck.com/a/v1/backoffice/join', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    if(data.result.ret === 'success'){
        location.href='/'
        alert('회원가입에 성공하였습니다.')
    }else if(pw !== pw1){
        location.href='register'
        alert('비밀번호가 다릅니다.')
    }else{
        location.href='register'
        alert('회원가입에 실패하였습니다.')
    }
    });
}

function enter_test(){
    if(window.event.keyCode ==13){
        chk.click()
    }
}

function enter_test1(){
    if(window.event.keyCode ==13){
        chk1.click()
    }
}

function enter_test2(){
    if(window.event.keyCode ==13){
        stora2.click()
    }
}

function enter_test3(){
    if(window.event.keyCode ==13){
        stora3.click()
    }
}

function enter_test4(){
    if(window.event.keyCode ==13){
        settopSer1.click()
    }
}

var count1 =''
function settableCreate(){
    var settopName = document.getElementById('settopSer').value;
    if (settopName === ''){
        return alert("매장명을 입력해주세요")
    }else{
        var data = { word: settopName };}
        fetch('http://webapi.rhymeduck.com/a/v1/member/stb_search',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data =>{
            
            if(data.result.ret ==='failure'){
                alert('검색결과가 없습니다.')
            }else{
                var html=''
                var len = data.data.member_list.length-1;
                var count1 = range(0,len);
                var width = window.outerWidth;
                for(key in count1){
                    html += '<tr><th id="setmId" class="col-md-1">'+data.data.member_list[key].member_id+'</th>';
                    if (width <= 450) {
                        
                        if(data.data.member_list[key].member_info.substr(8)===''){
                            html += '<td class="col-6 col-md-2">' +data.data.member_list[key].name+'<br>'+data.data.member_list[key].member_info+'</td>';
                        }else{
                            html += '<td class="col-6 col-md-2">' +data.data.member_list[key].name+'<br>'+data.data.member_list[key].member_info.substr(0,8)+'<br>'+data.data.member_list[key].member_info.substr(8)+'</td>';
                        }

                    }else if(width>=450){
                        html += '<td class="col-md-2">'+ data.data.member_list[key].name+'</td>';
                        html += '<td class="col-md-2">'+ data.data.member_list[key].member_info+'</td>';
                    }
                    html += '<td id="setId" class="col-md-2"><span id="xx7">x</span>'+ data.data.member_list[key].id+'</td>';
                    html += '<td id="setVr" class="col-md-1"><span id="xx5">x</span>'+ data.data.member_list[key].version+'</td>';
                    if(data.data.member_list[key].recentlogin === null){
                        html += '<td id="setrelog" class="col-md-2">'+''+'</td>';
                    }else{
                        html += '<td id="setrelog1" class="col-8 col-md-2"><span id="xx6">x</span>'+moment(data.data.member_list[key].recentlogin).format("YYYY-MM-DD HH:mm:ss")+'</td>';
                    }
                    html += `<td class="col-4 col-md-2"><div class="text-center"><input  onclick="settop_reset('${data.data.member_list[key].member_id}')" id="lbs2" class="btn" type="button" value="리셋"></div></td>`;
                }
                $("#dynamicTbody1").empty();
                $("#dynamicTbody1").append(html);
            }
        })
}

function TTStableCreate(){
    var storeName1 = document.getElementById('stora1').value;
    if (storeName1 === ''){
        return alert("매장명을 입력해주세요")
    }else{
        const data = { word: storeName1 };
        fetch('http://webapi.rhymeduck.com/a/v1/soundfier/search', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        if(data.data.member_list ===undefined){
            alert('검색결과가 없습니다.')
        }else{
        var html1='';
        var html ='';
        var len1 = data.data.member_list;
        var len = len1.length-1;
        var count1 = range(0,len);
        var width = window.outerWidth;
        for(key in count1){
            var memname1 = data.data.member_list[key].member_name
            
            if (width <= 450) {
                if (memname1.substr(6)===''){
                    html += '<tr><th scope="row">'+ memname1+'</th>';
                }else{
                    html += '<tr><th scope="row">'+ memname1.substr(0,6)+'<br>'+memname1.substr(6)+'</th>';
                }}
                else if(width>=450){
                    html += '<tr><th scope="row">'+ memname1+'</th>';
                }
            html += '<td >'+data.data.member_list[key].member_info+'</td>';
            html += `<td><div class="text-center"><input  id="lbs2" onclick="reset_pwdCount('${data.data.member_list[key].member_info}')" class="btn" type="button" value="초기화"></div></td>`;
            html += `<td>
            <div style="width=5%">
            <div  class="text-center">
                <a href="#" id="lbs3" class="btn" role="button" data-toggle="modal" data-target="#modalLoginForm${key}">변경</a>
            </div>
            </div>`
            ;html += '</tr>';

            html1 +=`<div>
            <div class="modal fade" id="modalLoginForm`+ key +`" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                        <div style="z-index:999" class="modal-content">
                            <div class="modal-header text-center">
                            <h4 class="modal-title w-100 font-weight-bold">Password change</h4>
                            <button id="outy" type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span  aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body mx-3">
                            <div class="md-form mb-5">
                                <i class="fas fa-lock prefix grey-text"></i><br>
                            </div>
                            <div style="margin-top:-60px" class="md-form mb-4">
                                <i class="fas fa-lock prefix grey-text"></i>
                                
                                <form>
                                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>
                                    <input type="password"  id="PwId`+`${key}" name="defaultForm-pass" class="form-control validate">
                                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Password confirm</label>
                                    <input onkeypress="if(window.event.keyCode ==13){chPw`+`${key}.click()}" type="password" id="PwId_confirm`+`${key}" name="defaultForm-pass" class="form-control validate">
                                </form>
                                </div>
                    
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                            <button id="chPw`+`${key}"  onclick="reset_pwd3('${data.data.member_list[key].member_info}','PwId`+`${key}','PwId_confirm`+`${key}')" class="btn btn-outline-primary btn-rounded waves-effect">change</button>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>`;
        }}
        $("#dynamicTbody").empty();
        $("#dynamicTbody").append(html);

        $("#dynamicModal").empty();
        $("#dynamicModal").append(html1);
        })
    } 
};

function member_tableCreate(){
    var storeName1 = document.getElementById('stora').value;
    if (storeName1 === ''){
        return alert("검색어를 입력해주세요")
    }else{
        const data = { word: storeName1 };
        fetch('http://webapi.rhymeduck.com/a/v1/member/search', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        if (data.result.ret ==='failure'){
            alert('검색결과가 없습니다.')
        }else{
        var html1='';
        var html ='';
        var len = data.data.member_list.length-1;
        var count1 = range(0,len);
        for(key in count1){
            var width = window.outerWidth;
            var meminfo = data.data.member_list[key].member_info;
            var memname = data.data.member_list[key].name;
            var memid = data.data.member_list[key].id;
            var memver = data.data.member_list[key].version;
            var memrecentLog = data.data.member_list[key].recentlogin;
            var memid1 = data.data.member_list[key].member_id;
            var memsrc = data.data.member_list[key].music_src;
            var memContr = data.data.member_list[key].contract_state;
            if(memContr === 1){
                memContr='계약중'
            }else{
                memContr='계약만료'
            }
            html += '<tr><th id="mid2" scope="row">'+memid1+'</th>';
            if (width <= 450) {
                
                if(meminfo.substr(8)===''){
                    html += '<td >'+memname+'<br>'+meminfo+'</td>';
                }else{
                    html += '<td >'+memname+'<br>'+meminfo.substr(0,8)+'<br>'+meminfo.substr(8,16)+'<br>'+meminfo.substr(16)+'</td>';
                }
            }else if(width>=450){
                html += '<td >'+memname+'</td>';
                html += '<td >'+meminfo+'</td>';
            }

            html += '<td ><span id="xx4">x</span>'+memid+'</td>';
            html += '<td id="version2"><span id="xx2">x</span>'+memver+'</td>';
            if(memrecentLog === null){
                html += '<td id="recentLog2">'+''+'</td>';
            }else{
                html += '<td id="recentLog2"><span id="xx3">xx</span>'+moment(memrecentLog).format("YYYY-MM-DD HH:mm:ss")+'</td>';
            }
            html += '<td id="src2" ><span id="xx1">xx</span>'+memsrc+'</td>';
            html += `<td id="mobile_hdsr"><div class="text-center"><input  id="lbs2" onclick="reset_hardSerial('${memid1}')" class="btn btn-primary center-block" type="button" value="초기화"></div></td>`;
            html += `<td id="mobile_hdsr1">
            <div class="modal fade" id="modalLoginForm`+ key +`" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h4 class="modal-title w-100 font-weight-bold">Password change</h4>
                  <button id="outy" type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span  aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div  class="modal-body mx-3">
                  <div class="md-form mb-5">
                    <i class="fas fa-lock prefix grey-text"></i><br>
                  </div>
                  <div style="margin-top:-60px" class="md-form mb-4">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>
                    <input type="password"  id="PwId`+`${key}" name="defaultForm-pass" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Password confirm</label>
                    <input onkeypress="if(window.event.keyCode ==13){chPw`+`${key}.click()}" type="password" id="PwId_confirm`+`${key}" name="defaultForm-pass" class="form-control validate">
                  </div>
          
                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button id="chPw`+`${key}" onclick="reset_pwd2('${memid1}','PwId`+`${key}','PwId_confirm`+`${key}')" class="btn btn-outline-primary btn-rounded waves-effect">change</button>
                </div>
              </div>
            </div>
            </div>
            <div style="width=5%">
            <div  class="text-center">
                <a href=""  id="lbs3" class="btn btn-primary" role="button" data-toggle="modal" data-target="#modalLoginForm`+key+`">변경</a>
            </div>
            </div></td>`;
            if(memrecentLog === null){
                memrecentLog =''
            }
            html += `<td >
            <div>
                <button type="button" id="lbs4" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter${key}">
                자세히
                </button>
            </div>`;

            ;html += '</tr>';

            html1 += `<div>
            <div  class="modal fade" id="exampleModalCenter${key}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                    <div style="z-index:998; " class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">세부사항</h5>
                            
                        </div>
                        <div id="detail${key}"  class="modal-body">
                            <div style="font-size:12pt">-MID: ${memid1}<br></div>
                            <div style="font-size:12pt">-업체명: ${meminfo}<br></div>
                            <div style="font-size:12pt">-매장명: ${memname}<br></div>
                            <div style="font-size:12pt">-아이디: ${memid}<br></div>
                            <div style="font-size:12pt">-버전: ${memver}<br></div>
                            <div style="font-size:12pt">-최근로그인: ${moment(memrecentLog).format("YYYY-MM-DD HH:mm:ss")}<br></div>
                            <div style="font-size:12pt">-신탁/비신탁: ${memsrc}<br></div>
                            <div style="font-size:12pt">-계약상태: ${ memContr}</div>
                            <div id="cmTab"style="font-size:12pt">-안드로이드 CM_TAB 부여
                                <button onclick="cmApply('${memid1}')" id="modalIn2"  class="btn btn-primary btn-sm">적용</button></div>
                            <div id="hds1"style="font-size:12pt; margin-top:5px;">-하드시리얼 초기화
                                <button onclick="reset_hardSerial('${memid1}')" id="modalIn"  class="btn btn-primary btn-sm">적용</button></div>
                            <div id="pwc1"style="position:relative; font-size:12pt">-비밀번호 변경<span style="font-size:10pt;">(미입력시'12345'로 변경)</span>
                                <input style="position:absolute; top:97%; right:62%" id="mpw1`+`${key}" class="moDdal1"  type="password">
                                <input style="position:absolute; top:97%; right:25%" id="mpw2`+`${key}" class="moDdal1"  type="password">
                                <button id="modalIn1" onclick="reset_pwd2('${memid1}','mpw1`+`${key}','mpw2`+`${key}')"  class="btn btn-primary btn-sm">변경</button>
                            </div>
                            
                        </div>
                        <div id="detailBox" > 
                            <div class="modal-body">
                                <div class="modal-body mx-3" style="margin-top:-30px;"></div>
                            </div> 
                            </div>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
            </div>
            </div>`;
        }
        $("#dynamicTbody").empty();
        $("#dynamicTbody").append(html);
        
        $("#dynamicModal").empty();
        $("#dynamicModal").append(html1);

    } })
    } 
};

function member_tableCreate1(){
    var storeName1 = document.getElementById('stora').value;
    if (storeName1 === ''){
        return alert("검색어를 입력해주세요")
    }else{
        const data = { word: storeName1 };
        fetch('http://webapi.rhymeduck.com/a/v1/member/search', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        if (data.result.ret ==='failure'){
            alert('검색결과가 없습니다.')
        }else{
        var html1='';
        var html ='';
        var len = data.data.member_list.length-1;
        var count1 = range(0,len);
        for(key in count1){
            var width = window.outerWidth;
            var meminfo = data.data.member_list[key].member_info;
            var memname = data.data.member_list[key].name;
            var memid = data.data.member_list[key].id;
            var memver = data.data.member_list[key].version;
            var memrecentLog = data.data.member_list[key].recentlogin;
            var memid1 = data.data.member_list[key].member_id;
            var memsrc = data.data.member_list[key].music_src;
            var memContr = data.data.member_list[key].contract_state;
            if(memContr === 1){
                memContr='계약중'
            }else{
                memContr='계약만료'
            }
            html += '<tr><th id="mid2" scope="row">'+memid1+'</th>';
            if (width <= 450) {
                
                if(meminfo.substr(8)===''){
                    html += '<td >'+memname+'<br>'+meminfo+'</td>';
                }else{
                    html += '<td >'+memname+'<br>'+meminfo.substr(0,8)+'<br>'+meminfo.substr(8,16)+'<br>'+meminfo.substr(16)+'</td>';
                }
            }else if(width>=450){
                html += '<td >'+memname+'</td>';
                html += '<td >'+meminfo+'</td>';
            }

            html += '<td ><span id="xx4">x</span>'+memid+'</td>';
            html += '<td id="version2"><span id="xx2">x</span>'+memver+'</td>';
            if(memrecentLog === null){
                html += '<td id="recentLog2">'+''+'</td>';
            }else{
                html += '<td id="recentLog2"><span id="xx3">xx</span>'+moment(memrecentLog).format("YYYY-MM-DD HH:mm:ss")+'</td>';
            }
            html += '<td id="src2" ><span id="xx1">xx</span>'+memsrc+'</td>';
            html += `<td id="mobile_hdsr"><div class="text-center"><input  id="lbs2" onclick="reset_hardSerial('${memid1}')" class="btn btn-primary center-block" type="button" value="초기화" disabled></div></td>`;
            html += `<td id="mobile_hdsr1">
            <div name="modalhide" class="modal fade" id="modalLoginForm`+ key +`" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h4 class="modal-title w-100 font-weight-bold">Password change</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div  class="modal-body mx-3">
                  <div class="md-form mb-5">
                    <i class="fas fa-lock prefix grey-text"></i><br>
                  </div>
                  <div id="nls" style="margin-top:-60px" class="md-form mb-4">
                    <i class="fas fa-lock prefix grey-text"></i>
                    
                    <label name="label1" data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>
                    <input type="password"  id="PwId`+`${key}" name="defaultForm-pass" class="form-control validate">
                    <label name="label2" data-error="wrong" data-success="right" for="defaultForm-pass">Password confirm</label>
                    <input onkeypress="if(window.event.keyCode ==13){chPw`+`${key}.click()}" type="password" id="PwId_confirm`+`${key}" name="defaultForm-pass" class="form-control validate">
                    
                </div>
          
                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button id="chPw`+`${key}" onclick="reset_pwd2('${memid1}','PwId`+`${key}','PwId_confirm`+`${key}')" class="btn btn-outline-primary btn-rounded waves-effect">change</button>
                </div>
              </div>
            </div>
            </div>
            <div style="width=5%">
            <div  class="text-center" disabled>
                

                <button type="button" id="lbs3" class="btn btn-primary" data-toggle="modal" data-target="#modalLoginForm`+key+`" disabled>
                변경
                </button>
            </div>
            </div></td>`;
            if(memrecentLog === null){
                memrecentLog =''
            }
            
            html += `<td >
            <div>
                <button type="button" id="lbs4" class="btn btn-primary  " data-toggle="modal" data-target="#exampleModalCenter${key}">
                자세히
                </button>
            </div>`;

            ;html += '</tr>';

            html1 += `<div>
            <div  class="modal fade" id="exampleModalCenter${key}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                    <div style="z-index:998; " class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">세부사항</h5>
                            
                        </div>
                        <div id="detail${key}"  class="modal-body">
                            <div style="font-size:12pt">-MID: ${memid1}<br></div>
                            <div style="font-size:12pt">-업체명: ${meminfo}<br></div>
                            <div style="font-size:12pt">-매장명: ${memname}<br></div>
                            <div style="font-size:12pt">-아이디: ${memid}<br></div>
                            <div style="font-size:12pt">-버전: ${memver}<br></div>
                            <div style="font-size:12pt">-최근로그인: ${moment(memrecentLog).format("YYYY-MM-DD HH:mm:ss")}<br></div>
                            <div style="font-size:12pt">-신탁/비신탁: ${memsrc}<br></div>
                            <div style="font-size:12pt">-계약상태: ${ memContr}</div>
                            <div id="cmTab"style="font-size:12pt">-안드로이드 CM_TAB 부여
                                <button onclick="cmApply('${memid1}')" id="modalIn2"  class="btn btn-primary btn-sm" disabled>적용</button></div>
                            <div id="hds1"style="font-size:12pt; margin-top:5px;">-하드시리얼 초기화
                                <button onclick="reset_hardSerial('${memid1}')" id="modalIn"  class="btn btn-primary btn-sm" disabled>적용</button></div>
                            <div id="pwc1"style="position:relative; font-size:12pt">-비밀번호 변경<span style="font-size:10pt;">(미입력시'12345'로 변경)</span>
                                <input style="position:absolute; top:97%; right:62%" id="mpw1`+`${key}" class="moDdal1"  type="password">
                                <input style="position:absolute; top:97%; right:25%" id="mpw2`+`${key}" class="moDdal1"  type="password">
                                <button id="modalIn1" onclick="reset_pwd2('${memid1}','mpw1`+`${key}','mpw2`+`${key}')"  class="btn btn-primary btn-sm" disabled>변경</button>
                            </div>
                            
                        </div>
                        <div id="detailBox" > 
                            <div class="modal-body">
                                <div class="modal-body mx-3" style="margin-top:-30px;"></div>
                            </div> 
                            </div>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
            </div>
            </div>`;
        }
        $("#dynamicTbody").empty();
        $("#dynamicTbody").append(html);
        
        $("#dynamicModal").empty();
        $("#dynamicModal").append(html1);

    } })
    } 
};

function cmApply(member_id){
    var data = {member_id : member_id}
    fetch ('http://webapi.rhymeduck.com/a/v1/member/changecmtab',{
        method: 'post',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response=>response.json())
    .then(data => {
        if(data.result.ret ==='success'){
            alert('CM_tab이 부여되었습니다.')
        }else{
            alert('error입니다.')
        }
    })
}

function range(start, end) {123456
    var arr = [];
    var length = end - start; 
    for (var i = 0; i <= length; i++) { 
        arr[i] = start;
        start++;
    }
    return arr;
}

function reset_pwdCount(count7){
    const data = { member_info: count7 };
    fetch('http://webapi.rhymeduck.com/a/v1/soundfier/initpw', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    if(data.result.ret === 'success'){
        alert("실패 회수가 초기화 되었습니다.")
    }else{
        alert("error입니다.")
    }
    });
}

function reset_pwd2(member_id, pwId, pwId_confirm){
    var member_Id = member_id
    var password = document.getElementById(pwId).value
    var password1 = document.getElementById(pwId_confirm).value

    if(password1 === '' && password===''){
        var data = {member_id: member_Id};
        fetch('http://webapi.rhymeduck.com/a/v1/member/changepw', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if ( data.result.ret === 'success'){
                alert('비밀번호가 12345로 변경되었습니다..')
            }else{
                alert('다시 시도해주세요')
            }
        });
    }else if(password !== password1){
        alert('비밀번호가 다릅니다.')
    }else if(password1 === '' || password===''){
        alert('비밀번호를 입력해주세요.')
    }else{
        var data = { member_id: member_Id, member_pw: password };
        fetch('http://webapi.rhymeduck.com/a/v1/member/changepw', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if ( data.result.ret === 'success'){ 
                var el = document.getElementById(pwId)
                var el1 = document.getElementById(pwId_confirm)
                el.value=''
                el1.value=''
                $('.modal.fade.show').modal('hide')
                $('.modal-backdrop').removeClass();

                alert('비밀번호가 변경되었습니다.')
                
            }else{
                alert('다시 시도해주세요')
            }
        });
    }
}

function reset_pwd3(member_info, pwId,pwId_confirm){
    var member_Id = member_info
    var pwdId = pwId
    var pwdId_confirm = pwId_confirm
    var password = document.getElementById(pwdId).value
    var password1 = document.getElementById(pwdId_confirm).value
    if(password1 === '' || password===''){
        alert('비밀번호를 입력해주세요.')
    }else if(password !== password1){
        alert('비밀번호를 확인해주세요.')
    }else{
        const data = { member_info: member_Id, member_pw: password };
        fetch('http://webapi.rhymeduck.com/a/v1/soundfier/changepw', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if ( data.result.ret === 'success'){
                var el = document.getElementById(pwdId)
                var el1 = document.getElementById(pwdId_confirm)
                el.value=''
                el1.value=''
                $('.modal.fade.show').modal('hide')
                $('.modal-backdrop').removeClass();
                alert('성공입니다.')
            }else{
                alert('다시 시도해주세요')
            }
        });
    }
}

function reset_hardSerial(member){
    const data = { member_id: member };
    fetch('http://webapi.rhymeduck.com/a/v1/member/inithdd', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    if(data.result.ret === 'success'){
        alert("하드 시리얼이 초기화 되었습니다.")
    }else{
        alert("error입니다.")
    }
    });
}

function newttsCreate(){
    var storename = document.getElementById('sName').value
    var id = document.getElementById('sId').value
    var password = document.getElementById('sPas').value
    var data = {member_info:id, member_name:storename, member_pw:password}
    fetch('http://webapi.rhymeduck.com/a/v1/soundfier/create', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    if(data.result.ret === 'success'){
        var el = document.getElementById('sName')
        var el1 = document.getElementById('sId')
        var el2 = document.getElementById('sPas')
        el.value=''
        el1.value=''
        el2.value=''
        $('.modal.fade.show').modal('hide')
        $('.modal-backdrop').removeClass();
        alert("계정이 생성되었습니다.")
    }else{
        alert("error입니다.")
    }
    });
}

function unsafeList(){
    
    data=[]
    fetch('http://webapi.rhymeduck.com/a/v1/unsafe/list', {
    method: 'POST', // or 'PUT'
    
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        var html =''
        var len1 = data.data.unsafe_list;
        var len = len1.length-1;
        var count = range(0,len);
        
        for(key in count){
            html += `<tr><th scopie='row'>${data.data.unsafe_list[key].catalogid}</th>`;
            html += `<td>${data.data.unsafe_list[key].title}</td>`;
            html += `<td>${data.data.unsafe_list[key].artist_name}</td>`
            html += `<td>${data.data.unsafe_list[key].refer}</td>`;;
            html += `<td><span style="visibility:hidden;">x</span>${moment(data.data.unsafe_list[key].reg_ts).format("YYYY-MM-DD HH:mm:ss")}</td>`;
            html += `<td><span style="visibility:hidden;">x</span>${data.data.unsafe_list[key].reason}</td></tr>`;
        }  
        $("#dynamicTbody3").empty();
        $("#dynamicTbody3").append(html);
        $("#xxxx").css('display','none')
    });
}

function downloadCSV(csv, filename){
    var csvFile;
    var downloadLink;
    

    csvFile = new Blob([csv], {type: "text/csv"})
    downloadLink = document.createElement("a")
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile)
    downloadLink.style.display= 'none'
    document.body.appendChild(downloadLink)
    downloadLink.click()

}

function getCSV(filename){
    var csv = []
    var rows = document.querySelectorAll('tbody >  tr')
    
    for(var i=0; i < rows.length; i++){
       var row =[] ,cols=rows[i].querySelectorAll('td, th')
            
           
        for (var j=0; j<cols.length; j++){
            row.push(cols[j].innerText)
            
        }
        
        csv.push(row.join(","))
    }
    csv.unshift('CATALOGID,TITLE,ARTIST NAME,REGER,REGISTER DATE,REASON')
    downloadCSV(csv.join("\n"), 'unsafelist.csv')
}

function channelList() {
	$.post('/get_ch_update_loglist', function (data) {
		loglist = data.toString().split(',');
		var context = '<span>';
		var cnt = 1;
		for(var i = loglist.length-1 ; i >= 0 ; i--) {
            context += `<a class="ch_update_loglist" href="javascript:read_ch_update_log('${i}')">`+loglist[i]+'</a></span><br><span>';
			cnt++;
		}
		$('#ch_update_log_list').html(context);		
	})
} 

function read_ch_update_log(i) {
	$.post('/read_ch_update_log', { file_path : loglist[i] }, function (data) {
		$('#ch_update_log_area').text(data);	
	})
}

function settop_reset(member_id) {
	if (confirm('실행하시겠습니까?'))
		$.post('/settop_reset', { member_id : member_id } ,function (data) {
			alert(data);
		})
}

function ent_reset(enterprise_id) {
	if (confirm('실행하시겠습니까?'))
		$.post('/settop_etp_reset', { enterprise_id : enterprise_id } ,function (data) {
			alert(data);
    	})
}

function ent_reset1(enterprise_id) {
	if (confirm('실행하시겠습니까?'))
		$.post('/settop_etp_reset1', { enterprise_id : enterprise_id } ,function (data) {
			alert(data);
    	})
}

