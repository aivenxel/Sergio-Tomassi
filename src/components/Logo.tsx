import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  lightBackground?: boolean;
}

export default function Logo({ className = '', showText = true, lightBackground = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="brand-logo">
      {/* High-fidelity Circular Emblem matching the user's exact uploaded asset */}
      <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0" id="logo-emblem">
        <img 
          src="/phonetique.png" 
          alt="Phonétique du Français" 
          className="w-14 h-14 object-contain" 
        />
      </div>

      {/* Brand Name Typography - now strictly in Sans-serif font */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-sans text-lg font-extrabold tracking-tight leading-none ${lightBackground ? 'text-brand-marine' : 'text-white'}`}>
            Phonétique <span className="text-brand-ciel">du</span> Français
          </span>
          <span className={`font-sans text-[10px] uppercase tracking-[0.2em] font-bold ${lightBackground ? 'text-brand-ardoise' : 'text-brand-ivoire/75'}`}>
            Prof. Sergio Tomassi
          </span>
        </div>
      )}
    </div>
  );
}
