'use client';

import { TemplateProps, PortfolioData } from './types';
import { TemplateConfig } from './config';
import { Professional, Modern, Minimalist } from './index';

interface TemplateRendererProps {
  data: PortfolioData;
  config: TemplateConfig;
}

export default function TemplateRenderer({ data, config }: TemplateRendererProps) {
  // Seleciona o template baseado no ID da configuração
  const TemplateComponent = {
    professional: Professional,
    modern: Modern,
    minimalist: Minimalist
  }[config.id];

  if (!TemplateComponent) {
    throw new Error(`Template ${config.id} não encontrado`);
  }

  // Filtra e ordena as seções habilitadas
  const enabledSections = config.sections
    .filter(section => section.enabled)
    .sort((a, b) => a.order - b.order);

  // Renderiza o template com as seções configuradas
  return (
    <TemplateComponent 
      data={data} 
      colors={config.colors}
      sections={enabledSections}
      layout={config.layout}
      typography={config.typography}
    />
  );
} 