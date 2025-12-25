'use client';

import { ExternalLink, Terminal, Coffee } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
  onSectionClick: (section: string) => void;
}

export default function Hero({ isDark, cardBg, borderClass, onSectionClick }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-5xl mx-auto text-center z-10">

<a
  href="#contact"
  className="mb-8 inline-flex items-center space-x-2 animate-bounce cursor-pointer"
>
  <Coffee className="text-blue-400" size={20} />
  <span
    className={`text-sm font-mono ${
      isDark
        ? 'bg-blue-400/10 text-blue-400 border-blue-400/20'
        : 'bg-blue-100 text-blue-600 border-blue-200'
    } px-4 py-2 rounded-full border hover:scale-105 transition-transform`}
  >
    Available for opportunities
  </span>
</a>
        
        <h1 className="text-6xl sm:text-8xl font-bold mb-6">
          <span className="inline-block animate-pulse bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Crafting Digital
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>
        
        <p className={`text-xl sm:text-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-3xl mx-auto leading-relaxed`}>
          Full Stack Developer passionate about building scalable applications and solving complex engineering challenges.
          <span className="block mt-2 text-lg">🚀 750+ Problems Solved</span>
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => onSectionClick('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/50"
          >
            <span>Explore My Work</span>
            <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
          </button>
          <button
            onClick={() => onSectionClick('coding')}
            className={`px-8 py-4 ${isDark ? 'border-blue-400 hover:bg-blue-400/10' : 'border-blue-600 hover:bg-blue-50'} border-2 rounded-xl font-semibold transition-all flex items-center space-x-2`}
          >
            <Terminal size={18} />
            <span>Coding Profiles</span>
          </button>
        </div>

        {/* Floating Elements */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <div className={`${cardBg} p-4 rounded-2xl border ${borderClass} shadow-lg`}>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">750+</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Problems Solved</div>
            </div>
          </div>
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>
            <div className={`${cardBg} p-4 rounded-2xl border ${borderClass} shadow-lg`}>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">20+</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Projects Built</div>
            </div>
          </div>
          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <div className={`${cardBg} p-4 rounded-2xl border ${borderClass} shadow-lg`}>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">3★</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>CodeChef Rating</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
