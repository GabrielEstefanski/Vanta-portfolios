import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TemplateConfig, Section } from '@/app/types/TemplateConfig';
import { RichTextEditor } from './RichTextEditor';
import { StyleEditor } from './StyleEditor';

interface SectionEditorProps {
  section: Section;
  onUpdate: (updates: Partial<Section>) => void;
  onClose: () => void;
}

export function SectionEditor({ section, onUpdate, onClose }: SectionEditorProps) {
  const [showStyleEditor, setShowStyleEditor] = useState(false);

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
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Editar {section.title}</h2>
              <button
                onClick={() => setShowStyleEditor(!showStyleEditor)}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                {showStyleEditor ? 'Fechar Editor de Estilo' : 'Editar Estilo'}
              </button>
            </div>
            
            {/* Título */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Título</label>
              <input
                type="text"
                value={section.title}
                onChange={(e) => onUpdate({ title: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Descrição */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Descrição</label>
              <textarea
                value={section.description}
                onChange={(e) => onUpdate({ description: e.target.value })}
                className="w-full p-2 border rounded h-24"
              />
            </div>

            {/* Conteúdo */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Conteúdo</label>
              <RichTextEditor
                value={section.content}
                onChange={(content) => onUpdate({ content })}
              />
            </div>

            {/* Estilo */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Estilo</label>
              <textarea
                value={section.style}
                onChange={(e) => onUpdate({ style: e.target.value })}
                className="w-full p-2 border rounded h-24"
              />
            </div>

            {/* Botões de Ação */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={() => onUpdate({ enabled: !section.enabled })}
                className={`px-4 py-2 rounded ${
                  section.enabled
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {section.enabled ? 'Desativar' : 'Ativar'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editor de Estilo */}
      {showStyleEditor && (
        <StyleEditor
          section={section}
          onUpdate={onUpdate}
          onClose={() => setShowStyleEditor(false)}
        />
      )}
    </motion.div>
  );
} 