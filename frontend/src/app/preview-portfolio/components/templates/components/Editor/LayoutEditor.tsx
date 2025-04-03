import React from 'react';
import { Layout } from '@/app/types/TemplateConfig';
import { Button } from '@/app/components/ui/Button';

interface LayoutEditorProps {
  layout: Layout;
  onUpdate: (newLayout: Layout) => void;
}

export function LayoutEditor({ layout, onUpdate }: LayoutEditorProps) {
  const handleChange = (field: keyof Layout, value: string) => {
    onUpdate({
      ...layout,
      [field]: value
    });
  };

  const maxWidthOptions = [
    { value: 'max-w-3xl', label: 'Pequeno (768px)' },
    { value: 'max-w-4xl', label: 'Médio (896px)' },
    { value: 'max-w-5xl', label: 'Grande (1024px)' },
    { value: 'max-w-6xl', label: 'Extra Grande (1152px)' },
    { value: 'max-w-7xl', label: 'Máximo (1280px)' }
  ];

  const paddingOptions = [
    { value: 'p-4', label: 'Pequeno (1rem)' },
    { value: 'p-6', label: 'Médio (1.5rem)' },
    { value: 'p-8', label: 'Grande (2rem)' },
    { value: 'p-10', label: 'Extra Grande (2.5rem)' },
    { value: 'p-12', label: 'Máximo (3rem)' }
  ];

  const spacingOptions = [
    { value: 'space-y-4', label: 'Compacto (1rem)' },
    { value: 'space-y-8', label: 'Normal (2rem)' },
    { value: 'space-y-12', label: 'Amplo (3rem)' },
    { value: 'space-y-16', label: 'Extra Amplo (4rem)' },
    { value: 'space-y-20', label: 'Máximo (5rem)' }
  ];

  return (
    <div className="space-y-6 text-white">
      <h3 className="text-lg font-light tracking-wider mb-4">Layout e Espaçamento</h3>
      
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
            Largura Máxima
          </label>
          <select
            value={layout.maxWidth}
            onChange={(e) => handleChange('maxWidth', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
          >
            {maxWidthOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-gray-800">
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
            Padding
          </label>
          <select
            value={layout.padding}
            onChange={(e) => handleChange('padding', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
          >
            {paddingOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-gray-800">
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
            Espaçamento entre Seções
          </label>
          <select
            value={layout.spacing}
            onChange={(e) => handleChange('spacing', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
          >
            {spacingOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-gray-800">
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
            Gap Padrão
          </label>
          <input
            type="text"
            value={layout.gap || 'gap-4'}
            onChange={(e) => handleChange('gap', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
            placeholder="gap-4"
          />
          <p className="mt-1 text-xs text-gray-400">
            Use classes Tailwind como gap-2, gap-4, gap-8
          </p>
        </div>
      </div>
    </div>
  );
} 