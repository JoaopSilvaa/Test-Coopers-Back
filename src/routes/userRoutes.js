const { Router } = require('express');

const login = require('../controllers/loginController');

const router = Router();

router.post('/login', login);

module.exports = router;
