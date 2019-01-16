const router = require('express').Router();
const { indexController } = require('../controllers');

router.get('/', indexController.index);

module.exports = router;
