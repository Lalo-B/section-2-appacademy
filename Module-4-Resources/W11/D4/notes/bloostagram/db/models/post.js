"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Image, { foreignKey: "imageId" });

      Post.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Post.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      caption: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
