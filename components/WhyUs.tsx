
import React from 'react';
import { WHY_US_POINTS } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Button from './Button';

interface WhyUsProps {
  openModal: () => void;
}

const WhyUs: React.FC<WhyUsProps> = ({ openModal }) => {
  return (
    <section id="why-us" className="py-24 bg-[#050614] relative overflow-hidden">
       {/* Background accents - Cool Purple/Turquoise Vibe */}
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
       <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-royal-violet/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            {/* Standardized Headline Size: text-3xl md:text-4xl lg:text-5xl */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Waarom merken <span className="text-transparent bg-clip-text bg-gradient-cta">met ons werken</span>
            </h2>
            <p className="text-text-dark-secondary text-lg leading-relaxed">
              Bij Goodlife Marketing draait alles om winstgevend groeien met Google Ads. We combineren data, ervaring en strategisch inzicht om campagnes te bouwen die schaalbaar zijn en meetbaar resultaat opleveren.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_POINTS.map((point, index) => (
            <div key={index} className="h-full">
              <ScrollReveal delay={index * 0.1}>
                <div 
                  className="relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-royal-violet/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(95,43,255,0.2)] overflow-hidden h-full"
                >
                  {/* Subtle visual index number */}
                  <div className="absolute top-4 right-6 text-6xl font-bold text-white/[0.03] group-hover:text-white/[0.05] transition-colors pointer-events-none font-sans">
                    0{index + 1}
                  </div>

                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20 relative">
                     {/* Icon Glow */}
                     <div className="absolute inset-0 bg-royal-violet/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                     {React.createElement(point.icon, { 
                       size: 32, 
                       className: "text-tech-turquoise relative z-10",
                       strokeWidth: 1.5
                     })}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 group-hover:text-tech-turquoise transition-colors">
                    {point.title}
                  </h3>
                  
                  <p className="text-text-dark-secondary leading-relaxed text-base opacity-90 group-hover:opacity-100 transition-opacity">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* CTA Banner Section - Replaces standalone button */}
        <div className="mt-16">
            <ScrollReveal delay={0.4}>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-royal-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">
                           Overtuigd van onze aanpak?
                        </h3>
                        <p className="text-text-dark-secondary text-lg">
                            Ontdek jouw groeipotentieel in een strategiesessie.
                        </p>
                    </div>
                    
                    <div className="relative z-10 w-full md:w-auto shrink-0">
                        <Button 
                            variant="primary" 
                            onClick={openModal}
                            className="w-full md:w-auto px-10 py-5"
                        >
                            <div className="flex flex-col items-center leading-tight md:flex-row md:gap-2">
                                <span className="hidden md:inline">Plan een vrijblijvend strategiegesprek</span>
                                <span className="md:hidden font-bold">Strategiegesprek plannen</span>
                                <span className="md:hidden text-[10px] opacity-80 font-medium mt-1">100% vrijblijvend</span>
                            </div>
                            <ArrowRight size={18} className="hidden md:inline" />
                        </Button>
                    </div>
                </div>
            </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
