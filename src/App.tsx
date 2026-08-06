/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles, BookOpen, UserCheck, HeartHandshake, Phone, Instagram, Facebook, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

import Logo from './components/Logo';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import DiagnosisSection from './components/DiagnosisSection';
import ProposalSection from './components/ProposalSection';
import BenefitsSection from './components/BenefitsSection';
import AboutProfessorSection from './components/AboutProfessorSection';
import FooterFormSection from './components/FooterFormSection';

export default function App() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Monitor scroll for header background transitions
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    setMobileMenuOpen(false);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-blanc font-sans antialiased text-brand-marine overflow-x-hidden selection:bg-brand-ciel/20 selection:text-brand-marine">
      
      {/* Floating UI ambient background decoration characteristic of Editorial Aesthetic */}
      <div className="absolute top-20 left-1/4 w-80 h-80 editorial-blur-yellow rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 editorial-blur-blue rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-1/3 w-80 h-80 editorial-blur-yellow rounded-full pointer-events-none -z-10" />

      {/* Scroll Progress Bar at the absolute top */}
      <div className="fixed top-0 inset-x-0 h-1 bg-brand-ivoire z-50 pointer-events-none">
        <div 
          className="h-full bg-brand-ciel transition-all duration-100"
          style={{ 
            width: `${typeof window !== 'undefined' ? (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 : 0}%` 
          }}
        />
      </div>

      {/* Sticky Header Navigation */}
      <header 
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrollY > 20 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-ivoire py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex justify-between items-center">
          
          {/* Logo element */}
          <a href="#" className="flex items-center gap-2 cursor-pointer focus:outline-none" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            <Logo showText={true} lightBackground={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-sans font-semibold tracking-wide">
            <button 
              onClick={() => scrollToSection('diagnosis')} 
              className="text-brand-ardoise hover:text-brand-marine transition-colors relative group py-2 cursor-pointer"
            >
              ¿Te pasa esto?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-or transition-all group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('method')} 
              className="text-brand-ardoise hover:text-brand-marine transition-colors relative group py-2 cursor-pointer"
            >
              El Método
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-or transition-all group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-brand-ardoise hover:text-brand-marine transition-colors relative group py-2 cursor-pointer"
            >
              Beneficios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-or transition-all group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('professor')} 
              className="text-brand-ardoise hover:text-brand-marine transition-colors relative group py-2 cursor-pointer"
            >
              El Profesor
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-or transition-all group-hover:w-full" />
            </button>
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-brand-marine text-white hover:bg-brand-ciel hover:text-brand-marine px-5 py-2.5 rounded-lg font-sans font-bold text-sm tracking-wide transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              Autodiagnóstico
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle (Hamburger) */}
          <div className="flex lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-marine hover:text-brand-ciel transition-colors p-2 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[64px] bg-white border-b border-brand-ivoire shadow-lg z-30 p-6 lg:hidden flex flex-col space-y-4"
          >
            <button 
              onClick={() => scrollToSection('diagnosis')} 
              className="text-left py-3 border-b border-brand-ivoire font-serif text-lg font-bold text-brand-marine"
            >
              😶 ¿Te pasa esto?
            </button>
            <button 
              onClick={() => scrollToSection('method')} 
              className="text-left py-3 border-b border-brand-ivoire font-serif text-lg font-bold text-brand-marine"
            >
              🏗️ La Arquitectura del Método
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-left py-3 border-b border-brand-ivoire font-serif text-lg font-bold text-brand-marine"
            >
              🎯 Beneficios y Resultados
            </button>
            <button 
              onClick={() => scrollToSection('professor')} 
              className="text-left py-3 border-b border-brand-ivoire font-serif text-lg font-bold text-brand-marine"
            >
              👨‍🏫 El Profesor
            </button>
            
            <button
              onClick={scrollToForm}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-or text-brand-marine font-bold py-3.5 rounded-lg text-base tracking-wide shadow-md active:scale-98"
            >
              Quiero mejorar mi pronunciación
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Core Landing Page Content Sections */}
      <main className="relative">
        
        {/* Section 1: Hero */}
        <HeroSection onCtaClick={scrollToForm} />
        
        {/* Section 2: Video Connect */}
        <VideoSection />
        
        {/* Section 3: Diagnosis & Story */}
        <DiagnosisSection />
        
        {/* Section 4: Value Proposal / Method */}
        <ProposalSection />
        
        {/* Section 5: Benefits */}
        <BenefitsSection />
        
        {/* Section 6: About Professor */}
        <AboutProfessorSection />
        
        {/* Section 7: Cierre & Form */}
        <FooterFormSection formRef={formRef} />

      </main>

      {/* Sticky Floating Enrollment Call to Action Bar (Visible on Scroll) */}
      <AnimatePresence>
        {scrollY > 400 && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 inset-x-4 max-w-xl mx-auto z-40 bg-brand-marine text-white p-4 rounded-2xl shadow-2xl border-2 border-brand-or/40 flex items-center justify-between gap-4 backdrop-blur-md"
          >
            <div className="text-left space-y-0.5">
              <span className="font-mono text-[9px] font-bold text-brand-or uppercase tracking-widest block">
                ¡INSCRIPCIONES ABIERTAS — CLASES VÍA ZOOM!
              </span>
              <p className="font-serif text-sm font-bold text-white leading-tight">
                Transforma tu pronunciación en francés
              </p>
            </div>

            <button
              onClick={scrollToForm}
              className="bg-brand-or hover:bg-amber-400 text-brand-marine px-5 py-2.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>¡Inscríbete Ahora!</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Footer */}
      <footer className="bg-brand-ivoire text-brand-marine py-12 px-6 sm:px-12 lg:px-20 border-t border-brand-ivoire">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Slogan & Socials */}
          <div className="md:col-span-5 text-left space-y-4">
            <Logo showText={true} lightBackground={true} className="scale-125 origin-left mb-2" />
            <p className="font-sans text-xs sm:text-sm text-brand-ardoise font-light leading-relaxed pt-2">
              Afinando tu oído, ajustando tu pronunciación y construyendo seguridad estructural para que te expreses con fluidez en francés.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-brand-marine/10 hover:bg-brand-marine hover:text-white text-brand-marine transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-brand-marine/10 hover:bg-brand-marine hover:text-white text-brand-marine transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-brand-marine/10 hover:bg-brand-marine hover:text-white text-brand-marine transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-brand-marine/10 hover:bg-brand-marine hover:text-white text-brand-marine transition-all duration-300" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links & metadata */}
          <div className="md:col-span-4 text-left md:border-l md:border-brand-ardoise/25 md:pl-8 space-y-3">
            <h5 className="font-serif text-sm font-bold text-brand-marine uppercase tracking-wider">Manual de Identidad & Marca</h5>
            <p className="font-sans text-xs text-brand-ardoise leading-relaxed">
              <strong>Phonétique du Français</strong> es una iniciativa dirigida por el Prof. Sergio Tomassi. Todos los derechos reservados © 2026.
            </p>
            <p className="font-sans text-[10px] text-brand-ciel uppercase tracking-wider font-bold">
              Edición 2026 · Montréal, Québec.
            </p>
          </div>

          {/* Quick contact / trigger links */}
          <div className="md:col-span-3 text-left md:border-l md:border-brand-ardoise/25 md:pl-8 space-y-4">
            <h5 className="font-serif text-sm font-bold text-brand-marine uppercase tracking-wider">Contacto Directo</h5>
            <div className="space-y-2 text-xs text-brand-ardoise font-mono">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-ciel shrink-0" />
                <a href="mailto:sergio.tomassi@phonetique.ca" className="hover:text-brand-ciel transition-colors">sergio.tomassi@phonetique.ca</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-ciel shrink-0" />
                <a href="tel:+15140000000" className="hover:text-brand-ciel transition-colors">+1 (514) 000-0000</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-ciel shrink-0" />
                <span>Montréal, QC, Canada</span>
              </p>
            </div>
            
            <div className="pt-2">
              {/* Quick floating scroll to top option */}
              <button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="inline-flex items-center gap-1.5 text-[10px] text-brand-ciel hover:text-brand-marine uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                ↑ Volver al inicio
              </button>
            </div>
          </div>

        </div>

        {/* Co-branding Footer Label with Venxel.com active hyperlink */}
        <div className="border-t border-brand-ardoise/20 mt-8 pt-6 text-center text-[10px] text-brand-ardoise/60 font-mono tracking-widest uppercase">
          Diseñado con el Sistema de Identidad Visual "Ciel et Or" para el Prof. Sergio Tomassi · Diseñado por <a href="https://www.venxel.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ciel underline font-bold transition-colors">Venxel</a>
        </div>
      </footer>

    </div>
  );
}

