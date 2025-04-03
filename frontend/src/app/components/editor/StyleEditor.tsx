import React from 'react';
import { motion } from 'framer-motion';
import { TemplateConfig, Section } from '@/app/types/TemplateConfig';

interface StyleEditorProps {
  section: Section;
  onUpdate: (updates: Partial<Section>) => void;
  onClose: () => void;
}

export function StyleEditor({ section, onUpdate, onClose }: StyleEditorProps) {
  const handleStyleChange = (property: string, value: string) => {
    try {
      const currentStyle = JSON.parse(section.style);
      const newStyle = {
        ...currentStyle,
        [property]: value
      };
      onUpdate({ style: JSON.stringify(newStyle) });
    } catch (error) {
      console.error('Erro ao atualizar estilo:', error);
    }
  };

  const getStyleValue = (property: string): string => {
    try {
      const style = JSON.parse(section.style);
      return style[property] || '';
    } catch (error) {
      return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Editar Estilo - {section.title}</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Cores</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">Cor de Fundo</label>
                  <input
                    type="color"
                    value={getStyleValue('backgroundColor')}
                    onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Cor do Texto</label>
                  <input
                    type="color"
                    value={getStyleValue('color')}
                    onChange={(e) => handleStyleChange('color', e.target.value)}
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Espaçamento</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">Padding</label>
                  <input
                    type="text"
                    value={getStyleValue('padding')}
                    onChange={(e) => handleStyleChange('padding', e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="ex: 2rem"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Margin</label>
                  <input
                    type="text"
                    value={getStyleValue('margin')}
                    onChange={(e) => handleStyleChange('margin', e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="ex: 1rem"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Bordas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium mb-2">Cor da Borda</label>
                  <input
                    type="color"
                    value={getStyleValue('borderColor')}
                    onChange={(e) => handleStyleChange('borderColor', e.target.value)}
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Espessura da Borda</label>
                  <input
                    type="text"
                    value={getStyleValue('borderWidth')}
                    onChange={(e) => handleStyleChange('borderWidth', e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="ex: 1px"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Sombras</h3>
              <div>
                <label className="block font-medium mb-2">Box Shadow</label>
                <input
                  type="text"
                  value={getStyleValue('boxShadow')}
                  onChange={(e) => handleStyleChange('boxShadow', e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="ex: 0 2px 4px rgba(0,0,0,0.1)"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                Fechar
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}