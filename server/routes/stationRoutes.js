import express from "express";
import {
  getStations,
} from "../controllers/stationController.js";

const router = express.Router();

router.get("/stations", getStations);

export default router;
