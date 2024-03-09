const express = require("express");
const app = express();
const router = require("./routes/index");
const errHandler = require("./middleware/errHandler");
const port = 3333;

app.use(express.json());
app.use(router);
app.use(errHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("Server running on port " + port));
