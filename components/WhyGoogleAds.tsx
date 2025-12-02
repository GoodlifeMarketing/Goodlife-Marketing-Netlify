
import React from 'react';
import { WHY_GOOGLE_ADS } from '../constants';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import { ShoppingBag, Sparkles, Tag, ScanSearch, ArrowRight, Zap } from 'lucide-react';

interface WhyGoogleAdsProps {
  openModal: () => void;
}

const WhyGoogleAds: React.FC<WhyGoogleAdsProps> = ({ openModal }) => {
  return (
    <section id="why-google-ads" className="py-32 bg-[#050614] relative overflow-hidden">
      {/* Background Ambience - Clean Dark */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0A0D2E] to-transparent pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-royal-violet/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-tech-turquoise font-bold tracking-wider uppercase text-xs mb-4">
                Expertise
              </span>
              {/* Standardized Headline Size: text-3xl md:text-4xl lg:text-5xl */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                 Waarom <span className="text-transparent bg-clip-text bg-gradient-cta">Google Ads?</span>
              </h2>
               <p className="text-text-dark-secondary text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                 Met Google Ads bereik je meer dan 90% van alle internetgebruikers en sta je bovenaan wanneer klanten actief zoeken naar jouw producten. Wij laten merken groeien met datagedreven campagnes die zijn gebouwd voor winst en schaalbaarheid.
               </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Bento Grid Layout - Dark Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* Card 1: Google Shopping (Visual Focus) - PURPLE ACCENTS */}
          <div className="md:col-span-2">
            <ScrollReveal delay={0.1}>
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-10 border border-white/5 flex flex-col justify-between group hover:border-white/10 transition-all duration-500 relative overflow-hidden h-full">
                 {/* Hover Glow - Purple - Softened Intensity */}
                 <div className="absolute inset-0 bg-gradient-to-br from-royal-violet/5 via-royal-violet/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
                 
                 <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                       {/* Icon Block: Purple Glow but White Icon */}
                       <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e1435] to-[#050614] flex items-center justify-center mb-8 shadow-lg shadow-royal-violet/20 border border-white/10">
                          <ShoppingBag className="text-white" size={32} />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-4">Google Shopping</h3>
                       <p className="text-text-dark-secondary text-lg leading-relaxed mb-8">
                         Zichtbaarheid is leuk, maar winst is beter. Wij optimaliseren je feed zodat budget focust op je bestverkopende producten met de hoogste marge.
                       </p>
                       <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-text-dark-secondary flex items-center gap-2">
                             <ScanSearch size={16} className="text-tech-turquoise" /> Feed Optimalisatie
                          </span>
                          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-text-dark-secondary flex items-center gap-2">
                             <Tag size={16} className="text-royal-violet" /> Marge Focus
                          </span>
                       </div>
                    </div>
                    {/* Visual Mockup of Shopping Card - Blue/Purple Glow */}
                    <div className="bg-[#101436] rounded-2xl p-5 shadow-2xl border border-white/10 transform rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 max-w-[280px] mx-auto md:mx-0 relative">
                       {/* Corrected Glow: Turquoise to Purple - Less Intense */}
                       <div className="absolute -inset-1 bg-gradient-to-r from-tech-turquoise to-royal-violet rounded-2xl blur opacity-30"></div>
                       <div className="relative h-40 bg-white/5 rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-white/5">
                          <ShoppingBag size={48} className="text-white/20" />
                          <div className="absolute top-3 right-3 bg-green-500/20 text-green-400 border border-green-500/30 text-[10px] font-bold px-2 py-1 rounded tracking-wider">IN STOCK</div>
                       </div>
                       <div className="h-3 bg-white/10 rounded w-3/4 mb-2"></div>
                       <div className="h-3 bg-white/10 rounded w-1/2 mb-6"></div>
                       <div className="flex justify-between items-center">
                          <div className="h-8 w-20 bg-royal-violet rounded-lg"></div>
                          <div className="text-[10px] text-white/40 font-medium uppercase tracking-widest">Sponsored</div>
                       </div>
                    </div>
                 </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 2: Performance Max (Tech/AI Focus) - TURQUOISE ACCENTS */}
          <div>
            <ScrollReveal delay={0.2}>
              <div className="h-full bg-gradient-to-b from-[#0C0F2C] to-[#050614] rounded-3xl p-10 border border-white/10 text-white flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                 <div className="absolute top-0 right-0 w-64 h-64 bg-royal-violet/5 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                 
                 <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 backdrop-blur-md border border-white/10 group-hover:bg-tech-turquoise/10 transition-colors duration-500">
                      <Sparkles className="text-tech-turquoise" size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Performance Max</h3>
                   <p className="text-text-dark-secondary text-lg leading-relaxed mb-8">
                     Wij temmen het Google algoritme. Door jouw <strong>First-Party Data</strong> te koppelen, trainen we de AI om te zoeken naar <em>winst in plaats van klikken</em>.
                   </p>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-md bg-white/5 text-xs font-medium tracking-wide text-tech-turquoise border border-tech-turquoise/20">Youtube</span>
                      <span className="px-3 py-1.5 rounded-md bg-white/5 text-xs font-medium tracking-wide text-tech-turquoise border border-tech-turquoise/20">Display</span>
                      <span className="px-3 py-1.5 rounded-md bg-white/5 text-xs font-medium tracking-wide text-tech-turquoise border border-tech-turquoise/20">Search</span>
                      <span className="px-3 py-1.5 rounded-md bg-white/5 text-xs font-medium tracking-wide text-tech-turquoise border border-tech-turquoise/20">Discovery</span>
                   </div>
                 </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Remaining Benefits - Quick Hitters */}
          {WHY_GOOGLE_ADS.slice(2).map((item, index) => (
            <div key={index} className="h-full">
              <ScrollReveal delay={0.3 + (index * 0.1)}>
                <div className="bg-white/[0.02] rounded-3xl p-8 border border-white/5 hover:border-brand-magenta/30 hover:bg-white/[0.04] transition-all duration-300 group relative h-full">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(item.icon, { className: "text-text-dark-secondary group-hover:text-tech-turquoise transition-colors", size: 24 })}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-tech-turquoise transition-colors">{item.title}</h3>
                  <p className="text-text-dark-secondary text-base leading-relaxed opacity-80 group-hover:opacity-100">{item.description}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Tech Stack Proof Strip & Bottom CTA */}
        <div className="flex flex-col items-center border-t border-white/5 pt-16">
          <ScrollReveal>
            <div className="flex flex-col items-center w-full">
              <p className="text-xs font-bold text-text-dark-secondary uppercase tracking-[0.2em] mb-10 opacity-60">Powered by best-in-class tech</p>
              
              {/* Tech Logos with Infinite Slider on Mobile */}
              <div className="w-full overflow-hidden mb-16">
                {/* Desktop Grid */}
                <div className="hidden md:flex flex-wrap justify-center items-center gap-16">
                   <img 
                      src="https://i.ibb.co/mVHxgKwz/Shopify-com-Logo-1.png" 
                      alt="Shopify" 
                      className="h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" 
                   />
                   <img 
                      src="https://i.ibb.co/CK0Bsc9K/Channable-idjjdc-Wx-RR-1.png" 
                      alt="Channable" 
                      className="h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" 
                   />
                   <img 
                      src="https://i.ibb.co/cSYVcpQF/id3j-Ja4-ACY-logos.png" 
                      alt="WeTracked" 
                      className="h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" 
                   />
                </div>

                {/* Mobile Infinite Scroll */}
                <div className="md:hidden flex relative w-full overflow-hidden">
                   <div className="flex animate-infinite-scroll gap-12 items-center">
                      {[...Array(6)].map((_, i) => (
                        <React.Fragment key={i}>
                           <img 
                              src="https://i.ibb.co/mVHxgKwz/Shopify-com-Logo-1.png" 
                              alt="Shopify" 
                              className="h-10 w-auto object-contain opacity-60" 
                           />
                           <img 
                              src="https://i.ibb.co/CK0Bsc9K/Channable-idjjdc-Wx-RR-1.png" 
                              alt="Channable" 
                              className="h-10 w-auto object-contain opacity-60" 
                           />
                           <img 
                              src="https://i.ibb.co/cSYVcpQF/id3j-Ja4-ACY-logos.png" 
                              alt="WeTracked" 
                              className="h-10 w-auto object-contain opacity-60" 
                           />
                        </React.Fragment>
                      ))}
                   </div>
                </div>
              </div>

              {/* Improved CTA Banner */}
              <div className="w-full max-w-4xl bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative group overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Klaar om te groeien met de slimste techniek?</h3>
                  <p className="text-text-dark-secondary text-sm md:text-base">Wij koppelen alles naadloos voor maximaal resultaat.</p>
                </div>

                <div className="relative z-10 w-full md:w-auto">
                    <Button 
                      variant="primary" 
                      className="w-full md:w-auto px-8 py-4"
                      onClick={openModal}
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

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyGoogleAds;
