const service = require('../services/users')

const getAll = async(req, res) => {
    const users = await service.getAll()
    return res.status(200).json(users)
}

module.exports = {getAll}