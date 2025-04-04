'use client';

import React, { useEffect, useRef } from 'react';
import { BaseTemplate, TemplateRenderers } from '../../common/BaseTemplate';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { HeaderSection } from './HeaderSection';
import { AboutSection } from './AboutSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { EducationSection } from './EducationSection';
import { ContactSection } from './ContactSection';

interface VantaTemplateProps {
  config: TemplateConfig;
}

export function VantaTemplate({ config }: VantaTemplateProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const x = e.clientX / window.innerWidth * 15;
        const y = e.clientY / window.innerHeight * 15;
        bgRef.current.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
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
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
          <div 
            ref={bgRef}
            className="w-[120%] h-[120%] -ml-[10%] -mt-[10%] bg-grid-pattern transition-transform duration-700 ease-out"
          ></div>
        </div>
        
        <div 
          className="absolute top-0 left-0 right-0 h-64 opacity-20 pointer-events-none"
          style={{ 
            background: `linear-gradient(to bottom, ${colors.primary}40, transparent)` 
          }}
        ></div>
        
        <div 
          className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.04] blur-3xl pointer-events-none"
          style={{ 
            background: `radial-gradient(circle, ${colors.accent}, transparent 70%)` 
          }}
        ></div>
      </>
    ),
    
    customStyles: {
      backgroundColor: colors.background,
      backgroundImage: `radial-gradient(circle at 10% 20%, ${colors.primary}08, transparent 35%)`,
      overflow: 'hidden'
    }
  };

  return (
    <>
      <BaseTemplate config={config} renderers={renderers} />
      
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, ${colors.primary}10 1px, transparent 1px),
            linear-gradient(to bottom, ${colors.primary}10 1px, transparent 1px);
          background-size: 60px 60px;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .luxury-border {
          position: relative;
          overflow: hidden;
        }
        
        .luxury-border:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border: 1px solid ${colors.primary}30;
          pointer-events: none;
        }
        
        .luxury-border:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${colors.primary}, transparent);
          animation: shimmer 3s infinite;
        }
      `}</style>
    </>
  );
}

