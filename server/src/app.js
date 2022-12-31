const express = require('express');
const controller = require('./controllers')

const app = express();
app.use(express.json());

app.get('/cnpjs', controller.cnpjs.getAll)
app.get('/providers', controller.providers.getAll)
app.get('/users', controller.users.getAll)
app.get('/buyers', controller.buyers.getAll)
app.get('/orders', controller.orders.getAll)
app.get('/table', controller.table.getAll)


module.exports = app;