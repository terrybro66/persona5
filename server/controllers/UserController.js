const UserService = require("../services/UserService");

const UserController = {
  getAll: async (req, res) => {
    const users = await UserService.getAll();
    res.send(users);
  },
  getById: async (req, res) => {
    const id = req.params.id;
    const user = await UserService.getById(id);
    res.send(user);
  },

  create: async (req, res) => {
    const { username, email, password } = req.body;
    const user = await UserService.create(username, email, password);
    res.send(user);
  },
};

module.exports = UserController;
