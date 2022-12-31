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
      nDup: Sequelize.STRING(255),
      dVenc: Sequelize.STRING(255),
      vDup: Sequelize.STRING(255),
      availableToMarket: Sequelize.INTEGER,
    })
  },

  down: async (queryInterface) => { await queryInterface.dropTable('orderportions') }
};