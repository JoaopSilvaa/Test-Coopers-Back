const { User, Task } = require('../database/models');

module.exports = async (username, id) => {
  const user = await User.findOne({ where: { username } });

  const task = await Task.findByPk(id);
  
  if (!task) {
    return {
      error: {
        code: 'notFound', message: 'Task does not exist',
      },
    };
  }

  if (user.id !== task.userId) {
    return {
      error: { 
        code: 'unauthorized', message: 'Unauthorized user',
      },
    };
  }
  
  const tasks = await Task.destroy({ where: { id } });

  return tasks;
};
