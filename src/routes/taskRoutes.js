const { Router } = require('express');
const authentication = require('../middlewares/authorization');

const createTaskController = require('../controllers/createTaskController');
const readAllTasksController = require('../controllers/readAllTasksController');
const deleteAllTasksController = require('../controllers/deleteAllTasksContoller');
const deleteTaskByIdController = require('../controllers/deleteTaskByIdController');
const updateTaskController = require('../controllers/updateTaskController');

const router = Router();

router.post('/', authentication, createTaskController);
router.get('/', authentication, readAllTasksController);
router.delete('/all/:situation', authentication, deleteAllTasksController);
router.delete('/:id', authentication, deleteTaskByIdController);
router.put('/:id', authentication, updateTaskController);

module.exports = router;
