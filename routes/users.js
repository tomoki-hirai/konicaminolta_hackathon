var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
const User = require('../module/models/user');
const constants = require('../module/constants');
var mongo_db_url = constants.mongo_db_url;

router.get('/', function(req, res, next) {
  console.log(req.query);
  room_id = 0;
  if (req.query.room_id != undefined){
    room_id = req.query.room_id;
  }
  // res.render('meeting', { title: 'Express' });
  mongoose.connect(mongo_db_url,{ useNewUrlParser: true },function(err) {
    if (err) throw err;
  });
  User.find({})
    // .find({room_id:room_id})
    // .find({month:month})
    // .find({date:date})
    // .sort('-volume')
    // .limit(3)
    .exec(function(err,result){
      if(err) {
        res.status(500);
        res.end('my 500 error! : ' + err);
        console.log(err);
      } else {
        console.log('success');
        res.send(result);
      }
    });
});
// メッセージをpost
router.post('/',function(req,res){
  try{
    constants.io.sockets.emit('add_user', req.body);
  }catch(e){
    console.log(e);
  }
  // console.log(req);
  mongoose.connect(mongo_db_url,{ useNewUrlParser: true },function(err) {
    if (err) throw err;
  });
  console.log(req.body);
  let data = new User(req.body);

  data.save(function(err) {
    if(err) {
        console.log(err);
      } else {
        console.log("write");
      }
  });
  res.send('success');
})

module.exports = router;
