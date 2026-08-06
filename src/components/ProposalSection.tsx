import React, { useState } from 'react';
import { Layers, Landmark, Sliders, MessageSquare, Sparkles, Building, ChevronRight } from 'lucide-react';

export default function ProposalSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      icon: <Layers className="w-6 h-6 text-brand-or" />,
      title: "Los Cimientos",
      subtitle: "Sonidos esenciales y las emblemáticas 'E' del francés",
      badge: "LAS EMBLEMÁTICAS 'E' DEL FRANCÉS",
      desc: "Comenzamos dominando los sonidos que no existen en español. Entender las vocales nasales, las emblemáticas 'E' del francés y la 'R' francesa desde su colocación física, sin misterios.",
      architectRef: "Puesta a nivel y cimentación profunda.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
      imageTag: "📷 Fichas & Grafía"
    },
    {
      num: "02",
      icon: <Landmark className="w-6 h-6 text-brand-ciel" />,
      title: "La Estructura",
      subtitle: "Pronunciación y prosodia",
      badge: "La división silábica y EL ENCADENAMIENTO CONSONÁNTICO",
      desc: "Aprendemos a conectar las palabras mediante la 'liaison', la división silábica, el encadenamiento consonántico y el ritmo del idioma. El francés es una música continua; te enseñamos a construir el esqueleto de tus frases.",
      architectRef: "Vigas de carga, uniones y estabilidad.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
      imageTag: "📷 Biomecánica Vocal"
    },
    {
      num: "03",
      icon: <Sliders className="w-6 h-6 text-brand-erable" />,
      title: "Los Ajustes",
      subtitle: "Errores frecuentes y corrección biomecánica",
      badge: "Corrección postural de boca y lengua",
      desc: "Identificamos y corregimos de inmediato los hábitos del español que ensucian la claridad del francés. Ajustes milimétricos en la mandíbula, lengua y labios para un gran cambio de sonido.",
      architectRef: "Nivelación, plomada y rectificación.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
      imageTag: "📷 Feedback en Directo"
    },
    {
      num: "04",
      icon: <MessageSquare className="w-6 h-6 text-brand-marine" />,
      title: "Los Espacios Habitables",
      subtitle: "Conversación y aplicación real",
      badge: "Situaciones cotidianas, laborales y sociales",
      desc: "Llevamos la teoría a situaciones cotidianas, laborales y sociales. De nada sirve una estructura hermosa si no puedes habitarla y comunicarte en el mundo real.",
      architectRef: "Distribución interior y habitabilidad.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      imageTag: "📷 Aula Virtual Zoom"
    },
    {
      num: "05",
      icon: <Sparkles className="w-6 h-6 text-brand-or" />,
      title: "Los Acabados",
      subtitle: "Naturalidad, confianza y fluidez",
      badge: "Autonomía y articulación segura",
      desc: "Pulimos la entonación y el acento natural para que hables sin miedo a ser juzgado. Ganas esa confianza que te hace sonar seguro, auténtico y dueño de tu proceso.",
      architectRef: "Revestimiento, pintura y detalles finales.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      imageTag: "📷 Confianza & Fluidez"
    }
  ];

  return (
    <section id="method" className="relative py-24 bg-brand-ivoire/30 overflow-hidden px-6 sm:px-12 lg:px-20 border-y border-brand-ivoire">
      
      {/* Background blueprint elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-brand-marine">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-brand-ciel flex items-center gap-1.5">
              <Building className="w-4 h-4" /> LA METODOLOGÍA ESTRUCTURAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-marine tracking-tight leading-tight">
              La Arquitectura de la Pronunciación
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-sm sm:text-base text-brand-ardoise font-light leading-relaxed">
              No enseñamos francés “bonito”. Enseñamos francés <strong>claro, útil y bien construido</strong>. Cuando ya aprendes gramática y memorizas todo el vocabulario posible, llega el momento de hablar: ahí es donde la pronunciación, el ritmo y la prosodia hacen toda la diferencia. Ese es el diferencial de Sergio. No trabaja solo qué decir, sino cómo decirlo. Como arquitecto, sabe que una estructura sólida no se improvisa; pequeños ajustes en la base pueden cambiar por completo la claridad, el ritmo y la seguridad con la que te expresas.
            </p>
          </div>
        </div>

        {/* Course Levels Section (Page 2 of PDF) */}
        <div className="bg-white rounded-3xl border border-brand-ivoire p-8 sm:p-10 shadow-lg space-y-8 text-left">
          <div className="space-y-2">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-or bg-brand-or/10 px-3 py-1 rounded-full inline-block">
              ESTRUCTURA DEL PROGRAMA
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-marine">
              El curso cuenta con 2 Niveles progresivos
            </h3>
            <p className="font-sans text-sm sm:text-base text-brand-ardoise font-light">
              Diseñados estratégicamente para llevarte de la biomecánica inicial a la fluidez prosódica natural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* NIVEL 1 Card */}
            <div className="p-6 rounded-2xl bg-brand-ivoire/30 border border-brand-ciel/30 flex flex-col justify-between space-y-4 hover:border-brand-ciel transition-all shadow-xs relative">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-ciel bg-brand-ciel/10 px-3 py-1 rounded-full">
                    NIVEL 01
                  </span>
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Apto para todos los niveles
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-bold text-brand-marine">
                  NIVEL 1: Sobre la Fonética
                </h4>
                <p className="font-sans text-sm text-brand-ardoise leading-relaxed font-light">
                  Perfecciona tu pronunciación y tu discriminación auditiva en francés combinando el <strong>AFI (Alfabeto Fonético Internacional)</strong>, con ejercicios prácticos y herramientas digitales para comunicarte con fluidez y naturalidad día a day.
                </p>
              </div>
              <div className="pt-4 border-t border-brand-marine/10 text-xs font-mono text-brand-marine font-semibold flex items-center gap-2">
                <span>🎯 Base técnica & discriminación de sonidos</span>
              </div>
            </div>

            {/* NIVEL 2 Card */}
            <div className="p-6 rounded-2xl bg-brand-marine text-white border border-brand-marine flex flex-col justify-between space-y-4 shadow-md relative overflow-hidden">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-or bg-brand-or/20 px-3 py-1 rounded-full">
                    NIVEL 02
                  </span>
                  <span className="text-[10px] text-brand-or font-bold uppercase tracking-widest border border-brand-or/40 px-2.5 py-1 rounded-md">
                    Requisito: Haber cursado Nivel 1
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  NIVEL 2: Sobre la Prosodia
                </h4>
                <p className="font-sans text-sm sm:text-base text-white leading-relaxed font-normal">
                  Perfecciona tu pronunciación y fluidez integrando el ritmo, la entonación y la musicalidad del francés (Prosodia) a través de ejercicios prácticos adaptados especialmente a hispanohablantes.
                </p>
              </div>
              <div className="pt-4 border-t border-white/20 text-xs font-mono text-brand-or font-semibold flex items-center gap-2">
                <span>🎶 Ritmo, musicalidad y ligaduras orales</span>
              </div>
            </div>

          </div>
        </div>

        {/* Sobre Las Clases Box (Page 3 of PDF) - High Contrast Dark Block */}
        <div className="bg-brand-marine text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 text-left border-2 border-brand-or/40 relative overflow-hidden">
          <div className="space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-brand-or bg-brand-or/20 px-3.5 py-1.5 rounded-full inline-block border border-brand-or/40">
              METODOLOGÍA DE CLASES EN VIVO
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-white">
              SOBRE LAS CLASES: En solo <span className="text-brand-or italic font-medium">1h30</span>, transforma tu pronunciación del francés.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-[#0a1829] p-6 rounded-2xl border-2 border-brand-or/30 space-y-3">
              <span className="font-mono text-lg font-bold text-brand-or block">1️⃣ Teoría clara</span>
              <p className="font-sans text-sm sm:text-base text-white font-normal leading-relaxed">
                Aprende a colocar correctamente boca, lengua y mandíbula para emitir cada sonido. Entiende exactamente de dónde se originan los fonemas del francés.
              </p>
            </div>

            <div className="bg-[#0a1829] p-6 rounded-2xl border-2 border-brand-ciel/30 space-y-3">
              <span className="font-mono text-lg font-bold text-brand-ciel block">2️⃣ Práctica en vivo</span>
              <p className="font-sans text-sm sm:text-base text-white font-normal leading-relaxed">
                Ejercicios interactivos con corrección personalizada al instante. Corregimos posturas y aire en el momento directo de hablar.
              </p>
            </div>

          </div>

          <div className="pt-6 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-[#0a1829] p-4.5 rounded-xl border border-white/15">
              <span className="text-2xl">🎯</span>
              <p className="font-sans text-sm sm:text-base text-white font-medium leading-relaxed">
                <strong className="text-brand-ciel font-bold">Clases grupales dinámicas vía ZOOM</strong> donde todos participan, practican y avanzan juntos.
              </p>
            </div>

            <div className="flex items-start gap-3 bg-[#0a1829] p-4.5 rounded-xl border-2 border-brand-or/50">
              <span className="text-2xl">📌</span>
              <p className="font-sans text-sm sm:text-base text-white font-medium leading-relaxed">
                <strong className="text-brand-or font-bold">La asistencia en vivo es obligatoria</strong> para que tu progreso sea real y visible: aquí venimos a hablar y ver resultados desde la primera sesión (nada de clases grabadas).
              </p>
            </div>
          </div>

        </div>

        {/* Five Architectural Steps Grid / Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Navigation (5 Columns) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="font-sans text-xs uppercase tracking-[0.15em] font-bold text-brand-ardoise mb-4 block text-left">
              Fases de construcción de tu voz:
            </p>
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 group ${
                  activeStep === idx 
                    ? 'bg-brand-marine border-brand-marine text-white shadow-md' 
                    : 'bg-white border-brand-ivoire hover:border-brand-ciel/50 text-brand-marine'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-sm font-bold ${activeStep === idx ? 'text-brand-or' : 'text-brand-ardoise'}`}>
                    {step.num}
                  </span>
                  <div className="shrink-0 p-2 rounded-lg bg-brand-ivoire/50 text-brand-marine group-hover:scale-105 transition-transform" style={{ color: activeStep === idx ? '#112A46' : 'inherit' }}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold leading-tight">
                      {step.title}
                    </h4>
                    <p className={`font-sans text-xs ${activeStep === idx ? 'text-brand-ivoire/80' : 'text-brand-ardoise'}`}>
                      {step.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeStep === idx ? 'text-brand-or translate-x-1' : 'text-brand-ardoise opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Expanded View (7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-brand-ivoire p-6 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden text-left min-h-[380px]">
            {/* Structural corner lines */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-brand-ciel/30 pointer-events-none translate-x-[-10px] translate-y-[10px]" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-brand-or/30 pointer-events-none translate-x-[10px] translate-y-[-10px]" />

            <div className="space-y-6">
              {/* Step Header */}
              <div className="flex justify-between items-start border-b border-brand-ivoire pb-4">
                <div>
                  <span className="font-mono text-xs text-brand-ciel uppercase tracking-widest font-bold">
                    Fase {steps[activeStep].num} del plan de obra
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-marine mt-0.5">
                    {steps[activeStep].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-brand-or font-semibold uppercase tracking-wider mt-0.5">
                    {steps[activeStep].subtitle}
                  </p>
                </div>
                <div className="text-3xl font-mono text-brand-marine/20 font-bold select-none">
                  #{steps[activeStep].num}
                </div>
              </div>

              {/* Step Content: Grid with Description and Phase Image */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-3">
                  <p className="font-sans text-sm sm:text-base text-brand-ardoise leading-relaxed font-normal">
                    {steps[activeStep].desc}
                  </p>
                  <span className="inline-block bg-brand-marine/10 text-brand-marine px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider">
                    {steps[activeStep].badge}
                  </span>
                </div>

                <div className="sm:col-span-5 relative rounded-2xl overflow-hidden border border-brand-ivoire shadow-md group h-40 sm:h-44">
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-marine/85 via-transparent to-transparent flex items-end p-2.5">
                    <span className="bg-brand-marine/90 text-brand-or px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase border border-brand-or/30 shadow-xs">
                      {steps[activeStep].imageTag}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural structural reference overlay */}
            <div className="mt-6 bg-brand-ivoire/60 p-3.5 rounded-xl border-l-4 border-brand-or flex items-center justify-between gap-4 text-xs font-mono">
              <div className="text-left">
                <span className="text-brand-ardoise block uppercase tracking-wider text-[9px] font-bold">
                  Referencia Técnica Arquitectónica
                </span>
                <span className="text-brand-marine font-bold">
                  {steps[activeStep].architectRef}
                </span>
              </div>
              <div className="text-brand-ciel shrink-0 text-base">
                📐
              </div>
            </div>

          </div>

        </div>

        {/* Humorous note for the method */}
        <div className="max-w-3xl mx-auto mt-12 bg-white/60 backdrop-blur-xs border border-brand-or/20 rounded-xl p-6 text-center shadow-xs">
          <p className="font-sans text-sm sm:text-base text-brand-marine italic font-medium leading-relaxed">
            "Pronunciar mejor no es magia negra ni tortura académica. Es práctica, oído y buenos ajustes."
          </p>
        </div>

        {/* Section Enrollment CTA */}
        <div className="pt-6 text-center">
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
