var express = require('express');

// node express에서 사용자 요청과 응답을 처리하는 객체
var router = express.Router();

/* 메인 페이지-라우팅 메소드 */
// index.js 라우팅파일의 기본 라우팅 주소
// http://localhost:3000
router.get('/', function(req, res, next) {
    res.render('index', { title: '내가 익스프레스다1111...', name: "고차원", email: "ch@index.co.kr" });
});

// 사용자 요청을 처리하는 메소드 유형1: get 메소드
// get 메소드는 사용자의 요청에 대해 응답(json데이터, view파일 등등)을 제공
// 주로 데이터를 조회하여 결과물을 전달하는 용도로 사용
// router.get('기본호출경로 아래 호출하위주소', 요청에 대한 응답 콜백함수)
// 기본적으로 라우팅 파일(index.js)기본 호출경로가 설정됨
// http://localhost:3000/test
router.get('/test', function(req, res, next) {
    // req(HttpRequest) 객체는 사용자 요청시 웹브라우저에서 전달되는 각종 사용자 요청 정보를 추출할 수 있다
    // res(HttpRespones) 객체는 웹서버에서 웹브라우저로 전달하고자 하는 응답 정보를 제어하는 객체
    // next는 요청과 응답 사이에서 중간에서 특정 기능을 미들웨어형태로 제어하는기능
    // 응답 코딩하기

    // res.render()메소드는 지정된 뷰파일(html페이지, 화면)을 웹브라우저로 전달합니다
    // res.render('뷰파일의 경로와 이름', 해당뷰파일에 전달한 json데이터);

    res.render('index.ejs', { title: "테스트 데이터", name: "고진영", email: "jy@test.co.kr" });

});

// 샘플 라우팅 메소드 생성
// http://localhost:3000/sample
router.get('/sample', function(req, res) {

    // 제품의 데이터 JSON객체 정의
    //데이터 베이스에서 가져온 데이터라고 가정
    var product = {
        pno: 1000,
        productName: "LG Gram",
        barnd: "LG",
        price: 10000
    }

    // sample.ejs 뷰 파일을 전달
    res.render('sample.ejs', { product: product });

});

module.exports = router;