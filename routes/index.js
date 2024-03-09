const router = require("express").Router();
const booksRouter = require("./booksRouter");
const usersRouter = require("./usersRouter");

router.use("/api/v1", booksRouter);
router.use("/api/v1/users", usersRouter);

module.exports = router;
