import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#495E57]">Little Lemon</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Chicago</h3>
          <p className="text-gray-600 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            <br/><br/>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img 
            src="/restaurant chef B.jpg" 
            alt="Chef in the kitchen" 
            className="rounded-lg shadow-lg w-full max-w-sm"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/cccccc/333333?text=Image+Not+Found'; }}
          />
        </div>
      </div>
    </section>
  );
}