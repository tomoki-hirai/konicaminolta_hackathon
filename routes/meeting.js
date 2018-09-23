var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
const Speaking = require('../module/models/speaking');
const Room = require('../module/models/room');
const constants = require('../module/constants');
var mongo_db_url = constants.mongo_db_url;
// const host_url = "localhost";
// const model = require('./model');
// const Volume = model.Volume;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('meetingUI', { title: 'Express' });
});
//
router.get('/speaking', function(req, res, next) {
  console.log(req.query);
  room_id = 0;
  if (req.query.room_id != undefined){
    room_id = req.query.room_id;
  }
  // res.render('meeting', { title: 'Express' });
  mongoose.connect(mongo_db_url,{ useNewUrlParser: true },function(err) {
    if (err) throw err;
  });
  Speaking.find({})
    .find({room_id:room_id})
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
        console.log('succes');
        res.send(result);
      }
    });
});
// メッセージをpost
router.post('/speaking',function(req,res){
  try{
    constants.io.sockets.emit('speaking', req.body);
  }catch(e){
    console.log(e);
  }
  // console.log(req);
  mongoose.connect(mongo_db_url,{ useNewUrlParser: true },function(err) {
    if (err) throw err;
  });
  console.log(req.body);
  let data = new Speaking(req.body);

  data.save(function(err) {
    if(err) {
        console.log(err);
      } else {
        console.log("write");
      }
  });
  res.send('success');
})

// メッセージをpost
router.post('/myturn',function(req,res,err){
  try{
    constants.io.sockets.emit('myturn', {value : 'data'});
  }catch(e){
    console.log(e);
  }
  if(err) {
    res.send(err);
  } else {
    res.send('success');
    console.log(req.body);
  }
  // constants.socket.emit('myturn', {value : data});
})

//
router.get('/room', function(req, res, next) {
  console.log(req.query);
  room_id = 0;
  if (req.query.room_id != undefined){
    room_id = req.query.room_id;
  }
  // res.render('meeting', { title: 'Express' });
  mongoose.connect(mongo_db_url,{ useNewUrlParser: true },function(err) {
    if (err) throw err;
  });
  Room.find({})
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
        console.log('succes');
        res.send(result);
      }
    });
});
// メッセージをpost
router.post('/room',function(req,res){
  // console.log(req);
  mongoose.connect(mongo_db_url,{ useNewUrlParser: true },function(err) {
    if (err) throw err;
  });
  console.log(req.body);
  let data = new Room(req.body);

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
