import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[#495E57] text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-32 flex md:flex-row flex-col gap-8 items-center py-12 max-w-screen-xl">
        
        {/* Text Content Column */}
        <div className="flex-1 flex flex-col justify-between w-full">
          <div>
            <h1 className="font-markazi text-4xl md:text-6xl font-semi-bold text-[#F4CE14]">Little Lemon</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chicago</h2>
            <p className="mb-6 text-lg max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* This button is hidden on mobile and shown on desktop */}
          <div className="hidden md:flex justify-start">
            <button className="bg-[#F4CE14] text-[#495E57] font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
                Reserve a Table
            </button>
          </div>
        </div>
        
        {/* Image Column */}
        <div className="flex-1 flex justify-center md:justify-end items-center w-full">
            <img 
              src="/restauranfood.jpg" 
              alt="Bruschetta" 
              className="rounded-lg shadow-2xl w-full max-w-sm h-96 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/cccccc/333333?text=Image+Not+Found'; }}
            />
        </div>

        {/* This button is shown only on mobile, placed after the image */}
        <div className="w-full flex justify-end md:hidden">
            <button className="bg-[#F4CE14] text-[#495E57] font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
                Reserve a Table
            </button>
        </div>

      </div>
    </section>
  );
};
