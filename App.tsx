
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyGoogleAds from './components/WhyGoogleAds';
import WhyUs from './components/WhyUs';
import ResultsSection from './components/ResultsSection';
import Process from './components/Process';
import About from './components/About';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ClientLogos from './components/ClientLogos';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SuccessStoryCTA from './components/SuccessStoryCTA';
import StatsGrid from './components/StatsGrid';
import GooglePartner from './components/GooglePartner';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-deep-indigo min-h-screen selection:bg-brand-orange selection:text-white font-sans">
      <Navbar openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
        <ClientLogos />
        <WhyGoogleAds openModal={openModal} />
        <Process openModal={openModal} />
        <WhyUs openModal={openModal} />
        <ResultsSection openModal={openModal} />
        <SuccessStoryCTA openModal={openModal} />
        <About openModal={openModal} />
        <StatsGrid />
        <GooglePartner openModal={openModal} />
        <FAQ />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
