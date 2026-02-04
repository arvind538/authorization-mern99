
const Service = require("../models/service-model");

const getService = async (req, res) => {
  try {
    const response = await Service.find();

    if (!response || response.length === 0) {
      return res.status(404).json({ msg: "No service found" });
    }

    res.status(200).json(response);
  } catch (error) {
    console.log(`service error: ${error}`);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = getService;
