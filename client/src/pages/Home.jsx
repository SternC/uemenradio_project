import React from "react";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";
import FormPage from "../components/Form.jsx";
import RadioPlayer from "../components/RadioPlayer";
import About from '../components/About.jsx';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow">
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-5 pb-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
            backgroundAttachment: "fixed" 
          }}
        >
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow-lg"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ALTER FM
            </h1>
            <p className="text-2xl md:text-3xl mb-10 opacity-95 font-light">
              The Sound of Revolution
            </p>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
              Where Alternative Music Lives • Broadcasting Since 2010
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/notfound"
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 md:px-10 md:py-5 rounded-full font-semibold text-base md:text-xl hover:scale-105 transition-transform shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl inline-flex items-center justify-center"
                >
                    ▶️ LISTEN LIVE NOW
                </Link>
                <Link 
                  to="/programs"
                  className="bg-transparent border-2 md:border-3 border-white text-white px-6 py-3 md:px-10 md:py-5 rounded-full font-semibold text-base md:text-xl hover:scale-105 transition-transform hover:bg-white/10 inline-flex items-center justify-center"
                >
                    📻 SEE SCHEDULE
                </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 max-w-6xl mx-auto">
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
              
        <About />
    
        <section
          id="stations"
          className="scroll-mt-24 py-20 px-6 bg-linear-to-b from-gray-100 to-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            LISTEN TO INDONESIAN RADIO
          </h2>
          <div className="bg-gray-100 p-8 rounded-2xl shadow-xl border border-gray-200">
            <RadioPlayer />
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 py-20 px-6 bg-linear-to-b from-gray-100 to-gray-200"
        >
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

export default Home;