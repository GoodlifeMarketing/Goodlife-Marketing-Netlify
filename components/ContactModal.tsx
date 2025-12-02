
import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ArrowRight, ShieldCheck, Zap, Clock, AlertTriangle } from 'lucide-react';
import Button from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    adSpend: '',
    url: '',
    name: '',
    phone: '',
    email: ''
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-deep-indigo/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl bg-[#0C0F2C] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95vh] md:max-h-[850px] animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Side - Visuals (Desktop Tablet+) */}
        <div className="hidden md:flex w-[40%] bg-gradient-to-br from-[#1a1f3c] to-[#050614] flex-col justify-between p-8 lg:p-10 relative overflow-hidden border-r border-white/5">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0"></div>
             {/* Accents */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[60px] rounded-full pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-violet/10 blur-[60px] rounded-full pointer-events-none"></div>

             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 mb-6 shadow-lg">
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                   </span>
                   <span className="text-green-400 font-bold text-[10px] uppercase tracking-wider">Nu beschikbaar voor Q1</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-white text-lg font-bold leading-snug">
                     Elke dag die je wacht, laat je omzet liggen. Maak nu de stap en ga serieus aan de slag.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     Ontdek in een 30 minuten videocall waar jouw groeikansen liggen en of jouw merk in aanmerking komt voor een samenwerking.
                  </p>
                </div>
             </div>

             <div className="relative z-10 mt-auto text-center pt-8">
                 {/* Increased Image Size significantly for better quality */}
                 <div className="w-full max-w-[280px] aspect-[3/4] mx-auto mb-6 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      <img 
                        src="https://i.ibb.co/Wp6rZhb0/Lvan-Houwelingen-20231123-8013-bewerkt.jpg" 
                        alt="Nick van Keulen" 
                        className="w-full h-full object-cover object-[50%_25%]" 
                      />
                 </div>
                 <p className="text-white text-sm font-medium italic mb-1 max-w-xs mx-auto">
                   "Wij werken niet voor iedereen, wij werken voor merken die klaar zijn om te domineren."
                 </p>
                 <p className="text-white/60 text-xs font-bold uppercase tracking-wider mt-2">
                   — Nick van Keulen, Oprichter
                 </p>
             </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-[60%] p-6 md:p-10 lg:p-12 bg-white/[0.02] overflow-y-auto">
            
            {/* Mobile-Only Founder Section (Moved to TOP) */}
             <div className="md:hidden mb-8 pb-6 border-b border-white/10 flex flex-col items-center text-center">
                 <div className="relative w-40 h-40 mb-4 rounded-full border-2 border-white/20 overflow-hidden shadow-lg">
                      <img 
                        src="https://i.ibb.co/Wp6rZhb0/Lvan-Houwelingen-20231123-8013-bewerkt.jpg" 
                        alt="Nick van Keulen" 
                        className="w-full h-full object-cover object-[50%_25%]" 
                      />
                 </div>
                 <p className="text-white text-base italic mb-3 max-w-xs opacity-90 leading-snug">
                    "Wij werken niet voor iedereen, wij werken voor merken die klaar zijn om te domineren."
                 </p>
                 <p className="text-white/60 text-xs font-bold uppercase tracking-wider">
                   — Nick van Keulen, Oprichter
                 </p>
             </div>

            <div className="mb-6">
               <span className="block text-tech-turquoise font-bold tracking-wide mb-1 uppercase text-xs">
                 — Klaar om te groeien?
               </span>
               <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-white">
                 Plan je gesprek met Nick
               </h2>
               
               {/* Trust badges */}
               <div className="flex flex-wrap gap-3 mb-6">
                  <div className="inline-flex items-center gap-1.5 text-white font-medium text-xs bg-white/10 border border-white/20 px-2.5 py-1 rounded-lg">
                      <Clock size={14} className="text-tech-turquoise" />
                      In 30 seconden gepland
                  </div>
                   <div className="inline-flex items-center gap-1.5 text-white font-medium text-xs bg-white/10 border border-white/20 px-2.5 py-1 rounded-lg">
                      <ShieldCheck size={14} className="text-green-400" />
                      100% Vrijblijvend
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-white font-medium text-xs bg-white/10 border border-white/20 px-2.5 py-1 rounded-lg">
                      <Zap size={14} className="text-brand-orange" />
                      Direct toepasbare Quick Wins
                  </div>
               </div>
            </div>

             {/* Progress Bar */}
             <div className="flex gap-2 mb-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`h-1 rounded-full flex-1 transition-colors duration-300 ${i <= step ? 'bg-gradient-cta' : 'bg-white/10'}`}></div>
                ))}
             </div>

             <div className="min-h-[250px]">
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-bold text-white mb-4">Wat is je huidige maandelijkse ad spend?</h3>
                      <div className="space-y-2">
                        {['Nog niet gestart', '€0 - €1.000', '€1.000 - €5.000', '€5.000 - €20.000', '€20.000+'].map((opt) => (
                          <button 
                            key={opt}
                            onClick={() => { setFormData({...formData, adSpend: opt}); handleNext(); }}
                            className="w-full p-3.5 rounded-xl border border-white/10 bg-white/5 text-left font-medium text-gray-200 hover:text-white hover:border-tech-turquoise hover:bg-white/10 transition-all group flex justify-between items-center"
                          >
                            {opt}
                            <ChevronRight className="opacity-0 group-hover:opacity-100 text-tech-turquoise transition-opacity" size={18} />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-bold text-white mb-4">Wat is je website URL?</h3>
                      <input 
                        type="text" 
                        placeholder="www.jouwmerk.nl" 
                        className="w-full p-4 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 focus:border-tech-turquoise focus:ring-1 focus:ring-tech-turquoise outline-none text-white placeholder:text-gray-500 transition-all mb-6"
                        value={formData.url}
                        onChange={(e) => setFormData({...formData, url: e.target.value})}
                        autoFocus
                      />
                      <div className="flex gap-3">
                        <button onClick={handleBack} className="px-6 py-3 rounded-full text-white/60 hover:text-white font-medium transition-colors">Terug</button>
                        <Button variant="primary" className="flex-1 py-3" onClick={handleNext}>
                          Volgende <ArrowRight size={18} />
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-fade-in">
                      <h3 className="text-lg font-bold text-white mb-4">Waar kunnen we je bereiken?</h3>
                      <div className="space-y-3 mb-6">
                        <input 
                          type="text" 
                          placeholder="Volledige Naam" 
                          className="w-full p-3.5 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 focus:border-tech-turquoise focus:ring-1 focus:ring-tech-turquoise outline-none text-white placeholder:text-gray-500 transition-all"
                          autoFocus
                        />
                        <input 
                          type="tel" 
                          placeholder="Telefoonnummer" 
                          className="w-full p-3.5 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 focus:border-tech-turquoise focus:ring-1 focus:ring-tech-turquoise outline-none text-white placeholder:text-gray-500 transition-all"
                        />
                         <input 
                          type="email" 
                          placeholder="E-mailadres" 
                          className="w-full p-3.5 rounded-xl border border-white/20 bg-white/5 focus:bg-white/10 focus:border-tech-turquoise focus:ring-1 focus:ring-tech-turquoise outline-none text-white placeholder:text-gray-500 transition-all"
                        />
                      </div>
                      <div className="flex gap-3">
                        <button onClick={handleBack} className="px-6 py-3 rounded-full text-white/60 hover:text-white font-medium transition-colors">Terug</button>
                        <Button variant="primary" className="flex-1 py-3">
                          Aanvraag Versturen
                        </Button>
                      </div>
                      <p className="text-center text-xs text-white/40 mt-4">
                        Door te versturen ga je akkoord met onze voorwaarden.
                      </p>
                    </div>
                  )}
             </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
