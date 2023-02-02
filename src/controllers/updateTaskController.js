const updateContentTaskService = require('../services/updateContentTaskService');
const updateSituationService = require('../services/updateSituationService');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!content) {
    const task = await updateSituationService(req.user, id);  
    
    if (task.error) return next(task.error);

    return res.status(200).json(task);
  }
  
  const task = await updateContentTaskService(req.user, id, content);

  if (task.error) return next(task.error);

  return res.status(200).json(task);
};
