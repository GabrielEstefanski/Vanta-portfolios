import React, { useState, useEffect } from 'react';
import { TemplateConfig, PortfolioData } from '@/app/types/TemplateConfig';
import { TemplateType } from '@/app/preview-portfolio/components/templates/types';
import { ContentEditor } from '../../index';
import { TypographyEditor } from './TypographyEditor';
import { LayoutEditor } from './LayoutEditor';
import { Button } from '@/app/components/ui/Button';
import { EditorTabs, EditorTabType } from './EditorTabs';
import { ColorEditor } from './ColorEditor';
import { ProfileEditor } from './ProfileEditor';
import { SocialEditor } from './SocialEditor';
import { SectionsEditor } from './SectionsEditor';

interface TemplateEditorProps {
  config: TemplateConfig;
  onConfigUpdate: (newConfig: TemplateConfig) => void;
  onSave: (config: TemplateConfig) => void;
}

export function TemplateEditor({ config, onConfigUpdate, onSave }: TemplateEditorProps) {
  const [activeTab, setActiveTab] = useState<EditorTabType>('content');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showColorEditor, setShowColorEditor] = useState(false);
  
  useEffect(() => {
    if (lastSaved) {
      setHasUnsavedChanges(true);
    }
  }, [config, lastSaved]);

  const toggleSectionVisibility = (sectionId: string) => {
    const updatedSections = { ...config.props.sections };
    updatedSections[sectionId] = {
      ...updatedSections[sectionId],
      enabled: !updatedSections[sectionId].enabled
    };
    
    onConfigUpdate({
      ...config,
      props: {
        ...config.props,
        sections: updatedSections
      }
    });
  };

  const handleSectionReorder = (newOrder: string[]) => {
    const updatedSections = { ...config.props.sections };
    
    newOrder.forEach((sectionId, index) => {
      if (updatedSections[sectionId]) {
        updatedSections[sectionId] = {
          ...updatedSections[sectionId],
          order: index
        };
      }
    });
    
    onConfigUpdate({
      ...config,
      props: {
        ...config.props,
        sections: updatedSections
      }
    });
  };

  const handleColorChange = (colorKey: string, value: string) => {
    onConfigUpdate({
      ...config,
      props: {
        ...config.props,
        colors: {
          ...config.props.colors,
          [colorKey]: value
        }
      }
    });
  };

  const handleContentUpdate = (newData: PortfolioData) => {
    onConfigUpdate({
      ...config,
      props: {
        ...config.props,
        data: newData
      }
    });
  };

  const handleTypographyUpdate = (newTypography: any) => {
    onConfigUpdate({
      ...config,
      props: {
        ...config.props,
        typography: newTypography
      }
    });
  };

  const handleLayoutUpdate = (newLayout: any) => {
    onConfigUpdate({
      ...config,
      props: {
        ...config.props,
        layout: newLayout
      }
    });
  };

  const handleSectionToggle = (sectionId: string) => {
    const updatedSections = { ...config.props.sections };
    updatedSections[sectionId] = {
      ...updatedSections[sectionId],
      enabled: !updatedSections[sectionId].enabled
    };
    
    onConfigUpdate({
      ...config,
      props: {
        ...config.props,
        sections: updatedSections
      }
    });
  };
  
  const handleReorderSections = (newOrder: string[]) => {
    const updatedSections = { ...config.props.sections };
    
    newOrder.forEach((sectionId, index) => {
      updatedSections[sectionId] = {
        ...updatedSections[sectionId],
        order: index
      };
    });
    
    onConfigUpdate({
      ...config,
      props: {
        ...config.props,
        sections: updatedSections
      }
    });
  };
  
  const handleAddCustomSection = () => {
    if (config.props.sections.custom) return;

    const maxOrder = Object.values(config.props.sections)
      .reduce((max, section) => Math.max(max, section.order || 0), 0);

    const updatedSections = { 
      ...config.props.sections,
      custom: {
        id: 'custom',
        title: 'Seções Personalizadas',
        type: 'custom',
        enabled: true,
        order: maxOrder + 1
      }
    };

    // Inicializar customSections vazio se não existir
    const currentData = config.props.data || {};
    const updatedData = {
      ...currentData,
      customSections: Array.isArray((currentData as any).customSections) ? (currentData as any).customSections : []
    };
    
    onConfigUpdate({
      ...config,
      props: {
        ...config.props,
        sections: updatedSections,
        data: updatedData as any
      }
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    
    try {
      await onSave(config);
      
      setTimeout(() => {
        setIsSaving(false);
        setSaveSuccess(true);
        setLastSaved(new Date());
        setHasUnsavedChanges(false);

        setTimeout(() => {
          setSaveSuccess(false);
        }, 3000);
      }, 800);
    } catch (error) {
      console.error('Erro ao salvar:', error);
      setIsSaving(false);
    }
  };

  const handleTabChange = (tab: EditorTabType) => {
    // Confirma a mudança se houver alterações não salvas
    if (hasUnsavedChanges) {
      const confirmChange = window.confirm(
        'Existem alterações não salvas. Deseja mudar de aba sem salvar?'
      );
      
      if (!confirmChange) {
        return;
      }
    }
    
    setActiveTab(tab);
  };

  // Formata a data da última alteração
  const formatLastSaved = () => {
    if (!lastSaved) return '';
    
    const now = new Date();
    const diff = now.getTime() - lastSaved.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Salvo agora';
    if (minutes === 1) return 'Salvo há 1 minuto';
    if (minutes < 60) return `Salvo há ${minutes} minutos`;
    
    const hours = Math.floor(minutes / 60);
    if (hours === 1) return 'Salvo há 1 hora';
    if (hours < 24) return `Salvo há ${hours} horas`;
    
    const days = Math.floor(hours / 24);
    if (days === 1) return 'Salvo ontem';
    return `Salvo há ${days} dias`;
  };

  return (
    <div className="h-full flex flex-col relative">
      <div className="px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-medium text-white">Editor</h2>
          <div className="text-xs text-white/60 bg-purple-600/20 px-3 py-1 rounded-full border border-purple-500/20">
            {config.name}
          </div>
        </div>
        
        {lastSaved && (
          <div className="text-xs text-white/50 flex items-center">
            {hasUnsavedChanges && (
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse mr-2"></span>
            )}
            {formatLastSaved()}
          </div>
        )}
      </div>
      
      <EditorTabs activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pt-6 pb-24">
        <div className={`transition-opacity duration-300 ${isSaving ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
          {activeTab === 'content' && (
            <ContentEditor 
              data={config.props.data as PortfolioData}
              onUpdate={handleContentUpdate}
              templateType={'modern' as TemplateType}
            />
          )}
          
          {activeTab === 'style' && (
            <ColorEditor 
              colors={config.props.colors} 
              onColorChange={handleColorChange} 
            />
          )}
          
          {activeTab === 'typography' && (
            <TypographyEditor
              typography={config.props.typography}
              onUpdate={handleTypographyUpdate}
            />
          )}
          
          {activeTab === 'layout' && (
            <LayoutEditor
              layout={config.props.layout}
              sections={config.props.sections}
              onUpdate={handleLayoutUpdate}
              onReorderSections={handleSectionReorder}
            />
          )}

          {activeTab === 'profile' && (
            <ProfileEditor
              data={config.props.data as PortfolioData}
              onUpdate={handleContentUpdate}
            />
          )}

          {activeTab === 'social' && (
            <SocialEditor
              data={config.props.data as PortfolioData}
              onUpdate={handleContentUpdate}
            />
          )}

          <SectionsEditor 
            sections={config.props.sections}
            onSectionToggle={handleSectionToggle}
            onReorderSections={handleReorderSections}
            onAddCustomSection={handleAddCustomSection}
          />
        </div>
      </div>
  
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-black/90 backdrop-blur-md border-t border-white/10">
        <div className="flex items-center gap-4">
          <Button
            onClick={handleSave}
            variant="white"
            className={`flex-1 py-2.5 relative overflow-hidden group ${
              hasUnsavedChanges ? 'animate-pulse-subtle' : ''
            }`}
            disabled={isSaving}
          >
            <span className={`transition-all duration-300 ${isSaving ? 'opacity-0' : 'opacity-100'}`}>
              {hasUnsavedChanges ? 'Salvar Alterações' : 'Salvar Template'}
            </span>
            
            {isSaving && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
            )}
            
            {saveSuccess && (
              <span className="absolute inset-0 flex items-center justify-center bg-green-500 text-white text-sm font-medium">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Salvo com sucesso!
              </span>
            )}
            
            <div className="absolute bottom-0 left-0 h-1 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </Button>
          
          {hasUnsavedChanges && (
            <div className="text-xs text-white/60 hidden md:block">
              * Você tem alterações não salvas
            </div>
          )}
        </div>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.3);
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
      `}</style>
    </div>
  );
} 