
import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ScanSearch, LayoutGrid, Rocket, ArrowDown, ArrowRight, Check } from 'lucide-react';
import PerformanceChart from './PerformanceChart';
import ScrollReveal from './ScrollReveal';
import Button from './Button';

const icons = [ScanSearch, LayoutGrid, Rocket];

interface ProcessProps {
  openModal: () => void;
}

const Process: React.FC<ProcessProps> = ({ openModal }) => {
  return (
    <section id="approach" className="py-32 bg-gray-50 relative overflow-hidden scroll-mt-24">
      {/* Background Ambience - Subtle Grid for Light Mode */}
      <div className="absolute inset-0 bg-[radial-gradient(#0C0F2C_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none"></div>
      
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <ScrollReveal>
            <span className="text-black font-bold tracking-widest uppercase text-xs mb-4 block">
              The Blueprint
            </span>
            {/* Standardized Headline Size: text-3xl md:text-4xl lg:text-5xl */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-indigo mb-6 tracking-tight">
              In 3 stappen naar <span className="text-transparent bg-clip-text bg-gradient-cta">succesvolle Google advertenties</span>
            </h2>
            <p className="text-text-light-secondary text-lg leading-relaxed">
              In 3 bewezen stappen transformeren wij je Google Ads account naar een stabiele groeimachine voor jouw merk.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mb-24">
           {/* Connecting Line (Desktop) - Visible on Light BG */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px]">
              <div className="w-full h-full bg-indigo-100"></div>
              {/* Moving Pulse - Darker for contrast */}
              <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-royal-violet to-transparent opacity-50 blur-[2px] animate-[infinite-scroll_3s_linear_infinite]"></div>
           </div>

           {/* Connecting Line (Mobile) - Vertical */}
           <div className="md:hidden absolute top-12 bottom-20 left-1/2 w-0.5 -translate-x-1/2 bg-indigo-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-royal-violet to-transparent opacity-50"></div>
           </div>

          {PROCESS_STEPS.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative z-10 group">
                <ScrollReveal delay={index * 0.2}>
                   {/* Icon Badge - White with Shadow for Light Mode */}
                   <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(12,15,44,0.1)] flex items-center justify-center border border-indigo-50 relative mb-10 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(196,0,153,0.2)] transition-all duration-300 z-20">
                      <div className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-deep-indigo text-white flex items-center justify-center font-bold text-sm border-4 border-gray-50 shadow-lg">
                        {index + 1}
                      </div>
                      <Icon size={36} className="text-deep-indigo group-hover:text-brand-magenta transition-colors duration-300" strokeWidth={1.5} />
                   </div>

                   {/* Content Card - White on Light Grey */}
                   <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:border-royal-violet/20 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                      {/* Top gradient line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-cta scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      
                      <h3 className="text-xl font-bold text-deep-indigo mb-2 text-center">
                        {step.title}
                      </h3>

                      {step.description && (
                        <p className="text-text-light-secondary text-base mb-6 text-center leading-relaxed">
                          {step.description}
                        </p>
                      )}
                      
                      <ul className="space-y-4 flex-grow">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                             <div className="mt-0.5 w-5 h-5 rounded flex items-center justify-center bg-indigo-50 border border-indigo-100 shrink-0">
                                <Check size={12} strokeWidth={3} className="text-royal-violet" />
                             </div>
                             <span className="text-text-light-secondary text-base font-medium leading-relaxed">
                               {item}
                             </span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        {/* Visual Connector to Result */}
        <div className="flex flex-col items-center mb-10 opacity-80">
           <div className="h-12 w-[1px] bg-gradient-to-b from-indigo-100 to-royal-violet"></div>
           <span className="my-2 text-sm font-bold tracking-widest uppercase text-royal-violet">Resultaat</span>
           <ArrowDown className="text-royal-violet animate-bounce" size={20} />
        </div>

        {/* Chart Section - Cyberpunk Style contrasting against Light BG */}
        <div className="max-w-5xl mx-auto mb-20">
             <ScrollReveal delay={0.4}>
                <PerformanceChart />
             </ScrollReveal>
        </div>
        
        {/* Simple Centered CTA - Replaces the ugly Action Bar */}
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal delay={0.6}>
             <h3 className="text-2xl font-bold text-deep-indigo mb-8">
               Wil jij dezelfde groei realiseren?
             </h3>
             <Button 
                  variant="primary"
                  onClick={openModal}
                  className="w-full md:w-auto px-12 py-5 shadow-2xl"
              >
                <div className="flex flex-col items-center leading-tight md:flex-row md:gap-2">
                  <span className="hidden md:inline">Plan een vrijblijvend strategiegesprek</span>
                  <span className="md:hidden font-bold">Strategiegesprek plannen</span>
                  <span className="md:hidden text-[10px] opacity-80 font-medium mt-1">100% vrijblijvend</span>
                </div>
              </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Process;
