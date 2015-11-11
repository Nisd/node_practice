/**
 * Created by pomy on 15/11/11.
 */
var mongoose = require('./mongodb');

//模式
var MovieSchema = mongoose.Schema({
    name : String,
    alias : [String],
    publish : Date,
    create_date : {
        type: Date,
        default: Date.now
    },
    images :{
        coverSmall:String,
        coverBig:String
    },
    source :[{
        source     : String,
        link       : String,
        swfLink    : String,
        quality    : String,
        version    : String,
        lang       : String,
        subtitle   : String,
        create_date: {
            type   : Date,
            default: Date.now
        }
    }]
});

//模型
var MovieModel = mongoose.model("Movie", MovieSchema);
var MovieDAO = function(){};
MovieDAO.prototype.save = function(obj, callback) {
    //实体
    var instance = new MovieModel(obj);
    instance.save(function(err){
        callback(err);
    });
};
module.exports = new MovieDAO();

