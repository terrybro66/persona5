// services/PoiService.js
const Poi = require("../models/Poi");

const getAll = async () => {
  return await Poi.getAll();
};

module.exports = {
  getAll,
};
