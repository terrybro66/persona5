// models/User.js
const pool = require("../config/database.js");

const User = {
  getAll: async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  },

  getById: async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  },

  create: async (username, email, password) => {
    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password]
    );
    return result.rows[0];
  },

  // Add other methods as needed
};

module.exports = User;
