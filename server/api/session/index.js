'use strict';

var express = require('express');
var controller = require('./session.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

//Session
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

//Session Messages
router.post('/:id/messages/', controller.createSessionMessage);
router.get('/:id/messages/', controller.sessionMessages);

module.exports = router;