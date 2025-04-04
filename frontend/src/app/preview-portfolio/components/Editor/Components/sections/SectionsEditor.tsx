import React, { useState, useRef, useEffect } from 'react';
import { Section } from '@/app/types/TemplateConfig';
import { motion, MotionProps } from 'framer-motion';

interface SectionsEditorProps {
  sections: Record<string, Section>;
  onSectionToggle: (sectionId: string) => void;
  onReorderSections?: (newOrder: string[]) => void;
  onAddCustomSection?: () => void;
}

export function SectionsEditor({ sections, onSectionToggle, onReorderSections, onAddCustomSection }: SectionsEditorProps) {
  const [draggedSectionId, setDraggedSectionId] = useState<string | null>(null);
  const [dragOverSectionId, setDragOverSectionId] = useState<string | null>(null);
  const [draggedItemRect, setDraggedItemRect] = useState<DOMRect | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());

  const sortedSections = Object.entries(sections)
    .sort(([, a], [, b]) => (a.order || 0) - (b.order || 0))
    .map(([sectionId, section]) => ({ sectionId, ...section }));

  // Verifica se há uma seção personalizada
  const hasCustomSection = sortedSections.some(section => section.sectionId === 'custom');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggedSectionId) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [draggedSectionId]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, sectionId: string) => {
    if (!onReorderSections) return;
    
    const element = sectionRefs.current.get(sectionId);
    if (element) {
      setDraggedItemRect(element.getBoundingClientRect());
    }
    
    setDraggedSectionId(sectionId);
    e.dataTransfer.setData('text/plain', sectionId);
    e.dataTransfer.effectAllowed = 'move';
    
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    e.dataTransfer.setDragImage(img, 0, 0);
    
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, sectionId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (draggedSectionId === sectionId) {
      setDragOverSectionId(null);
      return;
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    setDragOverSectionId(sectionId);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDragOverSectionId(null);
    }, 50);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!draggedSectionId || draggedSectionId === targetId || !onReorderSections) {
      setDraggedSectionId(null);
      setDragOverSectionId(null);
      setDraggedItemRect(null);
      return;
    }
    
    const sourceIndex = sortedSections.findIndex(section => section.sectionId === draggedSectionId);
    const targetIndex = sortedSections.findIndex(section => section.sectionId === targetId);
    
    if (sourceIndex !== -1 && targetIndex !== -1) {
      const newSections = [...sortedSections];
      const [removed] = newSections.splice(sourceIndex, 1);
      newSections.splice(targetIndex, 0, removed);
      
      onReorderSections(newSections.map(section => section.sectionId));
    }
    
    setDraggedSectionId(null);
    setDragOverSectionId(null);
    setDraggedItemRect(null);
  };

  const handleDragEnd = () => {
    setDraggedSectionId(null);
    setDragOverSectionId(null);
    setDraggedItemRect(null);
  };

  const getInsertPosition = (sectionId: string) => {
    if (!dragOverSectionId || dragOverSectionId !== sectionId || !draggedSectionId) return null;
    
    const sourceIndex = sortedSections.findIndex(section => section.sectionId === draggedSectionId);
    const targetIndex = sortedSections.findIndex(section => section.sectionId === sectionId);
    
    return sourceIndex < targetIndex ? 'bottom' : 'top';
  };

  const setRef = (sectionId: string) => (element: HTMLDivElement | null) => {
    if (element) {
      sectionRefs.current.set(sectionId, element);
    } else {
      sectionRefs.current.delete(sectionId);
    }
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-light tracking-wider text-white mb-4">
          Seções do Portfólio
        </h3>
        {onReorderSections && (
          <div className="text-sm text-gray-400 italic">
            Arraste para reordenar
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        {sortedSections.map((section) => {
          const isBeingDragged = draggedSectionId === section.sectionId;
          const isDraggedOver = dragOverSectionId === section.sectionId;
          const insertPosition = getInsertPosition(section.sectionId);
          
          const motionProps: MotionProps & React.HTMLAttributes<HTMLDivElement> = {
            layout: true,
            draggable: !!onReorderSections,
            initial: { opacity: 1, y: 0 },
            animate: {
              opacity: isBeingDragged ? 0.5 : 1,
              y: 0,
              scale: isBeingDragged ? 0.98 : 1,
              boxShadow: isBeingDragged 
                ? '0 10px 25px -5px rgba(124, 58, 237, 0.5)' 
                : '0 0 0 0 rgba(0, 0, 0, 0)'
            },
            transition: {
              type: 'spring',
              stiffness: 500,
              damping: 30,
              opacity: { duration: 0.2 }
            },
            className: `
              flex items-center justify-between p-3 rounded-lg border relative
              ${isBeingDragged ? 'border-purple-500 bg-purple-900/20' : 'border-white/10 bg-white/5'}
              ${isDraggedOver ? 'border-blue-500 bg-blue-900/20' : ''}
              transition-colors duration-200 
              ${onReorderSections ? 'cursor-move hover:border-white/30 hover:bg-white/10' : ''}
            `,
            onDragStart: (e) => onReorderSections && handleDragStart(e as React.DragEvent<HTMLDivElement>, section.sectionId),
            onDragOver: (e) => onReorderSections && handleDragOver(e as React.DragEvent<HTMLDivElement>, section.sectionId),
            onDragLeave: (e) => onReorderSections && handleDragLeave(e as React.DragEvent<HTMLDivElement>),
            onDrop: (e) => onReorderSections && handleDrop(e as React.DragEvent<HTMLDivElement>, section.sectionId),
            onDragEnd: handleDragEnd,
          };
          
          return (
            <motion.div 
              key={section.sectionId}
              ref={setRef(section.sectionId)}
              {...motionProps}
            >
              {/* Indicador de posição de inserção */}
              {insertPosition && (
                <div 
                  className={`absolute left-0 right-0 h-1 bg-blue-500 rounded-full z-10
                    ${insertPosition === 'top' ? '-top-0.5' : '-bottom-0.5'}`}
                />
              )}
              
              <div className="flex items-center">
                {onReorderSections && (
                  <div className="mr-3 text-white/50 hover:text-white/80 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                  </div>
                )}
                <span 
                  className={`text-white font-light ${!section.enabled ? 'text-white/50' : ''}`}
                >
                  {section.sectionId === 'custom' ? 'Seções Personalizadas' : section.title || section.sectionId}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-xs text-gray-400">
                  {section.enabled ? 'Ativa' : 'Desativada'}
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={section.enabled} 
                    onChange={() => onSectionToggle(section.sectionId)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </motion.div>
          );
        })}
      </div>

      {!hasCustomSection && onAddCustomSection && (
        <div className="mt-4">
          <button
            onClick={onAddCustomSection}
            className="w-full py-2 border border-dashed border-white/20 rounded-lg text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-colors text-sm flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Adicionar Seção Personalizada
          </button>
        </div>
      )}

      {draggedSectionId && draggedItemRect && (
        <div 
          className="fixed pointer-events-none z-50 opacity-70 bg-purple-900/30 backdrop-blur-sm border-2 border-purple-500 rounded-lg p-3 shadow-xl"
          style={{
            width: draggedItemRect.width,
            height: draggedItemRect.height,
            transform: `translate(${mousePosition.x - draggedItemRect.width / 2}px, ${mousePosition.y - draggedItemRect.height / 2}px)`,
            transition: 'transform 0.05s linear'
          }}
        >
          <div className="flex items-center">
            <div className="mr-3 text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </div>
            <span className="text-white font-light">
              {sortedSections.find(s => s.sectionId === draggedSectionId)?.title || draggedSectionId}
            </span>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
        <h4 className="font-medium mb-2">Dicas de uso</h4>
        <ul className="text-sm text-white/70 space-y-2 list-disc pl-5">
          <li>Ative apenas as seções relevantes para o seu portfólio</li>
          <li>Organize as seções na ordem que melhor conte sua história profissional</li>
          <li>Coloque as seções mais importantes no topo para capturar atenção imediata</li>
          <li>Personalize cada seção nas abas correspondentes para maximizar o impacto</li>
        </ul>
      </div>
    </div>
  );
} 