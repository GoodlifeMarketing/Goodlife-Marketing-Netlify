
import React from 'react';
import Button from './Button';
import { ArrowRight, Star, ShoppingBag, Rocket } from 'lucide-react';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050614] pt-36 pb-12 md:pt-40 md:pb-10">
      
      {/* 1. Dynamic Background FX (Static) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
      
      {/* 2. Glowing Orbs - CLEAN DEEP VIOLET ONLY */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-royal-violet/15 via-[#0C0F2C]/80 to-transparent blur-[120px] pointer-events-none animate-pulse-slow z-0" />
      
      {/* Left Orb - Purple */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-royal-violet/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-[blob_7s_infinite] z-0" />
      
      {/* Right Orb - Tech Turquoise */}
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-tech-turquoise/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-[blob_10s_infinite_reverse] z-0" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
      
      {/* Updated Container Padding: px-4 md:px-8 lg:px-12 */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Top Headline - Glass Badge with Orange->Purple Gradient Border */}
        <div className="flex justify-center mb-6 md:mb-6 animate-fade-in-up">
           <div className="relative group cursor-default">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange via-royal-violet to-brand-magenta rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
             <span className="relative flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-deep-indigo/90 backdrop-blur-md border border-white/10 text-white font-medium tracking-wide text-xs md:text-sm uppercase shadow-2xl">
               <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
               Voor luxe lifestyle merken<span className="hidden md:inline"> met groeiplannen</span>
             </span>
           </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 tracking-tighter leading-[1.15] drop-shadow-2xl max-w-5xl mx-auto animate-fade-in-up [animation-delay:200ms]">
          <span className="md:hidden">
             Laat jouw e-commerce<br/> merk explosief groeien<br/> met Google Ads
          </span>
          <span className="hidden md:inline">
            Laat jouw e-commerce merk explosief groeien met bewezen Google Ads strategieën
          </span>
        </h1>

        {/* Subheadline - Accents matched to Logo Flow */}
        <p className="text-lg sm:text-xl md:text-2xl text-text-dark-secondary max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed font-light animate-fade-in-up [animation-delay:400ms]">
          Wij helpen ambitieuze <span className="hidden md:inline">e-commerce </span>merken groeien met Google Ads die <span className="text-white font-medium border-b border-tech-turquoise">winstgevend</span>, <span className="text-white font-medium border-b border-brand-magenta">schaalbaar</span> en <span className="text-white font-medium border-b border-brand-orange">meetbaar</span> zijn.
        </p>

        {/* Expertise Tags - Luxury Style */}
        <div className="flex flex-row justify-center items-center gap-2 md:gap-4 mb-8 md:mb-8 animate-fade-in-up [animation-delay:600ms] flex-nowrap">
           <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] xs:text-xs md:text-sm font-medium text-text-dark-secondary hover:bg-white/10 transition-colors hover:border-tech-turquoise hover:text-white cursor-crosshair whitespace-nowrap">
             <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4 text-tech-turquoise"/> Google Shopping Experts
           </span>
           <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] xs:text-xs md:text-sm font-medium text-text-dark-secondary hover:bg-white/10 transition-colors hover:border-brand-magenta hover:text-white cursor-crosshair whitespace-nowrap">
             <Rocket className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-magenta"/> Scale-up Experts
           </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center mb-10 md:mb-10 animate-fade-in-up [animation-delay:800ms] w-full max-w-sm md:max-w-none mx-auto">
          <Button 
            variant="primary" 
            className="w-full md:w-auto px-10 py-5 text-base shadow-[0_0_30px_-5px_rgba(255,138,42,0.2)] hover:shadow-[0_0_60px_-5px_rgba(192,0,154,0.4)] hover:scale-105"
            onClick={openModal}
          >
            <div className="flex flex-col items-center leading-tight md:flex-row md:gap-2">
               <span className="hidden md:inline">Plan een vrijblijvend strategiegesprek</span>
               <span className="md:hidden font-bold">Strategiegesprek plannen</span>
               <span className="md:hidden text-[10px] opacity-80 font-medium mt-1">100% vrijblijvend</span>
            </div>
            <ArrowRight size={18} className="hidden md:inline" />
          </Button>
          <Button 
            variant="outline" 
            className="w-full md:w-auto px-10 py-5 text-base border-white/20 hover:bg-white/10 backdrop-blur-sm hover:border-tech-turquoise hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-300"
            onClick={openModal}
          >
            Google Ads audit aanvragen
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-3 animate-fade-in [animation-delay:1000ms] text-white/60">
           <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-deep-indigo bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover opacity-90" />
                 </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-deep-indigo bg-white/10 flex items-center justify-center text-xs font-bold text-white backdrop-blur-sm">
                +20
              </div>
           </div>
           <div className="flex items-center gap-2">
             <div className="flex gap-0.5 text-[#FFB800]">
               <Star size={14} fill="currentColor" />
               <Star size={14} fill="currentColor" />
               <Star size={14} fill="currentColor" />
               <Star size={14} fill="currentColor" />
               <Star size={14} fill="currentColor" />
             </div>
             <span className="text-sm font-medium"><span className="text-white font-bold">4.9/5</span> uit 20+ reviews</span>
           </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
