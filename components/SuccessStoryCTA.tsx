
import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

interface SuccessStoryCTAProps {
  openModal: () => void;
}

const SuccessStoryCTA: React.FC<SuccessStoryCTAProps> = ({ openModal }) => {
  return (
    <section className="py-20 bg-white relative">
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="bg-gradient-cta rounded-[2.5rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden group">
           
           {/* Noise Texture */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
           
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
             Word jij ons volgende <br className="hidden md:block"/>
             succesverhaal?
           </h2>
           
           <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10 w-full max-w-sm md:max-w-none mx-auto">
             <Button 
                onClick={openModal}
                className="w-full md:w-auto px-10 py-5 hover:scale-105 shadow-xl transition-all duration-300 !bg-white !bg-none border-none group/btn"
             >
               <div className="flex flex-col items-center leading-tight md:flex-row md:gap-2">
                 <span className="hidden md:inline text-black font-extrabold">Plan een vrijblijvend strategiegesprek</span>
                 <span className="md:hidden font-extrabold text-black">Strategiegesprek plannen</span>
                 <span className="md:hidden text-[10px] text-black/80 font-bold mt-1">100% vrijblijvend</span>
               </div>
               <ArrowRight size={18} className="ml-2 hidden md:block text-black group-hover/btn:translate-x-1 transition-transform"/>
             </Button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoryCTA;
