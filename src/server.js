require('dotenv').config();

const port = process.env.PORT || 3001;
const app = require('./app');

app.get('/', (_request, response) => {
  response.status(200).json({ message: 'ok' });
});

app.listen(port);
console.log(`Api listening in port: ${port}`);
