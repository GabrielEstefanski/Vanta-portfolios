'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { 
  MinimalistTemplate, 
  VantaTemplate, 
  ProfessionalTemplate, 
  ModernTemplate,
  ZenithTemplate,
  CosmosTemplate,
  HyperionTemplate,
  NebulaTemplate
} from './templates';

interface TemplatePreviewProps {
  config: TemplateConfig;
}

export function TemplatePreview({ config }: TemplatePreviewProps) {
  if (!config || !config.props) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Carregando template...</p>
      </div>
    );
  }

  switch (config.id) {
    case 'minimalist':
      return <MinimalistTemplate config={config} />;
    case 'vanta':
      return <VantaTemplate config={config} />;
    case 'professional':
      return <ProfessionalTemplate config={config} />;
    case 'modern':
      return <ModernTemplate config={config} />;
    case 'zenith':
      return <ZenithTemplate config={config} />;
    case 'cosmos':
      return <CosmosTemplate config={config} />;
    case 'hyperion':
      return <HyperionTemplate config={config} />;
    case 'nebula':
      return <NebulaTemplate config={config} />;
    default:
      return <MinimalistTemplate config={config} />;
  }
}