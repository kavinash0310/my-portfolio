'use client';

import {
  Code,
  Briefcase,
  User,
  Mail,
  Award,
  Terminal,
  Download,
  Menu,
  X,
  Sun,
  Moon,
  Zap
} from 'lucide-react';
import Image from "next/image";
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  isDark: boolean;
  scrollY: number;
  isMenuOpen: boolean;
  onSectionClick: (section: string) => void;
  onThemeToggle: () => void;
  onMenuToggle: () => void;
}

export default function Navigation({
  activeSection,
  isDark,
  scrollY,
  isMenuOpen,
  onSectionClick,
  onThemeToggle,
  onMenuToggle
}: NavigationProps) {

  const [isOpen, setIsOpen] = useState(false);

  // ✅ Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    // cleanup in case component unmounts while open
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const bgClass = isDark ? 'bg-slate-950/80' : 'bg-white/80';
  const borderClass = isDark ? 'border-slate-700' : 'border-gray-200';

  const sections = [
    { id: 'home', label: 'Home', icon: Zap },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'coding', label: 'Coding Profile', icon: Terminal },
    { id: 'contact', label: 'Connect', icon: Mail }
  ];

  return (
    <>
      {/* ✅ Navigation bar */}
      <nav
        className={`fixed top-0 w-full ${bgClass} backdrop-blur-lg z-50 border-b ${borderClass} transition-all duration-300`}
        style={{ transform: `translateY(${scrollY > 100 ? '-5px' : '0px'})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Profile + Name */}
            <div className="flex items-center space-x-3">
              {/* Profile Image (thumbnail) */}
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 ${
                    scrollY > 100 ? 'scale-90' : 'scale-100'
                  } transition-transform cursor-pointer`}
                  onClick={() => setIsOpen(true)}
                >
                  <div
                    className={`w-full h-full rounded-full ${
                      isDark ? 'bg-slate-900' : 'bg-white'
                    } flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src="/profile.jpg"
                      alt="Avinash Kumar"
                      width={48}
                      height={48}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Avinash Kumar
                </div>
                <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Full Stack Developer
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => onSectionClick(section.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all ${
                      activeSection === section.id
                        ? isDark
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-blue-100 text-blue-600'
                        : isDark
                          ? 'text-gray-300 hover:bg-slate-800'
                          : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm">{section.label}</span>
                  </button>
                );
              })}

              {/* Theme Toggle */}
              <button
                onClick={onThemeToggle}
                className={`ml-2 p-2 rounded-lg ${
                  isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'
                } transition-colors`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Resume Button */}
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Avinash_Kumar.pdf';
                  link.download = 'Avinash_Kumar.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={onThemeToggle}
                className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={onMenuToggle}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden ${isDark ? 'bg-slate-900' : 'bg-white'} border-t ${borderClass}`}>
            <div className="px-4 py-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionClick(section.id)}
                  className={`block w-full text-left capitalize py-3 px-4 rounded-lg ${
                    isDark ? 'hover:bg-slate-800' : 'hover:bg-gray-100'
                  } transition-colors`}
                >
                  {section.label}
                </button>
              ))}

              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold flex items-center justify-center space-x-2">
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ✅ Full-screen modal OUTSIDE nav, centered from all sides */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/profile.jpg"
              alt="Avinash Kumar"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
