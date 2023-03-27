'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredients extends Model {
    static associate({ Recipes }) {
      Ingredients.belongsTo(Recipes, {
        foreignKey: "recipe_id",
        as: "recipe"
      })
    }
  }
  Ingredients.init({
    ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Ingredients',
    tableName: 'ingredients',
    timestamps: false
  });
  return Ingredients;
};