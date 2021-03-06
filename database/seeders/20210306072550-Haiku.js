'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert(
          'Haikus',
          [
            {
              text1: "A bare pecan tree",
              text2: "slips a pencil shadow down",
              text3: "a moonlit snow slope",
              author: "Etheridge Knight",
            },
            {
              text1: "Love between us is",
              text2: "speech and breath. loving you is",
              text3: "a long river running",
              author: "Sonia Sanchez",
            },
            {
              text1: "today's very light",
              text2: "and it's about to be tight",
              text3: "let's rock on tonight",
              author: "Nicci",
            },
            {
              text1: "a Klingon overboard",
              text2: "a first officer to blame",
              text3: "Data, not funny",
              author: "the captain's log",
            },
            {
              text1: "Bender, a robot",
              text2: "He has but one simple dream",
              text3: "to kill all humans",
              author: "Ben Rodríguez",
            },
            {
              text1: "life’s little, our heads",
              text2: "sad. Redeemed and wasting clay",
              text3: "this chance. Be of use.",
              author: "Ravi Shankar",
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
      await queryInterface.bulkDelete('Haikus', null, {})
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};
