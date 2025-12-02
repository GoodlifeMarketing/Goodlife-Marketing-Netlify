
import React from 'react';

const PerformanceChart: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
       <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-gray-100 shadow-2xl">
          <div className="bg-white rounded-2xl overflow-hidden relative">
             
             {/* Fake Browser Header */}
             <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
                
                {/* Fake URL Bar */}
                <div className="ml-4 flex-1 h-6 bg-white border border-gray-200 rounded-md max-w-xs opacity-50"></div>
             </div>

             {/* Image */}
             <div className="relative">
                <img 
                  src="https://i.ibb.co/RZ1PzqY/Resultaten-mayson.png" 
                  alt="Resultaten Mayson" 
                  className="w-full h-auto object-cover block contrast-105"
                  loading="eager"
                  decoding="async" 
                />
                
                {/* No overlay to ensure maximum sharpness */}
             </div>
          </div>
       </div>
       
       {/* Background ambient shadow/glow */}
       <div className="absolute -inset-4 bg-royal-violet/5 blur-2xl -z-10 rounded-[3rem]"></div>
    </div>
  );
};

export default PerformanceChart;
