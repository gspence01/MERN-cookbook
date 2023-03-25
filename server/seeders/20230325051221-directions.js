'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('directions', [{
    content: 'Soak the saltfish for two hours.',
    recipe_id: 1
   },
   {
    content: 'Drain saltfish and boil with fresh water for 15 minutes.',
    recipe_id: 1
   },
   {
    content: 'Drain and dry the fish. Once cool, debone and shred the fish',
    recipe_id: 1
   },
   {
    content: 'Heat oil in saucepan on medium heat. Add onions, scotch bonnet, garlic, and tomatoes and sautee until onions are transluscent.',
    recipe_id: 1
   },
   {
    content: 'Add the flaked saltfish and cook for another few minutes until heated through.',
    recipe_id: 1
   },
   {
    content: 'Add ackee, lower heat, and let simmer for around 10 minutes.',
    recipe_id: 1
   },
   {
    content: 'Remove pan from heat and add black pepper',
    recipe_id: 1
   }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('directions', null, {})
  }
};
