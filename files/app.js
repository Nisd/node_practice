/**
 * Created by pomy on 15/11/5.
 */

var fs = require('fs');

var path = './test.txt';
fs.exists(path, function(exists){
    if(exists){
        fs.stat(path, function(err, status){
            if(err){
                throw err;
            }

            if(status.isFile()){
                fs.readFile(path, 'utf-8', function(err, data){
                    if(err) {
                        throw err
                    }

                    var eof = data.indexOf('\r\n') >= 0 ? '\r\n' : '\n';
                    var lines = data.split(eof);
                    var len = lines.length;
                    console.log(data);

                    fs.exists('./line', function(exists){
                        if(! exists){
                            fs.mkdir('./line', 0777, function(err){
                                if(err) {
                                    throw  err;
                                }

                                for(var i = 0; i < len; i++){
                                    fs.writeFileSync('./line/' + i + '.txt', lines[i]);
                                }
                            });
                        }
                    });
                });
            }
        });
    }
});

