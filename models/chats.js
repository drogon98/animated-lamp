"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.ChatInfo);
    }
  }
  Chat.init(
    {
      message: DataTypes.TEXT,
      chatId: DataTypes.STRING,
      senderId: DataTypes.INTEGER,
      read: { defaultValue: false, type: DataTypes.BOOLEAN },
    },
    {
      sequelize,
      modelName: "Chat",
    }
  );
  return Chat;
};
