const {Buyers} = require('../models')

const getAll = async () => Buyers.findAll()

module.exports = { getAll }