import React, { useState } from 'react';

export default function TestimonialsSection() {
    const [summary, setSummary] = useState('');
    const [isLoadingSummary, setIsLoadingSummary] = useState(false);

    const testimonials = [
        { name: "John Doe", rating: 5, review: "Amazing food and great service!" },
        { name: "Jane Smith", rating: 4, review: "Lovely atmosphere, will come again." },
        { name: "Sam Wilson", rating: 5, review: "The best lemon dessert I've ever had!" },
        { name: "Emily Brown", rating: 5, review: "A must-visit restaurant in Chicago." },
    ];

    const summarizeReviews = async () => {
        setIsLoadingSummary(true);
        setSummary('');
        const reviewsText = testimonials.map(t => `${t.name} said: "${t.review}" (Rating: ${t.rating}/5)`).join('\n');
        const prompt = `Summarize the following customer reviews for a restaurant website. Make it sound positive and inviting. Here are the reviews:\n\n${reviewsText}`;

        try {
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };
            const apiKey = "" 
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
            const response = await fetch(apiUrl, {
                       method: 'POST',
                       headers: { 'Content-Type': 'application/json' },
                       body: JSON.stringify(payload)
                   });
            const result = await response.json();
            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
              const text = result.candidates[0].content.parts[0].text;
              setSummary(text);
            } else {
              setSummary("Sorry, I couldn't generate a summary right now.");
            }
        } catch (error) {
            console.error("Error fetching summary:", error);
            setSummary("There was an error generating the summary. Please try again.");
        } finally {
            setIsLoadingSummary(false);
        }
    };

    const SparklesIcon = () => (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L9.5 8.5L3 11L9.5 13.5L12 20L14.5 13.5L21 11L14.5 8.5L12 2Z" />
        </svg>
    );

  return (
    <section className="py-12">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-[#495E57] mb-4">Testimonials</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="bg-[#495E57] text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-2">
                    <span className="text-yellow-400">{'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}</span>
                </div>
                <p className="font-semibold mb-2">{testimonial.name}</p>
                <p className="text-gray-300 italic">"{testimonial.review}"</p>
            </article>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button onClick={summarizeReviews} disabled={isLoadingSummary} className="bg-[#F4CE14] text-[#495E57] font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300 disabled:bg-gray-400 inline-flex items-center justify-center" aria-label="On Click, summarize customer reviews">
           {isLoadingSummary ? 'Summarizing...' : (
               <>
                <SparklesIcon />
                Summarize Reviews
               </>
           )}
        </button>
      </div>

       {summary && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-8 rounded-lg shadow-md" role="alert">
          <p className="font-bold">Here's what our customers are saying:</p>
          <p>{summary}</p>
        </div>
      )}
    </section>
  );
};