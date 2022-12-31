const {Orders, Cnpjs, Users} = require('../models')

const interflow = { include: [
  { model: Cnpjs, as: '_cnpjId' }, {model: Users, as: 'user'}] };

const getAll = async () => Orders.findAll(interflow)

module.exports = { getAll }