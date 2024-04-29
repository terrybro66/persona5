// controllers/PoiController.js
const PoiService = require("../services/PoiService");

const getAll = async (req, res) => {
  try {
    const pois = await PoiService.getAll();
    res.json(pois);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching points of interest" });
  }
};

module.exports = {
  getAll,
};
