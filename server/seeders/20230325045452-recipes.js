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
   await queryInterface.bulkInsert('recipes', [{
    recipe_name: 'Ackee and Saltfish',
    description: "A salty, spicy, breakfast item made with Jamaica's national fruit",
    pic: "../../public/ackee-pic.jpg",
    is_faved: false,
    upload_date: '2022-01-17'
   },
   {
    recipe_name: 'Festival',
    description: "A fried cornmeal dumpling that goes well with any Jamican entree.",
    pic: "../../public/festival.jpg",
    is_faved: false,
    upload_date: '2021-01-17'
   },
   {
    recipe_name: 'Curry Goat',
    description: "A spicy curry full of goat, aromatics, and vegetables.",
    pic: "../../public/jamaican-goat-curry.jpg",
    is_faved: false,
    upload_date: '2022-05-20'
   },
   {
    recipe_name: 'Jerk Chicken',
    description: "A classic Jamaican dish you will find at any shop.",
    pic: "../../public/jerk_chicken.jpg",
    is_faved: false,
    upload_date: '2023-01-17'
   },
   {
    recipe_name: 'Mackerel Rundown',
    description: "This is an old Jamaican classic, known for its sweetness and spiciness.",
    pic: "../../public/mackerel.jpeg",
    is_faved: false,
    upload_date: '2022-01-17'
   },
   {
    recipe_name: 'Oxtail',
    description: "This is a spicy stew-like dish with fall-off-the-bone oxtail simmered in a delicious broth",
    pic: "../../public/oxtail.jpg",
    is_faved: false,
    upload_date: '2022-01-17'
   }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('recipes',null, {});
  }
};
