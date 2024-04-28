const express = require("express");
const cors = require("cors");
const app = express();
const UserController = require("./controllers/UserController");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your client's origin
  })
);
app.get("/users", UserController.getAll);

app.get("/users/:id", UserController.getById);

app.post("/users", UserController.create);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
