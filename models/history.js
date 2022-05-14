"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "history user",
      });
    }
  }
  History.init(
    {
      score: DataTypes.INTEGER,
      score_date: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
