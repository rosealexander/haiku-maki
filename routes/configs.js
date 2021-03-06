const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

/* PATCH replace config order. */
router.patch('/order', controllers.updateOrder);

module.exports = router;
