/**
 * Created by pomy on 15/11/5.
 */

//使用中间件处理app请求
var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res, next){
    console.log("In comes a " + req.method + " to " + req.url);
    next();
});

app.use(function(request, response, next) {
    if (request.url == "/") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Welcome to the homepage!\n");
    } else {
        next();
    }
});

app.use(function(request, response, next) {
    if (request.url == "/about") {
        response.writeHead(200, { "Content-Type": "text/plain" });
    } else {
        next();
    }
});

app.use(function(request, response) {
    //response.writeHead(404, { "Content-Type": "text/plain" });
    //response.end("404 error!\n");
    response.redirect("http://www.ido321.com");
});

http.createServer(app).listen(8080, "localhost");
