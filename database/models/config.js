'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Config.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    order: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Config',
  });
  return Config;
};
