const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: {
    type: String,
  },
  fortyTwoId: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  img: {
    type: String,
  },
  language: {
    type: String,
    default: 'fr',
  },
  roomId: {
    type: String,
  },
  roomExpiration: {
    type: String,
  },
  roomState: { // RAS, MOVEMENT, ALERT
    type: String,
  },
}, { strict: true });

module.exports = mongoose.model('User', UserSchema);
