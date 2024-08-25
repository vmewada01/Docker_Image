const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Docker!");
});

// Start the server on port 3000
console.log(process.env.NODE_ENV, "Starting on port 3000");
const port = process.env.NODE_ENV || 3000;
app.listen(port, () => {
  console.log("Server is running on port 3000");
});
