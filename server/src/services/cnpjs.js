const {Cnpjs} = require('../models')

const getAll = async () => {
    const cnpjs = await Cnpjs.findAll()
    return cnpjs
}

module.exports = { getAll }