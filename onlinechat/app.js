/**
 * Created by pomy on 15/11/12.
 */
var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(process.env.PORT || 3000);

console.log('server started on port'+process.env.PORT || 3000);

app.use(express.static(path.join(__dirname + '/public')));

var getTime=function(){
    var date = new Date();
    return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
};

var getColor=function(){
    var colors = [
        'aliceblue','antiquewhite','aqua','aquamarine','pink','red','green',
        'orange','blue','blueviolet','brown','burlywood','cadetblue'
    ];
    return colors[Math.round(Math.random() * 10000 % colors.length)];
};

io.on('connection', function(socket){
    socket.emit('open');//通知客户端已连接
    // 构造客户端对象
    var client = {
        socket:socket,
        name:false,
        color:getColor()
    };

    //监听消息事件
    socket.on('message', function(msg){
        var obj = {
            time: getTime(),
            color:client.color
        };

        // 判断是不是第一次连接，以第一条消息作为用户名
        if(!client.name){
            client.name = msg;
            obj['text']=client.name;
            obj['author']='System';
            obj['type']='welcome';
            console.log(client.name + ' login');

            //返回欢迎语,发给全部的人
            socket.emit('system',obj);

            //广播给其他人
            socket.broadcast.emit('system',obj);
        } else {
            //如果不是第一次的连接，正常的聊天消息
            obj['text']=msg;
            obj['author']=client.name;
            obj['type']='message';
            console.log(client.name + ' say: ' + msg);

            // 返回消息（可以省略）
            socket.emit('message',obj);
            //广播给其他人
            socket.broadcast.emit('message',obj);
        }
    });

    //监听出退事件
    socket.on('disconnect', function(){
        var obj = {
            time: getTime(),
            color: client.color,
            author:'System',
            text: client.name,
            type: 'disconnect'
        };

        // 广播用户已退出
        socket.broadcast.emit('system',obj);
        console.log(client.name + 'Disconnect');
    });
});
