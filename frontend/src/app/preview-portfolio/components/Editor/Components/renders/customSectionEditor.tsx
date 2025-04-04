import React, { useState, ReactNode } from 'react';
import { CustomSection, CustomElement, CustomCard, CustomText, TemplateType } from '@/app/preview-portfolio/components/templates/types';
import { v4 as uuidv4 } from 'uuid';
import { createSectionTemplate } from './sectionTemplates';

interface CustomSectionEditorProps {
  sections: CustomSection[];
  onUpdate: (sections: CustomSection[]) => void;
  templateType?: TemplateType;
}

interface Link {
  label: string;
  url: string;
}

// Componente React propriamente dito
export function CustomSectionEditor({ sections = [], onUpdate, templateType = 'modern' }: CustomSectionEditorProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedElement, setExpandedElement] = useState<{sectionId: string, elementId: string} | null>(null);
  
  const addNewSection = () => {
    // Usa o template adequado baseado no tipo de template selecionado
    const newSection = createSectionTemplate(templateType);
    onUpdate([...sections, newSection]);
    setExpandedSection(newSection.id);
  };

  const updateSection = (id: string, updates: Partial<CustomSection>) => {
    const updatedSections = sections.map(section => 
      section.id === id ? { ...section, ...updates } : section
    );
    onUpdate(updatedSections);
  };

  const removeSection = (id: string) => {
    const updatedSections = sections.filter(section => section.id !== id);
    onUpdate(updatedSections);
    setExpandedSection(null);
  };

  const addElement = (sectionId: string, type: CustomElement['type']) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    let content: any = {};
    
    if (type === 'card') {
      content = {
        title: 'Novo Card',
        subtitle: 'Subtítulo',
        content: 'Conteúdo do card aqui...',
        imageUrl: '',
        links: []
      } as CustomCard;
    } else if (type === 'text') {
      content = {
        content: 'Novo parágrafo de texto',
        isHeading: false
      } as CustomText;
    } else if (type === 'image') {
      content = {
        url: '',
        alt: 'Imagem',
        caption: ''
      };
    } else if (type === 'divider') {
      content = {
        style: 'solid',
        color: '#e2e8f0',
        thickness: '1px'
      };
    }

    const newElement: CustomElement = {
      id: uuidv4(),
      type,
      content,
      styles: {}
    };

    const updatedSection = {
      ...section,
      elements: [...section.elements, newElement]
    };

    updateSection(sectionId, updatedSection);
    setExpandedElement({ sectionId, elementId: newElement.id });
  };

  const updateElement = (sectionId: string, elementId: string, updates: Partial<CustomElement>) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const updatedElements = section.elements.map(element => 
      element.id === elementId ? { ...element, ...updates } : element
    );

    updateSection(sectionId, { elements: updatedElements });
  };

  const removeElement = (sectionId: string, elementId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const updatedElements = section.elements.filter(element => element.id !== elementId);
    updateSection(sectionId, { elements: updatedElements });
    setExpandedElement(null);
  };

  const reorderElements = (sectionId: string, fromIndex: number, toIndex: number) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const updatedElements = [...section.elements];
    const [moved] = updatedElements.splice(fromIndex, 1);
    updatedElements.splice(toIndex, 0, moved);

    updateSection(sectionId, { elements: updatedElements });
  };

  const renderCardEditor = (sectionId: string, element: CustomElement): ReactNode => {
    const card = element.content as CustomCard;
    
    return (
      <div className="space-y-3 pl-4 border-l-2 border-purple-500/30">
        <div>
          <label className="block text-xs text-gray-400 mb-1">Título</label>
          <input
            type="text"
            value={card.title}
            onChange={(e) => updateElement(sectionId, element.id, { 
              content: { ...card, title: e.target.value } 
            })}
            className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm"
          />
        </div>
        
        <div>
          <label className="block text-xs text-gray-400 mb-1">Subtítulo</label>
          <input
            type="text"
            value={card.subtitle || ''}
            onChange={(e) => updateElement(sectionId, element.id, { 
              content: { ...card, subtitle: e.target.value } 
            })}
            className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm"
          />
        </div>
        
        <div>
          <label className="block text-xs text-gray-400 mb-1">Conteúdo</label>
          <textarea
            value={card.content}
            onChange={(e) => updateElement(sectionId, element.id, { 
              content: { ...card, content: e.target.value } 
            })}
            rows={3}
            className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm"
          />
        </div>
        
        <div>
          <label className="block text-xs text-gray-400 mb-1">URL da Imagem</label>
          <input
            type="text"
            value={card.imageUrl || ''}
            onChange={(e) => updateElement(sectionId, element.id, { 
              content: { ...card, imageUrl: e.target.value } 
            })}
            className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm"
          />
        </div>
      </div>
    );
  };

  const renderTextEditor = (sectionId: string, element: CustomElement): ReactNode => {
    const text = element.content as CustomText;
    
    return (
      <div className="space-y-3 pl-4 border-l-2 border-purple-500/30">
        <div className="flex items-center space-x-3">
          <label className="text-xs text-gray-400">É um título?</label>
          <input
            type="checkbox"
            checked={text.isHeading || false}
            onChange={(e) => updateElement(sectionId, element.id, { 
              content: { ...text, isHeading: e.target.checked } 
            })}
            className="rounded bg-white/5 border-white/10"
          />
        </div>
        
        {text.isHeading && (
          <div>
            <label className="block text-xs text-gray-400 mb-1">Nível (1-6)</label>
            <select
              value={text.headingLevel || 2}
              onChange={(e) => updateElement(sectionId, element.id, { 
                content: { ...text, headingLevel: Number(e.target.value) as 1|2|3|4|5|6 } 
              })}
              className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm"
            >
              {[1, 2, 3, 4, 5, 6].map(level => (
                <option key={level} value={level}>H{level}</option>
              ))}
            </select>
          </div>
        )}
        
        <div>
          <label className="block text-xs text-gray-400 mb-1">Conteúdo</label>
          <textarea
            value={text.content}
            onChange={(e) => updateElement(sectionId, element.id, { 
              content: { ...text, content: e.target.value } 
            })}
            rows={3}
            className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm"
          />
        </div>
      </div>
    );
  };

  const renderElementEditor = (sectionId: string, element: CustomElement): ReactNode => {
    const isExpanded = expandedElement?.sectionId === sectionId && expandedElement?.elementId === element.id;
    
    return (
      <div 
        key={element.id} 
        className="mb-2 p-2 bg-black/30 border border-white/10 rounded-lg hover:border-white/20 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span className="text-white text-sm">
              {element.type === 'card' ? 'Card' : 
               element.type === 'text' ? 'Texto' :
               element.type === 'image' ? 'Imagem' : 'Divisor'}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => setExpandedElement(isExpanded ? null : { sectionId, elementId: element.id })}
              className="text-white/70 hover:text-white"
            >
              {isExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <button
              onClick={() => removeElement(sectionId, element.id)}
              className="text-red-400 hover:text-red-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-3">
            {element.type === 'card' && renderCardEditor(sectionId, element)}
            {element.type === 'text' && renderTextEditor(sectionId, element)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-light tracking-wider text-white">Seções Personalizadas</h3>
        <button
          onClick={addNewSection}
          className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-500 transition-colors"
        >
          Adicionar Seção
        </button>
      </div>
      
      {sections.length === 0 ? (
        <div className="text-center p-6 border border-dashed border-white/10 rounded-lg">
          <p className="text-gray-400">Nenhuma seção personalizada criada ainda.</p>
          <p className="text-gray-500 text-sm mt-1">Clique em "Adicionar Seção" para começar.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sections.map((section) => {
            const isExpanded = expandedSection === section.id;
            
            return (
              <div key={section.id} className="border border-white/10 rounded-lg overflow-hidden">
                <div 
                  className="flex items-center justify-between p-3 bg-white/5 cursor-pointer"
                  onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-white">{section.title}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="text-white/70 hover:text-white">
                      {isExpanded ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSection(section.id);
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="p-4 border-t border-white/10 space-y-4">
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Título da Seção</label>
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) => updateSection(section.id, { title: e.target.value })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Layout</label>
                        <select
                          value={section.layout}
                          onChange={(e) => updateSection(section.id, { 
                            layout: e.target.value as 'grid' | 'flex' | 'standard' 
                          })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm"
                        >
                          <option value="standard">Padrão</option>
                          <option value="grid">Grid</option>
                          <option value="flex">Flexbox</option>
                        </select>
                      </div>
                      
                      {section.layout === 'grid' && (
                        <div>
                          <label className="block text-xs text-gray-400 mb-1">Colunas</label>
                          <select
                            value={section.columns || 1}
                            onChange={(e) => updateSection(section.id, { columns: Number(e.target.value) })}
                            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm"
                          >
                            {[1, 2, 3, 4].map(num => (
                              <option key={num} value={num}>{num}</option>
                            ))}
                          </select>
                        </div>
                      )}
                      
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">Espaçamento</label>
                        <select
                          value={section.gap || '1rem'}
                          onChange={(e) => updateSection(section.id, { gap: e.target.value })}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm"
                        >
                          <option value="0.5rem">Pequeno (0.5rem)</option>
                          <option value="1rem">Médio (1rem)</option>
                          <option value="1.5rem">Grande (1.5rem)</option>
                          <option value="2rem">Muito Grande (2rem)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm text-gray-400">Elementos</label>
                        <div className="flex space-x-1">
                          <button
                            onClick={() => addElement(section.id, 'card')}
                            className="px-2 py-1 bg-purple-600/50 text-white text-xs rounded hover:bg-purple-600 transition-colors"
                            title="Adicionar Card"
                          >
                            + Card
                          </button>
                          <button
                            onClick={() => addElement(section.id, 'text')}
                            className="px-2 py-1 bg-blue-600/50 text-white text-xs rounded hover:bg-blue-600 transition-colors"
                            title="Adicionar Texto"
                          >
                            + Texto
                          </button>
                          <button
                            onClick={() => addElement(section.id, 'image')}
                            className="px-2 py-1 bg-green-600/50 text-white text-xs rounded hover:bg-green-600 transition-colors"
                            title="Adicionar Imagem"
                          >
                            + Imagem
                          </button>
                          <button
                            onClick={() => addElement(section.id, 'divider')}
                            className="px-2 py-1 bg-gray-600/50 text-white text-xs rounded hover:bg-gray-600 transition-colors"
                            title="Adicionar Divisor"
                          >
                            + Divisor
                          </button>
                        </div>
                      </div>
                      
                      {section.elements.length === 0 ? (
                        <div className="text-center p-4 border border-dashed border-white/10 rounded-lg">
                          <p className="text-gray-500 text-sm">Adicione elementos para começar</p>
                        </div>
                      ) : (
                        <div className="space-y-2 pl-2">
                          {section.elements.map((element) => renderElementEditor(section.id, element))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Função wrapper para compatibilidade com o código existente
export function renderCustomSectionEditor(props: CustomSectionEditorProps) {
  return <CustomSectionEditor {...props} />;
} 