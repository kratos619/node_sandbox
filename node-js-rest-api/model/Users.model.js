const { DataTypes, Model } = require("sequelize");
const sequelizePool = require("../config/database");

class users extends Model {}
users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    user_type: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  },
  {
    sequelize: sequelizePool,
    modelName: "users",
  }
);

module.exports = users;
