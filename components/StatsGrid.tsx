
import React from 'react';
import { RESULTS_STATS } from '../constants';

const StatsGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#050614] border-t border-white/5 relative overflow-hidden">
       {/* Ambient Glow - Clean Violet */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-royal-violet/5 blur-[100px] rounded-full pointer-events-none"></div>

       {/* Updated Container Padding */}
       <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            {RESULTS_STATS.map((stat, idx) => (
              <div key={idx} className="px-6 pt-6 md:pt-0 group hover:-translate-y-1 transition-transform duration-300">
                 <p className="text-4xl lg:text-5xl font-bold text-tech-turquoise mb-2 drop-shadow-[0_0_10px_rgba(31,199,193,0.3)]">
                   {stat.value}
                 </p>
                 <p className="text-lg font-medium text-white mb-1">{stat.label}</p>
                 <p className="text-sm text-text-dark-secondary tracking-wide uppercase font-medium opacity-60">
                   {stat.subtext}
                 </p>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default StatsGrid;
