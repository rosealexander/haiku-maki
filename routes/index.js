const express = require('express');
const controllers = require("../controllers");
const router = express.Router();

/* GET all data including haikus and config order. */
router.get('/all', controllers.getAll );

module.exports = router;
