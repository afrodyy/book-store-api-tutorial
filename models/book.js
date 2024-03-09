"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Author, {
        as: "Authors",
        foreignKey: "authorId",
      });
    }
  }
  Book.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Judul buku tidak boleh kosong" },
          notNull: { args: true, msg: "Judul buku tidak boleh kosong" },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Deskripsi buku tidak boleh kosong" },
          notNull: { args: true, msg: "Deskripsi buku tidak boleh kosong" },
        },
      },
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
