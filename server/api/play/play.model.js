'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Adventure = require('../adventure/adventure.model');

var PlaySchema = new Schema({
  name: String,
  info: String,
  adventure: [Adventure],
  active: Boolean
});

module.exports = mongoose.model('Play', PlaySchema);