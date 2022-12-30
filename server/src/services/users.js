const {Users} = require('../models')

const getAll = async () => {
    const users = await Users.findAll()
    return users
}

module.exports = { getAll }