const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  usermane: String,
  password: String
});

module.exports = mongoose.model('users', UsersSchema);
