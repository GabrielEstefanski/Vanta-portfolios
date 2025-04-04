'use client';

import React, { useEffect, useRef } from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { BaseTemplate, TemplateRenderers } from '../../common/BaseTemplate';
import { HeaderSection } from './HeaderSection';
import { AboutSection } from './AboutSection';
import { ExperienceSection } from './ExperienceSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { EducationSection } from './EducationSection';
import { ContactSection } from './ContactSection';

interface CosmosTemplateProps {
  config: TemplateConfig;
}

export function CosmosTemplate({ config }: CosmosTemplateProps) {
  const starsRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);
  const cosmicDustRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (starsRef.current) {
        starsRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
      if (planetsRef.current) {
        planetsRef.current.style.transform = `translateY(${window.scrollY * -0.1}px) rotate(${window.scrollY * 0.01}deg)`;
      }
      if (cosmicDustRef.current) {
        cosmicDustRef.current.style.transform = `translateY(${window.scrollY * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <div 
          ref={starsRef}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                opacity: Math.random() * 0.9 + 0.1,
                backgroundColor: i % 5 === 0 ? colors.accent : colors.text,
                boxShadow: i % 8 === 0 ? `0 0 ${Math.random() * 8 + 5}px ${colors.primary}` : 'none',
                animation: `twinkle ${Math.random() * 8 + 3}s infinite alternate`,
                zIndex: Math.floor(Math.random() * 3)
              }}
            />
          ))}
        </div>
        
        <div 
          ref={cosmicDustRef}
          className="fixed inset-0 pointer-events-none opacity-20"
          style={{ zIndex: 0 }}
        >
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                opacity: Math.random() * 0.2 + 0.05,
                background: `radial-gradient(circle, ${colors.accent}50, transparent 70%)`,
                animation: `float ${Math.random() * 20 + 15}s infinite alternate ease-in-out`
              }}
            />
          ))}
        </div>
        
        <div 
          ref={planetsRef}
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <div 
            className="absolute opacity-20 transform-gpu"
            style={{
              width: '600px',
              height: '600px',
              bottom: '-150px',
              right: '-150px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${colors.secondary}90, ${colors.primary}80, ${colors.background}70)`,
              boxShadow: `0 0 120px ${colors.primary}40`,
              transform: 'rotate(-30deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"
              style={{
                width: '800px',
                height: '200px',
                borderRadius: '50%',
                border: `4px solid ${colors.accent}30`,
                boxShadow: `0 0 60px ${colors.accent}20, inset 0 0 40px ${colors.accent}20`,
                transform: 'rotateX(75deg)',
                transformStyle: 'preserve-3d'
              }}
            />
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60"
              style={{
                width: '700px',
                height: '180px',
                borderRadius: '50%',
                border: `8px solid ${colors.secondary}20`,
                boxShadow: `0 0 40px ${colors.secondary}10, inset 0 0 20px ${colors.secondary}10`,
                transform: 'rotateX(75deg)',
                transformStyle: 'preserve-3d'
              }}
            />
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70"
              style={{
                width: '900px',
                height: '220px',
                borderRadius: '50%',
                border: `2px solid ${colors.primary}40`,
                boxShadow: `0 0 80px ${colors.primary}20, inset 0 0 60px ${colors.primary}20`,
                transform: 'rotateX(75deg)',
                transformStyle: 'preserve-3d'
              }}
            />
          </div>
          
          <div 
            className="absolute opacity-30"
            style={{
              width: '200px',
              height: '200px',
              top: '10%',
              left: '5%',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${colors.accent}80, ${colors.secondary}70)`,
              boxShadow: `0 0 50px ${colors.accent}30`,
              animation: 'float 30s infinite alternate ease-in-out'
            }}
          >
            <div 
              className="absolute w-10 h-10 rounded-full"
              style={{ 
                backgroundColor: colors.text,
                boxShadow: `0 0 20px ${colors.text}60`,
                animation: 'orbit 20s linear infinite'
              }}
            />
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  width: `${Math.random() * 30 + 10}px`,
                  height: `${Math.random() * 30 + 10}px`,
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  backgroundColor: colors.background,
                  transform: 'translateZ(5px)'
                }}
              />
            ))}
          </div>

          <div 
            className="absolute opacity-70"
            style={{
              width: '5px',
              height: '5px',
              top: '20%',
              right: '20%',
              borderRadius: '50%',
              backgroundColor: colors.text,
              boxShadow: `0 0 20px ${colors.text}, 0 0 40px ${colors.text}80`,
              animation: 'cometMove 30s linear infinite'
            }}
          >
            <div 
              className="absolute opacity-40"
              style={{
                width: '120px',
                height: '3px',
                backgroundColor: colors.text,
                filter: 'blur(2px)',
                transform: 'translateX(-120px)',
                background: `linear-gradient(to left, ${colors.text}, transparent)`
              }}
            />
          </div>
        </div>
      </>
    ),
    
    customStyles: {
      backgroundColor: colors.background,
      backgroundImage: `linear-gradient(${colors.background}, ${colors.background}90, ${colors.primary}20)`,
      perspective: '1000px',
    }
  };

  return (
    <>
      <BaseTemplate config={config} renderers={renderers} />
      
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.3; filter: blur(0px); }
          100% { opacity: 1; filter: blur(1px); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-15px) translateX(5px) scale(1.02); }
          50% { transform: translateY(-25px) translateX(15px) scale(1.05); }
          75% { transform: translateY(-15px) translateX(25px) scale(1.02); }
          100% { transform: translateY(0px) translateX(0px) scale(1); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        
        @keyframes cometMove {
          0% { transform: translate(0, 0); opacity: 0; }
          5% { opacity: 0.7; }
          95% { opacity: 0.7; }
          100% { transform: translate(-1500px, 1000px); opacity: 0; }
        }
        
        @keyframes planetRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse3D {
          0% { transform: scale3d(1, 1, 1); }
          50% { transform: scale3d(1.05, 1.05, 1.2); }
          100% { transform: scale3d(1, 1, 1); }
        }
        
        @keyframes meteor {
          0% { transform: translateY(-100px) translateX(-100px) rotate(45deg); opacity: 0; }
          10% { opacity: 0.8; }
          100% { transform: translateY(200px) translateX(200px) rotate(45deg); opacity: 0; }
        }
        
        @keyframes pingSlowly {
          0% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(6px); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0.3; }
        }
      `}</style>
    </>
  );
}

