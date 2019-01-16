const router = require('express').Router();
const { testController } = require('../controllers');

router.get('/', testController.test);

module.exports = router;
