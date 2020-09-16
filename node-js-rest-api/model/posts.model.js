const { DataTypes, Model } = require("sequelize");
const sequelizePool = require("../config/database");

class posts extends Model {}
posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.TEXT,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize: sequelizePool,
    modelName: "posts",
  }
);

module.exports = posts;
