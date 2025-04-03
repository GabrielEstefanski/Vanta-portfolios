'use client';

import { ReactNode, useEffect } from 'react';
import VantaEffect from '../components/ui/VantaEffect';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { minimalistConfig } from '@/app/config/templates/minimalist';
import { vantaConfig } from '@/app/config/templates/vanta';
import { professionalConfig } from '@/app/config/templates/professional';
import { modernConfig } from '@/app/config/templates/modern';
import { zenithConfig } from '@/app/config/templates/zenith';
import { cosmosConfig } from '@/app/config/templates/cosmos';

interface PreviewLayoutProps {
  children: ReactNode;
  onTemplateSelect: (templateId: string) => void;
  selectedTemplate: TemplateConfig | null;
}

const templates = [
  minimalistConfig,
  vantaConfig,
  professionalConfig,
  modernConfig,
  zenithConfig,
  cosmosConfig
];

export default function PreviewLayout({ children, onTemplateSelect, selectedTemplate }: PreviewLayoutProps) {
  useEffect(() => {
    if (!selectedTemplate && typeof onTemplateSelect === 'function') {
      console.log('Configurando template inicial');
      onTemplateSelect('minimalist');
    }
  }, [selectedTemplate, onTemplateSelect]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <VantaEffect />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <span className="text-xl font-light tracking-wider text-white">
                Preview do Portfólio
              </span>
              <div className="flex items-center space-x-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => onTemplateSelect(template.id)}
                    className={`px-4 py-2 text-sm rounded transition-colors ${
                      selectedTemplate?.id === template.id
                        ? 'bg-white/20 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {template.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                onClick={() => {
                  if (selectedTemplate) {
                    try {
                      localStorage.setItem('saved-template', JSON.stringify(selectedTemplate));
                      alert('Template salvo com sucesso!');
                    } catch (error) {
                      console.error('Erro ao salvar:', error);
                      alert('Erro ao salvar template');
                    }
                  }
                }}
              >
                Salvar
              </button>
              <button className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-16 h-[calc(100vh-4rem)] relative z-10">
        {children}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}