const createTaskService = require('../services/createTaskService');

module.exports = async (req, res, next) => {
  const { content } = req.body;

  const task = await createTaskService(req.user, content);

  if (task.error) return next(task.error);

  return res.status(201).json({ message: 'Task created successfully' });
};
