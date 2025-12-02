
import React from 'react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface GooglePartnerProps {
  openModal: () => void;
}

const GooglePartner: React.FC<GooglePartnerProps> = ({ openModal }) => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          
          {/* Content */}
          <div className="w-full md:w-1/2">
             <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                   <CheckCircle2 size={14} className="text-blue-600" />
                   Officiële Partner Status
                </div>
                {/* Standardized Headline Size: text-3xl md:text-4xl lg:text-5xl */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-indigo mb-6">
                  Wij zijn <span className="text-transparent bg-clip-text bg-gradient-cta">Google Ads Partner</span>
                </h2>
                <p className="text-text-light-secondary text-lg leading-relaxed mb-8">
                  Als gecertificeerde Google Ads agency beheert Goodlife Marketing campagnes volgens de hoogste kwaliteitsstandaarden van Google. Onze ervaring in meer dan tien landen en miljoenen euro’s aan advertentiebudget bevestigen onze expertise in winstgevende e-commerce groei.
                </p>
                
                {/* Desktop Button - Hidden on Mobile */}
                <div className="w-full max-w-sm md:max-w-none hidden md:block">
                    <Button 
                        variant="primary" 
                        onClick={openModal}
                        className="w-full md:w-auto px-8 py-4"
                    >
                      <div className="flex flex-col items-center leading-tight md:flex-row md:gap-2">
                        <span className="hidden md:inline">Plan een vrijblijvend strategiegesprek</span>
                        <span className="md:hidden font-bold">Strategiegesprek plannen</span>
                        <span className="md:hidden text-[10px] opacity-80 font-medium mt-1">100% vrijblijvend</span>
                      </div>
                      <ArrowRight size={18} className="hidden md:inline"/>
                    </Button>
                </div>
             </ScrollReveal>
          </div>

          {/* Visual / Badge Representation */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
             <ScrollReveal delay={0.2}>
                <div className="relative group cursor-default">
                   {/* Background Glow */}
                   <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none transform group-hover:scale-110 transition-transform duration-700"></div>
                   
                   {/* Badge Card */}
                   <div className="relative bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(59,130,246,0.2)] border border-blue-50 flex flex-col items-center text-center max-w-xs mx-auto hover:border-blue-200 transition-colors duration-300">
                      
                      {/* Logo Area */}
                      <div className="w-full aspect-[4/3] bg-white rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                          <div className="flex flex-col items-center">
                              {/* Simple CSS representation of Google 'G' colors if image not available, 
                                  but text logo is cleaner for 'Partner' badge style */}
                              <span className="text-4xl font-sans font-bold text-gray-500 mb-1">Google</span>
                              <span className="text-xl font-sans font-bold text-gray-800">Partner</span>
                          </div>
                      </div>

                      {/* Status Dots */}
                      <div className="flex gap-2 mb-6">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>

                      <div className="w-full h-px bg-gray-100 mb-6"></div>
                      
                      <p className="font-bold text-deep-indigo text-lg mb-1 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-blue-500 fill-blue-50" />
                        Gecertificeerde
                      </p>
                      <p className="text-xs text-text-light-secondary font-medium uppercase tracking-widest opacity-70">
                        Agency
                      </p>
                   </div>
                </div>
             </ScrollReveal>

             {/* Mobile Button - Visible only on Mobile, below badge */}
             <div className="w-full max-w-sm mt-10 md:hidden">
                <ScrollReveal delay={0.3}>
                    <Button 
                        variant="primary" 
                        onClick={openModal}
                        className="w-full px-8 py-4"
                    >
                      <div className="flex flex-col items-center leading-tight">
                        <span className="font-bold">Strategiegesprek plannen</span>
                        <span className="text-[10px] opacity-80 font-medium mt-1">100% vrijblijvend</span>
                      </div>
                    </Button>
                </ScrollReveal>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GooglePartner;
