$(document).ready(function(){  
    var width = window.outerWidth;
        if (width <= 450) {
        $('#sidebar').attr('class','');
        }else if(width>=450){
        $('#sidebar').attr('class','active');
        }
    
    $(window).resize(function (){
        
        })
    });

function pagereload(id){
    $("#bodycontents").load(`./assets/js/side_menu/${id}.html`);
    var width = window.outerWidth;
    if (width <= 450) {
        var sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('active')) sidebar.classList.remove('active');
    }
}
/*
$(function(){
    var cat = localStorage.getItem('key1')
    $("div #duck1").html('Welcome. '+cat);})*/
     
// function login(){
//     // var ID = x
//     // var pw = y
//     var ID = document.getElementsByClassName('form-control')[0].value
//     var pw = document.getElementsByClassName('form-control')[1].value

//     const data = { reg_user: ID, reg_pw: pw };

//     fetch('http://api.wantreez.com/a/v1/backoffice/login', { //http://webapi.rhymeduck.com/a/v1/backoffice/login
//     method: 'POST', // or 'PUT'
//     headers: {
       
//         'Content-Type': 'application/json',
     
//     },
    
//     body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(data => {
    
//     if(data.result.ret === 'success'){
//         localStorage.setItem("key1", data.data.member_info.name)
        
//         location.href="main"
        
       
         
        
//     }else if(data.result.ret === 'failure'){
//         if(data.result.msg === 'There are no required parameters'){
//             location.href="/";
//             alert('ID,PASSWORD를 입력해주세요.')
//         }else if(data.result.msg === 'can not find member info'){
//             location.href="/"
//             alert('조회된 계정이 없습니다.')
//     }else{
//         location.href="/"
//         alert('DB에러 입니다.')
//     }
//     }
//     });
// }

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

var count1 =''
function TTStableCreate(){
    
    var storeName1 = document.getElementById('stora').value
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
       
        var html =''
        var len1 = data.data.member_list
        var len = len1.length-1
        var count1 = range(0,len)
        
        for(key in count1){
            // html += `<tr><th scope="row">${key}</th>`;
            // html += '<td>'+data.data.member_list[key].member_name+'</td>';
            html += '<tr><th scope="row">'+data.data.member_list[key].member_name+'</th>';
            html += '<td >'+data.data.member_list[key].member_info+'</td>';
            html += `<td><div class="text-center"><input  id="lbs2" onclick="reset_pwdCount('${data.data.member_list[key].member_info}')" class="btn btn-primary" type="button" value="초기화"></div></td>`;
            html += `<td>
            <div class="modal fade" id="modalLoginForm`+ key +`" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h4 class="modal-title w-100 font-weight-bold">Password change</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body mx-3">
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
                  <button id="chPw`+`${key}" onclick="reset_pwd3('${data.data.member_list[key].member_info}','PwId`+`${key}','PwId_confirm`+`${key}')" class="btn btn-outline-primary btn-rounded waves-effect">change</button>
                </div>
              </div>
            </div>
          </div>
          <div style="width=5%">
          <div  class="text-center">
            <a href=""  id="lbs3" class="btn btn-primary" role="button" data-toggle="modal" data-target="#modalLoginForm`+key+`">변경</a>
          </div>
          </div>`
          ;html += '</tr>';
        }
        $("#dynamicTbody").empty();
        $("#dynamicTbody").append(html);
        })
    } 
};

function member_tableCreate(){
    
    var storeName1 = document.getElementById('stora').value
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
            console.log(data.data)
        var html =''
        var len = data.data.member_list.length-1
        var count1 = range(0,len)
        for(key in count1){

            html += '<tr><th id="mid2" scope="row">'+data.data.member_list[key].member_id+'</th>';
            html += '<td >'+data.data.member_list[key].name+'</td>';
            var memName = data.data.member_list[key].member_info
            // if (memName.length > 7){
            //     var memName = memName.substr(0,7) + '<br>'+memName.substr(5)
            // }
            html += '<td >'+memName+'</td>';
            html += '<td >'+data.data.member_list[key].id+'</td>';
            html += '<td id="version2">'+data.data.member_list[key].version+'</td>';
            if(data.data.member_list[key].recentlogin === null){
                html += '<td id="recentLog2">'+''+'</td>';
            }else{
                html += '<td id="recentLog2">'+moment(data.data.member_list[key].recentlogin).format("MMMM Do YYYY, h:mm:ss a")+'</td>';
            }
            html += '<td id="src2" >'+data.data.member_list[key].music_src+'</td>';
            html += `<td><div class="text-center"><input  id="lbs2" onclick="reset_hardSerial('${data.data.member_list[key].member_info}')" class="btn btn-primary" type="button" value="초기화"></div></td>`;
            html += `<td>
            <div class="modal fade" id="modalLoginForm`+ key +`" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header text-center">
                  <h4 class="modal-title w-100 font-weight-bold">Password change</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body mx-3">
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
                  <button id="chPw`+`${key}" onclick="reset_pwd2('${data.data.member_list[key].member_info}','PwId`+`${key}','PwId_confirm`+`${key}')" class="btn btn-outline-primary btn-rounded waves-effect">change</button>
                </div>
              </div>
            </div>
          </div>
          <div style="width=5%">
          <div  class="text-center">
            <a href=""  id="lbs3" class="btn btn-primary" role="button" data-toggle="modal" data-target="#modalLoginForm`+key+`">변경</a>
          </div>
          </div></td>`
            if(data.data.member_list[key].recentlogin === null){
                data.data.member_list[key].recentlogin =''
            }
            html += `<td >
            <div class="modal fade" id="exampleModalCenter${key}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">

            <!-- Add .modal-dialog-centered to .modal-dialog to vertically center the modal -->
            <div class="modal-dialog modal-dialog-centered" role="document">


                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">세부사항</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div id="detail${key}" class="modal-body">
                    <div id="mid1">-MID: ${data.data.member_list[key].member_id}<br></div>
                    <div id="version1">-버전: ${data.data.member_list[key].version}<br></div>
                    <div id="recentLog1">-최근로그인: ${moment(data.data.member_list[key].recentlogin).format("MMMM Do YYYY, h:mm:ss a")}<br></div>
                    <div id="src1">-신탁/비신탁: ${data.data.member_list[key].music_src}<br></div>
                    <div>-계약상태: ${data.data.member_list[key].contract_state}</div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            <button type="button"  id="lbs4"class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter${key}">
            기타
            </button>
            </td>`;

          ;html += '</tr>';
        }
        $("#dynamicTbody").empty();
        $("#dynamicTbody").append(html);
        })
    } 
};

function range(start, end) {
 
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

function reset_pwd2(member_info, pwId,pwId_confirm){
    var member_Id = member_info
    var pwdId = pwId
    var pwdId_confirm = pwId_confirm
    var password = document.getElementById(pwdId).value
    var password1 = document.getElementById(pwdId_confirm).value
    console.log(member_Id)
    console.log(password, password1)

    if(password1 === '' || password===''){
        alert('비밀번호를 입력해주세요.')
    }else if(password !== password1){
        alert('비밀번호를 확인해주세요.')
    }else{
        const data = { member_info: member_Id, member_pw: password };

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
                location.href='main'
                alert('성공입니다.')
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
                location.href='main'
                alert('성공입니다.')
            }else{
                alert('다시 시도해주세요')
            }
        });
    }
}

function reset_hardSerial(member_info){
    const data = { member_info: member_info };
    
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
// jQuery(function($){
// 	$("#foo-table").DataTable({
// 		"dom": 'iptfl'
// 	});
// });