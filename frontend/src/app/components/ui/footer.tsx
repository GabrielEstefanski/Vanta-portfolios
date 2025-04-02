'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [isDark, setIsDark] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [isCooldown, setIsCooldown] = useState(false);
  const [isPermanentlyDisabled, setIsPermanentlyDisabled] = useState(false);

  useEffect(() => {
    if (isCooldown && !isPermanentlyDisabled) {
      const timer = setTimeout(() => {
        setIsCooldown(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isCooldown, isPermanentlyDisabled]);

  const handleThemeChange = () => {
    if (isDark && !isCooldown && !isPermanentlyDisabled) {
      setClickCount(prev => {
        const newCount = prev + 1;
        if (newCount >= 3) {
          setIsPermanentlyDisabled(true);
        }
        return newCount;
      });
      setIsCooldown(true);
    }
  };

  const getJokeMessage = () => {
    switch (clickCount) {
      case 1:
        return "Vanta é como o café: sempre escuro e elegante ☕";
      case 2:
        return "Tentando clarear o impossível? O Vanta permanece sombrio. 😏";
      case 3:
        return "A escuridão é um estado de espírito. Abraçe-a. 🖤";
      default:
        return "A escuridão é um estado de espírito. Abraçe-a. 🖤";
    }
  };

  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text tracking-tight">
                Vanta
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Portfólios elegantes e minimalistas para profissionais criativos. 
              Conecte com GitHub ou LinkedIn e tenha um portfolio que se destaca.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Showcase
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.16.781-1.16 1.601v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Tema Escuro</span>
              <button
                onClick={handleThemeChange}
                aria-label="Alternar modo escuro"
                disabled={isCooldown || isPermanentlyDisabled}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  isDark ? 'bg-white/20' : 'bg-gray-600'
                } ${(isCooldown || isPermanentlyDisabled) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDark ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            {clickCount > 0 && (
              <div className="mt-2 text-sm text-gray-400">
                <motion.div 
                  className="mt-2 text-sm text-gray-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                    {getJokeMessage()}
                </motion.div>
             </div>
            )}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Vanta. Portfólios elegantes e minimalistas.
          </p>
        </div>
      </div>

    </footer>
  );
}
