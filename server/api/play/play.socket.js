/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var session = require('./play.model');

exports.register = function(socket) {
  play.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  play.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('play:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('play:remove', doc);
}