import React from 'react';
import { PortfolioData, Skill } from '@/app/types/TemplateConfig';
import { DraggableItem } from '../effects/DraggableItem';

export function renderSkillsSection(
  addSkill: () => void,
  data: PortfolioData,
  expandedItem: { type: string; index: number } | null,
  handleDragStart: (type: string, index: number) => void,
  handleDragOver: (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => void,
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void,
  handleDrop: (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => void,
  toggleExpandItem: (type: string, index: number) => void,
  updateSkill: (index: number, skill: Skill) => void,
  removeSkill: (index: number) => void
) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Habilidades</h2>
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition-colors"
        >
          Adicionar Habilidade
        </button>
      </div>

      <div className="space-y-4">
        {data.skills.map((skill, index) => {
          const isExpanded = expandedItem?.type === 'skill' && expandedItem.index === index;
          const isDragging = expandedItem?.type === 'skill-dragging' && expandedItem.index === index;
          
          return (
            <DraggableItem
              key={index}
              id={`skill-${index}`}
              index={index}
              isDragging={isDragging}
              onDragStart={(id, idx) => handleDragStart('skill', idx)}
              onDragOver={(e, id, idx) => handleDragOver(e, 'skill', idx)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e, id, idx) => handleDrop(e, 'skill', idx)}
              className="bg-white/5 border border-white/10 rounded-lg p-4"
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-start">
                  <div 
                    className="flex-grow cursor-pointer" 
                    onClick={() => toggleExpandItem('skill', index)}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                      <span className="text-xs px-2 py-0.5 bg-purple-900/30 rounded text-purple-200">
                        {skill.category}
                      </span>
                    </div>
                    
                    <div className="w-full mt-2">
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Iniciante</span>
                        <span>Intermediário</span>
                        <span>Avançado</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleExpandItem('skill', index)}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => removeSkill(index)}
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
                      <label className="block text-sm font-medium mb-1">Nome da Habilidade</label>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => updateSkill(index, { ...skill, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Categoria</label>
                      <select
                        value={skill.category}
                        onChange={(e) => updateSkill(index, { ...skill, category: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Mobile">Mobile</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Design">Design</option>
                        <option value="Data">Data</option>
                        <option value="Soft Skill">Soft Skill</option>
                        <option value="Linguagem">Linguagem</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="flex justify-between text-sm font-medium mb-1">
                        <span>Nível: {skill.level}%</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => updateSkill(index, { ...skill, level: parseInt(e.target.value) })}
                        className="w-full accent-purple-500"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Iniciante</span>
                        <span>Intermediário</span>
                        <span>Avançado</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </DraggableItem>
          );
        })}

        {data.skills.length === 0 && (
          <div className="text-center py-8 border border-dashed border-white/20 rounded-lg">
            <p className="text-gray-400">Nenhuma habilidade cadastrada ainda.</p>
            <button
              onClick={addSkill}
              className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition-colors"
            >
              Adicionar Habilidade
            </button>
          </div>
        )}
      </div>
    </div>
  );
}