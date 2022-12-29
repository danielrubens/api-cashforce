const express = require('express');
const controller = require('./controllers')

const app = express();
app.use(express.json());

app.get('/cnpjs', controller.cnpjs.getAll)
app.get('/providers', controller.providers.getAll)

module.exports = app;