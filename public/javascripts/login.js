function login(){
    
    var ID = document.getElementsByClassName('form-control')[0].value
    var pw = document.getElementsByClassName('form-control')[1].value
    // console.log(ID,pw)

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
    console.log(data.result.ret);
    if(data.result.ret === 'success'){
        location.href="main";

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

function register1(){
    location.href='register'
}


function register(){
    var ID = document.getElementsByClassName('form-control')[0].value
    var pw = document.getElementsByClassName('form-control')[1].value
    var pw1 = document.getElementsByClassName('form-control')[2].value
    var name = document.getElementsByClassName('form-control')[3].value

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
    console.log(data.result.ret);
    if(data.result.ret === 'success'){
        location.href='/'
        alert('회원가입에 성공하였습니다.')
    }else if(pw !== pw1){
        location.href='register'
        alert('comfirm 비밀번호를 확인해주세요.')
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

function changeMenu(statusitem){
    var element = $("#littleMenu").text()
    var element1 = $(statusitem).text()
    console.log(element)
    console.log(element1)

    $("h2[name=4]").text(element1);
 
}

var count1 =''
function tableCreate(){
    
    var storeName1 = document.getElementById('stora').value
    if (storeName1 === ''){
        return alert("매장명을 입력해주세요")
    }else{
    
        // var storeName='롯데마트'
        
        const data = { member_name: storeName1 };

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
        var storename = new Array();
        var storeid = new Array();
        for (x in count1){
            var name =data.data.member_list[x].member_name
            var name1 =data.data.member_list[x].member_info
            storename.push(name)
            storeid.push(name1)
        }
        for(key in count1){
            html += '<tr>';
            html += '<td>'+storename[key]+'</td>';
            html += '<td>'+storeid[key]+'</td>';
            html += `<td><button onclick="reset_pwdCount('${storeid[key]}')"style="font-size:13px;font-family: 'Noto Sans KR', sans-serif;margin-left:40%;background-color:rgba(150,60,6,.5);"type="button" class="btn btn-rounded">초기화</button></td>`;
            html += `<td>
            <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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
                    <i class="fas fa-lock prefix grey-text"></i>
                    <input type="email" name="defaultForm-email" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="defaultForm-email">password</label>
                  </div>
          
                  <div class="md-form mb-4">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <input type="password" name="defaultForm-pass" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="defaultForm-pass">password confirm</label>
                  </div>
          
                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button onclick="reset_pwd3('${storeid[key]}')" class="btn btn-outline-primary btn-rounded waves-effect">change</button>
                </div>
              </div>
            </div>
          </div>
          <div style="width=5%">
          <div class="text-center">
            <a href="" style="font-size:13px;font-family: 'Noto Sans KR', sans-serif;background-color:rgba(150,60,6,.5);" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">비밀번호 변경</a>
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
    // var table3=document.getElementById('dtDynamicVerticalScrollExample');
    // console.log(table3.rows[1].cells[0])
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
    console.log(data.result.ret);
    if(data.result.ret === 'success'){
        alert("실패 횟수가 초기화 되었습니다.")
    }else{
        alert("error입니다.")
    }
    
    });
}

function reset_pwd3(member_info1){
    // var table3=document.getElementById('dtDynamicVerticalScrollExample');
    // console.log(table3.rows[1].cells[0])
    
    var password = document.getElementsByName("defaultForm-email")[0].value
    var password1 = document.getElementsByName("defaultForm-pass")[0].value
    var el = document.getElementsByClassName('defaultForm-email');


    console.log(password,password1)
    const data = { member_info: member_info1, member_pw: password };
    if (password === ''){
        alert('비밀번호를 입력해주세요.')
    }
    else if (password === password1){
    fetch('http://api.wantreez.com/a/v1/soundfier/changepw', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    var result = data.result.ret
    if (result === 'success'){
        location.href='main'
        alert('비밀번호 변경 완료.')
    }else if(result === failure){
        if(data.result.msg === 'There are no required parameters'){
            alert('값을 입력해주세요.')
        }else{
            alert('DB에러입니다.')
        }
    }else{
        alert('에러입니다.')
    }

    });
    }else{
        alert('비밀번호를 확인해주세요.')
    }
};


function logout(){
    location.href='/'
}