'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nDup: Sequelize.STRING,
      dVenc: Sequelize.STRING,
      vDup: Sequelize.STRING,
      availableToMarket: Sequelize.INTEGER,
    })
  },

  down: async (queryInterface) => { await queryInterface.dropTable('orderportions') }
};