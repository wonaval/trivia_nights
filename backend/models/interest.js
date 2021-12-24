'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  interest.init({
    userid: DataTypes.INTEGER,
    music: DataTypes.BOOLEAN,
    film: DataTypes.BOOLEAN,
    sports: DataTypes.BOOLEAN,
    general: DataTypes.BOOLEAN,
    popular: DataTypes.BOOLEAN,
    history: DataTypes.BOOLEAN,
    science: DataTypes.BOOLEAN,
    current: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'interest',
  });
  return interest;
};