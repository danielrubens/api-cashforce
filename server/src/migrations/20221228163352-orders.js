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
      orderNfId: Sequelize.STRING(255),
      orderNumber: Sequelize.STRING(255),
      orderPath: Sequelize.STRING(255),
      orderFileName: Sequelize.STRING(255),
      orderOriginalName: Sequelize.STRING(255),
      emissionDate: Sequelize.STRING(255),
      pdfFile: Sequelize.STRING(255),
      emitedTo: Sequelize.STRING(255),
      nNf: Sequelize.STRING(255),
      CTE: Sequelize.STRING(255),
      value: Sequelize.STRING(255),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      cnpjId: Sequelize.INTEGER,
      userId: Sequelize.INTEGER,
      buyerId: Sequelize.INTEGER,
      providerId: Sequelize.INTEGER,
      orderStatusBuyer: Sequelize.STRING(255),
      orderStatusProvider: Sequelize.STRING(255),
      deliveryReceipt: Sequelize.STRING(255),
      cargoPackingList: Sequelize.STRING(255),
      deliveryCtrc: Sequelize.STRING(255)
    })
  },

  down: async (queryInterface) => { await queryInterface.dropTable('orders') }
};