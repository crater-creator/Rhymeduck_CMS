
function pagereload(id){
    $("#bodycontents").load(`./assets/js/side_menu/${id}.html`);

}

$(function(){
    var cat = localStorage.getItem('key1')
    $("div #duck1").html('Welcome. '+cat);})

// $(document).ready(function(){              
//     $(window).resize(function (){
//         var width = window.outerWidth;
//         if (width <= 450) {
//         $('div #lbs9').html('<span class="navbar-toggler-icon"></span>');
//         }else if(width>=450){
//         $('div #lbs9').remove('<span class="navbar-toggler-icon"></span>');
//         }
//         })
//     });
        
function login(){
    
    var ID = document.getElementsByClassName('form-control')[0].value
    var pw = document.getElementsByClassName('form-control')[1].value

    const data = { reg_user: ID, reg_pw: pw };

    fetch('http://api.wantreez.com/a/v1/backoffice/login', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    if(data.result.ret === 'success'){
        localStorage.setItem("key1", data.data.member_info.name)
        location.href="main"
        
       
         
        
    }else if(data.result.ret === 'failure'){
        if(data.result.msg === 'There are no required parameters'){
            location.href="/";
            alert('ID,PASSWORD를 입력해주세요.')
        }else if(data.result.msg === 'can not find member info'){
            location.href="/"
            alert('조회된 계정이 없습니다.')
    }else{
        location.href="/"
        alert('DB에러 입니다.')
    }
    }
    });
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

    fetch('http://api.wantreez.com/a/v1/backoffice/join', {
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
function tableCreate(){
    
    var storeName1 = document.getElementById('stora').value
    if (storeName1 === ''){
        return alert("매장명을 입력해주세요")
    }else{
        const data = { word: storeName1 };
        
        
        fetch('http://api.wantreez.com/a/v1/soundfier/search', {
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
                    <input onkeypress="if(window.event.keyCode ==13){chPw`+`${key}.click()}" type="password" id="PwId2`+`${key}" name="defaultForm-pass" class="form-control validate">
                  </div>
          
                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button id="chPw`+`${key}" onclick="reset_pwd3('${data.data.member_list[key].member_info}','PwId`+`${key}','PwId2`+`${key}')" class="btn btn-outline-primary btn-rounded waves-effect">change</button>
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
    
    fetch('http://api.wantreez.com/a/v1/soundfier/initpw', {
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

function reset_pwd3(id, pwId,pwId_confirm){
    var member_ID = id
    var pwdId = pwId
    var pwdId_confirm = pwId_confirm
    var password = document.getElementById(pwdId).value
    var password1 = document.getElementById(pwdId_confirm).value

    if(password1 === '' || password===''){
        alert('비밀번호를 입력해주세요.')
    }else if(password !== password1){
        alert('비밀번호를 확인해주세요.')
    }else{
        const data = { member_info: member_ID, member_pw: password };

        fetch('http://api.wantreez.com/a/v1/soundfier/changepw', {
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
    
// jQuery(function($){
// 	$("#foo-table").DataTable({
// 		"dom": 'iptfl'
// 	});
// });