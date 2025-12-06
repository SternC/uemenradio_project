
import axios from "axios";
import Station from "../models/Station.js";
import request from "request";

export const createStation = async (req, res) => {
  try {
    const station = await Station.create(req.body);
    res.json(station);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getStations = async (req, res) => {
  try {
    const stations = await Station.findAll();
    res.json(stations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStationById = async (req, res) => {
  try {
    const station = await Station.findByPk(req.params.id);
    if (!station) return res.status(404).json({ error: "Station not found" });
    res.json(station);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateStation = async (req, res) => {
  try {
    const station = await Station.findByPk(req.params.id);
    if (!station) return res.status(404).json({ error: "Station not found" });

    await station.update(req.body);
    res.json(station);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteStation = async (req, res) => {
  try {
    const station = await Station.findByPk(req.params.id);
    if (!station) return res.status(404).json({ error: "Station not found" });

    await station.destroy();
    res.json({ message: "Station deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const checkStream = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing stream URL" });

  try {
    const response = await axios.head(url, { timeout: 4000 });

    const type = response.headers["content-type"];
    const icyName = response.headers["icy-name"];

    const isLive =
      type?.includes("audio") ||
      type?.includes("mpeg") ||
      icyName;

    res.json({
      live: !!isLive,
      contentType: type || null,
      stationName: icyName || "Unknown",
    });
  } catch (err) {
    res.json({ live: false, error: "UNREACHABLE" });
  }
};

export const proxyStream = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing stream URL" });

  req.pipe(request(url)).pipe(res);
};
