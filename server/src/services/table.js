const {Orders, Cnpjs, Users, Buyers, Providers} = require('../models')

const interflow = { include: [
  { model: Cnpjs, as: '_cnpjId' }, {model: Users, as: 'user'}, 
  {model: Buyers, as: 'buyer'}, {model: Providers, as: 'provider'}] };

const getAll = async () => Orders.findAll(interflow)

module.exports = { getAll }