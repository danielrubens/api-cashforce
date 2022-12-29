const service = require('../services/providers')

const getAll = async(req, res) => {
    const providers = await service.getAll()
    return res.status(200).json(providers)
}

module.exports = {getAll}