var express = require('express');
var router = express.Router();
var Movie = require('../model/Movie');

//app.route()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
    res.send('responds with a resource');
});

//添加电影
router.get('/movie/add', function(req, res){
    if(req.params.name){
        //update
        res.render('movie', {
            title:req.params.name+'|电影|管理|moive.me',
            label:'编辑电影:'+req.params.name,
            movie:req.params.name
        })
    } else {
        res.render('movie', {
            title:'新增加|电影|管理|moive.me',
            label:'新增加电影',
            movie:false
        })
    }
});

router.post('/movie/add', function(req, res){
    console.log(req.body);
    var json = req.body;
    if(json._id){

    } else {
        Movie.save(json, function(err){
            if(err) {
                res.send({'success':false,'err':err});
            } else {
                res.send({'success':true});
            }
        })
    }
    res.send({'success': 'true'});
    res.end();
});

router.get('/movie/:name', function(req, res){
    if(req.params.name){
        //update
        res.render('movie', {
            title:req.params.name+'|电影|管理|moive.me',
            label:'编辑电影:'+req.params.name,
            movie:req.params.name
        })
    } else {
        res.render('movie', {
            title:'新增加|电影|管理|moive.me',
            label:'新增加电影',
            movie:false
        })
    }
});

module.exports = router;
