function login(){
    
    var ID = document.getElementsByClassName('form-control mb-4')[0].value
    var pw = document.getElementsByClassName('form-control mb-4')[1].value
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
    var ID = document.getElementsByClassName('form-control mb-4')[0].value
    var pw = document.getElementsByClassName('form-control mb-4')[1].value
    var pw1 = document.getElementsByClassName('form-control mb-4')[2].value
    var name = document.getElementsByClassName('form-control mb-4')[3].value

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


