
import React from 'react';
import { APP_NAME } from '../constants';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050614] pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-royal-violet to-transparent opacity-50"></div>
      
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
          
          <div className="md:w-1/3">
             <div className="mb-8">
                <span className="text-white font-extrabold text-3xl tracking-tighter">{APP_NAME}</span>
            </div>
            <p className="text-text-dark-secondary leading-relaxed mb-8 text-lg font-light max-w-sm">
              High-end Google Ads performance agency. Wij bouwen de e-commerce giganten van morgen.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-magenta hover:border-brand-magenta transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-magenta hover:border-brand-magenta transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full md:w-2/3">
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Menu</h4>
              <ul className="space-y-4 text-text-dark-secondary">
                <li className="hover:text-white cursor-pointer transition-colors"><a href="#approach">Aanpak</a></li>
                <li className="hover:text-white cursor-pointer transition-colors"><a href="#results">Resultaten</a></li>
                <li className="hover:text-white cursor-pointer transition-colors"><a href="#faq">FAQ</a></li>
                <li className="hover:text-white cursor-pointer transition-colors"><a href="#contact">Contact</a></li>
              </ul>
            </div>
             <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contact & Locatie</h4>
              <div className="space-y-4 text-text-dark-secondary">
                 <p className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail size={18} />
                    <a href="mailto:info@goodlifemarketing.nl">info@goodlifemarketing.nl</a>
                 </p>
                 <p className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone size={18} />
                    <a href="tel:+31636448203">+31 6 36448203</a>
                 </p>
                 <p className="pt-2 border-t border-white/5 mt-4">Linneaushof 88-2, Amsterdam, 1098KT</p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60">
          <p className="text-text-dark-secondary text-sm">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-text-dark-secondary">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
