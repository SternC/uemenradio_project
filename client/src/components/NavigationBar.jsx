import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            ALTER FM
          </h1>
          <p className="text-sm text-gray-300 mt-1">The Sound of Revolution</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
          {["Home", "Stream", "Schedule", "DJs", "Events", "Contact"].map(
            (item) => (
              <li key={item}>
                {item === "Contact" ? (
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-400 hover:after:w-full after:transition-all"
                  >
                    Contact
                  </a>
                ) : (
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-400 hover:after:w-full after:transition-all"
                  >
                    {item}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>

        <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2">
          <span>▶️</span>
          <span>LIVE NOW</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
