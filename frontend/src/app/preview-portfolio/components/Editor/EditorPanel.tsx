'use client';

import { useState, useEffect } from 'react';
import { TemplateConfig, PortfolioData } from '@/app/types/TemplateConfig';
import { defaultConfigs } from '@/app/config/templates';
import { ProfileEditor } from './Components/sections/ProfileEditor';
import { SocialEditor } from './Components/sections/SocialEditor';
import { SectionsEditor } from './Components/sections/SectionsEditor';

interface EditorPanelProps {
  data: any;
  setData: (data: any) => void;
  config: TemplateConfig;
  setConfig: (config: TemplateConfig) => void;
}

export function EditorPanel({ data, setData, config, setConfig }: EditorPanelProps) {
  const [activeTab, setActiveTab] = useState<'template' | 'style' | 'content' | 'profile' | 'social' | 'sections'>('template');

  const getColorLabel = (key: string): string => {
    const colorLabels: Record<string, string> = {
      primary: 'Primária',
      secondary: 'Secundária',
      background: 'Fundo',
      text: 'Texto',
      accent: 'Destaque'
    };
    return colorLabels[key] || key;
  };

  const handleTemplateChange = (templateId: string) => {
    if (defaultConfigs[templateId]) {
      setConfig({
        ...config,
        id: templateId,
        name: defaultConfigs[templateId].name,
        props: {
          ...config.props,
          colors: { ...defaultConfigs[templateId].props.colors },
          typography: { ...defaultConfigs[templateId].props.typography },
          layout: { ...defaultConfigs[templateId].props.layout },
        }
      });
    }
  };

  const handleColorChange = (colorKey: string, value: string) => {
    setConfig({
      ...config,
      props: {
        ...config.props,
        colors: {
          ...config.props.colors,
          [colorKey]: value
        }
      }
    });
  };

  const handleLayoutChange = (key: string, value: string) => {
    setConfig({
      ...config,
      props: {
        ...config.props,
        layout: {
          ...config.props.layout,
          [key]: value
        }
      }
    });
  };

  const handleTypographyChange = (key: string, value: string) => {
    setConfig({
      ...config,
      props: {
        ...config.props,
        typography: {
          ...config.props.typography,
          [key]: value
        }
      }
    });
  };

  const handleSectionToggle = (sectionId: string) => {
    const updatedSections = {...config.props.sections};
    
    updatedSections[sectionId] = {
      ...updatedSections[sectionId],
      enabled: !updatedSections[sectionId].enabled
    };
    
    setConfig({
      ...config,
      props: {
        ...config.props,
        sections: updatedSections
      }
    });
  };

  const handleReorderSections = (newOrder: string[]) => {
    const updatedSections = {...config.props.sections};
    
    newOrder.forEach((sectionId, index) => {
      if (updatedSections[sectionId]) {
        updatedSections[sectionId] = {
          ...updatedSections[sectionId],
          order: index
        };
      }
    });
    
    setConfig({
      ...config,
      props: {
        ...config.props,
        sections: updatedSections
      }
    });
  };

  const layoutOptions = {
    maxWidth: [
      { value: '3xl', label: 'Pequeno (768px)' },
      { value: '5xl', label: 'Médio (1024px)' },
      { value: '7xl', label: 'Grande (1280px)' }
    ],
    spacing: [
      { value: 'space-y-4', label: 'Compacto' },
      { value: 'space-y-8', label: 'Normal' },
      { value: 'space-y-12', label: 'Espaçado' },
      { value: 'space-y-16', label: 'Muito Espaçado' }
    ],
    padding: [
      { value: 'p-4', label: 'Pequeno' },
      { value: 'p-8', label: 'Médio' },
      { value: 'p-12', label: 'Grande' }
    ]
  };

  const typographyOptions = {
    headingFont: [
      { value: 'font-light', label: 'Light' },
      { value: 'font-normal', label: 'Regular' },
      { value: 'font-medium', label: 'Medium' },
      { value: 'font-semibold', label: 'Semibold' },
      { value: 'font-bold', label: 'Bold' }
    ],
    bodyFont: [
      { value: 'font-light', label: 'Light' },
      { value: 'font-normal', label: 'Regular' },
      { value: 'font-medium', label: 'Medium' }
    ],
    baseSize: [
      { value: 'text-sm', label: 'Pequeno' },
      { value: 'text-base', label: 'Médio' },
      { value: 'text-lg', label: 'Grande' }
    ]
  };

  return (
    <div className="w-[400px] h-full bg-black/60 backdrop-blur-lg border-l border-white/10 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-light tracking-wider text-white">
          Personalizar Template
        </h2>
      </div>

      <div className="flex border-b border-white/10">
        <button
          onClick={() => setActiveTab('template')}
          className={`flex-1 py-3 text-sm font-light tracking-wider transition-colors ${
            activeTab === 'template'
              ? 'text-white border-b-2 border-purple-500'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Template
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex-1 py-3 text-sm font-light tracking-wider transition-colors ${
            activeTab === 'profile'
              ? 'text-white border-b-2 border-purple-500'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Perfil
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`flex-1 py-3 text-sm font-light tracking-wider transition-colors ${
            activeTab === 'social'
              ? 'text-white border-b-2 border-purple-500'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Social
        </button>
        <button
          onClick={() => setActiveTab('style')}
          className={`flex-1 py-3 text-sm font-light tracking-wider transition-colors ${
            activeTab === 'style'
              ? 'text-white border-b-2 border-purple-500'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Estilo
        </button>
        <button
          onClick={() => setActiveTab('sections')}
          className={`flex-1 py-3 text-sm font-light tracking-wider transition-colors ${
            activeTab === 'sections'
              ? 'text-white border-b-2 border-purple-500'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Seções
        </button>
        <button
          onClick={() => setActiveTab('content')}
          className={`flex-1 py-3 text-sm font-light tracking-wider transition-colors ${
            activeTab === 'content'
              ? 'text-white border-b-2 border-purple-500'
              : 'text-white/60 hover:text-white'
          }`}
        >
          Conteúdo
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {activeTab === 'template' && (
          <div className="p-6 space-y-6">
            <h3 className="text-lg font-light tracking-wider text-white mb-4">
              Escolha um template
            </h3>
            <div className="space-y-4">
              {Object.entries(defaultConfigs).map(([id, template]) => (
                <button
                  key={id}
                  onClick={() => handleTemplateChange(id)}
                  className={`w-full p-4 text-left rounded-lg border transition-all duration-300 ${
                    config.id === id
                      ? 'border-purple-500/50 bg-purple-900/20'
                      : 'border-white/5 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-2 h-2 rounded-full ${
                      config.id === id ? 'bg-purple-500' : 'bg-white/30'
                    }`} />
                    <div className="font-light text-white tracking-wider">
                      {template.name}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 tracking-wide pl-5">
                    {template.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="p-6 space-y-6">
            <ProfileEditor data={data} onUpdate={setData} />
          </div>
        )}

        {activeTab === 'social' && (
          <div className="p-6 space-y-6">
            <SocialEditor data={data} onUpdate={setData} />
          </div>
        )}

        {activeTab === 'style' && (
          <div className="p-6 space-y-8">
            <section>
              <h3 className="text-lg font-light tracking-wider text-white mb-4">
                Cores
              </h3>
              <div className="space-y-5">
                {Object.entries(config.props.colors).map(([key, value]) => (
                  <div key={key} className="group">
                    <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
                      {getColorLabel(key)}
                    </label>
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <input
                          type="color"
                          value={value}
                          onChange={(e) => handleColorChange(key, e.target.value)}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div 
                          className="absolute inset-0 rounded-full border border-white/20"
                          style={{ backgroundColor: value }}
                        />
                      </div>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleColorChange(key, e.target.value)}
                        className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-light tracking-wider text-white mb-4">
                Layout
              </h3>
              <div className="space-y-5">
                {Object.entries(config.props.layout).map(([key, currentValue]) => (
                  <div key={key} className="group">
                    <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
                      {key === 'maxWidth' ? 'Largura Máxima' : 
                       key === 'spacing' ? 'Espaçamento' : 
                       key === 'padding' ? 'Preenchimento' : key}
                    </label>
                    <select
                      value={currentValue}
                      onChange={(e) => handleLayoutChange(key, e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.5rem center',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      {(layoutOptions[key as keyof typeof layoutOptions] || []).map((option) => (
                        <option key={option.value} value={option.value} className="bg-gray-800">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-light tracking-wider text-white mb-4">
                Tipografia
              </h3>
              <div className="space-y-5">
                {Object.entries(config.props.typography).map(([key, currentValue]) => (
                  <div key={key} className="group">
                    <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
                      {key === 'headingFont' ? 'Fonte de Títulos' : 
                       key === 'bodyFont' ? 'Fonte de Texto' : 
                       key === 'baseSize' ? 'Tamanho Base' : key}
                    </label>
                    <select
                      value={currentValue}
                      onChange={(e) => handleTypographyChange(key, e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.5rem center',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      {(typographyOptions[key as keyof typeof typographyOptions] || []).map((option) => (
                        <option key={option.value} value={option.value} className="bg-gray-800">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'sections' && (
          <div className="p-6 space-y-6">
            <SectionsEditor 
              sections={config.props.sections} 
              onSectionToggle={handleSectionToggle}
              onReorderSections={handleReorderSections}
            />
          </div>
        )}

        {activeTab === 'content' && (
          <div className="p-6 space-y-6">
            <h3 className="text-lg font-light tracking-wider text-white mb-4">
              Seções Visíveis
            </h3>
            <div className="space-y-4">
              {config.props.sections && Object.entries(config.props.sections).map(([id, section]) => (
                <div 
                  key={id}
                  className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5"
                >
                  <div>
                    <span className="text-white font-light">{section.title}</span>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={section.enabled} 
                      onChange={() => {
                        const updatedSections = {...config.props.sections};
                        updatedSections[id] = {
                          ...section,
                          enabled: !section.enabled
                        };
                        setConfig({
                          ...config,
                          props: {
                            ...config.props,
                            sections: updatedSections
                          }
                        });
                      }}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-white/10 flex justify-between">
        <button
          onClick={() => {
            try {
              localStorage.setItem('portfolio-config', JSON.stringify(config));
              alert('Configuração salva com sucesso!');
            } catch (error) {
              console.error('Erro ao salvar configuração:', error);
              alert('Erro ao salvar a configuração');
            }
          }}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-sm font-light tracking-wider"
        >
          Salvar
        </button>
        <button
          onClick={() => window.open('/preview-portfolio/export', '_blank')}
          className="px-4 py-2 bg-black/40 hover:bg-black/60 text-white border border-white/20 rounded-md transition-colors text-sm font-light tracking-wider"
        >
          Exportar
        </button>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
} 