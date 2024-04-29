const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./config/database.js");

const UserController = require("./controllers/UserController");
const PoiController = require("./controllers/PoiController");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your client's origin
  })
);
app.get("/users", UserController.getAll);

app.get("/users/:id", UserController.getById);

app.post("/users", UserController.create);

app.get("/pois", PoiController.getAll);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
