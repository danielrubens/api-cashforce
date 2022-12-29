const express = require('express');
const controller = require('./controllers/cnpjs')

const app = express();
app.use(express.json());
app.get('/cnpjs', controller.getAll)


module.exports = app;