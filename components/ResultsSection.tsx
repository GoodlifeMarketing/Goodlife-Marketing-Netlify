
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ResultsSectionProps {
  openModal: () => void;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ openModal }) => {
  return (
    <section id="results" className="py-32 bg-white relative scroll-mt-24">
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-100 pb-10 gap-8">
            <div className="w-full md:max-w-4xl">
               <ScrollReveal>
                 <span className="text-deep-indigo font-bold tracking-widest uppercase text-xs mb-4 block">
                   Resultaten
                 </span>
                 {/* Standardized Headline Size: text-3xl md:text-4xl lg:text-5xl */}
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight md:whitespace-nowrap">
                   <span className="text-transparent bg-clip-text bg-gradient-cta">
                     Resultaten zeggen meer dan woorden
                   </span>
                 </h2>
               </ScrollReveal>
            </div>
            <div className="hidden md:block text-right shrink-0">
                <ScrollReveal delay={0.2}>
                  <p className="text-text-light-secondary text-sm font-medium">
                      Bekijk onze impact op<br/>luxe lifestyle merken.
                  </p>
                </ScrollReveal>
            </div>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study, index) => (
            <div key={index}>
              <ScrollReveal delay={index * 0.2}>
                <div className="group relative bg-white rounded-[2rem] border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 overflow-hidden flex flex-col h-full">
                   
                   {/* Decorative Header Background */}
                   <div className="h-2 bg-gradient-cta w-full"></div>

                   <div className="p-10 md:p-12 flex-grow">
                     <div className="flex justify-between items-start mb-8">
                        <div>
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-deep-indigo font-bold text-xs tracking-wider uppercase mb-4">
                            <TrendingUp size={12} /> Case Study
                          </span>
                          <h3 className="text-3xl font-extrabold text-deep-indigo tracking-tight">{study.company}</h3>
                        </div>
                        {/* Floating Growth Badge - Purple Arrow */}
                        <div className="w-16 h-16 rounded-full border border-gray-100 bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <ArrowUpRight size={28} className="text-royal-violet" />
                        </div>
                     </div>
                     
                     <h4 className="text-xl font-bold text-text-light-primary mb-4 leading-snug">{study.title}</h4>
                     <p className="text-text-light-secondary mb-10 leading-relaxed font-light">{study.description}</p>
                     
                     <div className="grid grid-cols-2 gap-8 border-t border-gray-50 pt-8">
                        {study.stats.map((stat, i) => (
                          <div key={i}>
                            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                            <p className="text-3xl font-extrabold text-deep-indigo mb-1">{stat.value}</p>
                            <p className="text-green-600 text-base font-bold flex items-center">
                              +{stat.growth} <span className="text-gray-300 font-normal ml-1 text-xs">groei</span>
                            </p>
                          </div>
                        ))}
                     </div>
                   </div>
                   
                   {/* Hover Effect Line */}
                   <div className="absolute bottom-0 left-0 w-full h-1 bg-royal-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;
