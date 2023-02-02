const readAllTasksService = require('../services/readAllTasksService');

module.exports = async (req, res) => {
  const tasks = await readAllTasksService(req.user);

  return res.status(200).json(tasks);
};
