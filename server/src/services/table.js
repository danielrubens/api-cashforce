const { Op } = require('sequelize');
const snakeize = require('snakeize');
const { Providers, Orders } = require('../models');

const interflow = { include: [
  { model: Providers, as: 'providers' },
  { model: Orders, as: 'orders' }] };

const getAll = async () => {
    const posts = await Orders.findAll(interflow);
    return posts;
};

module.exports = { getAll }