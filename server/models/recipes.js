'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    static associate({ Ingredients, Directions }) {
      //for ingredients association
      Recipes.hasMany(Ingredients, {
        foreignKey: "recipe_id",
        as: "ingredients"
      })

      //for directions association
      Recipes.hasMany(Directions, {
        foreignKey: "recipe_id", 
        as: 'directions'
      })
    }
  }
  Recipes.init({
    recipe_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    recipe_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    pic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_faved: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    upload_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Recipes',
    tableName: 'recipes',
    timestamps: false
  });
  return Recipes;
};