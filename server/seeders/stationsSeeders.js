import Station from "../models/Station.js";

const stations = [
  {
    name: "Prambors FM",
    streamUrl: "https://s2.cloudmu.id/listen/prambors/stream",
    websiteUrl: "https://www.pramborsfm.com",
    isActive: true,
  },
  {
    name: "Hard Rock FM",
    streamUrl: "https://stream.rcs.revma.com/ye5kghkgcm0uv",
    websiteUrl: "https://hardrockfm.com",
    isActive: true,
  },
  {
    name: "Delta FM",
    streamUrl: "https://s1.cloudmu.id/listen/delta_fm/stream",
    websiteUrl: "https://deltafm.net",
    isActive: true,
  },
  {
    name: "Trax FM",
    streamUrl: "https://stream.radiojar.com/rrqf78p3bnzuv",
    websiteUrl: "https://traxfm.com",
    isActive: true,
  },
];

async function seed() {
  try {
    await Station.destroy({ where: {}, truncate: true });

    for (const s of stations) {
      await Station.create(s);
    }

    console.log("✅ Radio stations seeded (reset first)");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeder error:", err);
    process.exit(1);
  }
}

seed();
