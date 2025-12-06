import express from "express";
import {
  createStation,
  getStations,
  getStationById,
  updateStation,
  deleteStation,
  checkStream,
  proxyStream,
} from "../controllers/stationController.js";

const router = express.Router();

router.post("/stations", createStation);
router.get("/stations", getStations);
router.get("/stations/:id", getStationById);
router.put("/stations/:id", updateStation);
router.delete("/stations/:id", deleteStation);

router.get("/stations/check", checkStream);
router.get("/stations/stream", proxyStream);

export default router;
