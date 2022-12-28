'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      orderNfId: Sequelize.STRING,
      orderNumber: Sequelize.STRING,
      orderPath: Sequelize.STRING,
      orderFileName: Sequelize.STRING,
      orderOriginalName: Sequelize.STRING,
      emissionDate: Sequelize.STRING,
      pdfFile: Sequelize.STRING,
      emitedTo: Sequelize.STRING,
      nNf: Sequelize.STRING,
      CTE: Sequelize.STRING,
      value: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      cnpjId: Sequelize.INTEGER,
      userId: Sequelize.INTEGER,
      buyerId: Sequelize.INTEGER,
      providerId: Sequelize.INTEGER,
      orderStatusBuyer: Sequelize.STRING,
      orderStatusProvider: Sequelize.STRING,
      deliveryReceipt: Sequelize.STRING,
      cargoPackingList: Sequelize.STRING,
      deliveryCtrc: Sequelize.STRING
    })
  },

  down: async (queryInterface) => { await queryInterface.dropTable('orders') }
};