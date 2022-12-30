const {Cnpjs} = require('../models')

const getAll = async () => Cnpjs.findAll()

module.exports = { getAll }