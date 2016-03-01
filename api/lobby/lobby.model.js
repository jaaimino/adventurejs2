'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LobbySchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Lobby', LobbySchema);