'use client';

import React, { ReactNode } from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { CustomSections } from './CustomSections';
import { CustomSection } from '../types';

export interface SectionRenderer {
  (config: TemplateConfig, key: string): ReactNode;
}

export interface TemplateRenderers {
  header: SectionRenderer;
  about: SectionRenderer;
  experience: SectionRenderer;
  projects: SectionRenderer;
  skills: SectionRenderer;
  education: SectionRenderer;
  contact: SectionRenderer;
  
  background?: (config: TemplateConfig) => ReactNode;
  navigation?: (config: TemplateConfig) => ReactNode;
  footer?: (config: TemplateConfig) => ReactNode;
  
  containerClassNames?: string;
  customStyles?: React.CSSProperties;
}

export interface BaseTemplateProps {
  config: TemplateConfig;
  renderers: TemplateRenderers;
}

/**
 * BaseTemplate fornece a estrutura básica compartilhada por todos os templates
 * Cada template específico implementa apenas os renderizadores necessários
 */
export function BaseTemplate({ config, renderers }: BaseTemplateProps) {
  if (!config || !config.props) {
    return null;
  }

  const { colors, typography, layout, sections, data } = config.props;

  const renderSection = (sectionId: string) => {
    const section = sections[sectionId];
    if (!section || !section.enabled) return null;

    if (sectionId === 'custom' && data?.customSections && Array.isArray(data.customSections) && data.customSections.length > 0) {
      return (
        <div key={sectionId} className="custom-sections-container">
          <CustomSections 
            sections={data.customSections as CustomSection[]} 
            className=""
            config={config}
          />
        </div>
      );
    }

    const renderFn = renderers[sectionId as keyof typeof renderers] as SectionRenderer | undefined;
    if (renderFn && typeof renderFn === 'function') {
      return renderFn(config, sectionId);
    }
    
    return null;
  };

  const orderedSections = Object.keys(sections || {})
    .sort((a, b) => {
      const orderA = sections[a]?.order || 0;
      const orderB = sections[b]?.order || 0;
      return orderA - orderB;
    });

  const containerClasses = renderers.containerClassNames || 
    `container mx-auto ${layout?.maxWidth || ''} ${layout?.padding || ''}`;

  return (
    <div 
      className="portfolio-template min-h-screen transition-all duration-500"
      style={{ 
        backgroundColor: colors.background,
        ...renderers.customStyles 
      }}
    >
      {renderers.background && renderers.background(config)}
      
      {renderers.navigation && renderers.navigation(config)}

      <div 
        className={containerClasses}
        style={{ color: colors.text }}
      >
        <div className={layout.spacing}>
          {orderedSections.map(sectionId => renderSection(sectionId))}
        </div>
      </div>

      {renderers.footer && renderers.footer(config)}
    </div>
  );
} 