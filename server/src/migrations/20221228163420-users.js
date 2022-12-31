'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING(255),
      email: Sequelize.STRING(255),
      phoneNumber: Sequelize.STRING(255),
      mobile: Sequelize.STRING(255),
      departament: Sequelize.STRING(255),
      verificationCode: Sequelize.STRING(255),
      emailChecked: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      cashforceAdm: Sequelize.INTEGER
    })
  },

  down: async (queryInterface) => { await queryInterface.dropTable('users') }
};