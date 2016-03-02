/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /plays              ->  index
 * POST    /plays              ->  create
 * GET     /plays/:id          ->  show
 * PUT     /plays/:id          ->  update
 * DELETE  /plays/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Play = require('./play.model');
var Message = require('../message/message.model');

// Get list of plays
exports.index = function(req, res) {
  Play.find(function (err, plays) {
    if(err) { return handleError(res, err); }
    return res.json(200, plays);
  });
};

// Get list of messages in a play
exports.playMessages = function(req, res) {
  var playId = req.params.id;
  Message.find({play: playId},function (err, messages) {
    if(err) { return handleError(res, err); }
    return res.json(200, messages);
  });
};

// Create a message in a play
exports.createPlayMessage = function(req, res) {
  var playId = req.params.id;
  Message.create(req.body, function(err, message) {
    if(err) { return handleError(res, err); }
    return res.json(201, message);
  });
};

// Get a single play
exports.show = function(req, res) {
  Play.findById(req.params.id, function (err, play) {
    if(err) { return handleError(res, err); }
    if(!play) { return res.send(404); }
    return res.json(play);
  });
};

// Creates a new play in the DB.
exports.create = function(req, res) {
  Play.create(req.body, function(err, play) {
    if(err) { return handleError(res, err); }
    return res.json(201, play);
  });
};

// Updates an existing play in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Play.findById(req.params.id, function (err, play) {
    if (err) { return handleError(res, err); }
    if(!play) { return res.send(404); }
    var updated = _.merge(play, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, play);
    });
  });
};

// Deletes a play from the DB.
exports.destroy = function(req, res) {
  Play.findById(req.params.id, function (err, play) {
    if(err) { return handleError(res, err); }
    if(!play) { return res.send(404); }
    play.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}