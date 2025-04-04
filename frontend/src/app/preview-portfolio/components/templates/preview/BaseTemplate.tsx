'use client';

import React, { ReactNode } from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { CustomSections } from '../common/CustomSections';

export interface BaseTemplateProps {
  config: TemplateConfig;
  renderers: TemplateRenderers;
}

export interface SectionRenderer {
  (config: TemplateConfig, key: string): ReactNode;
}

export interface TemplateRenderers {
  // Seções principais - obrigatórias
  headerSection: SectionRenderer;
  aboutSection: SectionRenderer;
  experienceSection: SectionRenderer;
  projectsSection: SectionRenderer;
  skillsSection: SectionRenderer;
  educationSection: SectionRenderer;
  contactSection: SectionRenderer;
  
  // Elementos opcionais - cada template pode implementar ou não
  background?: (config: TemplateConfig) => ReactNode;
  navigation?: (config: TemplateConfig) => ReactNode;
  footer?: (config: TemplateConfig) => ReactNode;
  
  // Estilo global do container - opcional, caso o template precise customizar o container principal
  containerClassName?: string;
}

/**
 * BaseTemplate é o componente fundamental para todos os templates
 * Ele gerencia a estrutura comum e a ordem das seções, enquanto
 * delega a renderização específica de cada seção para o template concreto
 */
export function BaseTemplate({ config, renderers }: BaseTemplateProps) {
  if (!config || !config.props) {
    console.error('BaseTemplate: Config ou props estão faltando');
    return null;
  }

  const { layout, sections, colors } = config.props;
  console.log('BaseTemplate renderizando com config:', config.id);
  
  if (!sections) {
    console.error('BaseTemplate: Seções não estão definidas na configuração');
    return null;
  }

  const sectionMap: Record<string, keyof TemplateRenderers> = {
    'header': 'headerSection',
    'about': 'aboutSection',
    'experience': 'experienceSection',
    'projects': 'projectsSection',
    'skills': 'skillsSection',
    'education': 'educationSection',
    'contact': 'contactSection'
  };

  const renderSection = (sectionId: string) => {
    const section = sections[sectionId];
    if (!section || section.enabled === false) {
      console.log(`Seção ${sectionId} desabilitada ou não encontrada`);
      return null;
    }

    const rendererId = sectionMap[sectionId];
    if (!rendererId || !renderers[rendererId]) {
      console.log(`Renderizador não encontrado para a seção ${sectionId}`);
      return null;
    }

    const renderer = renderers[rendererId] as SectionRenderer;
    return renderer(config, sectionId);
  };

  const orderedSections = Object.keys(sections)
    .sort((a, b) => {
      const orderA = sections[a]?.order || 0;
      const orderB = sections[b]?.order || 0;
      return orderA - orderB;
    });

  console.log('Seções ordenadas:', orderedSections);

  const containerClasses = renderers.containerClassName || 
    `container mx-auto ${layout?.maxWidth || ''} ${layout?.padding || ''}`;

  return (
    <div className="portfolio-template min-h-screen relative">
      {renderers.background && renderers.background(config)}
      
      {renderers.navigation && renderers.navigation(config)}

      <div 
        className={containerClasses}
        style={{ color: colors?.text || '#000000' }}
      >
        <div className={layout?.spacing || 'space-y-8'}>
          {orderedSections.map(sectionId => renderSection(sectionId))}
        </div>
      </div>

      {renderers.footer && renderers.footer(config)}
    </div>
  );
} 