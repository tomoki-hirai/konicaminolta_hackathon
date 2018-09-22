var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Room = new Schema({
    room_id : {type: String, require: true , unique: true},
    roo_name : { type: String, require: true },
    flag : { type: String, require: true },
});

module.exports = mongoose.model('room', Room);