var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 각종 라우팅 파일을 참조합니다.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 게시글 라우팅참조
var aritcleleRouter = require('./routes/article');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 라우팅 파일별 기본 URL 주소를 세팅합니다.
// localhost:3000/
app.use('/', indexRouter);

// user.js 라우팅 파일의 기본 라우팅 주소 localhost:3000/users
app.use('/users', usersRouter);

// article.js 라우팅 파일의 기본 라우팅 주소 localhost:3000/articles
app.use('/articles', aritcleleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;