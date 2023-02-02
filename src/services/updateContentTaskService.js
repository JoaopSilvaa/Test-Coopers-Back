const { User, Task } = require('../database/models');

module.exports = async (username, id, content) => {
  const user = await User.findOne({ where: { username } });

  const task = await Task.findByPk(id);
  
  if (!content) {
    return { error: { code: 'badRequest', message: 'Some required fields are missing' } };
  }

  if (!task) {
    return { error: { code: 'notFound', message: 'Task does not exist' } };
  }

  if (user.id !== task.userId) {
    return {
      error: { code: 'unauthorized', message: 'Unauthorized user' },
    };
  }
  
  await Task.upsert(
    { id, content, userId: user.id },
  );

  return Task.findByPk(id);
};
