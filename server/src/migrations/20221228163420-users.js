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
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      mobile: Sequelize.STRING,
      departament: Sequelize.STRING,
      verificationCode: Sequelize.STRING,
      emailChecked: Sequelize.INTEGER
    })
  },

  down: async (queryInterface) => { await queryInterface.dropTable('users') }
};