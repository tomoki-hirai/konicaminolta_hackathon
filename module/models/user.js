var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    user_id : {type: String, require: true , unique: true},
    user_name : { type: String, require: true },
});

module.exports = mongoose.model('user', User);