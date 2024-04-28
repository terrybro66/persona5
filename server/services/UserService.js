const User = require("../models/User");

const UserService = {
  getAll: async () => {
    const users = await User.getAll();
    return users;
  },

  getById: async (id) => {
    const user = await User.getById(id);
    return user;
  },
  create: async (username, email, password) => {
    const user = await User.create(username, email, password);
    return user;
  },
};

module.exports = UserService;
