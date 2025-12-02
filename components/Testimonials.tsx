
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50">
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            {/* Standardized Headline Size: text-3xl md:text-4xl lg:text-5xl */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-light-primary mb-6">
              Ondernemers over <span className="text-royal-violet relative inline-block">
                onze impact
              </span>
            </h2>
            <p className="text-text-light-secondary text-lg">
              Wij bouwen de e-commerce giganten van morgen.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i}>
              <ScrollReveal delay={i * 0.2}>
                <div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col">
                  
                  {/* Header: Photo, Name, Stars */}
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden relative">
                        <img 
                          src={`https://i.pravatar.cc/150?u=${t.author.replace(/\s/g, '')}`} 
                          alt={t.author} 
                          className="w-full h-full object-cover"
                        />
                     </div>
                     <div className="flex-1">
                        <h4 className="font-bold text-deep-indigo text-lg leading-tight">{t.author}</h4>
                        <p className="text-sm text-text-light-secondary font-medium">{t.role}, {t.company}</p>
                     </div>
                     <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={14} className="text-[#FFB800] fill-[#FFB800]" />
                        ))}
                      </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow">
                     <Quote size={32} className="text-royal-violet/10 mb-4 absolute -top-2 -left-2" />
                     <p className="text-text-light-primary text-lg font-medium leading-relaxed relative z-10 pl-2">
                        "{t.quote}"
                      </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
