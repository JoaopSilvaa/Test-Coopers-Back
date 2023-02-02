const { Router } = require('express');
const authentication = require('../middlewares/authorization');

const createTaskController = require('../controllers/createTaskController');

const router = Router();

router.post('/', authentication, createTaskController);

module.exports = router;
