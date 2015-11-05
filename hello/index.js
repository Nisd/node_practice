/**
 * Created by pomy on 15/11/5.
 */

var express = require('express');

var app = express();
var routes = require('./routes')(app);

//打开当前目录的public子目录下的index.html 或者图片文件
//app.use(express.static(__dirname + '/public'));

app.listen(8080);
