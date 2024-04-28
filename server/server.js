const express = require("express");
const app = express();
const pool = require("./config/database.js");

app.get("/test", (req, res) => {
  pool.query("SELECT NOW()", (err, result) => {
    if (err) {
      console.error("Error executing query", err.stack);
      res.status(500).send("Error executing query");
    } else {
      console.log("Connected successfully to the database", result.rows[0]);
      res.send("Connected successfully to the database");
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
