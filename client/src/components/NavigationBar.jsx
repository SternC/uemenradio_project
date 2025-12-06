import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 
            className="text-3xl md:text-4xl tracking-wider"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              ALTER FM
            </span>
          </h1>
          <p 
            className="text-sm text-gray-300 mt-1"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
          >
            The Sound of Revolution
          </p>
        </div>
        
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
          {['Home', 'Programs', 'Schedule', 'DJs', 'Events', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-red-400 transition-colors font-medium text-sm md:text-base relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-400 hover:after:w-full after:transition-all"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        
        <button 
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="text-lg">▶️</span>
          <span>LIVE NOW</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;