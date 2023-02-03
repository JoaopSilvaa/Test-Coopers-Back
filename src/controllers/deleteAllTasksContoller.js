const deleteAllTasksService = require('../services/deleteAllTasksService');

module.exports = async (req, res) => {
  const { situation } = req.params;
  
  await deleteAllTasksService(req.user, situation);

  return res.status(204).send();
};
