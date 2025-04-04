import React from 'react';
import { PortfolioData, Education } from '@/app/types/TemplateConfig';
import { DraggableItem } from '../effects/DraggableItem';

export function renderEducationSection(
  addEducation: () => void,
  data: PortfolioData,
  expandedItem: { type: string; index: number } | null,
  handleDragStart: (type: string, index: number) => void,
  handleDragOver: (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => void,
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void,
  handleDrop: (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => void,
  toggleExpandItem: (type: string, index: number) => void,
  updateEducation: (index: number, education: Education) => void,
  removeEducation: (index: number) => void
) {
  const educationItems = data.education || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Educação</h2>
        <button
          onClick={addEducation}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition-colors"
        >
          Adicionar Formação
        </button>
      </div>

      <div className="space-y-4">
        {educationItems.map((education, index) => {
          const isExpanded = expandedItem?.type === 'education' && expandedItem.index === index;
          const isDragging = expandedItem?.type === 'education-dragging' && expandedItem.index === index;
          
          return (
            <DraggableItem
              key={index}
              id={`education-${index}`}
              index={index}
              isDragging={isDragging}
              onDragStart={(id, idx) => handleDragStart('education', idx)}
              onDragOver={(e, id, idx) => handleDragOver(e, 'education', idx)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e, id, idx) => handleDrop(e, 'education', idx)}
              className="bg-white/5 border border-white/10 rounded-lg p-4"
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-start">
                  <div 
                    className="flex-grow cursor-pointer" 
                    onClick={() => toggleExpandItem('education', index)}
                  >
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium">{education.degree}</h3>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-300">{education.institution}</span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {education.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleExpandItem('education', index)}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => removeEducation(index)}
                      className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="mt-4 space-y-3 animate-fadeIn">
                    <div>
                      <label className="block text-sm font-medium mb-1">Instituição</label>
                      <input
                        type="text"
                        value={education.institution}
                        onChange={(e) => updateEducation(index, { ...education, institution: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Curso/Grau</label>
                      <input
                        type="text"
                        value={education.degree}
                        onChange={(e) => updateEducation(index, { ...education, degree: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Período</label>
                      <input
                        type="text"
                        value={education.period}
                        onChange={(e) => updateEducation(index, { ...education, period: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                        placeholder="Ex: 2020 - 2024"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Descrição</label>
                      <textarea
                        value={education.description}
                        onChange={(e) => updateEducation(index, { ...education, description: e.target.value })}
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </DraggableItem>
          );
        })}

        {educationItems.length === 0 && (
          <div className="text-center py-8 border border-dashed border-white/20 rounded-lg">
            <p className="text-gray-400">Nenhuma formação cadastrada ainda.</p>
            <button
              onClick={addEducation}
              className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition-colors"
            >
              Adicionar Formação
            </button>
          </div>
        )}
      </div>
    </div>
  );
}