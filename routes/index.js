var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var session = require('express-session')
var request = require('request')
var template = require('../public/assets/js/template.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/main', function(req, res, next) {
  if(req.session.member_name){
    var html = template.HTML(req.session.member_name)
    req.session.save(() => {
      res.send(html);
    });
  }else{
    res.render('login');
  }
  
});

router.post("/login", function(req,res,next){
  const body = req.body;
  // console.log(body)
  
  const data1 = { reg_user: body.user_id2, reg_pw: body.user_pwd2 };
  request.post({
    headers:{'content-type':'application/json'},
    url:'http://webapi.rhymeduck.com/a/v1/backoffice/login',
    body:data1,
    json: true
  }, function(err,response,body){
      console.log(body)
      var login_result = body.result.ret
      if(login_result === 'success'){
        req.session.member_name = body.data.member_info.name //세션 저장
        var html = template.HTML(req.session.member_name)
        req.session.save(() => {
          res.send(html);
        });
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


module.exports = router;
