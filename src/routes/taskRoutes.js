const { Router } = require('express');
const authentication = require('../middlewares/authorization');

const createTaskController = require('../controllers/createTaskController');
const readAllTasksController = require('../controllers/readAllTasksController');

const router = Router();

router.post('/', authentication, createTaskController);
router.get('/', authentication, readAllTasksController);

module.exports = router;
