/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Lobbys              ->  index
 * POST    /Lobbys              ->  create
 * GET     /Lobbys/:id          ->  show
 * PUT     /Lobbys/:id          ->  update
 * DELETE  /Lobbys/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Lobby = require('./lobby.model');

// Get list of Lobbys
exports.index = function(req, res) {
  Lobby.find(function (err, Lobbys) {
    if(err) { return handleError(res, err); }
    return res.json(200, Lobbys);
  });
};

// Get a single Lobby
exports.show = function(req, res) {
  Lobby.findById(req.params.id, function (err, Lobby) {
    if(err) { return handleError(res, err); }
    if(!Lobby) { return res.send(404); }
    return res.json(Lobby);
  });
};

// Creates a new Lobby in the DB.
exports.create = function(req, res) {
  Lobby.create(req.body, function(err, Lobby) {
    if(err) { return handleError(res, err); }
    return res.json(201, Lobby);
  });
};

// Updates an existing Lobby in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Lobby.findById(req.params.id, function (err, Lobby) {
    if (err) { return handleError(res, err); }
    if(!Lobby) { return res.send(404); }
    var updated = _.merge(Lobby, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Lobby);
    });
  });
};

// Deletes a Lobby from the DB.
exports.destroy = function(req, res) {
  Lobby.findById(req.params.id, function (err, Lobby) {
    if(err) { return handleError(res, err); }
    if(!Lobby) { return res.send(404); }
    Lobby.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}