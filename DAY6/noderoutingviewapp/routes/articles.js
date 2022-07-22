var express = require('express');
var router = express.Router();
var path = require('path');

// 게시글 목록 페이지 호출 라우팅 메소드-GET
// http://localhost:3000/articles/list
router.get('/list', function(req, res, next) {

    // step1: DB에서 게시글 목록 데이터를 조회해옵니다.

    // step2: DB에서 가져온 게시글 목록 : 가정
    const articleList=[
        {
            idx:1,
            title:"게시글 제목1입니다",
            viewcnt:100,
            ip:"111.111.111.111",
            displayyn:true,
            register:"고진영",
            registdate:"22.07.01"
        },
        {
            idx:2,
            title:"게시글 제목2입니다",
            viewcnt:200,
            ip:"222.222.222.222",
            displayyn:false,
            register:"고진영2",
            registdate:"22.07.02"
        },
        {
            idx:3,
            title:"게시글 제목3입니다",
            viewcnt:300,
            ip:"113.111.111.111",
            displayyn:true,
            register:"고진영3",
            registdate:"22.07.03"
        },
        {
            idx:4,
            title:"게시글 제목4입니다",
            viewcnt:400,
            ip:"114.111.111.111",
            displayyn:true,
            register:"고진영4",
            registdate:"22.07.04"
        },
        {
            idx:5,
            title:"게시글 제목5입니다",
            viewcnt:500,
            ip:"115.111.111.111",
            displayyn:true,
            register:"고진영5",
            registdate:"22.07.05"
        }
    ];

    res.render('articles/list.ejs',{articleList});
    //res.render('articles/list.ejs',{layout:'mylayout.ejs'});
});

// 게시글 등록 페이지 반환-GET
// http://localhost:3000/articles/create
router.get('/create', function (req, res) {
    res.render('articles/create.ejs');
});

// 게시글 등록 - 게시글 등록 데이터 처리 - POST
// 호출 주소가 같더라도 호출방식이 다르면 개벼적으로 호출 가능
// http://localhost:3000/articles/create
router.post('/create',function (req, res) {
    
    // step1:웹브라우저에서 form 태그 내 전달되는 데이터를 추출한다.
    var title = req.body.title; // 사용자 입력 값 추출
    var contents = req.body.contents;

    var artticleData = {
        title:title, 
        contents: contents
    };


    // step2: 추출된 사용자 입력값을 DB에 저장합니다.

    // step3: 특정 화면(뷰)를 전달하거나 또는 특정 페이지로 이동시킵니다.
    res.redirect('/articles/list');
});

// 게시글 수정 웹페이지 호출 - GET_QueryString
// http://localhost:3000/articles/update?idx=1&stock=100
router.get('/update', function(req, res){

    // QueryString 방식으로 전달되는 키값 추출
    // const idx = req.query.idx;
    // const stock = req.query.stock;
    // console.log("전달된 쿼리 스트링 idx:", idx);
    // console.log("전달된 쿼리 스트링 stock:", stock);


    // 해당 게시글 번호로 DB에서 단일 게시글 정보 조회해서 데이터를 가져왔다고 가정
    const article = {
        idx:1,
        title:"글제목1",
        contents:"내용입니다",
        viewcnt:100,
        ip:"111.111.111.111",
        register:"고진영",
        registDate:"2022.01.11"
    };

    // 뷰 파일에 단일게시글 데이터를 전달합니다.
    res.render('articles/modify.ejs',{article:article});
});


// 게시글 수정 데이터 처리- PUT
router.post('/update', function(req, res){

    // step1: 사용자가 form 태그 내에서 입력한 수정 데이터 추출
    const title = req.body.title;
    console.log("사용자가 수정한 게시글 제목 데이터", title);

    // step2: 수정할 데이터 준비 빛 DB에 데이터 수정 처리

    // step3: 데이터 수정이 완료되면 게시글 목록 페이지로 이동처리
    res.redirect('/articles/list');
});


// 게시글 삭제 요청 처리하기
// /http://localhost:3000/articles?idx=1
router.get('/delete', function (req, res) {
    
    // 삭제하고자 하는 게시글 고유번호를 추출합니다
    const artcleIdx = req.query.idx;
    console.log("삭제할 게시글 고유번호:", artcleIdx);

    //step2:해당 게시글 번호 기준으로 해당 게시글 DB에서 삭제처리하기

    // step3: 해당 게시글이 삭제가 안료되면 게시글 목록 페이지로 이동
    res.redirect('/articles/list');
    
});

router.get('/update/test',function(req,res){

    //기타 res객체 메소드 테스트하기 
    //res.render();
    //res.redirect();

    //case1: res.json() 메소드는 호출결과를 json데이터로 웹브라우저에 전달한다/RESTFul 기능 구현시 사용....
    //res.json();
    var product= {
        idx:1,
        productName:"LG노트북 그램",
        stocks:100,
        price:1200000
    }
    //단일 제품정보 데이터를 json으로 웹브라우저에게 반환한다.
    //res.json(product);

    // case2: res.send() 만능메소드이며 아무값이나 서버에서 브라우저를 전달할 수 있습니다
    //res.send('test입니다.');
    //res.send(product);


    // case3: res.sendFile('서버 내 파일이 저장된 절대경로') 서버상에 존재하는물리적인 파일을 웹브라우저에게 다운로드 저장해주는 기능
    res.sendFile(path.join(__dirname,'sample.txt'));
});

// 게시글 수정 웹페이지 호출 - GET_Parameter
// http://localhost:3000/articles/update/2
// 주의점:중요 되도록 와일드 카드방식을 호출하는라우팅 메소드는 라우팅 파일 내 최 하단으로 배치 시켜줍니다.
router.get('/update/:idx', function(req, res){
    
    // step1: 파라메터로 전달되는 값 추출
    // URL 파라메터로 전달되는 값은 와일드카드에서 지정한 키값으로 추출 가능
    const articleIdx = req.params.idx;
    
    // step2: 해당 게시글 고유번호에 해당하는 단일게시글 정보를 DB에서 조회
    const article = {
        idx:1,
        title:"글제목1",
        contents:"내용입니다",
        viewcnt:100,
        ip:"111.111.111.111",
        register:"고진영",
        registDate:"2022.01.11"
    };
    
    // 뷰 파일에 단일게시글 데이터를 전달합니다.
    res.render('articles/modify',{article});
});

module.exports = router;