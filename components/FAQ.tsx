
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-24">
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
        {/* Standardized Headline Size: text-3xl md:text-4xl lg:text-5xl */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-indigo text-center mb-16">
          Veelgestelde vragen
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg bg-gray-50 border-royal-violet/20' : 'bg-white hover:border-gray-300'}`}
            >
              <button 
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg font-bold ${openIndex === index ? 'text-royal-violet' : 'text-text-light-primary'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full ${openIndex === index ? 'bg-royal-violet text-white' : 'bg-gray-100 text-gray-500'}`}>
                   {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <div 
                className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-text-light-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
