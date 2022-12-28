'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('providers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      tradingName: Sequelize.STRING,
      cashForceTax: Sequelize.STRING,
      responsibleName: Sequelize.STRING,
      responsibleEmail: Sequelize.STRING,
      responsiblePosition: Sequelize.STRING,
      responsiblePhone: Sequelize.STRING,
      responsibleMobile: Sequelize.STRING,
      website: Sequelize.STRING,
      postalCode: Sequelize.STRING,
      address: Sequelize.STRING,
      number: Sequelize.STRING,
      complement: Sequelize.STRING,
      neighborhood: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      bank: Sequelize.STRING,
      bankAgency: Sequelize.STRING,
      account: Sequelize.STRING,
      documents: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      situation: Sequelize.STRING,
      situationDate: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      cnpjId: Sequelize.INTEGER,
      email: Sequelize.STRING
    })
  },

  down: async (queryInterface) => { await queryInterface.dropTable('providers') }
};
