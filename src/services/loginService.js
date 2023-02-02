const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const doToken = (user) => {
  const { username } = user;
  const token = jwt.sign({ username }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

module.exports = async (username, password) => {
  if (!username || !password) {
    return {
      error: {
        code: 'badRequest', message: 'Some required fields are missing',
      },
    };
  }
  const verifyPassword = md5(password);
  const user = await User.findOne({ where: { username, password: verifyPassword } });
  if (!user) {
    return {
      error: {
        code: 'badRequest', message: 'Invalid Fields',
      },
    };
  }

  const token = doToken(user);
  return token;
};
