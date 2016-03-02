/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /adventures              ->  index
 * POST    /adventures              ->  create
 * GET     /adventures/:id          ->  show
 * PUT     /adventures/:id          ->  update
 * DELETE  /adventures/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Adventure = require('./adventure.model');

// Get list of adventures
exports.index = function(req, res) {
  Adventure.find(function (err, adventures) {
    if(err) { return handleError(res, err); }
    return res.json(200, adventures);
  });
};

// Get a single adventure
exports.show = function(req, res) {
  Adventure.findById(req.params.id, function (err, adventure) {
    if(err) { return handleError(res, err); }
    if(!adventure) { return res.send(404); }
    return res.json(adventure);
  });
};

// Creates a new adventure in the DB.
exports.create = function(req, res) {
  Adventure.create(req.body, function(err, adventure) {
    if(err) { return handleError(res, err); }
    return res.json(201, adventure);
  });
};

// Updates an existing adventure in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Adventure.findById(req.params.id, function (err, adventure) {
    if (err) { return handleError(res, err); }
    if(!adventure) { return res.send(404); }
    var updated = _.merge(adventure, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, adventure);
    });
  });
};

// Deletes a adventure from the DB.
exports.destroy = function(req, res) {
  Adventure.findById(req.params.id, function (err, adventure) {
    if(err) { return handleError(res, err); }
    if(!adventure) { return res.send(404); }
    adventure.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}