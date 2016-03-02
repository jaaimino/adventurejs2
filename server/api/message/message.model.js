'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  session: { type: Schema.Types.ObjectId, ref: 'Session', required: true},
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  timestamp: { type: Date, default: Date.now },
  message: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Message', MessageSchema);
