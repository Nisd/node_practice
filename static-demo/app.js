var express = require('express');
var path = require('path');
var app = express();

var api = require('./routers/index');

//设定port变量，意为访问端口
app.set('port', process.env.PORT || 3000);

// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));

// 设定view engine变量，意为网页模板引擎
app.set('view engine', 'jade');

//中间件
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

//静态文件
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'));

function index(req, res){
    res.sendfile('./views/index.html');
}

app.use('/', index);

app.use('/index', index);

app.get('/about', function(req, res) {
    res.sendfile('./views/about.html');
});

app.get('/article', function(req, res) {
    res.sendfile('./views/article.html');
});
app.use('/api', api.index);
//app.get('/api', api.index);