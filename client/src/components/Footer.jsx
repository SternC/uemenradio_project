import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-red-400 mb-4">ALTER FM</h3>
            <p className="text-gray-300 mb-3">
              Broadcasting alternative music since 2010. We bring you the best in indie, rock, electronic, and underground music 24/7.
            </p>
            <p className="text-gray-300">Frequency: 101.2 FM</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Live Stream', 'Program Schedule', 'About Us'].map((link) => (
                <li key={link}>
                  <a href="/" className="text-gray-300 hover:text-red-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              {['📻', '📱', '🎵', '📧'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-gray-300">Email: info@alterfm.com</p>
            <p className="text-gray-300">Phone: (021) 1234-5678</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Now Playing</h4>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <p className="font-semibold text-lg mb-1">"Neon Dreams" - The Midnight Riders</p>
              <p className="text-gray-300 text-sm">Hosted by: DJ Nova</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Alter FM Radio Station. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ for music lovers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;