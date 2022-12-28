require('dotenv').config();
const app = require('./app');

const port = process.env.API_PORT || 3000;

app.get('/', (_, res) => {
  res.status(200).json({message: "Hello"});
});

app.listen(port, () => console.log('ouvindo porta', port));