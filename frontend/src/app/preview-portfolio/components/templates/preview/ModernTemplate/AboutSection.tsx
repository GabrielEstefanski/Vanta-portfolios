'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { AboutSectionBase } from '../common/AboutSectionBase';

interface AboutSectionProps {
  config: TemplateConfig;
}

export function AboutSection({ config }: AboutSectionProps) {
  const { colors } = config.props;
  
  return (
    <div className="about-modern-wrapper py-12 relative">
      <div 
        className="absolute left-0 top-1/3 w-32 h-32 opacity-10 transform -translate-x-1/2"
        style={{ 
          background: `radial-gradient(circle, ${colors.accent}, transparent 70%)`,
          filter: 'blur(20px)',
          zIndex: 0
        }}
      />
      
      <AboutSectionBase 
        config={config}
        sectionId="about"
        imageShape="rounded"
        showImage={true}
        alignment="left"
        className="relative z-10"
      />
    </div>
  );
}