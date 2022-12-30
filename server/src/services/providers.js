const {Providers} = require('../models')

const getAll = async () =>  Providers.findAll()

module.exports = { getAll }