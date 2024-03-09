const { ValidationError } = require("sequelize");
const { Book } = require("../models");

const findAllBooks = async (req, res, next) => {
  try {
    const data = await Book.findAll();

    const result = {
      status: true,
      data: data,
    };

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const findBookById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Book.findByPk(id);
    if (data === null) {
      return res.status(404).json({
        status: false,
        message: "Book not found",
      });
    }

    res.json({
      status: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const newBook = await Book.create({
      title: title,
      description: description,
    });

    res.status(201).json({
      status: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const book = await Book.findByPk(id);

    if (book === null) {
      return res.status(404).json({
        status: false,
        message: "Book not found",
      });
    }

    book.title = title;
    book.description = description;

    await book.validate();
    await book.save();

    res.json({
      status: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Book not found",
      });
    }

    book.destroy();

    res.json({
      status: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAllBooks,
  findBookById,
  createBook,
  updateBook,
  deleteBook,
};
