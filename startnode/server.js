/**
 * Created by pomy on 15/11/3.
 */

var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname;
        var postData = "";
        console.log("Request for" + pathname +" received.");
        req.setEncoding("utf8");

        req.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+
                postDataChunk + "'.");
        });

        req.addListener("end", function() {
            route(handle, pathname, res, postData);
        });
        //
        //route(handle, pathname, res);
        //
        //res.writeHead(200, {"Content-Type": "text/plain"});
        //res.write('Hello World');
        //res.end();
    }

    http.createServer(onRequest).listen(8080);

    console.log('Server has started');
}

exports.start = start;
