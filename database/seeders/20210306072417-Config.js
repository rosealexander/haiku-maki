'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert(
          'Configs',
          [
            {
              order: [5, 1, 4, 3, 1, 2]
            }
          ],
          {})
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete('Configs', null, {})
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};
