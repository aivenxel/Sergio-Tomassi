import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Sparkles, Smile, Star } from 'lucide-react';

export default function DiagnosisSection() {
  const diagnosisItems = [
    "Entiendes más de lo que hablas, pero cuando te toca responder, te bloqueas.",
    "Te da pena pronunciar mal y sientes que te juzgan.",
    "Has estudiado francés, pero todavía no logras soltarte al hablar.",
    "Quieres expresarte mejor en entrevistas, estudios, trabajo o en tu vida diaria.",
    "Necesitas un profesor que te corrige con claridad, sin aplastarte y sin hacerte sentir menos.",
    "Quieres sonar más natural, entender mejor los matices del idioma y ganar confianza real al hablar."
  ];

  return (
    <section id="diagnosis" className="relative py-24 bg-brand-blanc overflow-hidden px-6 sm:px-12 lg:px-20 border-b border-brand-ivoire">
      {/* Decorative ambient blur background */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-brand-or/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 rounded-full bg-brand-ciel/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-brand-ciel flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-brand-or" /> EL DIAGNÓSTICO & LA SOLUCIÓN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-brand-marine tracking-tight">
            ¿Te pasa esto? <br />
            <span className="font-serif italic text-brand-or font-medium">Estás en el lugar correcto.</span>
          </h2>
        </div>

        {/* Biomechanics & Bad Habits Highlight Banner */}
        <div className="bg-brand-marine rounded-2xl p-6 sm:p-8 text-white text-left space-y-4 shadow-xl border border-brand-ciel/30">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-or flex items-center gap-1.5">
                👄 CLAVE DE APRENDIZAJE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                LA FONÉTICA NO ES MEMORIA, ¡ES BIOMECÁNICA!
              </h3>
            </div>
            <div className="bg-brand-or text-brand-marine px-4 py-2 rounded-xl font-sans font-bold text-xs uppercase tracking-wider shadow-sm">
              Entrenamiento Físico Vocal
            </div>
          </div>
          
          <p className="font-sans text-base sm:text-lg text-white font-normal leading-relaxed">
            La pronunciación se aprende primero con el oído y después entrenando los músculos de la boca, mandíbula y lengua. <strong className="text-brand-or font-semibold">Los malos hábitos de pronunciación se fijan rápido. ¡Corrígelos a tiempo con la fonética!</strong>
          </p>
        </div>

        {/* 6 Diagnostic Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diagnosisItems.map((text, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex gap-4 p-5 rounded-xl border border-brand-ivoire/80 bg-brand-ivoire/20 text-left items-start hover:border-brand-ciel/30 hover:bg-white transition-all shadow-xs"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-ciel/10 flex items-center justify-center text-brand-ciel font-bold text-sm">
                0{index + 1}
              </div>
              <p className="font-sans text-sm sm:text-base text-brand-ardoise leading-relaxed font-light pt-0.5">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution Pillar & Humor Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          
          {/* Solution Callout (H3) */}
          <div className="lg:col-span-6 bg-brand-marine text-white p-8 sm:p-10 rounded-2xl text-left flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-ciel/10 rounded-full translate-x-12 -translate-y-12 blur-2xl pointer-events-none" />
            
            <div className="space-y-4 z-10">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-or font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> PROPÓSITO CENTRAL
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-white">
                Aquí no vienes a demostrar perfección. <br />
                <span className="italic text-brand-or">Vienes a construir una voz más segura en francés.</span>
              </h3>
            </div>
            
            <p className="font-sans text-sm text-brand-ivoire/85 leading-relaxed font-light z-10 pt-4 border-t border-brand-ivoire/10">
              Nuestro enfoque no te juzga ni te abruma. Se centra en afinar tu oído para que reconozcas los sonidos reales y hables con tranquilidad.
            </p>
          </div>

          {/* Humor Card */}
          <div className="lg:col-span-6 bg-brand-ivoire border border-brand-or/20 p-8 sm:p-10 rounded-2xl text-left flex flex-col justify-between space-y-6 shadow-sm relative">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Smile className="w-5 h-5 text-brand-or" />
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-marine">
                  NOTA DE HUMOR
                </span>
              </div>
              <p className="font-sans text-base sm:text-lg text-brand-marine font-semibold italic leading-relaxed">
                "Aquí no venimos a pelear con la “r” ni a sufrir con las nasales."
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-brand-marine/10">
              <p className="font-sans text-sm text-brand-ardoise font-light leading-relaxed">
                Venimos a entenderlas y dominarlas. No a sufrir con ellas.
              </p>
              <div className="flex items-center gap-1 text-xs text-brand-ciel font-bold uppercase tracking-wider mt-2">
                <Star className="w-3.5 h-3.5 fill-brand-or text-brand-or" />
                Estructura sin tortura
              </div>
            </div>
          </div>

        </div>

        {/* Intelligibility vs Accent Infographic Block (Page 3 & 4 of PDF) */}
        <div className="bg-white rounded-3xl border-2 border-brand-ciel/20 p-8 sm:p-10 shadow-xl space-y-8 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-or/10 rounded-full translate-x-10 -translate-y-10 blur-xl pointer-events-none" />
          
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-brand-ciel bg-brand-ciel/10 px-3 py-1 rounded-full inline-block">
              PRINCIPIO FUNDAMENTAL DEL MÉTODO
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-brand-marine leading-tight">
              EL ACENTO NO ES EL PROBLEMA, <br className="hidden sm:inline" />
              <span className="text-brand-ciel underline decoration-brand-or decoration-4 underline-offset-4">LA INTELIGIBILIDAD SÍ LO ES</span>
            </h3>
            <p className="font-sans text-sm sm:text-base text-brand-ardoise font-light leading-relaxed">
              Tu acento es tu identidad. El objetivo de la fonética no es borrarlo, sino lograr que te entiendan sin esfuerzo. Un francés claro no significa un francés sin acento. <strong>La clave: prioriza la inteligibilidad, no el acento nativo.</strong>
            </p>
          </div>

          {/* Graphic Comparison Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Left Card: NO ES EL OBJETIVO */}
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200/80 space-y-4">
              <div className="flex items-center justify-between border-b border-rose-200/60 pb-3">
                <span className="font-serif font-bold text-rose-800 text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold">✕</span>
                  NO ES EL OBJETIVO
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-rose-600 font-bold bg-rose-100 px-2.5 py-1 rounded-md">Mitos & Exigencias Falsas</span>
              </div>

              <ul className="space-y-3 font-sans text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base shrink-0">✕</span>
                  <div>
                    <strong className="text-slate-900 block">Sonido nativo perfecto</strong>
                    <span className="text-xs text-slate-500">Forzar entonaciones artificiales que no te representan.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base shrink-0">✕</span>
                  <div>
                    <strong className="text-slate-900 block">Borrar tu identidad hispana</strong>
                    <span className="text-xs text-slate-500">Tener acento hispano es completamente normal y respetado.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base shrink-0">✕</span>
                  <div>
                    <strong className="text-slate-900 block">Copiar un solo acento regional</strong>
                    <span className="text-xs text-slate-500">Obligarte a sonar como si fueras de París o Québec únicamente.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Card: EL OBJETIVO REAL */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                <span className="font-serif font-bold text-emerald-900 text-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">✓</span>
                  EL OBJETIVO REAL
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-100 px-2.5 py-1 rounded-md">Resultados Prácticos</span>
              </div>

              <ul className="space-y-3 font-sans text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-base shrink-0">✓</span>
                  <div>
                    <strong className="text-slate-900 block">Acentuación clara y articulación física</strong>
                    <span className="text-xs text-slate-600">Que cada sonido clave se entienda a la primera.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-base shrink-0">✓</span>
                  <div>
                    <strong className="text-slate-900 block">Ritmo e iluminación de sílabas</strong>
                    <span className="text-xs text-slate-600">Conectar las frases con 'liaisons' naturales sin dudar.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-base shrink-0">✓</span>
                  <div>
                    <strong className="text-slate-900 block">Mensaje comprendido sin esfuerzo</strong>
                    <span className="text-xs text-slate-600">Hablar con seguridad y lograr un eufórico "¡Te entiendo!"</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Statement Banner */}
          <div className="bg-brand-marine text-white p-4 rounded-xl text-center font-serif text-base sm:text-lg font-medium border border-brand-ciel/30">
            &ldquo;Un francés <span className="text-brand-ciel font-bold">claro</span> no significa un francés sin acento.&rdquo;
          </div>

        </div>

        {/* Section Enrollment CTA */}
        <div className="pt-4 text-center">
          <a
            href="#conversion-form"
            className="inline-flex items-center justify-center gap-3 bg-brand-or hover:bg-amber-400 text-brand-marine px-8 py-4 rounded-xl font-sans font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
          >
            <span>¡Inscríbete Ahora! Llenar Formulario</span>
            <span className="text-xl">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
