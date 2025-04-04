import React from 'react';
import { Experience, PortfolioData } from '@/app/types/TemplateConfig';
import { DraggableItem } from '../effects/DraggableItem';
import { SectionIcon } from '../sections/SectionIcon';

export function renderExperienceSection(
  addExperience: () => void,
  data: PortfolioData,
  expandedItem: { type: string; index: number } | null,
  handleDragStart: (type: string, index: number) => void,
  handleDragOver: (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => void,
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void,
  handleDrop: (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => void,
  toggleExpandItem: (type: string, index: number) => void,
  updateExperience: (index: number, experience: Experience) => void,
  removeExperience: (index: number) => void
) {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-4">
        <SectionIcon icon="experience" size="small" showBackground={false} />
        <div>
          <h2 className="text-xl font-medium text-white">Experiências Profissionais</h2>
          <p className="text-sm text-white/60">Adicione e gerencie suas experiências de trabalho</p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={addExperience}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Adicionar Experiência
        </button>
      </div>

      <div className="space-y-4">
        {data.experiences.map((experience, index) => {
          const isExpanded = expandedItem?.type === 'experience' && expandedItem.index === index;
          const isDragging = expandedItem?.type === 'experience-dragging' && expandedItem.index === index;
          
          return (
            <DraggableItem
              key={index}
              id={`experience-${index}`}
              index={index}
              isDragging={isDragging}
              onDragStart={(id, idx) => handleDragStart('experience', idx)}
              onDragOver={(e, id, idx) => handleDragOver(e, 'experience', idx)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e, id, idx) => handleDrop(e, 'experience', idx)}
              className={`border rounded-lg p-5 transition-all ${
                isExpanded 
                  ? 'bg-white/5 border-purple-500/30 shadow-md shadow-purple-900/5' 
                  : 'bg-white/3 border-white/10 hover:bg-white/5'
              }`}
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-start">
                  <div 
                    className="flex-grow cursor-pointer" 
                    onClick={() => toggleExpandItem('experience', index)}
                  >
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium">{experience.position}</h3>
                      <span className="mx-2 text-white/40">•</span>
                      <span className="text-white/80">{experience.company}</span>
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {experience.startDate} - {experience.endDate}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleExpandItem('experience', index)}
                      className="p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => removeExperience(index)}
                      className="p-2 text-white/60 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="mt-6 space-y-5 animate-fadeIn border-t border-white/10 pt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white/80">Empresa</label>
                        <input
                          type="text"
                          value={experience.company}
                          onChange={(e) => updateExperience(index, { ...experience, company: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white/80">Cargo</label>
                        <input
                          type="text"
                          value={experience.position}
                          onChange={(e) => updateExperience(index, { ...experience, position: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white/80">Data Início</label>
                        <input
                          type="text"
                          value={experience.startDate}
                          onChange={(e) => updateExperience(index, { ...experience, startDate: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white/80">Data Fim</label>
                        <input
                          type="text"
                          value={experience.endDate}
                          onChange={(e) => updateExperience(index, { ...experience, endDate: e.target.value })}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white/80">Descrição</label>
                      <textarea
                        value={experience.description}
                        onChange={(e) => updateExperience(index, { ...experience, description: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors resize-y"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white/80">Tecnologias (separadas por vírgula)</label>
                      <input
                        type="text"
                        value={experience.technologies.join(', ')}
                        onChange={(e) => updateExperience(index, { 
                          ...experience, 
                          technologies: e.target.value.split(',').map(tech => tech.trim()).filter(Boolean)
                        })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                )}
              </div>
            </DraggableItem>
          );
        })}

        {data.experiences.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 border border-dashed border-white/20 rounded-lg bg-white/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-white/50 mb-3">Nenhuma experiência profissional cadastrada</p>
            <button
              onClick={addExperience}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Adicionar Experiência
            </button>
          </div>
        )}
      </div>
    </div>
  );
}