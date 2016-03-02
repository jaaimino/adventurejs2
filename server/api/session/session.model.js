'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Adventure = require('./session.model');

var SessionSchema = new Schema({
  name: String,
  info: String,
  adventure: Adventure,
  active: Boolean
});

module.exports = mongoose.model('Session', SessionSchema);