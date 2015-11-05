/**
 * Created by pomy on 15/11/5.
 */

//mock 数据
var entries = [
    {"id":1, "title":"第一篇", "body":"正文", "published":"6/2/2015"},
    {"id":2, "title":"第二篇", "body":"正文", "published":"6/3/2015"},
    {"id":3, "title":"第三篇", "body":"正文", "published":"6/4/2015"},
    {"id":4, "title":"第四篇", "body":"正文", "published":"6/5/2015"},
    {"id":5, "title":"第五篇", "body":"正文", "published":"6/10/2015"},
    {"id":6, "title":"第六篇", "body":"正文", "published":"6/12/2015"}
];

exports.getBlogEntries = function (){
    return entries;
}

exports.getBlogEntry = function (id){
    for(var i=0; i < entries.length; i++){
        if(entries[i].id == id) return entries[i];
    }
}