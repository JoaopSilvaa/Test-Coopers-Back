const express = require('express');
const cors = require('cors');
require('express-async-errors');
const errorMiddleware = require('./middlewares/errors');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/task', taskRoutes);

app.use(errorMiddleware);

module.exports = app;
