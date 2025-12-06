import React from 'react';
import { 
  FaInstagram, 
  FaLine, 
  FaEnvelope, 
  FaYoutube,
  FaXTwitter 
} from 'react-icons/fa6';
import ScrollToSection from './ScrollToSection';

function Footer() {
  const handleFooterScroll = (to) => {
    const element = document.getElementById(to);
    if (element) {
      const offset = 80; // Offset untuk sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'Programs', to: null, href: '/programs' },
    { name: 'About', to: 'about' },
    { name: 'Contact Us', to: 'contact' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          
          <div className="md:w-[35%] md:ml-auto">
            <div className="md:max-w-[400px]">
              <h3 
                className="text-3xl mb-4 text-center md:text-left"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="text-orange-500">
                  ALTER FM
                </span>
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm text-center md:text-left">
                  Broadcasting alternative music since 2010. We bring you the best in indie, rock, electronic, and underground music 24/7.
                </p>
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-gray-300 text-xs text-center md:text-left">
                    Jalan Scientia Boulevard Gading,<br />
                    Curug Sangereng, Serpong,<br />
                    Kabupaten Tangerang,<br />
                    Banten 15810
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-[20%]">
            <h4 
              className="text-md font-semibold mb-6 text-center md:text-left text-gray-100"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              MENU
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.to ? (
                    // Gunakan ScrollToSection component
                    <ScrollToSection to={item.to}>
                      <a 
                        href={`#${item.to}`}
                        className="text-gray-300 hover:text-red-400 transition-colors inline-block cursor-pointer"
                      >
                        <span className="text-md">{item.name}</span>
                      </a>
                    </ScrollToSection>
                  ) : (
                    // Link biasa untuk Programs
                    <a 
                      href={item.href}
                      className="text-gray-300 hover:text-red-400 transition-colors inline-block"
                    >
                      <span className="text-md">{item.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-[35%]">
            <h4 className="text-md font-semibold mb-6 text-center md:text-left text-gray-100">
              CONNECT WITH US
            </h4>
            
            <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
              {[
                { 
                  name: 'Instagram', 
                  icon: <FaInstagram />, 
                  color: 'bg-gradient-to-r from-purple-600 to-pink-600',
                  link: 'https://instagram.com'
                },
                { 
                  name: 'Line', 
                  icon: <FaLine />, 
                  color: 'bg-gradient-to-r from-green-500 to-green-600',
                  link: 'https://line.me'
                },
                { 
                  name: 'X (Twitter)', 
                  icon: <FaXTwitter />, 
                  color: 'bg-gray-800',
                  link: 'https://twitter.com'
                },
                { 
                  name: 'Email', 
                  icon: <FaEnvelope />, 
                  color: 'bg-gradient-to-r from-blue-500 to-blue-600',
                  link: 'mailto:info@alterfm.com'
                },
                { 
                  name: 'Youtube', 
                  icon: <FaYoutube />, 
                  color: 'bg-gradient-to-r from-red-600 to-red-700',
                  link: 'https://youtube.com'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={social.name}
                >
                  <div className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform shadow-lg`}>
                    {social.icon}
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-4">
              <h5 className="font-semibold mb-2 text-center md:text-left">More Information</h5>
              <p className="text-gray-300 text-sm mb-1 text-center md:text-left">Email: info@alterfm.com</p>
              <p className="text-gray-300 text-sm text-center md:text-left">Phone: (021) 1234-5678</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Alter FM Radio Station. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Made with Nobody :)
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;