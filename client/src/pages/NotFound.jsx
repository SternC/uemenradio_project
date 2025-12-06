import React from "react";
import Navbar from "../components/NavigationBar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section
          className="relative h-[70vh] flex flex-col items-center justify-center bg-cover bg-center px-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1596496055365-5c3122f659d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          }}
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-shadow-lg"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            404
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white opacity-90 text-center">
            Oops! The page you're looking for does not exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg text-center"
            >
              🏠 GO HOME
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NotFound;
