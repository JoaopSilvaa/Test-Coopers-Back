const deleteTaskByIdService = require('../services/deleteTaskByIdService');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const tasks = await deleteTaskByIdService(req.user, id);

  if (tasks.error) return next(tasks.error);

  return res.status(204).send();
};
