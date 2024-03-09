const router = require("express").Router();
const {
  findAllBooks,
  findBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/BooksController");

router.get("/books", findAllBooks);
router.get("/books/:id", findBookById);
router.post("/books/", createBook);
router.patch("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
