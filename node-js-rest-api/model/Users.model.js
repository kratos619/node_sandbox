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
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: " name field required " },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Enter Valid Email Address",
        },
        notEmpty: { args: true, msg: " email field required " }, // don't allow empty strings
      },
      unique: {
        args: true,
        msg: "Email address already in use!",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: "password field required " },
        notNull: {
          args: true,
          msg: "password field required ",
        },
        min: {
          args: 8,
          msg: "password at least 8 char long..",
        },
      },
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
// users.sync({ force: true });

module.exports = users;
