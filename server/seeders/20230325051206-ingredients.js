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
   await queryInterface.bulkInsert('ingredients',[
    {
      content: '2.5 lbs oxtails, chopped',
      recipe_id: 9
     },
     {
      content: '1 tbsp soy sauce',
      recipe_id: 9
     },
     {
      content: '1 tbsp worcestershire sauce',
      recipe_id: 9
     },
     {
      content: '1 tbsp salt',
      recipe_id: 9
     },
     {
      content: '2 tsp garlic powder',
      recipe_id: 9
     },
     {
      content: '1 tsp black pepper',
      recipe_id: 9
     },
     {
      content: '1 tsp ground allspice',
      recipe_id: 9
     },
     {
      content: '1 tsp browning seasoning',
      recipe_id: 9
     },
     {
      content: '1 onion, chopped',
      recipe_id: 9
     },
     {
      content: '4 scallions, chopped',
      recipe_id: 9
     },
     {
      content: '4 cloves garlic, minced',
      recipe_id: 9
     },
     {
      content: '2 carrots, chopped',
      recipe_id: 9
     },
     {
      content: '1 scotch bonnet, minced',
      recipe_id: 9
     },
     {
      content: '1 cup beef broth',
      recipe_id: 9
     },
     {
      content: '1 tbsp ketchup',
      recipe_id: 9
     },
     {
      content: '1 tsp dried thyme',
      recipe_id: 9
     },
     {
      content: '2 tbsp water',
      recipe_id: 9
     },
     {
      content: '1 tbsp cornstarch',
      recipe_id: 9
     },
     {
      content: '1 16oz can of butter beans',
      recipe_id: 9
     },
     {
      content: '3 sprigs fresh thyme',
      recipe_id: 7
     },
     {
      content: '1 scotch bonnet pepper',
      recipe_id: 7
     },
     {
      content: '2 small onions',
      recipe_id: 7
     },
     {
      content: '5 cloves garlic',
      recipe_id: 7
     },
     {
      content: '1 tsp all purpose seasoning',
      recipe_id: 7
     },
     {
      content: '1/2 orange bell pepper',
      recipe_id: 7
     },
     {
      content: '2 scallions',
      recipe_id: 7
     },
     {
      content: '1 tbsp dried whole allspice',
      recipe_id: 7
     },
     {
      content: '1/2 tsp salt',
      recipe_id: 7
     },
     {
      content: '1 tsp lime juice',
      recipe_id: 7
     },
     {
      content: '6 tbsp soy sauce',
      recipe_id: 7
     },
     {
      content: 'small piece of ginger, around 1 inch',
      recipe_id: 7
     },
     {
      content: '1 cup water',
      recipe_id: 7
     },
     {
      content: '2 lb bone in chicken, you can use thighs, wings, drums',
      recipe_id: 7
     },
     {
      content: '1/4 can of beer of your choice',
      recipe_id: 7
     },
   ])
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
