'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { BaseTemplate, TemplateRenderers } from '../../common/BaseTemplate';
import { HeaderSection } from './HeaderSection';
import { AboutSection } from './AboutSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { EducationSection } from './EducationSection';
import { ContactSection } from './ContactSection';

interface ModernTemplateProps {
  config: TemplateConfig;
}

export function ModernTemplate({ config }: ModernTemplateProps) {
  if (!config || !config.props) {
    return null;
  }

  const { colors } = config.props;
  
  const renderers: TemplateRenderers = {
    header: (config) => <HeaderSection config={config} key="header" />,
    about: (config) => <AboutSection config={config} key="about" />,
    experience: (config) => <ExperienceSection config={config} key="experience" />,
    projects: (config) => <ProjectsSection config={config} key="projects" />,
    skills: (config) => <SkillsSection config={config} key="skills" />,
    education: (config) => <EducationSection config={config} key="education" />,
    contact: (config) => <ContactSection config={config} key="contact" />,
    
    background: () => (
      <>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" 
          style={{ 
            background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
            zIndex: 0
          }}
        />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" 
          style={{ 
            background: `radial-gradient(circle, ${colors.accent}, transparent 70%)`,
            zIndex: 0
          }}
        />
      </>
    ),
    
    customStyles: {
      background: `linear-gradient(135deg, ${colors.background}, ${colors.primary}30)`
    }
  };

  return <BaseTemplate config={config} renderers={renderers} />;
}

