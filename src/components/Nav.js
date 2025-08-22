import React from 'react';

export default function Nav() {
    
    const navItems = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];
  return (
    <nav className="bg-white shadow-md py-4 px-8 md:px-16 lg:px-32 flex items-center justify-between">
      {/* Logo */}
      <img src="https://placehold.co/200x50/f4ce14/495e57?text=Little+Lemon" alt="Little Lemon Logo" className="h-12 rounded" />
      
      {/* Navigation Links */}
      <ul className="hidden md:flex flex-grow justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-800 hover:text-[#F4CE14] font-semibold transition duration-300">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact Icon */}
      <button className="text-gray-800 hover:text-[#F4CE14] transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>
    </nav>
  );
}