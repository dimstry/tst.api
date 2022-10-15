const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./db/db.js");
const response = require("./response/response.js");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Selamat datang di GTM Isekai");
});

app.get("/register", (req, res) => {
  // register users with validasi dan password hashing
  const { username, password } = req.body;
  const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;
  db.query(sql, (err, result) => {
    if (err) {
      return response(500, null, err, res);
    } else {
      return response(200, result, "Register success", res);
    }
  });
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
