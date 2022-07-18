var express  = require('express');

// express에서 제공해주는 사용자 요청과 응답을 처리해주는라우터 객체를 생성합니다.
var router = express.Router();


// 각종 라우팅 메소드를 정의합니다


// 게시글 목록조회 라우팅 메소드 정의
// article.js 라우팅 기본 호출 주소 app.js localhost:3000/articles 로 지정
// http://localhost:3000/articles/list
router.get('/list', function(req, res) {

    // DB에서 가져온 게시글 목록 데이터
    const articles = [
        {
            idx:1,
            title:"게시글제목1입니다.",
            contents:"내용1입니다",
            ip:"111.111.111.111",
            viewcnt:100,
            register:"고진영",
            registDate:"2020-01-01"
        },

        {
            idx:2,
            title:"게시글제목2입니다.",
            contents:"내용2입니다",
            ip:"222.222.222.222",
            viewcnt:200,
            register:"고진영2",
            registDate:"2020-01-02"
        }
    ];

    // 응답결과로 view폴더 내 article폴더 내 list.ejs파일을 웹브라우저로 반환
    res.render('article/list.ejs', {articles});
});

// 게시글 목록 조회 라우팅 메소드정의 - 비동기 콜백함수
// http://localhost:3000/articles/list
router.get('/list2', async(req, res)=>{

    // 응답결과로 view폴더 내 article폴더 내 list.ejs파일을 웹브라우저로 반환
    res.render('article/list.ejs');
});

// 게시글 등록 라우팅 메소드 - GET: 등록 페이지 제공
// localhost:3000/articles/regist
router.get('/regist', function(req, res) {
    // QueryString 방식으로 URL을 토해 값을 전달해오면 req.query.키값으로 값을 추출합니다
    var id = req.query.id;
    var stock = req.query.stock;

    console.log("쿼리 스트링 아이값 추출:",id);
    console.log("쿼리 스트링 스톡 추출:",stock);
    // 등록 페이지만 제공해준다
    res.render('article/create.ejs');
});

// 게시글 등록 - 라우팅 메소드
// localhost:3000/articles/regist
router.post('/regist', function(req, res) {
    // 사용자 입력한 데이터를 추출하고 데이터를 DB에 저장 후 목록 페이지로 이동한다.
    // 웹브라우저에서 폼태그를 통해 전달된 값을 req.body.태그네임값으로 추출합니다.
    var title = req.body.title;
    var contents = req.body.contents;
    var register = req.body.register;

    console.log("사용자가 입력한 제목:", title);
    console.log("사용자가 입력한 내용:", contents);
    console.log("사용자가 입력한 등록자:", register);

    // 추출된 데이터를 DB에 저장한 후 목록 페이지로 이동
    // 뷰를 전달하는 게 아니고 실제호출 URL주소를 호출
    res.redirect('/articles/list');
});

// 게시글 수정 - 라우팅 메소드-- post
// localhost:3000/articles/modify
router.post('/modify', function(req, res) {
    // 폼에서 넘어오는 데이터 추출하기
    var title = req.body.title;
    var contents = req.body.contents;
    var register = req.body.register;

    console.log("사용자가 입력한 제목:", title);
    console.log("사용자가 입력한 내용:", contents);
    console.log("사용자가 입력한 등록자:", register);

    // DB 수정처리하고 게시글 목록 페이지로 이용하기


    res.redirect('/articles/list');
});

// 게시글 삭제
router.delete('/delete', function(req, res) {
    // res.redirect('이동할 실제 주소')를 이용해 원하는 페이지로 바로 이동 가능
    // 뷰의 경로가 아닌 실제 서비스되는 url 주소를 입력함.
    // 삭제 후 바로 목록 페이지로 이동하기
    res.redirect("/articles/list");
});

// 단일 게시글 조회 및 수정 페이지 라우팅 메소드
// localhost:3000/articles/1
router.get('/:id', function(req, res) {
    // 와일드 카드 값 추출하기
    var articleIdx = req.params.id;
    console.log("와일드 카드로 전달된 값", articleIdx);

    // 게시글 고유번호를 DB에서 조회합니다.

    // 조회해온 단ㅇㄹ 게시글 데이터라고 가정합니다.
    var article ={
        title:"제목입니다",
        contents:"내용입니다",
        register:"작성자입니다",
        registDate:"2022.01.01"
    }
    res.render('article/modify.ejs',{article:article});
});







// 해당 article.js 모듈의 라우터 객체를 외부에 노출합니다.
module.exports = router;