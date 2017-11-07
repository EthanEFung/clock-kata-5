const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, "../", "client")));

app.get("/", (req, res) => res.send(200));

app.listen(
  PORT,
  err =>
    err
      ? console.log("could not connect", err)
      : console.log("listening on port", PORT)
);
