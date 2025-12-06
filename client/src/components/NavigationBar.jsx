import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ScrollToSection from "./ScrollToSection";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "Programs", to: null, path: "/programs" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Mobile Header */}
        <div className="flex justify-between items-center md:hidden">
          <div className="text-left">
            <h1 
              className="text-3xl tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-orange-500">
                ALTER FM
              </span>
            </h1>
            <p 
              className="text-xs text-gray-300 mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              The Sound of Revolution
            </p>
          </div>
          
          <button 
            className="text-2xl text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="text-left">
            <h1 
              className="text-3xl tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-orange-500">
                ALTER FM
              </span>
            </h1>
            <p 
              className="text-xs text-gray-300 mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              The Sound of Revolution
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.to ? (
                  // Scroll ke section
                  <ScrollToSection to={item.to}>
                    <a
                      href={`#${item.to}`}
                      className="text-gray-300 hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-400 hover:after:w-full after:transition-all cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </ScrollToSection>
                ) : (
                  // Link biasa untuk halaman
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-400 hover:after:w-full after:transition-all"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile Dropdown Menu dengan perbaikan transition */}
        <div className={`
          md:hidden w-full
          overflow-hidden 
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
        `}>
          <ul className="flex flex-col items-center gap-2 py-2 bg-gray-900 rounded-lg border border-gray-700">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                {item.to ? (
                  <ScrollToSection to={item.to} onClick={handleNavClick}>
                    <a
                      href={`#${item.to}`}
                      className="block py-2 text-sm text-gray-300 hover:text-white transition-colors font-medium border-b border-gray-700 last:border-b-0 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </ScrollToSection>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 text-sm text-gray-300 hover:text-white transition-colors font-medium border-b border-gray-700 last:border-b-0"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;