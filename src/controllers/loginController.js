const loginService = require('../services/loginService');

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const token = await loginService(username, password);

  if (token.error) return next(token.error);

  return res.status(200).json({ token });
};
