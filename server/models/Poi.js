// models/Poi.js
const pool = require("../config/database.js");

const getAll = async () => {
  const result = await pool.query(`
    SELECT name, ST_X(location::geometry) AS longitude, ST_Y(location::geometry) AS latitude 
    FROM points_of_interest
  `);

  return result.rows;
};

module.exports = {
  getAll,
};
