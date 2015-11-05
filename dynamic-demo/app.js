/**
 * Created by pomy on 15/11/5.
 */
var express = require('express');
var hbs = require('hbs');
var path  = require('path');

// 加载数据模块
var blogEngine = require('./blog');

var app = express();

//设定port变量，意为访问端口
app.set('port', process.env.PORT || 3000);

// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));

// 指定模板文件的后缀名为html
app.set('view engine', 'html');

// 运行hbs模块
app.engine('html', hbs.__express);

//中间件
app.use(express.bodyParser());

function index(req, res){
    res.render('index', {title:"最近文章", entries:blogEngine.getBlogEntries()});
}

app.use('/', index);

app.use('/index', index);

app.get('/about', function(req, res) {
    res.render('about', {title:"自我介绍"});
});

app.get('/article/:id', function(req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render('article', {title:entry.title, blog:entry});
});

app.listen(app.get('port'));