'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Directions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Directions.init({
    direction_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    recipe_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Directions',
  });
  return Directions;
};