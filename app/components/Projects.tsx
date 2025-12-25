'use client';

import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/app/data/projects';

interface ProjectsProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
}

export default function Projects({ isDark, cardBg, borderClass }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-12`}>
          Some of my best work that showcases my skills and creativity
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${cardBg} rounded-2xl overflow-hidden border ${borderClass} hover:scale-105 transition-all duration-300 group shadow-xl`}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a href={project.github} className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-sm px-3 py-1 ${isDark ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-100 text-blue-600 border-blue-200'} rounded-full border`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
