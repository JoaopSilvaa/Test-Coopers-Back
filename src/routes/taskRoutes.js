const { Router } = require('express');
const authentication = require('../middlewares/authorization');

const createTaskController = require('../controllers/createTaskController');
const readAllTasksController = require('../controllers/readAllTasksController');
const deleteAllTasksController = require('../controllers/deleteAllTasksContoller');
const deleteTaskByIdController = require('../controllers/deleteTaskByIdController');

const router = Router();

router.post('/', authentication, createTaskController);
router.get('/', authentication, readAllTasksController);
router.delete('/', authentication, deleteAllTasksController);
router.delete('/:id', authentication, deleteTaskByIdController);

module.exports = router;
