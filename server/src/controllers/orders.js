const service = require('../services/orders')

const getAll = async(req, res) => {
    const orders = await service.getAll()
    return res.status(200).json(orders)
}

module.exports = {getAll}