import React from 'react';
import { ColorScheme } from '@/app/types/TemplateConfig';

interface ColorEditorProps {
  colors: ColorScheme;
  onColorChange: (key: string, value: string) => void;
}

export function ColorEditor({ colors, onColorChange }: ColorEditorProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-light tracking-wider text-white mb-4">
        Cores
      </h3>
      <div className="space-y-5">
        {Object.entries(colors).map(([key, value]) => (
          <div key={key} className="group">
            <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <input
                  type="color"
                  value={value || '#000000'}
                  onChange={(e) => onColorChange(key, e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div 
                  className="absolute inset-0 rounded-full border border-white/20"
                  style={{ backgroundColor: value || '#000000' }}
                />
              </div>
              <input
                type="text"
                value={value || ''}
                onChange={(e) => onColorChange(key, e.target.value)}
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 