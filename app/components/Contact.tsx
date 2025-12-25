'use client';

import { Mail, Github, Linkedin, Phone } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
  formData: { name: string; email: string; message: string };
  onFormChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function Contact({
  isDark,
  cardBg,
  borderClass,
  formData,
  onFormChange,
  onSubmit
}: ContactProps) {
  return (
    <section id="contact" className={`py-20 px-4 ${isDark ? 'bg-slate-900/50' : 'bg-gray-100'}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>
        <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-12`}>
          Have a project in mind? Let's build something amazing together!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

          <a href="tel:+918210055755" className={`flex items-center space-x-4 p-5 ${cardBg} rounded-xl border ${borderClass} hover:scale-105 hover:border-green-500 transition-all shadow-lg group`}>
              <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                <Phone className="text-green-400" size={24} />
              </div>
            <div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
            <p className="font-semibold group-hover:text-green-400 transition-colors">+91 82100 55755</p>
            </div>
          </a>
            
            
            <a href="mailto:avi.kr171@gmail.com" className={`flex items-center space-x-4 p-5 ${cardBg} rounded-xl border ${borderClass} hover:scale-105 hover:border-blue-500 transition-all shadow-lg group`}>
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                <p className="font-semibold group-hover:text-blue-400 transition-colors">avi.kr1710@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/kavinash0310" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-4 p-5 ${cardBg} rounded-xl border ${borderClass} hover:scale-105 hover:border-purple-500 transition-all shadow-lg group`}>
              <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                <Github className="text-purple-400" size={24} />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>GitHub</p>
                <p className="font-semibold group-hover:text-purple-400 transition-colors">github.com/kavinash0310</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/kavinash0310" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-4 p-5 ${cardBg} rounded-xl border ${borderClass} hover:scale-105 hover:border-blue-500 transition-all shadow-lg group`}>
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="text-blue-400" size={24} />
              </div>
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>LinkedIn</p>
                <p className="font-semibold group-hover:text-blue-400 transition-colors">linkedin.com/in/kavinash0310</p>
              </div>
            </a>
          </div>

          <div className={`${cardBg} p-8 rounded-2xl border ${borderClass} shadow-xl`}>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => onFormChange('name', e.target.value)}
                  className={`w-full px-4 py-3 ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => onFormChange('email', e.target.value)}
                  className={`w-full px-4 py-3 ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => onFormChange('message', e.target.value)}
                  className={`w-full px-4 py-3 ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                />
              </div>
              <button
                onClick={onSubmit}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
