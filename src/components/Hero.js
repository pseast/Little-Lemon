import React from 'react';
export default function Hero() {
  return (
    <section className="bg-[#495E57] text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-32 flex md:flex-row flex-col gap-8 items-center py-12">
        {/* Text Content Column - Set to flex column to manage spacing */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F4CE14]">Little Lemon</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Chicago</h2>
            <p className="mb-6 text-lg max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="bg-[#F4CE14] text-[#495E57] font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300 self-start">
              Reserve a Table
          </button>
        </div>
        
        {/* Image Column */}
        <div className="flex-1 flex justify-end items-center mt-8 md:mt-0">
            <img 
              src="https://placehold.co/400x400/cccccc/333333?text=Food+Image" 
              alt="Bruschetta" 
              className="rounded-lg shadow-2xl w-full max-w-sm h-auto"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/cccccc/333333?text=Image+Not+Found'; }}
            />
        </div>
      </div>
    </section>
  );
}