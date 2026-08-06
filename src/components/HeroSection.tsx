import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MapPin, Award, Users } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100vh] flex flex-col justify-between bg-brand-blanc overflow-hidden pt-44 pb-32 sm:pt-48 sm:pb-36 lg:pt-52 lg:pb-40 px-6 sm:px-12 lg:px-20"
    >
      {/* Background Architectural Blueprint Grid Texture (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#112A46" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Golden Line Frame (Architectural reference) */}
      <div className="absolute top-0 bottom-0 right-[40%] w-[1px] bg-brand-ivoire hidden lg:block pointer-events-none" />

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto w-full max-w-7xl mx-auto z-10">
        
        {/* Left Side: Copywriting (55% or 7 columns) */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-6 md:space-y-8 pr-0 lg:pr-8">
          
          {/* Subtle Accent Tag & Level Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2 self-start"
          >
            <div className="inline-flex items-center gap-2 bg-brand-ivoire/80 backdrop-blur-xs px-4 py-1.5 rounded-full border border-brand-or/25">
              <Sparkles className="w-3.5 h-3.5 text-brand-or" />
              <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-brand-marine">
                Phonétique du Français
              </span>
            </div>
            
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200 text-xs font-bold tracking-wide">
              <span>✓ APTO PARA TODOS LOS NIVELES</span>
            </div>
          </motion.div>

          {/* H1 Heading */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal leading-[1.1] text-brand-marine tracking-tight"
            >
              Construye una voz más <br />
              <span className="font-serif italic text-brand-ciel relative inline-block">
                clara y segura
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-or/40" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M1 9.5C80 3.5 160 1.5 299 9.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span> <br />
              en francés.
            </motion.h1>
          </div>

          {/* Subtitle / Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-brand-ardoise font-normal leading-relaxed max-w-2xl"
          >
            Aprender francés no es solo memorizar palabras. Desde quienes comienzan desde cero hasta quienes desean perfeccionar su pronunciación: afina tu oído, entrena la biomecánica de tu boca y gana confianza real para hablar en vivo.
          </motion.p>

          {/* CTA Button and trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2"
          >
            {/* Quiero mejorar mi pronunciación */}
            <button
              onClick={onCtaClick}
              className="group relative inline-flex items-center justify-center gap-2 bg-brand-ciel text-white hover:bg-brand-marine px-8 py-4 rounded-lg font-sans font-bold tracking-wide text-base transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
              id="cta-hero-improve-pronunciation"
            >
              Quiero mejorar mi pronunciación
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Ver programas */}
            <button 
              onClick={() => {
                document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border border-brand-marine/20 bg-brand-ivoire/40 text-brand-marine hover:bg-brand-ivoire px-8 py-4 rounded-lg font-sans font-bold tracking-wide text-base transition-all duration-300 cursor-pointer"
              id="cta-hero-view-programs"
            >
              Ver programas
            </button>
          </motion.div>

          {/* Quick Credibility Footnotes */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-8 grid grid-cols-2 gap-4 border-t border-brand-ivoire max-w-sm"
          >
            <div className="flex items-start gap-2">
              <Award className="w-5 h-5 text-brand-or shrink-0 mt-0.5" />
              <div>
                <p className="font-serif text-sm font-bold text-brand-marine">30+ Años</p>
                <p className="font-sans text-[10px] text-brand-ardoise uppercase tracking-wider">De Experiencia</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Users className="w-5 h-5 text-brand-ciel shrink-0 mt-0.5" />
              <div>
                <p className="font-serif text-sm font-bold text-brand-marine">+1,000</p>
                <p className="font-sans text-[10px] text-brand-ardoise uppercase tracking-wider">Estudiantes</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Portrait of Sergio (40-45% or 5 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex flex-col items-center gap-6"
        >
          {/* Magazine Image Frame */}
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-full aspect-[3/4] rounded-lg overflow-visible bg-brand-ivoire p-3 border border-brand-ivoire shadow-xl">
            
            {/* Background Graphic Rings (Soundwaves/Arch representation) */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border border-brand-ciel/20 pointer-events-none -z-10" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border border-brand-or/20 pointer-events-none -z-10" />
            
            {/* Elegant Corner Architectural Bracket Markings */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-or -translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-marine -translate-x-[-4px] -translate-y-[-4px]" />

            {/* Main Picture */}
            <div className="w-full h-full rounded-md overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Prof. Sergio Tomassi" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Vignette & Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-marine/50 via-transparent to-transparent opacity-80" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-brand-blanc/95 backdrop-blur-md px-4 py-3 rounded-lg border border-brand-ivoire/50 flex justify-between items-center">
                <div className="text-left">
                  <span className="font-sans text-[10px] text-brand-ardoise uppercase tracking-widest block font-bold">Profesor de Fonética</span>
                  <span className="font-serif text-sm font-bold text-brand-marine">Sergio Tomassi</span>
                </div>
                <div className="bg-brand-marine text-brand-or rounded-full p-2">
                  <span className="font-serif text-xs font-bold italic">Ca.</span>
                </div>
              </div>
            </div>

            {/* Quote Accent under magazine photo */}
            <div className="absolute -bottom-16 -left-4 bg-brand-blanc border-l-4 border-brand-or p-3 shadow-md max-w-[280px] text-left rounded-r-lg hidden sm:block">
              <p className="font-serif text-xs italic text-brand-marine">
                &ldquo;Sé lo que es llegar, no entender y querer que te entiendan. Por eso enseño así.&rdquo;
              </p>
              <span className="font-sans text-[8px] uppercase tracking-wider text-brand-ardoise block mt-1 font-semibold">
                — Prof. Sergio Tomassi
              </span>
            </div>

          </div>

          {/* Philosophy Line beneath the photo */}
          <div className="mt-8 flex items-center justify-center gap-2 text-brand-marine font-serif text-sm sm:text-base italic font-semibold text-center bg-brand-ivoire/50 px-4 py-2.5 rounded-xl border border-brand-ivoire/80 shadow-xs z-20">
            <span>Enseñando con respeto, precisión y humanidad.</span>
            <span className="text-brand-erable text-base animate-pulse">❤️</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
