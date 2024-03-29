/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var adventure = require('./adventure.model');

exports.register = function(socket) {
  adventure.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  adventure.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('adventure:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('adventure:remove', doc);
}