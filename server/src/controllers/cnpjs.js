const service = require('../services/cnpjs')

const getAll = async(req, res) => {
    const cnpjs = await service.getAll()
    return res.status(200).json(cnpjs)
}

module.exports = {getAll}