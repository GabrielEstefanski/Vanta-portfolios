import React, { useState } from 'react';
import { Layout, Section } from '@/app/types/TemplateConfig';

interface LayoutEditorProps {
  layout: Layout;
  sections?: Record<string, Section>;
  onUpdate: (newLayout: Layout) => void;
  onReorderSections?: (newOrder: string[]) => void;
}

export function LayoutEditor({ layout, sections, onUpdate, onReorderSections }: LayoutEditorProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [draggingSection, setDraggingSection] = useState<string | null>(null);
  
  const handleChange = (field: keyof Layout, value: string) => {
    onUpdate({
      ...layout,
      [field]: value
    });
  };
  
  const handleColumnChange = (device: 'mobile' | 'tablet' | 'desktop', value: number) => {
    onUpdate({
      ...layout,
      columns: {
        ...(layout.columns || { mobile: 1, tablet: 2, desktop: 3 }),
        [device]: value
      }
    });
  };

  const maxWidthOptions = [
    { value: 'max-w-3xl', label: 'Pequeno (768px)' },
    { value: 'max-w-4xl', label: 'Médio (896px)' },
    { value: 'max-w-5xl', label: 'Grande (1024px)' },
    { value: 'max-w-6xl', label: 'Extra Grande (1152px)' },
    { value: 'max-w-7xl', label: 'Máximo (1280px)' }
  ];

  const paddingOptions = [
    { value: 'p-4', label: 'Pequeno (1rem)' },
    { value: 'p-6', label: 'Médio (1.5rem)' },
    { value: 'p-8', label: 'Grande (2rem)' },
    { value: 'p-10', label: 'Extra Grande (2.5rem)' },
    { value: 'p-12', label: 'Máximo (3rem)' }
  ];

  const spacingOptions = [
    { value: 'space-y-4', label: 'Compacto (1rem)' },
    { value: 'space-y-8', label: 'Normal (2rem)' },
    { value: 'space-y-12', label: 'Amplo (3rem)' },
    { value: 'space-y-16', label: 'Extra Amplo (4rem)' },
    { value: 'space-y-20', label: 'Máximo (5rem)' }
  ];

  const gapOptions = [
    { value: 'gap-2', label: 'Pequeno (0.5rem)' },
    { value: 'gap-4', label: 'Médio (1rem)' },
    { value: 'gap-6', label: 'Grande (1.5rem)' },
    { value: 'gap-8', label: 'Extra Grande (2rem)' },
    { value: 'gap-10', label: 'Máximo (2.5rem)' }
  ];

  const getSortedSections = () => {
    if (!sections) return [];
    return Object.entries(sections)
      .sort(([, a], [, b]) => (a.order || 0) - (b.order || 0))
      .map(([sectionId, section]) => ({ sectionId, ...section }));
  };

  const handleDragStart = (id: string) => {
    setDraggingSection(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetId: string) => {
    if (!draggingSection || !onReorderSections || !sections) return;

    const sortedSections = getSortedSections();
    const dragIndex = sortedSections.findIndex(s => s.sectionId === draggingSection);
    const dropIndex = sortedSections.findIndex(s => s.sectionId === targetId);

    if (dragIndex === -1 || dropIndex === -1) return;

    const newSections = [...sortedSections];
    const [removed] = newSections.splice(dragIndex, 1);
    newSections.splice(dropIndex, 0, removed);

    onReorderSections(newSections.map(s => s.sectionId));
    setDraggingSection(null);
  };

  return (
    <div className="bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl text-white">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center">
          <div className="h-8 w-1 bg-purple-500 rounded-full mr-3"></div>
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Layout e Espaçamento
          </h3>
        </div>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30"
        >
          {showAdvanced ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Modo Básico
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Configurações Avançadas
            </>
          )}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="relative group">
          <label className="block text-sm font-medium text-white/80 mb-2 group-hover:text-purple-300 transition-colors">
            Largura Máxima
          </label>
          <div className="relative">
            <select
              value={layout.maxWidth}
              onChange={(e) => handleChange('maxWidth', e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all hover:bg-white/10"
            >
              {maxWidthOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-gray-800">
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8M8 12h8M12 17h4" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <label className="block text-sm font-medium text-white/80 mb-2 group-hover:text-purple-300 transition-colors">
            Padding
          </label>
          <div className="relative">
            <select
              value={layout.padding || 'p-4'}
              onChange={(e) => handleChange('padding', e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all hover:bg-white/10"
            >
              {paddingOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-gray-800">
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <label className="block text-sm font-medium text-white/80 mb-2 group-hover:text-purple-300 transition-colors">
            Espaçamento entre Seções
          </label>
          <div className="relative">
            <select
              value={layout.spacing}
              onChange={(e) => handleChange('spacing', e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all hover:bg-white/10"
            >
              {spacingOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-gray-800">
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 10V6m0 0l-4 4m4-4l-4-4M4 14v4m0 0l4-4m-4 4l4 4" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <label className="block text-sm font-medium text-white/80 mb-2 group-hover:text-purple-300 transition-colors">
            Gap Padrão
          </label>
          <div className="relative">
            <select
              value={layout.gap || 'gap-4'}
              onChange={(e) => handleChange('gap', e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all hover:bg-white/10"
            >
              {gapOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-gray-800">
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 5h14M5 19h14" />
              </svg>
            </div>
          </div>
        </div>

        {showAdvanced && (
          <div className="md:col-span-2 pt-6 mt-2 border-t border-white/10">
            <div className="flex items-center mb-5">
              <div className="h-5 w-1 bg-purple-500/70 rounded-full mr-3"></div>
              <h4 className="text-md font-medium text-white/90">Configurações Responsivas</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              <div className="relative group">
                <label className="block text-sm font-medium text-white/80 mb-2 group-hover:text-purple-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Colunas (Mobile)
                  </div>
                </label>
                <select
                  value={(layout.columns?.mobile || 1).toString()}
                  onChange={(e) => handleColumnChange('mobile', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all hover:bg-white/10"
                >
                  <option value="1" className="bg-gray-800">1 Coluna</option>
                  <option value="2" className="bg-gray-800">2 Colunas</option>
                </select>
              </div>
              
              <div className="relative group">
                <label className="block text-sm font-medium text-white/80 mb-2 group-hover:text-purple-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Colunas (Tablet)
                  </div>
                </label>
                <select
                  value={(layout.columns?.tablet || 2).toString()}
                  onChange={(e) => handleColumnChange('tablet', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all hover:bg-white/10"
                >
                  <option value="1" className="bg-gray-800">1 Coluna</option>
                  <option value="2" className="bg-gray-800">2 Colunas</option>
                  <option value="3" className="bg-gray-800">3 Colunas</option>
                </select>
              </div>
              
              <div className="relative group">
                <label className="block text-sm font-medium text-white/80 mb-2 group-hover:text-purple-300 transition-colors">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Colunas (Desktop)
                  </div>
                </label>
                <select
                  value={(layout.columns?.desktop || 3).toString()}
                  onChange={(e) => handleColumnChange('desktop', parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all hover:bg-white/10"
                >
                  <option value="1" className="bg-gray-800">1 Coluna</option>
                  <option value="2" className="bg-gray-800">2 Colunas</option>
                  <option value="3" className="bg-gray-800">3 Colunas</option>
                  <option value="4" className="bg-gray-800">4 Colunas</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {sections && onReorderSections && (
        <div className="pt-6 mt-6 border-t border-white/10">
          <div className="flex items-center mb-4">
            <div className="h-5 w-1 bg-purple-500/70 rounded-full mr-3"></div>
            <h4 className="text-md font-medium text-white/90">Ordem das Seções</h4>
          </div>
          
          <div className="flex items-center mb-4 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-white/80">Arraste para reordenar as seções do seu portfólio</p>
          </div>

          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {getSortedSections()
              .filter(section => section.enabled)
              .map((section) => (
                <div
                  key={section.sectionId}
                  draggable
                  onDragStart={() => handleDragStart(section.sectionId)}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(section.sectionId)}
                  className={`flex items-center p-4 rounded-lg cursor-move transition-all ${
                    draggingSection === section.sectionId 
                      ? 'border-purple-500 border-2 bg-purple-500/10 shadow-lg shadow-purple-500/20' 
                      : 'border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-md hover:border-purple-500/40'
                  }`}
                >
                  <div className="mr-3 text-white/50 hover:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                  </div>
                  <div className="text-white font-medium">{section.title}</div>
                </div>
              ))}
          </div>
        </div>
      )}
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </div>
  );
} 