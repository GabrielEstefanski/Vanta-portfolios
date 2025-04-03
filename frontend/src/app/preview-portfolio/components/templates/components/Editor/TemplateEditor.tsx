import React, { useState } from 'react';
import { TemplateConfig, PortfolioData } from '@/app/types/TemplateConfig';
import { ContentEditor } from './ContentEditor';
import { TypographyEditor } from '../../../TypographyEditor';
import { LayoutEditor } from './LayoutEditor';
import { Button } from '@/app/components/ui/Button';
import { EditorTabs, EditorTabType } from './EditorTabs';
import { TemplateSelector } from '../../../TemplateSelector';
import { ColorEditor } from './ColorEditor';
import { SectionsEditor } from './SectionsEditor';

interface TemplateEditorProps {
  config: TemplateConfig;
  onTemplateSelect: (templateId: string) => void;
  onConfigUpdate: (newConfig: TemplateConfig) => void;
  onSave: (config: TemplateConfig) => void;
}

export function TemplateEditor({ config, onTemplateSelect, onConfigUpdate, onSave }: TemplateEditorProps) {
  const [activeTab, setActiveTab] = useState<EditorTabType>('template');

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

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-light tracking-wider text-white">Editor de Template</h2>
      </div>
      
      <EditorTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'template' && (
          <TemplateSelector 
            currentTemplate={config} 
            onTemplateSelect={onTemplateSelect} 
          />
        )}
        
        {activeTab === 'content' && (
          <div className="space-y-6">
            <ContentEditor
              data={config.props.data as PortfolioData}
              onUpdate={handleContentUpdate}
            />
          </div>
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
            onUpdate={handleLayoutUpdate}
          />
        )}
        
        {activeTab === 'sections' && (
          <SectionsEditor 
            sections={config.props.sections}
            onSectionToggle={toggleSectionVisibility}
          />
        )}
      </div>
      
      <div className="p-4 border-t border-white/10">
        <Button
          onClick={() => onSave(config)}
          variant="white"
          className="w-full py-2"
        >
          Salvar Template
        </Button>
      </div>
    </div>
  );
} 