import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon, className, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide";
  
  const variants = {
    // New Energetic Gradient: Orange -> Magenta
    primary: "bg-gradient-cta text-white shadow-lg shadow-brand-orange/30 hover:shadow-brand-magenta/30 border border-transparent bg-[length:200%_auto] hover:bg-[position:right_center] transition-[background-position]",
    outline: "bg-transparent border border-white/20 text-white hover:border-brand-orange hover:bg-white/5",
    ghost: "bg-transparent text-text-dark-secondary hover:text-white"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className || ''}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="text-white">{icon}</span>}
      </span>
    </button>
  );
};

export default Button;