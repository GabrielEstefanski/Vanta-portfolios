import React, { useState, useEffect } from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { useTemplate } from '@/app/hooks/useTemplate';
import { SectionEditor } from './SectionEditor';
import { TemplatePreview } from './TemplatePreview';
import { SectionOrder } from './SectionOrder';
import { TemplateSettings } from './TemplateSettings';
import { TemplateHistory } from './TemplateHistory';

interface TemplateEditorProps {
  initialConfig: TemplateConfig;
  onSave: (config: TemplateConfig) => void;
}

export function TemplateEditor({ initialConfig, onSave }: TemplateEditorProps) {
  const {
    config,
    history,
    updateData,
    updateColors,
    updateSection,
    updateLayout,
    updateTypography,
    toggleSection,
    reorderSections,
    restoreFromHistory
  } = useTemplate(initialConfig);

  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    console.log("Configuração inicial atualizada:", initialConfig.name);
  }, [initialConfig]);

  const handleSave = () => {
    if (typeof onSave === 'function') {
      onSave(config);
      console.log("Template salvo com sucesso!");
    } else {
      console.error("Erro: função onSave não está definida");
    }
  };

  const handleSectionUpdate = (sectionId: string, updates: any) => {
    updateSection(sectionId as keyof typeof config.props.sections, updates);
    setEditingSection(null);
  };

  const handleConfigUpdate = (updates: Partial<TemplateConfig>) => {
    Object.assign(config, updates);
  };

  return (
    <div className="h-full overflow-auto bg-white dark:bg-gray-800 rounded-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold dark:text-white">Editar Template: {config.name}</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
            >
              {showHistory ? 'Fechar Histórico' : 'Histórico'}
            </button>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              {showSettings ? 'Fechar Configurações' : 'Configurações'}
            </button>
          </div>
        </div>
        
        <SectionOrder config={config} onReorder={reorderSections} />

        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2 dark:text-white">Seções</h3>
          <div className="space-y-2">
            {Object.entries(config.props.sections).map(([id, section]) => (
              <div key={id} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <h4 className="font-medium dark:text-white">{section.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{section.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingSection(id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => toggleSection(id as keyof typeof config.props.sections)}
                    className={`px-2 py-1 rounded text-xs ${
                      section.enabled
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {section.enabled ? 'Ativo' : 'Inativo'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2 dark:text-white">Cores</h3>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(config.props.colors).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <label className="font-medium capitalize text-sm dark:text-white">{key}</label>
                <input
                  type="color"
                  value={value}
                  onChange={(e) => updateColors({ [key]: e.target.value })}
                  className="w-8 h-6 rounded cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2 dark:text-white">Layout</h3>
          <div className="space-y-2">
            <div>
              <label className="block font-medium mb-1 text-sm dark:text-white">Largura Máxima</label>
              <input
                type="text"
                value={config.props.layout.maxWidth}
                onChange={(e) => updateLayout({ maxWidth: e.target.value })}
                className="w-full p-1 border rounded text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-sm dark:text-white">Espaçamento</label>
              <input
                type="text"
                value={config.props.layout.spacing}
                onChange={(e) => updateLayout({ spacing: e.target.value })}
                className="w-full p-1 border rounded text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2 dark:text-white">Tipografia</h3>
          <div className="space-y-2">
            {Object.entries(config.props.typography).map(([key, value]) => (
              <div key={key}>
                <label className="block font-medium mb-1 text-sm capitalize dark:text-white">{key}</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => updateTypography({ [key]: e.target.value })}
                  className="w-full p-1 border rounded text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Salvar Alterações
          </button>
        </div>
      </div>

      {editingSection && (
        <SectionEditor
          section={config.props.sections[editingSection]}
          onUpdate={(updates) => handleSectionUpdate(editingSection, updates)}
          onClose={() => setEditingSection(null)}
        />
      )}

      {showPreview && <TemplatePreview config={config} />}

      {showSettings && (
        <TemplateSettings
          config={config}
          onUpdate={handleConfigUpdate}
        />
      )}

      {showHistory && (
        <TemplateHistory
          history={history}
          onRestore={restoreFromHistory}
          onClose={() => setShowHistory(false)}
        />
      )}
    </div>
  );
} 