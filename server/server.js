import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/Database.js';
dotenv.config();

const app = express();

try {
  await db.authenticate();
  console.log("✅ Database connected");

  await db.sync();
  console.log("📦 Models synced");
} catch (err) {
  console.error("❌ Database connection error:", err);
}

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

import formRoutes from './routes/formRoutes.js';
import StationRoutes from './routes/stationRoutes.js';
app.use('/api', formRoutes);
app.use('/api', StationRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
