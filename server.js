const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("UrbanEats Web is running");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Web running on port 3000");
});