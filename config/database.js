const mongoose = require('mongoose');

let options = {
  auth: { "authSource": "admin" },
  user: 'admin',
  pass: 'admin',
  useNewUrlParser: true
}

mongoose.connect('mongodb://localhost/messagedb',options);
mongoose.Promise = global.Promise;

module.exports = mongoose;
