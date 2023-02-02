require('dotenv').config();

const development = {
  host: process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || '3306',
  database: process.env.MYSQLDATABASE || 'test-coopers',
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '210122',
  dialect: 'mysql',
};

module.exports = {
  development,
};
