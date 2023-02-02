const { User, Task } = require('../database/models');

module.exports = async (username, content) => {
  const { id } = await User.findOne({ where: { username } });

  if (!content) {
    return {
      error: {
        code: 'badRequest',
        message: 'Some required fields are missing',
      },
    };
  }

  const task = await Task.create({
    content,
    userId: id,
  });

  return task;
};
