
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, APP_NAME } from '../constants';
import Button from './Button';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  openModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Extract ID from href (e.g., "#approach" -> "approach")
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Sticky Top Bar - Clickable to open Modal */}
      <div 
        onClick={openModal}
        className="fixed top-0 left-0 right-0 z-[60] bg-[#02030a] text-white font-medium tracking-wide text-center py-3.5 md:py-2.5 px-2 sm:px-4 shadow-sm flex items-center justify-center overflow-hidden border-b border-white/5 cursor-pointer hover:bg-[#080a1f] transition-colors"
      >
         {/* Subtle ambient light - Purple */}
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-royal-violet/20 to-transparent opacity-60 pointer-events-none"></div>
         
         {/* Content */}
         <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
            {/* Desktop View */}
            <span className="hidden md:inline-flex items-center gap-2 text-sm">
               <span>👉 Strategiegesprek binnen 30 seconden gepland</span>
               <span className="text-tech-turquoise text-[10px]">•</span>
               <span className="opacity-90">100% vrijblijvend</span>
            </span>

            {/* Mobile View - Fits on one line */}
            <span className="md:hidden text-[10px] tracking-tight leading-none text-white/90">
               👉 Strategiegesprek binnen 30 seconden gepland
            </span>
         </span>
      </div>

      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-[3.5rem] px-4 md:px-0' // Adjust for slightly taller/padded top bar
            : 'top-[3rem] px-0' 
        }`}
      >
        <div 
          className={`mx-auto transition-all duration-500 ${
            isScrolled 
              ? 'max-w-6xl bg-deep-indigo/90 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-6' 
              : 'container bg-transparent py-6 px-6'
          } flex justify-between items-center`}
        >
          {/* Brand Logo - Image */}
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://i.ibb.co/rG0pxHPY/GOODLIFE-MARKETING-LOGO-1.png" 
              alt={APP_NAME} 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-text-dark-secondary hover:text-white text-sm font-semibold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-turquoise transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA - Google Ads Audit (Opens Modal) */}
          <div className="hidden md:block">
            <Button 
              variant="primary" 
              className={`px-6 py-2 text-xs ${isScrolled ? 'shadow-none hover:shadow-lg' : ''}`}
              onClick={openModal}
            >
              Google Ads Audit
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-deep-indigo/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white text-2xl font-bold tracking-tight"
            >
              {link.label}
            </a>
          ))}
           <div className="flex flex-col items-center w-full px-6">
             <Button 
               variant="primary" 
               className="mt-4 px-8 py-4 w-full" 
               onClick={() => {
                 setMobileMenuOpen(false);
                 openModal();
               }}
              >
               <span className="font-bold">Google Ads Audit</span>
             </Button>
           </div>
      </div>
    </>
  );
};

export default Navbar;
