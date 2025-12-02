
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-lavender-grey">
      {/* Updated Container Padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
             {/* Standardized Headline Size: text-3xl md:text-4xl lg:text-5xl */}
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light-primary mb-6">
               Holistische Groei Strategieën
             </h2>
             <p className="text-text-light-secondary text-lg">
               Geen losse flodders, maar een geïntegreerde aanpak. Wij combineren techniek, creativiteit en data voor schaalbaar succes.
             </p>
          </div>
          <div className="hidden md:block">
            {/* Decorative line */}
            <div className="h-[2px] w-32 bg-gradient-cta"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl shadow-indigo-900/5 hover:shadow-indigo-900/10 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-royal-violet/10 overflow-hidden"
            >
              {/* Gradient Top Border on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-cta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="w-14 h-14 rounded-xl bg-lavender-grey flex items-center justify-center mb-8 group-hover:bg-deep-indigo transition-colors duration-300">
                <service.icon className="text-royal-violet group-hover:text-tech-turquoise transition-colors duration-300" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-text-light-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-text-light-secondary leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex items-center text-royal-violet font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                Ontdek meer <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
