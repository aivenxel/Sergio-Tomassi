import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Quote, Shield } from 'lucide-react';

export default function AboutProfessorSection() {
  return (
    <section id="professor" className="relative py-24 bg-brand-ivoire/30 overflow-hidden px-6 sm:px-12 lg:px-20 border-b border-brand-ivoire">
      {/* Structural design details in background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.015] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="#002D72" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Section title */}
        <div className="text-left space-y-3 mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-brand-ciel block">
            CONOCE A TU INSTRUCTOR
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-marine tracking-tight">
            Sobre el Profesor
          </h2>
        </div>

        {/* Two-Column Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait representation of Sergio (40-45% presence) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl bg-white p-3 border border-brand-ivoire shadow-xl">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600&h=750" 
                  alt="Prof. Sergio Tomassi" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-marine/60 via-transparent to-transparent" />
                
                {/* Floating identity badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs px-4 py-3 rounded-xl border border-brand-ivoire/30 text-left">
                  <span className="font-sans text-[9px] text-brand-ciel uppercase tracking-widest font-bold block">Fundador del método</span>
                  <span className="font-serif text-base font-bold text-brand-marine">Prof. Sergio Tomassi</span>
                </div>
              </div>

              {/* Decorative design brackets */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-brand-or rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-brand-marine rounded-bl-lg" />
            </div>
          </div>

          {/* Right Column: Narrative Copywriting */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Story Paragraph */}
            <div className="space-y-4">
              <span className="font-sans text-xs uppercase tracking-widest font-bold text-brand-or bg-brand-or/10 px-3 py-1 rounded-full inline-block">
                De Caracas a Montréal
              </span>
              <p className="font-sans text-base text-brand-ardoise leading-relaxed font-light">
                Antes de enseñar francés, Sergio Tomassi fue inmigrante. De raíces italo-francesas (italiano, francés y español), dedicó cerca de tres décadas a la docencia en Caracas. Al llegar a Québec tuvo que empezar de nuevo: integrarse, dominar el francés y revalidar su formación.
              </p>
              <p className="font-sans text-base text-brand-ardoise leading-relaxed font-light">
                Vivió en primera persona el desafío de hacerse entender en una nueva lengua y descubrió que aprender un idioma va mucho más allá de la gramática. Hoy, esa experiencia es la base de su método.
              </p>
            </div>

            {/* Teaching Approach Box */}
            <div className="bg-white border border-brand-ivoire p-6 rounded-2xl space-y-3 shadow-xs">
              <h4 className="font-serif text-lg font-bold text-brand-marine flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-ciel" />
                Su enfoque como arquitecto
              </h4>
              <p className="font-sans text-sm text-brand-ardoise leading-relaxed font-light">
                Su formación como arquitecto aporta una mirada única: escucha con atención, identifica los pequeños ajustes que generan grandes cambios y encuentra formas claras de hacer comprensible lo que para muchos parece difícil. Acompaña a cada estudiante con precisión, paciencia y respeto.
              </p>
            </div>

            {/* Beautiful, High-contrast Direct Quote */}
            <div className="border-l-4 border-brand-or pl-4 py-1 italic">
              <p className="font-serif text-base sm:text-lg text-brand-marine font-normal leading-relaxed">
                "Sé lo que significa llegar a un lugar nuevo, no entender y querer que te tengan paciencia y te entiendan. Por eso enseño como enseño."
              </p>
            </div>

            {/* Direct CTA to Enroll */}
            <div className="pt-2">
              <a
                href="#conversion-form"
                className="inline-flex items-center gap-3 bg-brand-or hover:bg-amber-500 text-brand-marine px-6 py-3.5 rounded-xl font-sans font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <span>¡Inscríbete con el Prof. Sergio!</span>
                <span className="text-base">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
