const {Providers} = require('../models')

const getAll = async () => {
    const cnpjs = await Providers.findAll()
    return cnpjs
}

module.exports = { getAll }