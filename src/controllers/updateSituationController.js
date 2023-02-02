const updateSituationService = require('../services/updateSituationService');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const task = await updateSituationService(req.user, id);

  if (task.error) return next(task.error);

  return res.status(200).json(task);
};
