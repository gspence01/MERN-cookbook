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
   await queryInterface.bulkInsert('directions', [
    {
      content: 'Wash oxtails with water, lime juice, or vinegar and pat dry. Season with brown sugar, soy sauce, worsestershire sauce, salt, garlic powder, black pepper, allspice, and browning.',
      recipe_id: 9
     },
     {
      content: 'Brown oxtails in oil on high heat in a large pan. Remove and set aside.',
      recipe_id: 9
     },
     {
      content: 'Deglaze pan with a little bit of beef broth and add onions, scallions, carrots, garlic, and scotch bonnet. Sautee until onions are soft.',
      recipe_id: 9
     },
     {
      content: 'Add thyme, oxtails, ketchup, and remaining beef broth.',
      recipe_id: 9
     },
     {
      content: 'Bring broth to a boil and simmer for 1 to 2 hours until oxtail is tender and falling off the bone. Add water if needed through cooking process.',
      recipe_id: 9
     },
     {
      content: 'Mix corn starch and water together. Once meat is finished cooking, remove vegetables and meat and add cornstarch slurry to liquid.',
      recipe_id: 9
     },
     {
      content: 'Add butter beans to simmering liquid and simmer for 5 minutes until thickened and beans are warmed.',
      recipe_id: 9
     },
     {
      content: 'Return meat and vegetables to liquid, stir, and serve.',
      recipe_id: 9
     },
     {
      content: 'Combine all ingredients, besides chicken and beer, in a food processor and blend until a smooth paste forms.',
      recipe_id: 7
     },
     {
      content: 'In the meantime, wash chicken with either vinegar or lime juice to remove any gamey taste. Pat dry.',
      recipe_id: 7
     },
     {
      content: 'Place chicken in a large bowl and pour spice marinade over. Cover chicken and refrigerate for at least two hours to overnight.',
      recipe_id: 7
     },
     {
      content: 'Once ready to cook, heat grill to 400F or oven to 425F.',
      recipe_id: 7
     },
     {
      content: 'Cook chicken in preheated grill/oven and baste with a little bit of the beer. Cook on one side for 10 minutes or until slightly charred.',
      recipe_id: 7
     },
     {
      content: 'Once cooked on one side, flip chicken and baste with more beer. Continue cooking and flipping as needed until cooked through, around 15 to 20 more minutes.',
      recipe_id: 7
     }
   ], {})
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
