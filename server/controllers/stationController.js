import Station from "../models/Station.js";

export const getStations = async (req, res) => {
  try {
    const stations = await Station.findAll();
    res.json(stations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};