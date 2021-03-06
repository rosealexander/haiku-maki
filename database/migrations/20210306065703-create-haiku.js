'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Haikus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text1: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      text2: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      text3: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      author: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Haikus');
  }
};
