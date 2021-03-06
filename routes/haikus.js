const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

/* GET all haikus. */
router.get('/', controllers.getHaikus );

/* GET haiku listings by id. */
router.get('/:id', controllers.getHaiku );

/* PUT replace a haiku listing. */
router.put('/:id', controllers.updateHaiku);

module.exports = router;
