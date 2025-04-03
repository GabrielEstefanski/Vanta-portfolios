import React from 'react';
import { Section } from '@/app/types/TemplateConfig';

interface SectionsEditorProps {
  sections: Record<string, Section>;
  onSectionToggle: (sectionId: string) => void;
}

export function SectionsEditor({ sections, onSectionToggle }: SectionsEditorProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-light tracking-wider text-white mb-4">
        Ativar/Desativar Seções
      </h3>
      <div className="space-y-4">
        {Object.entries(sections).map(([id, section]) => (
          <div key={id} className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
            <span className="text-white font-light">{section.title || id}</span>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={section.enabled} 
                onChange={() => onSectionToggle(id)}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white/30"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
} 