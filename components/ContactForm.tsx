
import React, { useState } from 'react';
import { ChevronRight, ArrowRight, AlertTriangle, ShieldCheck, Clock, Zap, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    adSpend: '',
    url: '',
    name: '',
    contact: ''
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <section id="contact" className="py-24 bg-[#050614] relative overflow-hidden border-t border-white/5 scroll-mt-24">
      {/* Background Ambience - Clean Deep Violet */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-royal-violet/10 blur-[150px] pointer-events-none"></div>
      
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#0C0F2C] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 max-w-6xl mx-auto ring-1 ring-white/5">
          
          {/* Visuals (Left Side) */}
          <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-[#1a1f3c] to-[#050614] flex-col items-center justify-center p-12 text-center">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0"></div>
             
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-violet/10 blur-[100px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

             <div className="absolute inset-0 bg-gradient-to-t from-[#050614] via-transparent to-transparent z-10"></div>
             
             {/* PHOTO - Increased Size (w-80) */}
             <div className="relative z-20 w-80 aspect-[3/4] mb-8 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">
                <img 
                  src="https://i.ibb.co/Wp6rZhb0/Lvan-Houwelingen-20231123-8013-bewerkt.jpg" 
                  alt="Nick van Keulen" 
                  className="w-full h-full object-cover object-[50%_25%] opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                />
             </div>

             <div className="relative z-20 max-w-md">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 shadow-lg">
                   <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                   </span>
                   <span className="text-green-400 font-bold text-xs uppercase tracking-wider">Nu beschikbaar voor Q4</span>
                </div>
                <blockquote className="text-2xl font-bold text-white leading-tight mb-4 drop-shadow-md">
                  "Wij werken niet voor iedereen, wij werken voor merken die klaar zijn om te domineren."
                </blockquote>
                <p className="text-white font-medium">
                  — Nick van Keulen, Oprichter
                </p>
             </div>
          </div>

          {/* Form Side (Right Side) */}
          <div className="p-8 md:p-16 relative flex flex-col justify-center bg-white/[0.05] backdrop-blur-md">
             {/* Inner Glow */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>

             <div className="mb-8">
               <span className="block text-tech-turquoise font-bold tracking-wide mb-2 uppercase text-sm">
                 — Klaar om te groeien?
               </span>
               <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white pb-2">
                 Plan een vrijblijvend strategiegesprek.
               </h2>
               
               <div className="space-y-4 text-gray-300 text-base leading-relaxed mb-6">
                 <p>
                   Elke dag die je wacht, laat je omzet liggen. Maak nu de stap en ga serieus aan de slag.
                 </p>
                 <p>
                   Ontdek in een 30 minuten videocall waar jouw groeikansen liggen en of jouw merk in aanmerking komt voor een samenwerking.
                 </p>
               </div>

               {/* Reassurance Tags */}
               <div className="flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2 text-white font-medium text-sm bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg shadow-sm">
                      <Clock size={16} className="text-tech-turquoise" />
                      In 30 seconden gepland
                  </div>
               </div>
             </div>

             {/* Scarcity / Alert */}
             <div className="mb-8 inline-flex items-center gap-3 bg-brand-orange/10 border border-brand-orange/30 rounded-lg px-4 py-3 shadow-inner">
                 <AlertTriangle className="text-brand-orange shrink-0" size={18} />
                 <p className="text-orange-100 text-xs md:text-sm">
                   <span className="text-brand-orange font-bold">Update:</span> Wegens hoge vraag nemen we nog slechts 3 nieuwe merken aan in Q1.
                 </p>
             </div>

             {/* Form Steps */}
             <div className="relative">
                {/* Progress */}
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`h-1.5 rounded-full flex-1 transition-colors duration-300 ${i <= step ? 'bg-gradient-cta' : 'bg-white/10'}`}></div>
                  ))}
                </div>

                <div className="min-h-[280px]">
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-bold text-white mb-4">Wat is je huidige maandelijkse ad spend?</h3>
                      <div className="space-y-3">
                        {['Nog niet gestart', '€0 - €1.000', '€1.000 - €5.000', '€5.000 - €20.000', '€20.000+'].map((opt) => (
                          <button 
                            key={opt}
                            onClick={() => { setFormData({...formData, adSpend: opt}); handleNext(); }}
                            className="w-full p-4 rounded-xl border border-white/10 bg-white/10 text-left font-medium text-gray-200 hover:text-white hover:border-tech-turquoise hover:bg-white/15 transition-all group flex justify-between items-center hover:shadow-lg hover:shadow-tech-turquoise/10"
                          >
                            {opt}
                            <ChevronRight className="opacity-0 group-hover:opacity-100 text-tech-turquoise transition-opacity" size={20} />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-in">
                      <h3 className="text-xl font-bold text-white mb-6">Wat is je website URL?</h3>
                      <input 
                        type="text" 
                        placeholder="www.jouwmerk.nl" 
                        className="w-full p-5 rounded-xl border border-white/20 bg-white/10 focus:bg-white/15 focus:border-tech-turquoise focus:ring-1 focus:ring-tech-turquoise outline-none text-lg mb-6 text-white placeholder:text-gray-400 transition-all shadow-inner"
                        value={formData.url}
                        onChange={(e) => setFormData({...formData, url: e.target.value})}
                      />
                      <Button variant="primary" className="w-full py-4 text-lg" onClick={handleNext}>
                        Volgende Stap <ArrowRight size={20} />
                      </Button>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-fade-in">
                      <h3 className="text-xl font-bold text-white mb-6">Waar kunnen we je bereiken?</h3>
                      <div className="space-y-4 mb-6">
                        <input 
                          type="text" 
                          placeholder="Volledige Naam" 
                          className="w-full p-4 rounded-xl border border-white/20 bg-white/10 focus:bg-white/15 focus:border-tech-turquoise focus:ring-1 focus:ring-tech-turquoise outline-none text-white placeholder:text-gray-400 transition-all shadow-inner"
                        />
                        <input 
                          type="tel" 
                          placeholder="Telefoonnummer" 
                          className="w-full p-4 rounded-xl border border-white/20 bg-white/10 focus:bg-white/15 focus:border-tech-turquoise focus:ring-1 focus:ring-tech-turquoise outline-none text-white placeholder:text-gray-400 transition-all shadow-inner"
                        />
                         <input 
                          type="email" 
                          placeholder="E-mailadres (optioneel)" 
                          className="w-full p-4 rounded-xl border border-white/20 bg-white/10 focus:bg-white/15 focus:border-tech-turquoise focus:ring-1 focus:ring-tech-turquoise outline-none text-white placeholder:text-gray-400 transition-all shadow-inner"
                        />
                      </div>
                      <Button variant="primary" className="w-full py-4 text-lg">
                        Strategiegesprek plannen
                      </Button>
                    </div>
                  )}
                </div>
             </div>

             {/* Footer Items - Trust Indicators */}
             <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 md:gap-8 justify-center lg:justify-start">
                 <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-green-500" />
                    <span className="font-bold text-sm text-gray-300">100% Vrijblijvend</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Zap size={18} className="text-brand-orange fill-current" />
                    <span className="font-bold text-sm text-gray-300">Direct toepasbare Quick Wins</span>
                 </div>
             </div>

             {/* Mobile-Only Founder/Photo Section */}
             <div className="lg:hidden mt-8 pt-8 border-t border-white/10 flex flex-col items-center text-center animate-fade-in">
                 {/* PHOTO - Increased Size (w-32) */}
                 <div className="relative w-32 h-32 mb-4 rounded-full border-2 border-white/20 overflow-hidden shadow-lg">
                      <img 
                        src="https://i.ibb.co/Wp6rZhb0/Lvan-Houwelingen-20231123-8013-bewerkt.jpg" 
                        alt="Nick van Keulen" 
                        className="w-full h-full object-cover object-[50%_25%]" 
                      />
                 </div>
                 <blockquote className="text-white font-medium italic mb-2">
                    "Wij werken niet voor iedereen, wij werken voor merken die klaar zijn om te domineren."
                 </blockquote>
                 <p className="text-white text-sm font-bold uppercase tracking-wider">
                   — Nick van Keulen, Oprichter
                 </p>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
