const service = require('../services/table')

const getAll = async (req, res) => {
    const table = await service.getAll()
    return res.status(200).json(table)
}

const getById = async (req, res) => {
    const table = await service.getAll()
    const found = table.filter((i) => i.id === Number(req.params.id))
    return res.status(200).json(found)
}
module.exports = {getAll, getById}