import React from 'react';
import { Typography } from '@/app/types/TemplateConfig';
import { Button } from '@/app/components/ui/Button';

interface TypographyEditorProps {
  typography: Typography;
  onUpdate: (newTypography: Typography) => void;
}

export function TypographyEditor({ typography, onUpdate }: TypographyEditorProps) {
  const handleChange = (field: keyof Typography, value: string) => {
    onUpdate({
      ...typography,
      [field]: value
    });
  };

  const fontOptions = [
    { value: 'font-sans', label: 'Sans Serif' },
    { value: 'font-serif', label: 'Serif' },
    { value: 'font-mono', label: 'Monospace' },
    { value: 'font-light', label: 'Light' },
    { value: 'font-normal', label: 'Normal' },
    { value: 'font-medium', label: 'Medium' },
    { value: 'font-semibold', label: 'Semi Bold' },
    { value: 'font-bold', label: 'Bold' },
    { value: 'font-extrabold', label: 'Extra Bold' }
  ];

  const textSizeOptions = [
    { value: 'text-xs', label: 'Extra Small' },
    { value: 'text-sm', label: 'Small' },
    { value: 'text-base', label: 'Base' },
    { value: 'text-lg', label: 'Large' },
    { value: 'text-xl', label: 'Extra Large' },
    { value: 'text-2xl', label: '2XL' },
    { value: 'text-3xl', label: '3XL' },
    { value: 'text-4xl', label: '4XL' }
  ];

  return (
    <div className="space-y-6 text-white">
      <h3 className="text-lg font-light tracking-wider mb-4">Tipografia</h3>
      
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
            Fonte de Títulos
          </label>
          <select
            value={typography.headingFont}
            onChange={(e) => handleChange('headingFont', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
          >
            {fontOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-gray-800">
                {option.label}
              </option>
            ))}
          </select>
          <div className="mt-2 p-2 border border-white/10 rounded">
            <p className={`${typography.headingFont}`}>
              Exemplo de título com esta fonte
            </p>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
            Fonte de Texto
          </label>
          <select
            value={typography.bodyFont}
            onChange={(e) => handleChange('bodyFont', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
          >
            {fontOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-gray-800">
                {option.label}
              </option>
            ))}
          </select>
          <div className="mt-2 p-2 border border-white/10 rounded">
            <p className={`${typography.bodyFont}`}>
              Este é um exemplo de texto com esta fonte. O texto do corpo do portfólio será exibido usando esta configuração.
            </p>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
            Tamanho Base
          </label>
          <select
            value={typography.baseSize}
            onChange={(e) => handleChange('baseSize', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
          >
            {textSizeOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-gray-800">
                {option.label}
              </option>
            ))}
          </select>
          <div className="mt-2 p-2 border border-white/10 rounded">
            <p className={`${typography.baseSize}`}>
              Exemplo de texto com este tamanho base
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 