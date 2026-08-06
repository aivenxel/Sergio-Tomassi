import React from 'react';
import { Target, Waves, Flame, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      num: "01",
      icon: <Target className="w-5 h-5 text-brand-or" />,
      action: "Pronunciación",
      result: "Más claridad al hablar.",
      desc: "Afinamos y ajustamos físicamente los sonidos vocálicos y consonánticos esenciales para que te expreses con total nitidez."
    },
    {
      num: "02",
      icon: <Waves className="w-5 h-5 text-brand-ciel" />,
      action: "Prosodia y Encadenamientos",
      result: "Más naturalidad y fluidez oral.",
      desc: "Trabajamos la división silábica, los encadenamientos consonánticos, el ritmo, las pausas y la entonación real del francés hablado."
    },
    {
      num: "03",
      icon: <Flame className="w-5 h-5 text-brand-or" />,
      action: "Confianza oral",
      result: "Menos pena, menos bloqueo.",
      desc: "Eliminamos el temor al acento y la timidez del directo para que hables libremente, con seguridad en ti mismo."
    },
    {
      num: "04",
      icon: <ShieldAlert className="w-5 h-5 text-brand-ciel" />,
      action: "Corrección guiada",
      result: "Aprender sin sentirte juzgado.",
      desc: "Ajustes técnicos constructivos en un ambiente seguro, de sumo respeto y paciencia con tu propio ritmo."
    },
    {
      num: "05",
      icon: <Sparkles className="w-5 h-5 text-brand-or" />,
      action: "Constancia",
      result: "Resultados que se sostienen.",
      desc: "Estrategias de práctica realistas y continuas para que los avances se integren permanentemente en tu habla diaria."
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-brand-blanc overflow-hidden px-6 sm:px-12 lg:px-20 border-b border-brand-ivoire">
      
      {/* Decorative vertical blueprint markings */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-brand-ivoire/40 hidden lg:block pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-brand-ivoire/40 hidden lg:block pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="space-y-4 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-brand-ciel block">
            BENEFICIOS REALES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-marine tracking-tight">
            Lo que trabajas con el Profe Sergio
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-ardoise font-light max-w-xl mx-auto">
            El camino concreto para dejar atrás los bloqueos y construir una voz que se comprenda de verdad.
          </p>
        </div>

        {/* Clean comparative table layout */}
        <div className="bg-white rounded-2xl border border-brand-ivoire/80 shadow-md overflow-hidden divide-y divide-brand-ivoire/60">
          {/* Table Headers (Visible on Desktop only) */}
          <div className="hidden md:grid grid-cols-12 gap-6 bg-brand-ivoire/30 px-8 py-5 font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-marine border-b border-brand-ivoire/50 text-left">
            <div className="col-span-5 flex items-center gap-2">
              <span className="text-brand-or">◆</span> EL ENFOQUE DE TRABAJO
            </div>
            <div className="col-span-7 flex items-center gap-2 pl-6">
              <span className="text-brand-ciel">◆</span> EL RESULTADO DIRECTO
            </div>
          </div>

          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-start hover:bg-brand-ivoire/20 transition-all duration-300 text-left"
            >
              {/* Left Column: Action / Icon (The Approach) */}
              <div className="md:col-span-5 flex items-center gap-4">
                <span className="font-mono text-xs text-brand-ardoise font-bold select-none shrink-0">
                  {benefit.num}
                </span>
                <div className="p-2.5 rounded-lg bg-brand-ivoire/60 text-brand-marine shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  {/* Small tag only on Mobile as column header isn't visible */}
                  <span className="font-sans text-[9px] text-brand-ardoise uppercase tracking-widest font-bold block md:hidden mb-0.5">
                    EL ENFOQUE
                  </span>
                  <h4 className="font-serif text-lg font-bold text-brand-marine">
                    {benefit.action}
                  </h4>
                </div>
              </div>

              {/* Right Column: Result / Real value (The Outcome) */}
              <div className="md:col-span-7 flex items-start gap-3 pl-0 md:pl-6 border-t border-brand-ivoire/40 md:border-t-0 pt-4 md:pt-0">
                <div className="mt-1 shrink-0 text-brand-ciel">
                  <CheckCircle2 className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-1">
                  {/* Small tag only on Mobile as column header isn't visible */}
                  <span className="font-sans text-[9px] text-brand-ciel uppercase tracking-widest font-bold block md:hidden mb-0.5">
                    EL RESULTADO DIRECTO
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-brand-marine">
                    {benefit.result}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-brand-ardoise font-light leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Motivational Callout - 2 Columns (Quote on Left, Image on Right) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-ivoire shadow-lg max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          {/* Left Column: Quote */}
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-brand-ivoire px-3.5 py-1 rounded-full border border-brand-or/30">
              <span className="text-brand-or text-xs">💬</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-marine">
                FILOSOFÍA DEL MÉTODO
              </span>
            </div>
            
            <p className="font-serif text-lg sm:text-xl md:text-2xl italic text-brand-marine leading-relaxed font-medium">
              &ldquo;La pronunciación clara no es un talento místico para unos pocos elegidos. Es una destreza técnica que se aprende ajustando el cuerpo y practicando de forma guiada.&rdquo;
            </p>
            
            <div className="pt-2 border-t border-brand-ivoire flex items-center justify-between">
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-brand-marine block font-bold">
                — PROF. SERGIO TOMASSI
              </span>
              <span className="font-mono text-[10px] text-brand-ciel uppercase tracking-wider font-semibold">
                Método Fonético
              </span>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden border-2 border-brand-ivoire shadow-md aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] group">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
              alt="Prof. Sergio Tomassi enseñando técnica vocal" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-marine/80 via-transparent to-transparent flex items-end p-4">
              <span className="bg-brand-marine/90 text-brand-or px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase border border-brand-or/30">
                📷 Práctica Guiada en Vivo
              </span>
            </div>
          </div>
        </div>

        {/* Section Enrollment CTA */}
        <div className="pt-4 text-center">
          <a
            href="#conversion-form"
            className="inline-flex items-center justify-center gap-3 bg-brand-or hover:bg-amber-400 text-brand-marine px-8 py-4 rounded-xl font-sans font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
          >
            <span>¡Inscríbete AQUÍ (Llenar Formulario)!</span>
            <span className="text-xl">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
