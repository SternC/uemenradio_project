import React from "react";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import FormPage from "../components/Form.jsx";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section dengan ID "home" */}
        <section
          id="home"
          className="relative h-[70vh] flex items-center justify-center bg-cover bg-center px-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          }}
        >
          <div className="text-center text-white">
            <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-lg text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
            WELCOME TO ALTER FM
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Where Alternative Music Lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg">
                ▶️ LISTEN LIVE
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
                📻 SEE SCHEDULE
              </button>
            </div>
          </div>
        </section>

        {/* Why Listen Section dengan ID "about" */}
        <section id="about" className="py-16 px-4 max-w-6xl mx-auto scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            WHY LISTEN TO ALTER FM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform"
              >
                <div className="text-5xl mb-6 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Live Now Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-2">
            <span className="text-red-500">🔴</span> LIVE NOW
          </h2>
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                The Underground Vibe
              </h3>
              <p className="text-lg mb-2">With DJ Nova • 8PM - 12AM</p>
              <p className="text-lg opacity-90">
                Genre: Indie Electronic / Alternative Rock
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl w-full lg:w-auto min-w-[300px]">
              <div className="flex gap-4 mb-4">
                <button className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  ⏸️
                </button>
                <button className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  🔊
                </button>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-3/5"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Shows */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            UPCOMING SHOWS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shows.map((show, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {show.title}
                </h4>
                <p className="text-gray-600 mb-2">{show.time}</p>
                <p className="text-gray-600">{show.host}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section dengan ID "contact" */}
        <section
          id="contact"
          className="scroll-mt-24 py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-200"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            CONTACT US
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
            <FormPage />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const features = [
  {
    icon: "🎵",
    title: "Curated Playlists",
    description:
      "Handpicked tracks from emerging artists and underground scenes",
  },
  {
    icon: "🎤",
    title: "Live DJ Sets",
    description: "Experience exclusive live performances and DJ mixes",
  },
  {
    icon: "📻",
    title: "24/7 Broadcasting",
    description: "Non-stop music, interviews, and radio shows",
  },
  {
    icon: "🎧",
    title: "High Quality Audio",
    description:
      "Crystal clear 320kbps streaming for the best listening experience",
  },
];

const shows = [
  {
    title: "Midnight Jazz Session",
    time: "Tomorrow • 12AM - 4AM",
    host: "Host: Miles Davis Jr.",
  },
  {
    title: "Alternative Rock Hour",
    time: "Daily • 4PM - 6PM",
    host: "Host: Sarah Stone",
  },
  {
    title: "Electronic Beats",
    time: "Friday • 10PM - 2AM",
    host: "Host: DJ Pulse",
  },
];

export default Home;