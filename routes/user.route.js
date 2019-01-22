const router = require('express').Router();
const { userController, authController } = require('../controllers');

router.get('/', authController, userController.getAll);
router.post('/', userController.create);

module.exports = router;
