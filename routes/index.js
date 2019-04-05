var express = require('express');
var router = express.Router();
var messageModel = require("../model/message");

module.exports = function(io){
  /* GET home page. */
  router.get('/', async (req, res, next) => {
    res.render('index', { title: 'PAULO' });
  });


  /* GET home page. */
  router.post('/messages', async (req, res, next) => {
    let data = req.body;
    await messageModel.create(data);
    let messages = await messageModel.find({}).sort({_id: 'desc'});
    let message = messages[0];
    io.emit('lastMessage',message);
    res.send(message);
  });

  router.get('/messages', async (req, res, next) => {
    let message = await messageModel.find({});
    res.send(message);
  });

  return router
}
