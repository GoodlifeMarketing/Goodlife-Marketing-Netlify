
import React from 'react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';

interface AboutProps {
  openModal: () => void;
}

const About: React.FC<AboutProps> = ({ openModal }) => {
  return (
    <section id="about" className="py-24 bg-[#050614] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-royal-violet/10 blur-[100px] pointer-events-none"></div>
      
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Placeholder - Better responsive sizing */}
          <div className="lg:w-1/2 w-full flex justify-center">
             <ScrollReveal delay={0.2} width="auto" className="w-full max-w-sm lg:max-w-md">
               <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#0C0F2C] flex items-center justify-center">
                  
                  {/* Photo */}
                  <img 
                    src="https://i.ibb.co/Wp6rZhb0/Lvan-Houwelingen-20231123-8013-bewerkt.jpg" 
                    alt="Nick van Keulen" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050614]/90 via-transparent to-transparent pointer-events-none"></div>
                  
                  <div className="absolute bottom-8 left-8 z-20">
                     <p className="text-white font-bold text-2xl mb-1">Nick van Keulen</p>
                     <p className="text-tech-turquoise font-medium">Oprichter Goodlife Marketing</p>
                  </div>
               </div>
             </ScrollReveal>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <ScrollReveal>
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-tech-turquoise text-sm font-semibold mb-6">
                Google Ads Expert
              </div>
              {/* Standardized Headline Size: text-3xl md:text-4xl lg:text-5xl */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Maak kennis met je nieuwe <br/>
                <span className="text-transparent bg-clip-text bg-gradient-cta">Google Ads expert</span>
              </h2>
              <div className="space-y-6 text-text-dark-secondary text-lg leading-relaxed">
                <p>
                  Ik ben Nick van Keulen, oprichter van Goodlife Marketing. Met meer dan vijf jaar ervaring in Google Ads voor e-commerce merken helpen wij jonge, ambitieuze ondernemers hun merk winstgevend schalen. Altijd met focus op resultaat én een sterke fundering voor duurzame groei.
                </p>
                <p>
                  Met Goodlife Marketing werken we samen met ondernemers die serieus willen groeien. Met een ondernemersblik kijken we verder dan alleen campagnes, we zorgen dat marketing bijdraagt aan échte winst en succes op de lange termijn.
                </p>
              </div>
              
              <div className="mt-10 w-full max-w-sm md:max-w-none">
                 <Button variant="primary" onClick={openModal} className="w-full md:w-auto px-10 py-5">
                   <div className="flex flex-col items-center leading-tight md:flex-row md:gap-2">
                     <span className="hidden md:inline">Plan een vrijblijvend strategiegesprek</span>
                     <span className="md:hidden font-bold">Strategiegesprek plannen</span>
                     <span className="md:hidden text-[10px] opacity-80 font-medium mt-1">100% vrijblijvend</span>
                   </div>
                 </Button>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
