  import React from 'react';
  export default function Specials() {
    const specials = [
    {
      img: 'https://placehold.co/300x200/cccccc/333333?text=Greek+Salad',
      title: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      img: 'https://placehold.co/300x200/cccccc/333333?text=Bruchetta',
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    },
    {
      img: 'https://placehold.co/300x200/cccccc/333333?text=Lemon+Dessert',
      title: 'Lemon Dessert',
      price: '$5.00',
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  // SVG component for the scooter icon
  const ScooterIcon = () => (
    <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.35 10H15V9H13V10H12.65L11.5 6.5H14V5H9.5L7.5 12H10V14H6V15H7.5L9.5 22H11.5L12.5 18H16L17.5 22H19.5L17.5 15H18V14H16V12H19.35C19.7 12 20 11.7 20 11.35V10.65C20 10.3 19.7 10 19.35 10ZM8.5 8C7.67 8 7 7.33 7 6.5C7 5.67 7.67 5 8.5 5C9.33 5 10 5.67 10 6.5C10 7.33 9.33 8 8.5 8ZM15.5 8C14.67 8 14 7.33 14 6.5C14 5.67 14.67 5 15.5 5C16.33 5 17 5.67 17 6.5C17 7.33 16.33 8 15.5 8Z"/>
    </svg>
  );

  return (
    // Reverted to standard padding
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#495E57]">THIS WEEKS SPECIALS!</h2>
        <button className="bg-[#F4CE14] text-[#495E57] font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
          Online Menu
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specials.map((special) => (
          <div key={special.title} className="bg-white shadow-lg flex flex-col border-2 border-transparent hover:border-[#F4CE14] transition duration-300 rounded-t-lg">
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
                <ScooterIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}