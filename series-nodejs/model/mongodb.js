/**
 * Created by pomy on 15/11/11.
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://user:pass@localhost:port/database');
mongoose.connect('mongodb://localhost/nodejs');
module.exports = mongoose;