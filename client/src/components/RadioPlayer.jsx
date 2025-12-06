import React, { useEffect, useState, useRef } from "react";
import api from "./Api.jsx";

export default function RadioPlayer() {
  const [stations, setStations] = useState([]);
  const [currentStation, setCurrentStation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    async function loadStations() {
      try {
        const res = await api.get("/stations");
        setStations(res.data);
      } catch (err) {
        console.error("Failed to load stations:", err);
      }
    }
    loadStations();
  }, []);

  useEffect(() => {
    if (currentStation) {
      const audio = audioRef.current;
      audio.src = currentStation.streamUrl;
      audio.volume = volume;
      audio.play().catch((err) => console.log("Play error:", err));
      setIsPlaying(true);
    }
  }, [currentStation]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!currentStation) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((err) => console.log("Play error:", err));
      setIsPlaying(true);
    }
  };

  const changeStation = (station) => {
    if (currentStation?.id === station.id) return;
    setCurrentStation(station);
  };

  return (
    <section className="py-16 px-5 max-w-6xl mx-auto">

      <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
        {currentStation ? (
          <>
            <h3 className="text-2xl font-bold mb-2 text-purple-700">
              {currentStation.name}
            </h3>
            <p className="text-gray-600 mb-4">{currentStation.websiteUrl}</p>

            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={togglePlay}
                className="bg-purple-600 text-white px-6 py-3 rounded-full text-xl hover:bg-purple-700 transition"
              >
                {isPlaying ? "⏸️ Pause" : "▶️ Play"}
              </button>
              {isPlaying && (
                <div className="animate-pulse text-purple-600 font-semibold">
                  🔴 LIVE ON AIR
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="volume" className="text-gray-700 font-semibold">
                🔊 Volume:
              </label>
              <input
                id="volume"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-gray-600">{Math.round(volume * 100)}%</span>
            </div>
          </>
        ) : (
          <p className="text-gray-600 text-center">
            Select a station below to start listening.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stations.map((station) => (
          <button
            key={station.id}
            onClick={() => changeStation(station)}
            className={`p-5 rounded-xl border shadow-md text-left transition
              ${
                currentStation?.id === station.id
                  ? "bg-purple-600 text-white border-purple-700"
                  : "bg-white hover:bg-purple-50 border-gray-200"
              }`}
          >
            <h4 className="text-xl font-bold">{station.name}</h4>
            <p className="text-sm opacity-80">{station.websiteUrl}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
