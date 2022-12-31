const service = require('../services/table')

const getAll = async(req, res) => {
    const table = await service.getAll()
    return res.status(200).json(table)
}

module.exports = {getAll}