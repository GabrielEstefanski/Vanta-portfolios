import React from 'react';
import { PortfolioData, Project } from '@/app/types/TemplateConfig';
import { DraggableItem } from '../effects/DraggableItem';

export function renderProjectsSection(
  addProject: () => void,
  data: PortfolioData,
  expandedItem: { type: string; index: number } | null,
  handleDragStart: (type: string, index: number) => void,
  handleDragOver: (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => void,
  handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void,
  handleDrop: (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => void,
  toggleExpandItem: (type: string, index: number) => void,
  updateProject: (index: number, project: Project) => void,
  removeProject: (index: number) => void,
  getIsDragging: (type: string, index: number) => boolean,
  getIsDraggedOver: (type: string, index: number) => boolean,
  getInsertPosition: (type: string, index: number) => 'top' | 'bottom' | null
) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-medium">Projetos</h2>
        <button
          onClick={addProject}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition-colors"
        >
          Adicionar Projeto
        </button>
      </div>

      <div className="space-y-4">
        {data.projects.map((project, index) => {
          const isExpanded = expandedItem?.type === 'project' && expandedItem.index === index;
          const isDragging = getIsDragging('project', index);
          const isDraggedOver = getIsDraggedOver('project', index);
          const insertPosition = getInsertPosition('project', index);
          
          return (
            <DraggableItem
              key={index}
              id={`project-${index}`}
              index={index}
              isDragging={isDragging}
              isDraggedOver={isDraggedOver}
              insertPosition={insertPosition}
              onDragStart={(id, idx) => handleDragStart('project', idx)}
              onDragOver={(e, id, idx) => handleDragOver(e, 'project', idx)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e, id, idx) => handleDrop(e, 'project', idx)}
              className="bg-white/5 border border-white/10 rounded-lg p-4"
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-start">
                  <div 
                    className="flex-grow cursor-pointer" 
                    onClick={() => toggleExpandItem('project', index)}
                  >
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <div className="flex flex-wrap mt-1 gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleExpandItem('project', index)}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>
                    
                    <button
                      onClick={() => removeProject(index)}
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
                      <label className="block text-sm font-medium mb-1">Título do Projeto</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => updateProject(index, { ...project, title: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Descrição</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => updateProject(index, { ...project, description: e.target.value })}
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">URL da Imagem</label>
                      <input
                        type="text"
                        value={project.imageUrl}
                        onChange={(e) => updateProject(index, { ...project, imageUrl: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Tecnologias (separadas por vírgula)</label>
                      <input
                        type="text"
                        value={project.technologies.join(', ')}
                        onChange={(e) => updateProject(index, { 
                          ...project, 
                          technologies: e.target.value.split(',').map(tech => tech.trim()).filter(Boolean)
                        })}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </DraggableItem>
          );
        })}

        {data.projects.length === 0 && (
          <div className="text-center py-8 border border-dashed border-white/20 rounded-lg">
            <p className="text-gray-400">Nenhum projeto cadastrado ainda.</p>
            <button
              onClick={addProject}
              className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition-colors"
            >
              Adicionar Projeto
            </button>
          </div>
        )}
      </div>
    </div>
  );
}