'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { BaseTemplate, TemplateRenderers } from '../../common/BaseTemplate';
import { HeaderSection } from './HeaderSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { ExperienceSection } from './ExperienceSection';
import { SkillsSection } from './SkillsSection';
import { EducationSection } from './EducationSection';
import { ContactSection } from './ContactSection';

interface MinimalistTemplateProps {
  config: TemplateConfig;
}

export function MinimalistTemplate({ config }: MinimalistTemplateProps) {
  if (!config || !config.props) {
    return null;
  }

  const renderers: TemplateRenderers = {
    header: (config) => <HeaderSection config={config} key="header" />,
    about: (config) => <AboutSection config={config} key="about" />,
    experience: (config) => <ExperienceSection config={config} key="experience" />,
    projects: (config) => <ProjectsSection config={config} key="projects" />,
    skills: (config) => <SkillsSection config={config} key="skills" />,
    education: (config) => <EducationSection config={config} key="education" />,
    contact: (config) => <ContactSection config={config} key="contact" />,
  };

  return (
    <BaseTemplate
      config={config}
      renderers={renderers}
    />
  );
}
