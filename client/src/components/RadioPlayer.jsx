import React, { useEffect, useState, useRef } from "react";
import api from "./Api.jsx";

export default function RadioPlayer() {
  const [stations, setStations] = useState([]);
  const [currentStation, setCurrentStation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    async function loadStations() {
      try {
        setIsLoading(true);
        const res = await api.get("/stations");
        setStations(res.data);
        if (res.data.length > 0 && !currentStation) {
          setCurrentStation(res.data[0]);
        }
      } catch (err) {
        console.error("Failed to load stations:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadStations();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    
    if (currentStation) {
      audio.src = currentStation.streamUrl;
      audio.volume = volume;
      
      if (isPlaying) {
        audio.play().catch((err) => console.log("Play error:", err));
      }
    }
    
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [currentStation, isPlaying, volume]); 

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
    if (currentStation?.id === station.id) {
      togglePlay(); 
      return;
    }
    setCurrentStation(station);
    setIsPlaying(true); 
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-purple-600 to-pink-600 rounded-full mb-6 shadow-2xl">
          <span className="text-3xl">📻</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Live Radio Stream
        </h2>
      </div>

      <div className="bg-linear-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-8 mb-12 border border-gray-200">
        {currentStation ? (
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🎵</span>
                    </div>
                    {isPlaying && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse">
                        <div className="w-full h-full bg-red-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl md:text-2xl font-bold text-gray-900">
                        {currentStation.name}
                      </h3>
                      {isPlaying && (
                        <span className="px-3 py-1 bg-linear-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-full animate-pulse">
                          🔴 LIVE
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mt-2">{currentStation.websiteUrl}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={togglePlay}
                className="group relative bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg"
              >
                <span className="text-xl">
                  {isPlaying ? "⏸️" : "▶️"}
                </span>
                <span>{isPlaying ? "PAUSE" : "PLAY NOW"}</span>
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 -z-10 transition-opacity"></div>
              </button>
            </div>

            <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔊</span>
                  <span className="text-gray-700 font-semibold text-lg">Volume Control</span>
                </div>
                <span className="px-4 py-2 bg-white rounded-full text-gray-900 font-bold shadow border border-gray-200">
                  {Math.round(volume * 100)}%
                </span>
              </div>
              
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full h-3 bg-linear-to-r from-gray-200 to-purple-200 rounded-full appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:h-7 
                    [&::-webkit-slider-thumb]:w-7 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-linear-to-r 
                    [&::-webkit-slider-thumb]:from-purple-600 
                    [&::-webkit-slider-thumb]:to-pink-600 
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-moz-range-thumb]:h-7
                    [&::-moz-range-thumb]:w-7
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:bg-linear-to-r
                    [&::-moz-range-thumb]:from-purple-600
                    [&::-moz-range-thumb]:to-pink-600"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-3 px-1">
                  <span>Min</span>
                  <span>Medium</span>
                  <span>Max</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-r from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📡</span>
            </div>
            <p className="text-gray-600 text-lg">
              {isLoading ? "Loading stations..." : "Select a station to start listening"}
            </p>
          </div>
        )}
      </div>

      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Available Stations
        </h3>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stations.map((station) => (
              <button
                key={station.id}
                onClick={() => changeStation(station)}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden
                  ${
                    currentStation?.id === station.id
                      ? "border-purple-500 bg-linear-to-br from-purple-50 to-pink-50 shadow-xl scale-[1.02]"
                      : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-lg"
                  }`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-10 translate-x-10 transition-all duration-300
                  ${currentStation?.id === station.id ? "bg-linear-to-r from-purple-100 to-pink-100" : "bg-gray-100 group-hover:bg-purple-50"}`}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow
                        ${currentStation?.id === station.id 
                          ? "bg-linear-to-r from-purple-600 to-pink-600" 
                          : "bg-gray-100 group-hover:bg-linear-to-r group-hover:from-purple-500 group-hover:to-pink-500"}`}
                      >
                        <span className={`text-lg transition-colors duration-300
                          ${currentStation?.id === station.id ? "text-white" : "text-gray-500 group-hover:text-white"}`}
                        >
                          📻
                        </span>
                      </div>
                      <div>
                        <h4 className={`text-xl font-bold transition-colors duration-300 mb-1
                          ${currentStation?.id === station.id ? "text-purple-700" : "text-gray-900 group-hover:text-purple-700"}`}
                        >
                          {station.name}
                        </h4>
                        <p className={`text-sm transition-colors duration-300
                          ${currentStation?.id === station.id ? "text-purple-600" : "text-gray-600 group-hover:text-purple-600"}`}
                        >
                          {station.websiteUrl}
                        </p>
                      </div>
                    </div>
                    
                    {currentStation?.id === station.id && isPlaying && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-linear-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        PLAYING
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300
                      ${currentStation?.id === station.id ? "text-purple-600" : "text-gray-500 group-hover:text-purple-600"}`}
                    >
                      <span className="text-xs">▶️</span>
                      {currentStation?.id === station.id && isPlaying ? "Now Playing • Click to Pause" : "Click to Listen"}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}