
import React from 'react';

const ClientLogos: React.FC = () => {
  // Brand list from requirements
  // All converted to font-sans (Manrope) with different weights/styles to maintain visual interest
  const logos = [
    { name: "RAVEG", className: "font-sans font-bold tracking-widest text-2xl uppercase" },
    { name: "MAYSON", className: "font-sans font-medium tracking-wide text-2xl" },
    { name: "EVOLVIT", className: "font-sans font-extrabold italic tracking-tighter text-2xl" },
    { name: "AIRDESTIC", className: "font-sans font-light tracking-[0.2em] text-xl" },
    { name: "HEATDRY", className: "font-sans font-bold text-xl uppercase tracking-tight" },
    { name: "YARDIO", className: "font-sans font-bold text-2xl tracking-tighter" },
    { name: "HALOH", className: "font-sans italic text-2xl" }
  ];

  return (
    <section className="py-16 bg-white border-b border-indigo-50 overflow-hidden relative">
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-10 text-center">
        <p className="text-xs font-bold text-indigo-900/30 uppercase tracking-[0.2em]">
          Vertrouwd door populaire merken
        </p>
      </div>
        
      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex animate-infinite-scroll gap-20 group-hover:[animation-play-state:paused] py-4">
          {/* Render logos multiple times for smooth loop */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx}
              className={`text-gray-400 hover:text-deep-indigo transition-all duration-300 cursor-default select-none whitespace-nowrap opacity-70 grayscale hover:grayscale-0 ${logo.className}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
