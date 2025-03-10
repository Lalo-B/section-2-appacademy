"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING(75),
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [2, 75],
            msg: "name must be between 2 and 20 characters",
          },
          noSpecialChars(value) {
            const specialChars = "!@#$%^&*()-=_+<>?/]";
            for (let char of value) {
              if (specialChars.includes(char)) {
                throw new Error(
                  "You can not use these characters: !@#$%^&*()-=_+<>?/]"
                );
              }
            }
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: DataTypes.TEXT,
      profilePic: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
