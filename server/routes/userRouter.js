const Router = require('express');
const userController = require('../controllers/userController');
const middleWare = require('../middleWare/middleWare');
const checkRoleMiddleWare = require('../middleWare/checkRoleMiddleWare')

const router = new Router();

router.post('/registration',userController.registration);
router.post('/login',userController.login);
router.get('/auth',middleWare,userController.check);
router.post('/delete',userController.delete);
router.get('/getall',userController.getAll);

module.exports = router