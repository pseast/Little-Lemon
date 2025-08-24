import React, { useState } from 'react';
import littleLemonLogo from '../Assets/Logo.svg';

export default function Nav() {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];

  return (
    <nav className="bg-white shadow-md py-4 px-8 md:px-16 lg:px-32 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src={littleLemonLogo} alt="Little Lemon Logo" className="h-12" />
        
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="text-gray-800 hover:text-[#F4CE14] font-semibold transition duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Icon */}
        <button className="hidden md:block text-gray-800 hover:text-[#F4CE14] transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-800 hover:text-[#F4CE14] font-semibold transition duration-300 text-lg">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};