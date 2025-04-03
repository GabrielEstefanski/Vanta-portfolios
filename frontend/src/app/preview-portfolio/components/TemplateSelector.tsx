import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { defaultConfigs } from '@/app/config/templates';
import { Button } from '@/app/components/ui/Button';

interface TemplateSelectorProps {
  currentTemplate: TemplateConfig;
  onTemplateSelect: (templateId: string) => void;
}

export function TemplateSelector({ currentTemplate, onTemplateSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-light tracking-wider text-white mb-4">
        Escolha um template
      </h3>
      <div className="space-y-4">
        {Object.entries(defaultConfigs).map(([id, template]) => (
          <button
            key={id}
            onClick={() => onTemplateSelect(id)}
            className={`w-full p-4 text-left rounded-lg border transition-all duration-300 ${
              currentTemplate.id === id
                ? 'border-white/50 bg-white/10'
                : 'border-white/5 hover:border-white/20 hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-2 h-2 rounded-full ${
                currentTemplate.id === id ? 'bg-white' : 'bg-white/30'
              }`} />
              <div className="font-light text-white tracking-wider">
                {template.name}
              </div>
            </div>
            <div className="text-sm text-gray-400 tracking-wide pl-5">
              {template.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 