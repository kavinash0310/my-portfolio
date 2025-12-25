'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/app/components/Navigation';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Skills from "@/app/components/skills/Skills";
import Projects from '@/app/components/Projects';
import Certificates from '@/app/components/Certificates';
import CodingProfiles from '@/app/components/CodingProfiles';
import Contact from '@/app/components/Contact';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [scrollY, setScrollY] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert(`Error: ${data.error || 'Failed to send message'}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const bgClass = isDark ? 'bg-slate-950' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const cardBg = isDark ? 'bg-slate-800/50' : 'bg-white';
  const borderClass = isDark ? 'border-slate-700' : 'border-gray-200';

  return (
    <div className={`${bgClass} ${textClass} min-h-screen transition-colors duration-300`}>
      {/* Animated background */}
      {isDark && (
        <>
          <div 
            className="fixed inset-0 opacity-30 pointer-events-none transition-opacity"
            style={{
              background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
            }}
          />
          <div className="fixed inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </>
      )}

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        isDark={isDark}
        scrollY={scrollY}
        isMenuOpen={isMenuOpen}
        onSectionClick={scrollToSection}
        onThemeToggle={() => setIsDark(!isDark)}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Hero Section */}
      <Hero
        isDark={isDark}
        cardBg={cardBg}
        borderClass={borderClass}
        onSectionClick={scrollToSection}
      />

      {/* About Section */}
      <About isDark={isDark} cardBg={cardBg} borderClass={borderClass} />

      {/* Skills Section */}
      <Skills isDark={isDark} cardBg={cardBg} borderClass={borderClass} />

      {/* Projects Section */}
      <Projects isDark={isDark} cardBg={cardBg} borderClass={borderClass} />

      {/* Certificates Section */}
      <Certificates isDark={isDark} cardBg={cardBg} borderClass={borderClass} />

      {/* Coding Profiles Section */}
      <CodingProfiles isDark={isDark} cardBg={cardBg} borderClass={borderClass} />

      {/* Contact Section */}
      <Contact
        isDark={isDark}
        cardBg={cardBg}
        borderClass={borderClass}
        formData={formData}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />

      {/* Footer */}
      <footer className={`py-8 border-t ${borderClass} text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        <p className="mb-2">© 2024 Avinash Kumar. Built with Next.js & Tailwind CSS</p>
        <p className="text-sm">Crafted with 💙 and lots of ☕</p>
      </footer>
    </div>
  );
}
