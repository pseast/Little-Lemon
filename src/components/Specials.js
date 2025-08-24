  import React from 'react';
  import scooterImage from '../Assets/Scooter.png';
  export default function Specials() {
    const specials = [
    {
      img: '/greek salad.jpg',
      title: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      img: '/bruchetta.svg',
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      img: '/lemon dessert.jpg',
      title: 'Lemon Dessert',
      price: '$5.00',
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#495E57]">This Weeks Specials!</h2>
        <button className="bg-[#F4CE14] text-[#495E57] font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
          Online Menu
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specials.map((special) => (
          <div key={special.title} className="bg-white shadow-lg flex flex-col border-2 border-transparent hover:border-[#F4CE14] transition duration-300 rounded-t-xl overflow-hidden">
            <img 
              src={special.img} 
              alt={special.title} 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x200/cccccc/333333?text=Image+Not+Found'; }}
            />
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-[#495E57]">{special.title}</h3>
                  <p className="text-lg font-semibold text-[#EE9972]">{special.price}</p>
                </div>
                <p className="text-gray-600 mb-4">{special.description}</p>
              </div>
              <button className="bg-[#F4CE14] text-[#495E57] font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 self-center inline-flex items-center mt-4">
                Order Delivery
                <img src={scooterImage} alt="delivery icon" className="w-6 h-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}