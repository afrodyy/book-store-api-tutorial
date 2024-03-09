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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Nama tidak boleh kosong" },
          notNull: { args: true, msg: "Nama tidak boleh kosong" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Email tidak boleh kosong" },
          notNull: { args: true, msg: "Email tidak boleh kosong" },
          isEmail: { args: true, msg: "Format email harus valid" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Password tidak boleh kosong" },
          notNull: { args: true, msg: "Password tidak boleh kosong" },
          len: [6, 10],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
