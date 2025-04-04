"use client";

import { useState, useEffect, useCallback } from "react";
import { TemplateConfig } from "@/app/types/TemplateConfig";
import PreviewLayout from "./layout";
import { minimalistConfig } from "@/app/config/templates/minimalist";
import { TemplatePreview } from "./components/TemplatePreview";
import { getTemplateById } from "@/app/config/templates";
import { TemplateEditor } from "./components/Editor/Components/sections/TemplateEditor";
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
      <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <div className="relative h-full flex transition-all duration-1000 w-full">

          <div 
            className={`h-screen overflow-auto transition-all duration-300 ${
              showEditor ? 'w-[calc(100%-450px)]' : 'w-full'
            }`}
          >
            {mounted && (
              <div className={`transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                <TemplatePreview config={config} />
              </div>
            )}
          </div>

          <div 
            className={`w-[450px] h-screen bg-black/80 backdrop-blur-xl border-l border-white/10 transition-all duration-300 ease-in-out absolute right-0 ${
              showEditor ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {mounted && (
              <TemplateEditor 
                config={config}
                onConfigUpdate={setConfig}
                onSave={handleSave}
              />
            )}
          </div>

          <button
            onClick={() => setShowEditor(!showEditor)}
            className={`fixed top-24 z-20 transition-all duration-300 p-3 bg-black/60 rounded-l-lg shadow-lg border border-white/10 backdrop-blur-sm ${
              showEditor ? 'right-[450px]' : 'right-0'
            }`}
            aria-label="Toggle editor panel"
          >
            {showEditor ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            )}
          </button>
        </div>
      </main>
    </PreviewLayout>
  );
}
