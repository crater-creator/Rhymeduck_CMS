var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var session = require('express-session')
var request = require('request')
var template = require('../public/assets/js/template.js');
var cmd = require('node-cmd')
var fs = require('fs');
const { options } = require('../app.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/main', function(req, res, next) {
  var html = template.HTML(req.session.member_name)
  var a =req.session.auth_member //두번째꺼
  var b = req.session.auth_memberD //첫번째꺼   html = template.HTML(req.session.member_name,undefined,undefined,undefined,undefined,undefined,undefined)
  var c = req.session.auth_tts
  var d = req.session.auth_stb 
  var e = req.session.auth_channel 
  var f = req.session.auth_unsafe
  

  if (a===1&&b===0&&c===0&&d===1&&e===0&&f===0){html = template.HTML(req.session.member_name,undefined,'block',undefined,'block',undefined,undefined)}
  else if(a===1&&b===0&&c===0&&d===1&&e===1&&f===0){html = template.HTML(req.session.member_name,undefined,'block',undefined,'block','block',undefined)}
  else if(a===1&&b===0&&c===0&&d===1&&e===0&&f===1){html = template.HTML(req.session.member_name,undefined,'block',undefined,'block',undefined,'block')}
  else if(a===1&&b===0&&c===0&&d===1&&e===1&&f===1){html = template.HTML(req.session.member_name,undefined,'block',undefined,'block','block','block')}
  else if(a===1&&b===0&&c===0&&d===0&&e===1&&f===0){html = template.HTML(req.session.member_name,undefined,'block',undefined,undefined,'block',undefined)}
  else if(a===1&&b===0&&c===0&&d===0&&e===1&&f===1){html = template.HTML(req.session.member_name,undefined,'block',undefined,undefined,'block','block')}
  else if(a===1&&b===0&&c===0&&d===0&&e===0&&f===1){html = template.HTML(req.session.member_name,undefined,'block',undefined,undefined,undefined,'block')}
  else if(a===1&&b===0&&c===0&&d===0&&e===0&&f===0){html = template.HTML(req.session.member_name,undefined,'block',undefined,undefined,undefined,undefined)}

  else if(a===1&&b===1&&c===0&&d===1&&e===0&&f===0){html = template.HTML(req.session.member_name,'block',undefined,undefined,'block',undefined,undefined)}
  else if(a===1&&b===1&&c===0&&d===1&&e===1&&f===0){html = template.HTML(req.session.member_name,'block',undefined,undefined,'block','block',undefined)}
  else if(a===1&&b===1&&c===0&&d===1&&e===0&&f===1){html = template.HTML(req.session.member_name,'block',undefined,undefined,'block',undefined,'block')}
  else if(a===1&&b===1&&c===0&&d===1&&e===1&&f===1){html = template.HTML(req.session.member_name,'block',undefined,undefined,'block','block','block')}
  else if(a===1&&b===1&&c===0&&d===0&&e===1&&f===0){html = template.HTML(req.session.member_name,'block',undefined,undefined,undefined,'block',undefined)}
  else if(a===1&&b===1&&c===0&&d===0&&e===1&&f===1){html = template.HTML(req.session.member_name,'block',undefined,undefined,undefined,'block','block')}
  else if(a===1&&b===1&&c===0&&d===0&&e===0&&f===1){html = template.HTML(req.session.member_name,'block',undefined,undefined,undefined,undefined,'block')}
  else if(a===1&&b===1&&c===0&&d===0&&e===0&&f===0){html = template.HTML(req.session.member_name,'block',undefined,undefined,undefined,undefined,undefined)}

  else if(a===1&&b===0&&c===1&&d===1&&e===0&&f===0){html = template.HTML(req.session.member_name,undefined,'block','block','block',undefined,undefined)}
  else if(a===1&&b===0&&c===1&&d===1&&e===1&&f===0){html = template.HTML(req.session.member_name,undefined,'block','block','block','block',undefined)}
  else if(a===1&&b===0&&c===1&&d===1&&e===0&&f===1){html = template.HTML(req.session.member_name,undefined,'block','block','block',undefined,'block')}
  else if(a===1&&b===0&&c===1&&d===1&&e===1&&f===1){html = template.HTML(req.session.member_name,undefined,'block','block','block','block','block')}
  else if(a===1&&b===0&&c===1&&d===0&&e===1&&f===0){html = template.HTML(req.session.member_name,undefined,'block','block',undefined,'block',undefined)}
  else if(a===1&&b===0&&c===1&&d===0&&e===1&&f===1){html = template.HTML(req.session.member_name,undefined,'block','block',undefined,'block','block')}
  else if(a===1&&b===0&&c===1&&d===0&&e===0&&f===1){html = template.HTML(req.session.member_name,undefined,'block','block',undefined,undefined,'block')}
  else if(a===1&&b===0&&c===1&&d===0&&e===0&&f===0){html = template.HTML(req.session.member_name,undefined,'block','block',undefined,undefined,undefined)}
  
  else if(a===1&&b===1&&c===1&&d===1&&e===0&&f===0){html = template.HTML(req.session.member_name,'block',undefined,'block','block',undefined,undefined)}
  else if(a===1&&b===1&&c===1&&d===1&&e===1&&f===0){html = template.HTML(req.session.member_name,'block',undefined,'block','block','block',undefined)}
  else if(a===1&&b===1&&c===1&&d===1&&e===0&&f===1){html = template.HTML(req.session.member_name,'block',undefined,'block','block',undefined,'block')}
  else if(a===1&&b===1&&c===1&&d===1&&e===1&&f===1){html = template.HTML(req.session.member_name,'block',undefined,'block','block','block','block')}
  else if(a===1&&b===1&&c===1&&d===0&&e===1&&f===0){html = template.HTML(req.session.member_name,'block',undefined,'block',undefined,'block',undefined)}
  else if(a===1&&b===1&&c===1&&d===0&&e===1&&f===1){html = template.HTML(req.session.member_name,'block',undefined,'block',undefined,'block','block')}
  else if(a===1&&b===1&&c===1&&d===0&&e===0&&f===1){html = template.HTML(req.session.member_name,'block',undefined,'block',undefined,undefined,'block')}
  else if(a===1&&b===1&&c===1&&d===0&&e===0&&f===0){html = template.HTML(req.session.member_name,'block',undefined,'block',undefined,undefined,undefined)}
  
  else if(a===0&&b===0&&c===1&&d===1&&e===0&&f===0){html = template.HTML(req.session.member_name,undefined,undefined,'block','block',undefined,undefined)}
  else if(a===0&&b===0&&c===1&&d===1&&e===1&&f===0){html = template.HTML(req.session.member_name,undefined,undefined,'block','block','block',undefined)}
  else if(a===0&&b===0&&c===1&&d===1&&e===0&&f===1){html = template.HTML(req.session.member_name,undefined,undefined,'block','block',undefined,'block')}
  else if(a===0&&b===0&&c===1&&d===1&&e===1&&f===1){html = template.HTML(req.session.member_name,undefined,undefined,'block','block','block','block')}
  else if(a===0&&b===0&&c===1&&d===0&&e===1&&f===0){html = template.HTML(req.session.member_name,undefined,undefined,'block',undefined,'block',undefined)}
  else if(a===0&&b===0&&c===1&&d===0&&e===1&&f===1){html = template.HTML(req.session.member_name,undefined,undefined,'block',undefined,'block','block')}
  else if(a===0&&b===0&&c===1&&d===0&&e===0&&f===1){html = template.HTML(req.session.member_name,undefined,undefined,'block',undefined,undefined,'block')}
  else if(a===0&&b===0&&c===1&&d===0&&e===0&&f===0){html = template.HTML(req.session.member_name,undefined,undefined,'block',undefined,undefined,undefined)}
  
  else if(a===0&&b===0&&c===0&&d===1&&e===0&&f===0){html = template.HTML(req.session.member_name,undefined,undefined,undefined,'block',undefined,undefined)}
  else if(a===0&&b===0&&c===0&&d===1&&e===1&&f===0){html = template.HTML(req.session.member_name,undefined,undefined,undefined,'block','block',undefined)}
  else if(a===0&&b===0&&c===0&&d===1&&e===0&&f===1){html = template.HTML(req.session.member_name,undefined,undefined,undefined,'block',undefined,'block')}
  else if(a===0&&b===0&&c===0&&d===1&&e===1&&f===1){html = template.HTML(req.session.member_name,undefined,undefined,undefined,'block','block','block')}
  else if(a===0&&b===0&&c===0&&d===0&&e===1&&f===0){html = template.HTML(req.session.member_name,undefined,undefined,undefined,undefined,'block',undefined)}
  else if(a===0&&b===0&&c===0&&d===0&&e===1&&f===1){html = template.HTML(req.session.member_name,undefined,undefined,undefined,undefined,'block','block')}
  else if(a===0&&b===0&&c===0&&d===0&&e===0&&f===1){html = template.HTML(req.session.member_name,undefined,undefined,undefined,undefined,undefined,'block')}
  else if(a===0&&b===0&&c===0&&d===0&&e===0&&f===0){html = template.HTML(req.session.member_name,undefined,undefined,undefined,undefined,undefined,undefined)}

    req.session.save(() => {
      res.send(html);
    });
  
});
router.post("/login", function(req,res,next){
  const body = req.body;
  const data1 = { reg_user: body.user_id2, reg_pw: body.user_pwd2 };
  request.post({
    headers:{'content-type':'application/json'},
    url:'http://webapi.rhymeduck.com/a/v1/backoffice/login',
    body:data1,
    json: true
  }, function(err,response,body){
      var login_result = body.result.ret
      if(login_result === 'success'){
        
        req.session.member_name = body.data.member_info[0].name //세션 저장
        req.session.auth_member = body.data.member_info[0].member
        req.session.auth_memberD = body.data.member_info[0].member_detail
        req.session.auth_tts = body.data.member_info[0].tts
        req.session.auth_stb = body.data.member_info[0].stb
        req.session.auth_channel = body.data.member_info[0].channel_update
        req.session.auth_unsafe = body.data.member_info[0].unsafe
        
        res.redirect('/main')
      }else{
        res.redirect('/')
        
      }
  })
})
router.get('/logout', function(req, res, next) {
  if(req.session.member_name){
    req.session.destroy(function(err){
      if(err){
        console.log('세션 삭제중 에러 발생')
        return;
      }
      console.log('세션 삭제 성공')
      
      res.render('login');
    })
  }
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/settop_reset', function (request, response) {
  var member_id = request.body.member_id
  
  cmd.run('mosquitto_pub -t vodka_python/user_'+member_id+' -m "reset|"');
  response.send('리셋완료');
});

router.post('/settop_etp_reset', function (req, res) {
  var enterprise_id = req.body.enterprise_id
  
    request.post({
      url: 'http://webapi.rhymeduck.com/a/v1/member/search_by_eid',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        eid: enterprise_id 
      } 
    }, function (error, response, body) {
        
        
        for(var i=0; i<JSON.parse(body).data.member_list.length; i++){
          //console.log(JSON.parse(body).data.member_list[i].member_id)
          cmd.run('mosquitto_pub -t vodka_python/user_'+JSON.parse(body).data.member_list[i].member_id+' -m "reset|"');
         };res.send('리셋완료');
          
       
});
})

router.post('/settop_etp_reset1', function(req,res){
  var enterprise_id = req.body.enterprise_id
  var one = enterprise_id.substr(4)
  var two = enterprise_id.substr(0,3)
  console.log(one,two)
  request.post({
    url: 'http://webapi.rhymeduck.com/a/v1/member/search_by_eid',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      eid: one
    }
  }, function (error, response, body) {
      for(var i=0; i<JSON.parse(body).data.member_list.length; i++){
        //console.log(JSON.parse(body).data.member_list[i].member_id)
        cmd.run('mosquitto_pub -t vodka_python/user_'+JSON.parse(body).data.member_list[i].member_id+' -m "reset|"');
        
    }})
  request.post({
    url: 'http://webapi.rhymeduck.com/a/v1/member/search_by_eid',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      eid: two
    }
  }, function (error, response, body) {
      for(var i=0; i<JSON.parse(body).data.member_list.length; i++){
        //console.log(JSON.parse(body).data.member_list[i].member_id)
        cmd.run('mosquitto_pub -t vodka_python/user_'+JSON.parse(body).data.member_list[i].member_id+' -m "reset|"');   
    };
    res.send('리셋완료');

})
})

router.post('/channel_update', function (request, response) {
  cmd.run('/data/script/music_update/channel_update.sh');  
  response.redirect('/main');
});

router.post('/get_ch_update_loglist', function (request, response) {
  fs.readdir('/data/log/music_channel_update', function(error, filelist){
    response.send(filelist);
  })   
});

router.post('/read_ch_update_log', function (request, response) {
  var file_path = request.body.file_path
  fs.readFile('/data/log/music_channel_update/'+file_path, 'utf-8',function(error, data){
    response.send(data);
  })
});


module.exports = router;
