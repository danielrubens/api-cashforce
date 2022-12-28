'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tax: Sequelize.STRING,
      tariff: Sequelize.STRING,
      adValorem: Sequelize.STRING,
      float: Sequelize.STRING,
      iof: Sequelize.STRING,
      expiresIn: Sequelize.DATE,
      paymentStatusSponsor: Sequelize.INTEGER,
      paymentStatusProvider: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      orderId: Sequelize.INTEGER,
      sponsorId: Sequelize.INTEGER
    })
  },

  down: async (queryInterface) => { await queryInterface.dropTable('offers') }
};
