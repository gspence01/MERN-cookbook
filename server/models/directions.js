'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Directions extends Model {
    static associate({ Recipes }) {
      Directions.belongsTo(Recipes, {
        foreignKey: "recipe_id",
        as: "recipe"
      })
    }
  }
  Directions.init({
    direction_id: {
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
    }
  }, {
    sequelize,
    modelName: 'Directions',
    tableName: 'directions',
    timestamps: false
  });
  return Directions;
};