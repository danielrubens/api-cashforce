const express = require('express');
const controller = require('./controllers')

const app = express();
app.use(express.json());

app.get('/', controller.table.getAll)
app.get('/:id', controller.table.getById )
app.get('/cnpjs', controller.cnpjs.getAll)
app.get('/providers', controller.providers.getAll)
app.get('/users', controller.users.getAll)
app.get('/buyers', controller.buyers.getAll)
app.get('/orders', controller.orders.getAll)


module.exports = app;