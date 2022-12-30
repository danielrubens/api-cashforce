const {Orders} = require('../models')

const getAll = async () => Orders.findAll()

module.exports = { getAll }