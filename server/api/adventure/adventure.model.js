'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AdventureSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Adventure', AdventureSchema);