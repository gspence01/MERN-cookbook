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
   await queryInterface.bulkInsert('ingredients',[{
    content: '2 canned ackee',
    recipe_id: 1
   },
   {
    content: '1 lb saltfish',
    recipe_id: 1
   },
   {
    content: '1 Onions Sliced',
    recipe_id: 1
   },
   {
    content: '1 small tomato diced',
    recipe_id: 1
   },
   {
    content: '1 scotch bonnet minced',
    recipe_id: 1
   },
   {
    content: '1/2 tsp black pepper',
    recipe_id: 1
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ingredients', null, {})
  }
};
