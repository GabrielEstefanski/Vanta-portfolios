import React, { useState, useRef, useEffect } from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { defaultConfigs } from '@/app/config/templates';

interface TemplateSelectorProps {
  selected: string;
  onSelect: (templateId: string) => void;
}

export function TemplateSelector({ selected, onSelect }: TemplateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const currentTemplate = defaultConfigs[selected] || Object.values(defaultConfigs)[0];
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 transition-colors"
      >
        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
        <span className="text-sm tracking-wide whitespace-nowrap">{currentTemplate.name}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-white/70 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[280px] max-h-[300px] overflow-y-auto bg-black/90 border border-white/10 rounded-md shadow-xl backdrop-blur-md z-50">
          <div className="p-2 overflow-hidden">
            <div className="flex flex-col space-y-0.5">
              {Object.entries(defaultConfigs).map(([id, template]) => (
                <button
                  key={id}
                  onClick={() => {
                    onSelect(id);
                    setIsOpen(false);
                  }}
                  className={`group p-3 text-left rounded-md transition-all ${
                    selected === id
                      ? 'bg-gradient-to-r from-purple-600/80 to-purple-800/80 text-white'
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${selected === id ? 'bg-white' : 'bg-purple-500/50 group-hover:bg-purple-500'}`} />
                    <div className="font-medium">
                      {template.name}
                    </div>
                  </div>
                  
                  <div className="text-xs ml-4 mt-1.5 text-white/60 line-clamp-2">
                    {template.description}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-2 pt-2 border-t border-white/10">
              <button 
                className="w-full text-center py-2 text-xs text-white/50 hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 