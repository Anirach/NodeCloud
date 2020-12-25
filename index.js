require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("Hello Node.js World! it is done");
=======
  res.send("Hello Node.js Changing..World!");
>>>>>>> b4574a22d0d811d85e8b23e1ed535d2cafc4f8c9
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
