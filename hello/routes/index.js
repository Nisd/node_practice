/**
 * Created by pomy on 15/11/5.
 */
module.exports = function(app){
    app.all('*', function(req, res, next){
        res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"});
        next();
    });
    app.get('/', function(req, res){
        res.write('this is a demo 哈哈');
    });

    app.get('/customer', function(req, res){
        res.write('this is customer');
    });

    app.get('/admin', function (req, res) {
        res.write('this is admin page');
    });

    app.get("/hello/:who", function(req, res) {
        res.write("<div style='color:red'>Hello, " + req.params.who + ".</div>");
    });

    app.get('*', function(req, res){
        res.end();
    });
};
