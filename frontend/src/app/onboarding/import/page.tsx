'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const templates: Template[] = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Design limpo e minimalista, focado no conteúdo',
    preview: '/templates/minimal.png',
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      accent: '#666666'
    }
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Layout moderno com elementos interativos',
    preview: '/templates/modern.png',
    colors: {
      primary: '#1a1a1a',
      secondary: '#ffffff',
      accent: '#3b82f6'
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Design profissional e corporativo',
    preview: '/templates/professional.png',
    colors: {
      primary: '#111827',
      secondary: '#ffffff',
      accent: '#4f46e5'
    }
  }
];

const colorSchemes = [
  {
    name: 'Classic',
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#666666'
  },
  {
    name: 'Ocean',
    primary: '#0f172a',
    secondary: '#ffffff',
    accent: '#3b82f6'
  },
  {
    name: 'Forest',
    primary: '#1a2e1a',
    secondary: '#ffffff',
    accent: '#22c55e'
  },
  {
    name: 'Sunset',
    primary: '#2a1a1a',
    secondary: '#ffffff',
    accent: '#f97316'
  }
];

export default function ImportPage() {
  const [selectedOption, setSelectedOption] = useState<'linkedin' | 'github' | 'manual' | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOptionSelect = (option: 'linkedin' | 'github' | 'manual') => {
    setSelectedOption(option);
    if (option !== 'manual') {
      setIsConnecting(true);
      setTimeout(() => {
        setIsConnecting(false);
        window.location.href = `/onboarding/edit?import=${option}`;
      }, 2000);
    } else {
      window.location.href = `/onboarding/edit?import=manual`;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] animate-grid-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative w-full max-w-4xl mx-auto">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Link href="/" className="inline-block mb-4 group">
            <span className="text-4xl font-light tracking-tight text-white relative">
              VANTA
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
          </Link>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-150" />
            <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse delay-300" />
          </div>
        </div>

        <div className={`bg-white/5 backdrop-blur-sm border border-white/5 rounded-lg p-8 relative overflow-hidden transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 animate-glow" />
          
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light text-white mb-4 tracking-tight">
              Como deseja criar seu portfólio?
            </h1>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Escolha entre importar seus dados automaticamente ou preencher manualmente. 
              Você poderá editar todas as informações posteriormente.
            </p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {['linkedin', 'github', 'manual'].map((option, index) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option as 'linkedin' | 'github' | 'manual')}
                className={`w-full flex items-center justify-center gap-4 p-6 rounded-lg border transition-all duration-300 transform ${
                  mounted ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  ...(selectedOption === option
                    ? { backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', boxShadow: '0 4px 6px -1px rgba(255,255,255,0.1)' }
                    : { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.05)' })
                }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  option === 'linkedin' ? 'bg-[#0A66C2]/10' : 'bg-white/5'
                } group-hover:scale-110`}>
                  {option === 'linkedin' && (
                    <svg className="w-6 h-6 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.16.781-1.16 1.601v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {option === 'github' && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {option === 'manual' && (
                    <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 text-left">
                  <span className="block text-white text-sm font-medium mb-1">
                    {option === 'linkedin' ? 'Conectar com LinkedIn' : 
                     option === 'github' ? 'Conectar com GitHub' : 
                     'Preencher manualmente'}
                  </span>
                  <span className="block text-gray-400 text-xs">
                    {option === 'linkedin' ? 'Importe suas experiências profissionais' :
                     option === 'github' ? 'Importe seus projetos e contribuições' :
                     'Adicione suas informações manualmente'}
                  </span>
                </div>
                {isConnecting && selectedOption === option && (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className={`mt-8 text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-sm text-gray-400">
            Suas informações serão usadas apenas para gerar seu portfólio
          </p>
        </div>
      </div>
    </div>
  );
} 