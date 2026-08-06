import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClipboardCheck, Sparkles, Send, Check, Heart, Mail, Calendar } from 'lucide-react';

interface FooterFormSectionProps {
  formRef: React.RefObject<HTMLDivElement | null>;
}

export default function FooterFormSection({ formRef }: FooterFormSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    frenchLevel: 'intermedio',
    mainChallenge: 'bloqueo',
    customMessage: '',
    termsAccepted: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  // Load previous submissions if any
  useEffect(() => {
    const saved = localStorage.getItem('sergio_tomassi_diagnostic');
    if (saved) {
      try {
        setSubmittedData(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call/Jotform transmission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      const submission = {
        ...formData,
        date: new Date().toLocaleDateString(),
        id: 'JOT-' + Math.floor(Math.random() * 90000 + 10000)
      };
      setSubmittedData(submission);
      localStorage.setItem('sergio_tomassi_diagnostic', JSON.stringify(submission));
    }, 1500);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      frenchLevel: 'intermedio',
      mainChallenge: 'bloqueo',
      customMessage: '',
      termsAccepted: true
    });
  };

  return (
    <section 
      id="conversion-form" 
      ref={formRef}
      className="relative py-24 bg-brand-ivoire/50 overflow-hidden px-6 sm:px-12 lg:px-20 border-t border-brand-ivoire"
    >
      {/* Background Architectural Layout Grid Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#112A46" strokeWidth="1" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#112A46" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Section Headline */}
        <div className="space-y-4">
          <span className="font-sans text-xs uppercase tracking-[0.25em] font-bold text-brand-or block">
            CIERRE Y CONVERSIÓN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-marine tracking-tight leading-tight">
            Aquí se construye una voz.
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-brand-ardoise max-w-2xl mx-auto leading-relaxed">
            Con paciencia. Con práctica. Con humor. Con intención. Porque hablar mejor francés no es solo pronunciar mejor. Es sentirte más dueño de tu proceso, más cerca de tus metas y más libre al comunicarte.
          </p>
          <div className="flex items-center justify-center gap-1.5 pt-2 text-brand-ciel">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-ciel" />
            <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Completa el formulario y da el primer paso
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-ciel" />
          </div>
        </div>

        {/* Jotform-Inspired Visual Container */}
        <div className="bg-white rounded-2xl border border-brand-ivoire shadow-xl overflow-hidden p-6 sm:p-10 relative">
          
          {/* Header of Form Tab */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-or" />
          
          <div className="flex justify-between items-center border-b border-brand-ivoire pb-6 mb-8 text-left">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-brand-ardoise font-bold">Formulario de Postulación</p>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-marine">Autodiagnóstico de Pronunciación</h3>
            </div>
            <div className="flex items-center gap-1 bg-brand-ivoire px-3 py-1.5 rounded-lg text-[10px] font-mono text-brand-ardoise tracking-wider font-bold">
              <ClipboardCheck className="w-3.5 h-3.5 text-brand-ciel" />
              JOTFORM ORIGINAL
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6 text-left"
              >
                {/* Full Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-wider font-bold text-brand-marine flex items-center gap-1">
                      Nombre Completo <span className="text-brand-erable">*</span>
                    </label>
                    <input 
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-brand-ivoire/30 border border-brand-ivoire focus:border-brand-ciel focus:bg-white rounded-lg px-4 py-3 text-sm text-brand-marine transition-all outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-wider font-bold text-brand-marine flex items-center gap-1">
                      Correo Electrónico <span className="text-brand-erable">*</span>
                    </label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ej. juan@correo.com"
                      className="w-full bg-brand-ivoire/30 border border-brand-ivoire focus:border-brand-ciel focus:bg-white rounded-lg px-4 py-3 text-sm text-brand-marine transition-all outline-none"
                    />
                  </div>

                </div>

                {/* Level and Main Frustration Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* French level */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-wider font-bold text-brand-marine">
                      ¿Cuál es tu nivel estimado de francés?
                    </label>
                    <select
                      name="frenchLevel"
                      value={formData.frenchLevel}
                      onChange={handleChange}
                      className="w-full bg-brand-ivoire/30 border border-brand-ivoire focus:border-brand-ciel focus:bg-white rounded-lg px-4 py-3 text-sm text-brand-marine transition-all outline-none"
                    >
                      <option value="principiante">Básico / Principiante (A1-A2)</option>
                      <option value="intermedio">Intermedio (B1-B2)</option>
                      <option value="avanzado">Avanzado (C1-C2)</option>
                    </select>
                  </div>

                  {/* Main Challenge */}
                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-wider font-bold text-brand-marine">
                      ¿Cuál es tu mayor obstáculo actual?
                    </label>
                    <select
                      name="mainChallenge"
                      value={formData.mainChallenge}
                      onChange={handleChange}
                      className="w-full bg-brand-ivoire/30 border border-brand-ivoire focus:border-brand-ciel focus:bg-white rounded-lg px-4 py-3 text-sm text-brand-marine transition-all outline-none"
                    >
                      <option value="bloqueo">😶 Me bloqueo al intentar responder</option>
                      <option value="inseguridad">🫣 Siento inseguridad por mi acento</option>
                      <option value="estancado">🛑 Estoy estancado con mi fluidez</option>
                      <option value="otro">Otro obstáculo de pronunciación</option>
                    </select>
                  </div>

                </div>

                {/* Custom message field */}
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-wider font-bold text-brand-marine">
                    Mensaje opcional para el Profe Sergio (Cuéntame tu caso)
                  </label>
                  <textarea 
                    name="customMessage"
                    rows={4}
                    value={formData.customMessage}
                    onChange={handleChange}
                    placeholder="Ej. Llevo 2 años en Montreal y todavía me da pena hablar en la cafetería..."
                    className="w-full bg-brand-ivoire/30 border border-brand-ivoire focus:border-brand-ciel focus:bg-white rounded-lg p-4 text-sm text-brand-marine transition-all outline-none resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input 
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="mt-1 accent-brand-marine w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="termsAccepted" className="font-sans text-xs text-brand-ardoise leading-normal cursor-pointer">
                    Acepto enviar mi información diagnóstica para que el Prof. Sergio Tomassi evalúe mi pronunciación y me contacte con recomendaciones personalizadas.
                  </label>
                </div>

                {/* Submit Action Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-3 bg-brand-marine text-white hover:bg-brand-ciel hover:text-brand-marine py-4 rounded-lg font-sans font-bold tracking-wide text-base transition-all duration-300 disabled:opacity-50 active:scale-98 cursor-pointer shadow-md"
                    id="jotform-submit-btn"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitiendo información segura...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" /> Reservar una clase (Enviar diagnóstico)
                      </span>
                    )}
                  </button>
                </div>

              </motion.form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8 text-center py-6"
              >
                {/* Success Visual Banner */}
                <div className="w-20 h-20 rounded-full bg-brand-or/10 flex items-center justify-center mx-auto text-brand-or">
                  <Sparkles className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-brand-marine">
                    ¡Primer paso completado!
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-brand-ardoise max-w-xl mx-auto leading-relaxed">
                    Muchas gracias, <strong>{submittedData?.fullName}</strong>. Tus respuestas han sido enviadas de forma directa y confidencial al buzón de Jotform de Sergio.
                  </p>
                  <p className="font-mono text-[10px] text-brand-ciel font-bold uppercase tracking-wider pt-1">
                    Código de Registro: {submittedData?.id}
                  </p>
                </div>

                {/* Siguientes pasos timeline list */}
                <div className="bg-brand-ivoire/50 border border-brand-ivoire p-6 rounded-xl max-w-xl mx-auto text-left space-y-4">
                  <span className="font-sans text-[10px] text-brand-ardoise uppercase tracking-widest font-bold block pb-2 border-b border-brand-ivoire">
                    ¿Qué pasa ahora? (Siguientes Pasos)
                  </span>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <div className="p-1 rounded-full bg-green-100 text-green-700 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs">
                        <p className="font-bold text-brand-marine">Análisis estructural en proceso</p>
                        <p className="text-brand-ardoise">Sergio revisará tu obstáculo principal de <em>"{submittedData?.mainChallenge === 'bloqueo' ? 'Me bloqueo al hablar' : submittedData?.mainChallenge === 'inseguridad' ? 'Siento inseguridad por mi acento' : 'Me siento estancado con mi fluidez'}"</em> para preparar sugerencias personalizadas.</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="p-1 rounded-full bg-brand-or/20 text-brand-marine shrink-0 mt-0.5">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs">
                        <p className="font-bold text-brand-marine">Recibirás un correo directo</p>
                        <p className="text-brand-ardoise">En las próximas 24-48 horas laborables recibirás un correo en <strong>{submittedData?.email}</strong> con su feedback inicial y acceso a material premium introductorio.</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="p-1 rounded-full bg-brand-ciel/20 text-brand-marine shrink-0 mt-0.5">
                        <Calendar className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs">
                        <p className="font-bold text-brand-marine">Opción de entrevista breve</p>
                        <p className="text-brand-ardoise">Si tu perfil coincide, recibirás un enlace de Calendly para agendar una sesión exploratoria de 15 minutos en Zoom.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reset button to test again */}
                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="font-sans text-xs text-brand-ardoise hover:text-brand-marine underline underline-offset-4 tracking-wider transition-colors"
                  >
                    Modificar respuestas o enviar otro diagnóstico
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Humble, clean professional trust indicator */}
        <div className="flex items-center justify-center gap-2 text-brand-ardoise text-xs pt-4">
          <Heart className="w-3.5 h-3.5 text-brand-erable fill-current" />
          <span className="font-sans font-light">
            Enseñando con respeto, precisión y humanidad. Montréal, Québec.
          </span>
        </div>

      </div>
    </section>
  );
}
