const service = require('../services/buyers')

const getAll = async(req, res) => {
    const buyers = await service.getAll()
    return res.status(200).json(buyers)
}

module.exports = {getAll}