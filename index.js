const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello Node!");
});

app.listen(PORT, () => {
  console.log(`server listen in PORT : ${PORT}`);
});
