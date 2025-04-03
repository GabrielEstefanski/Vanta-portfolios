"use client";

import { useState, useEffect, useCallback } from "react";
import { TemplateConfig, PortfolioData } from "@/app/types/TemplateConfig";
import PreviewLayout from "./layout";
import { minimalistConfig } from "@/app/config/templates/minimalist";
import { TemplatePreview } from "./components/TemplatePreview";
import { defaultConfigs, getTemplateById } from "@/app/config/templates";
import { TemplateEditor } from "./components/templates/components/Editor/TemplateEditor";
import { Button } from "@/app/components/ui/Button";

export default function PreviewPortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [showEditor, setShowEditor] = useState(true);
  const [config, setConfig] = useState<TemplateConfig>(minimalistConfig);

  useEffect(() => {
    setMounted(true);
    
    try {
      const savedTemplate = localStorage.getItem('saved-template');
      if (savedTemplate) {
        const parsedTemplate = JSON.parse(savedTemplate) as TemplateConfig;
        console.log('Template carregado do localStorage:', parsedTemplate.name);
        setConfig(parsedTemplate);
      }
    } catch (error) {
      console.error('Erro ao carregar template do localStorage:', error);
    }
  }, []);

  const handleSave = useCallback((newConfig: TemplateConfig) => {
    setConfig(newConfig);
    
    try {
      localStorage.setItem('saved-template', JSON.stringify(newConfig));
      console.log('Template salvo com sucesso!');
      alert('Template salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar template:', error);
    }
  }, []);

  const handleTemplateSelect = useCallback((templateId: string) => {
    console.log('Selecionando template:', templateId);
    const selectedTemplate = getTemplateById(templateId);
    
    const currentData = config.props.data;
    
    setConfig({
      ...selectedTemplate,
      props: {
        ...selectedTemplate.props,
        data: currentData || selectedTemplate.props.data
      }
    });
  }, [config.props.data]);

  return (
    <PreviewLayout
      onTemplateSelect={handleTemplateSelect}
      selectedTemplate={config}
    >
      <div className={`flex h-full transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex-1 relative bg-gradient-to-br from-gray-900 to-black overflow-auto">
          <div className="absolute inset-0 w-full h-full">
            {mounted && <TemplatePreview config={config} />}
          </div>
        </div>

        <div 
          className={`w-[400px] bg-black/60 backdrop-blur-xl border-l border-white/10 transition-all duration-300 ease-in-out ${
            showEditor ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {mounted && (
            <TemplateEditor 
              config={config}
              onTemplateSelect={handleTemplateSelect}
              onConfigUpdate={setConfig}
              onSave={handleSave}
            />
          )}
        </div>
        
        <div
          className="absolute right-0 top-20 z-10"
          style={{
            transform: showEditor ? 'translateX(-400px)' : 'translateX(0)',
            transition: 'transform 0.3s ease-in-out'
          }}
        >
          <Button
            onClick={() => setShowEditor(!showEditor)}
            variant="black"
            className="p-2 rounded-l-md"
          >
            {showEditor ? 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
             : 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            }
          </Button>
        </div>
      </div>
    </PreviewLayout>
  );
}
