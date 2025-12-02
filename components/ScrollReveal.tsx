import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds
  width?: 'full' | 'auto';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '', delay = 0, width = 'full' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const style = {
    transitionDelay: `${delay}s`,
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${width === 'full' ? 'w-full' : 'w-auto'} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;