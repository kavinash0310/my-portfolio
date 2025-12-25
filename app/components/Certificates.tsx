'use client';

import { certificates } from '@/app/data/certificates';

interface CertificatesProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
}

export default function Certificates({ isDark, cardBg, borderClass }: CertificatesProps) {
  return (
    <section id="certificates" className={`py-20 px-4 ${isDark ? 'bg-slate-900/50' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
        <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-12`}>
          Professional certifications validating my expertise
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardBg} p-6 rounded-2xl border ${borderClass} hover:scale-105 hover:-rotate-2 transition-all duration-300 group shadow-lg block`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cert.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{cert.issuer}</p>
              <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'} mb-3`}>{cert.date}</p>
              <div className="inline-flex items-center text-blue-400 text-xs font-semibold group-hover:text-blue-300 transition-colors">
                View Certificate →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
