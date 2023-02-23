const Router = require('express');
const userController = require('../controllers/userController');
const middleWare = require('../middleWare/middleWare');

const router = new Router();

router.post('/registration',userController.registration);
router.post('/login',userController.login);
router.get('/auth',middleWare,userController.check);

module.exports = router