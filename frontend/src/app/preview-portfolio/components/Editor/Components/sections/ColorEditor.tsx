import React, { useState } from 'react';
import { ColorScheme } from '@/app/types/TemplateConfig';

interface ColorEditorProps {
  colors: ColorScheme;
  onColorChange: (key: string, value: string) => void;
}

export function ColorEditor({ colors, onColorChange }: ColorEditorProps) {
  const [newColorName, setNewColorName] = useState('');
  const [newColorValue, setNewColorValue] = useState('#000000');
  const [showPalettes, setShowPalettes] = useState(false);
  const [activeColor, setActiveColor] = useState<string | null>(null);

  const colorPalettes = [
    {
      name: 'Minimalista',
      colors: {
        primary: '#2D3748',
        secondary: '#4A5568',
        background: '#FFFFFF',
        text: '#1A202C',
        accent: '#6B46C1'
      }
    },
    {
      name: 'Escuro Luxuoso',
      colors: {
        primary: '#9F7AEA',
        secondary: '#B794F4',
        background: '#1A202C',
        text: '#F7FAFC',
        accent: '#E9D8FD'
      }
    },
    {
      name: 'Profissional',
      colors: {
        primary: '#3182CE',
        secondary: '#4299E1',
        background: '#F7FAFC',
        text: '#2D3748',
        accent: '#63B3ED'
      }
    },
    {
      name: 'Criativo',
      colors: {
        primary: '#ED8936',
        secondary: '#F6AD55',
        background: '#FFFAF0',
        text: '#2D3748',
        accent: '#F6E05E'
      }
    }
  ];

  const presetColors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', 
    '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', 
    '#ff9800', '#ff5722', '#795548', '#607d8b', '#ffffff', '#000000'
  ];

  const applyPalette = (palette: typeof colorPalettes[0]) => {
    Object.entries(palette.colors).forEach(([key, value]) => {
      onColorChange(key, value);
    });
    setShowPalettes(false);
  };

  const addNewColor = () => {
    if (newColorName.trim() && newColorValue) {
      onColorChange(newColorName.trim(), newColorValue);
      setNewColorName('');
      setNewColorValue('#000000');
    }
  };

  const removeColor = (key: string) => {
    const essentialColors = ['primary', 'secondary', 'background', 'text', 'accent'];
    if (!essentialColors.includes(key)) {
      const updatedColors = { ...colors };
      delete updatedColors[key];

      Object.entries(updatedColors).forEach(([k, v]) => {
        if (v !== undefined) {
          onColorChange(k, v);
        }
      });
    }
  };

  const getLabelName = (key: string) => {
    const labels: Record<string, string> = {
      primary: 'Primária',
      secondary: 'Secundária',
      background: 'Fundo',
      text: 'Texto',
      accent: 'Destaque',
      surface: 'Superfície',
      border: 'Borda'
    };
    return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
  };

  const handleColorPickerToggle = (key: string) => {
    setActiveColor(activeColor === key ? null : key);
  };

  const handlePresetColorClick = (colorKey: string, presetColor: string) => {
    onColorChange(colorKey, presetColor);
    setActiveColor(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-light tracking-wider text-white mb-4">
          Cores
        </h3>
        <button 
          onClick={() => setShowPalettes(!showPalettes)}
          className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm transition-colors"
        >
          Paletas Sugeridas
        </button>
      </div>

      {showPalettes && (
        <div className="mb-6 border border-white/10 rounded-lg p-4 bg-black/20">
          <h4 className="text-sm font-medium text-white mb-3">Escolha uma paleta</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colorPalettes.map((palette, index) => (
              <button
                key={index}
                onClick={() => applyPalette(palette)}
                className="p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="text-sm text-white mb-2">{palette.name}</div>
                <div className="flex space-x-2 mb-1">
                  {Object.values(palette.colors).map((color, i) => (
                    <div 
                      key={i} 
                      className="w-5 h-5 rounded-full" 
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-5">
        {Object.entries(colors).map(([key, value]) => (
          <div key={key} className="group relative">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">
                {getLabelName(key)}
              </label>
              {!['primary', 'secondary', 'background', 'text', 'accent'].includes(key) && (
                <button
                  onClick={() => removeColor(key)}
                  className="text-xs text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Remover
                </button>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div 
                className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer"
                onClick={() => handleColorPickerToggle(key)}
              >
                <div 
                  className="absolute inset-0 rounded-full border border-white/20"
                  style={{ backgroundColor: value || '#000000' }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white drop-shadow-lg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                value={value || ''}
                onChange={(e) => onColorChange(key, e.target.value)}
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="color"
                value={value || '#000000'}
                onChange={(e) => onColorChange(key, e.target.value)}
                className="w-8 h-8 bg-transparent border-none cursor-pointer"
              />
            </div>
            
            {activeColor === key && (
              <div className="absolute z-10 mt-2 p-3 bg-gray-800 border border-white/20 rounded-lg shadow-xl">
                <div className="grid grid-cols-5 gap-2 mb-2">
                  {presetColors.map((presetColor, index) => (
                    <button
                      key={index}
                      className="w-6 h-6 rounded-full border border-white/20 hover:scale-110 transition-transform"
                      style={{ backgroundColor: presetColor }}
                      onClick={() => handlePresetColorClick(key, presetColor)}
                      title={presetColor}
                    />
                  ))}
                </div>
                <div className="flex mt-2 pt-2 border-t border-white/10">
                  <input
                    type="color"
                    value={value || '#000000'}
                    onChange={(e) => onColorChange(key, e.target.value)}
                    className="w-full h-8"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-white/10">
        <div className="text-sm font-light text-white mb-3">Adicionar nova cor</div>
        <div className="flex gap-3">
          <input
            type="text"
            value={newColorName}
            onChange={(e) => setNewColorName(e.target.value)}
            placeholder="Nome da cor"
            className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-white/50 transition-colors"
          />
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <input
              type="color"
              value={newColorValue}
              onChange={(e) => setNewColorValue(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div 
              className="absolute inset-0 rounded-full border border-white/20"
              style={{ backgroundColor: newColorValue }}
            />
          </div>
          <button
            onClick={addNewColor}
            className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
} 