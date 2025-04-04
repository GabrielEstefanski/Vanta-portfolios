import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface DraggableItemProps {
  id: string;
  index: number;
  onDragStart: (id: string, index: number) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>, id: string, index: number) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>, id: string, index: number) => void;
  onDragEnd?: () => void;
  className?: string;
  isDragging?: boolean;
  isDraggedOver?: boolean;
  insertPosition?: 'top' | 'bottom' | null;
  children: React.ReactNode;
}

export function DraggableItem({
  id,
  index,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  onDragEnd,
  className = '',
  isDragging = false,
  isDraggedOver = false,
  insertPosition = null,
  children
}: DraggableItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemRect, setItemRect] = useState<DOMRect | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Atualiza a posição do mouse quando o item está sendo arrastado
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  // Captura as dimensões do item original quando começa o arrasto
  useEffect(() => {
    if (isDragging && itemRef.current) {
      setItemRect(itemRef.current.getBoundingClientRect());
    }
  }, [isDragging]);

  const handleDragStartNative = (e: React.DragEvent<HTMLDivElement>) => {
    if (itemRef.current) {
      // Captura dimensões e posição inicial
      setItemRect(itemRef.current.getBoundingClientRect());
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    
    // Define uma imagem de arrasto transparente para o navegador
    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    e.dataTransfer.setDragImage(img, 0, 0);
    
    e.dataTransfer.setData('text/plain', String(index));
    e.dataTransfer.effectAllowed = 'move';
    
    onDragStart(id, index);
  };

  const handleDragEndNative = () => {
    // Limpa os estados e notifica o componente pai
    if (onDragEnd) {
      onDragEnd();
    }
  };

  return (
    <>
      {/* Wrapper div - controla eventos de drag e drop */}
      <div 
        ref={itemRef}
        draggable
        onDragStart={handleDragStartNative}
        onDragOver={onDragOver ? (e) => onDragOver(e, id, index) : undefined}
        onDragLeave={onDragLeave}
        onDrop={onDrop ? (e) => onDrop(e, id, index) : undefined}
        onDragEnd={handleDragEndNative}
        style={{ position: 'relative' }}
        className={`
          ${isDragging ? 'border-purple-500 opacity-50' : ''}
          ${isDraggedOver ? 'border-blue-500 bg-blue-900/20' : ''}
          transition-all duration-200 cursor-move hover:border-white/30 hover:bg-white/10
          ${className}
        `}
      >
        {/* Conteúdo principal - se torna invisível quando arrastado */}
        <div className={`transition-opacity duration-200 ${isDragging ? 'opacity-30' : 'opacity-100'}`}>
          {/* Indicador de posição de inserção */}
          <AnimatePresence>
            {insertPosition && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ 
                  duration: 0.2,
                  ease: "easeOut"
                }}
                className={`absolute left-0 right-0 h-3 bg-blue-400 rounded-full z-50 shadow-md shadow-blue-500/50
                  ${insertPosition === 'top' ? '-top-1.5' : '-bottom-1.5'}`}
              />
            )}
          </AnimatePresence>
          
          {children}
        </div>
      </div>

      {/* Elemento fantasma que segue o cursor - só aparece quando arrastando */}
      <AnimatePresence>
        {isDragging && itemRect && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 0.95, 
              scale: 1,
              boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.7)'
            }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.1
            }}
            className="fixed pointer-events-none z-[9999] bg-purple-800/40 backdrop-blur-sm border-2 border-purple-400 rounded-lg shadow-xl overflow-hidden"
            style={{
              width: itemRect.width,
              height: itemRect.height,
              position: 'fixed',
              left: mousePosition.x - itemRect.width / 2,
              top: mousePosition.y - itemRect.height / 2,
            }}
          >
            <div className="p-4 opacity-90">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 