const { User, Task } = require('../database/models');

module.exports = async (username) => {
  const { id } = await User.findOne({ where: { username } });
  
  const tasks = await Task.findAll({ where: { userId: id } });

  return tasks;
};
