var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Speaking = new Schema({
    user_id : {type: String, require: true },
    start : { type: String, require: true },
    end : { type: String, require: true },
    room_id : { type: String, require: true },
});

module.exports = mongoose.model('speaking', Speaking);