const deleteAllTasksService = require('../services/deleteAllTasksService');

module.exports = async (req, res) => {
  await deleteAllTasksService(req.user);

  return res.status(204).send();
};
