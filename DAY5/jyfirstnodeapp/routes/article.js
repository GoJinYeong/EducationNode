
//express 개체를 참조합니다.
var express = require('express');


//express객체의 Router()메소드를 호출해서 사용자의 요청과 응답을 관리해주는 
//router 객체를 생성합니다.
//사용자가 호출하는 URL에 대한 요청과 응답을 router객체가 처리합니다.
var router = express.Router();


//기본라우팅 메소드를 구현합니다.
//http://localhost:3000/article
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//http://localhost:3000/article/list
router.get('/list', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



//해당 모듈파일의 라우터를 외부로 기능노출한다.
module.exports = router;