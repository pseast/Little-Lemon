import React from 'react';
import littleLemonLogo from '../logo.svg';

export default function Footer() {
  return (
    <footer className="bg-[#495E57] text-white mt-12">
      <div className="container mx-auto px-8 md:px-16 lg:px-32 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-xl">
        <div>
          <img src={littleLemonLogo} alt="Little Lemon Logo" className="h-12" />
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#F4CE14]">Navigation</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Menu</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Reservations</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Order Online</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#F4CE14]">Contact</h4>
          <ul>
            <li className="mb-2">Address</li>
            <li className="mb-2">Phone Number</li>
            <li className="mb-2">Email</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#F4CE14]">Social Media Links</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Instagram</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 bg-gray-800 text-sm">
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};