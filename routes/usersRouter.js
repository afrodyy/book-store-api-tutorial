const router = require("express").Router();
const { registerUser } = require("../controller/usersController");

router.get("/", (req, res) => {});
router.post("/register", registerUser);

module.exports = router;
