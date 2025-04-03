import React from 'react';
import { motion } from 'framer-motion';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface TemplateSettingsProps {
  config: TemplateConfig;
  onUpdate: (updates: Partial<TemplateConfig>) => void;
}

export function TemplateSettings({ config, onUpdate }: TemplateSettingsProps) {
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
            <h2 className="text-2xl font-bold mb-6">Configurações do Template</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Informações Básicas</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-2">Nome do Template</label>
                  <input
                    type="text"
                    value={config.name}
                    onChange={(e) => onUpdate({ name: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Descrição</label>
                  <textarea
                    value={config.description}
                    onChange={(e) => onUpdate({ description: e.target.value })}
                    className="w-full p-2 border rounded h-24"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Thumbnail</label>
                  <input
                    type="text"
                    value={config.thumbnail}
                    onChange={(e) => onUpdate({ thumbnail: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Configurações de Layout</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-2">Largura Máxima</label>
                  <input
                    type="text"
                    value={config.props.layout.maxWidth}
                    onChange={(e) => onUpdate({
                      props: {
                        ...config.props,
                        layout: {
                          ...config.props.layout,
                          maxWidth: e.target.value
                        }
                      }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Espaçamento</label>
                  <input
                    type="text"
                    value={config.props.layout.spacing}
                    onChange={(e) => onUpdate({
                      props: {
                        ...config.props,
                        layout: {
                          ...config.props.layout,
                          spacing: e.target.value
                        }
                      }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Configurações de Tipografia</h3>
              <div className="space-y-4">
                {Object.entries(config.props.typography).map(([key, value]) => (
                  <div key={key}>
                    <label className="block font-medium mb-2 capitalize">{key}</label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => onUpdate({
                        props: {
                          ...config.props,
                          typography: {
                            ...config.props.typography,
                            [key]: e.target.value
                          }
                        }
                      })}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Configurações de Cores</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(config.props.colors).map(([key, value]) => (
                  <div key={key}>
                    <label className="block font-medium mb-2 capitalize">{key}</label>
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => onUpdate({
                        props: {
                          ...config.props,
                          colors: {
                            ...config.props.colors,
                            [key]: e.target.value
                          }
                        }
                      })}
                      className="w-full h-10 rounded cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => window.history.back()}
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