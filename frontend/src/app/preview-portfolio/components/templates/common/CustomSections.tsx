import React, { ReactNode, CSSProperties } from 'react';
import { CustomSection, CustomElement } from '../types';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface CustomSectionsProps {
  sections?: CustomSection[];
  className?: string;
  config: TemplateConfig;
}

interface Link {
  label: string;
  url: string;
}

export function CustomSections({ 
  sections = [], 
  className = '',
  config
}: CustomSectionsProps) {
  if (!sections || sections.length === 0) return null;
  
  const { colors, typography, layout } = config.props;
  
  return (
    <div className={className}>
      {sections.map((section) => (
        <div key={section.id} className={`mb-12 ${layout.spacing}`}>
          {renderSectionHeader(section.title, colors, typography)}
          
          <div 
            className={`
              ${section.layout === 'grid' ? 'grid' : section.layout === 'flex' ? 'flex flex-wrap' : ''}
              ${section.layout === 'grid' ? `grid-cols-1 sm:grid-cols-${section.columns || 1}` : ''}
              gap-${section.gap?.replace('.', '-').replace('rem', '') || '4'}
            `}
          >
            {section.elements.map((element) => (
              <div key={element.id} className={`${element.styles?.className || ''}`}>
                {renderElement(element, colors, typography, config.id)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderSectionHeader(title: string, colors: any, typography: any): ReactNode {
  // Estilo de cabeçalho baseado no template
  return (
    <div className="mb-8">
      <h2 
        className={`text-2xl md:text-3xl mb-4 ${typography.headingFont}`}
        style={{ color: colors.primary }}
      >
        {title}
      </h2>
      <div 
        className="h-1 w-20 mb-6"
        style={{ 
          background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
        }}
      />
    </div>
  );
}

function renderElement(
  element: CustomElement, 
  colors: any, 
  typography: any,
  templateType: string
): ReactNode {
  const cardBaseStyle: CSSProperties = {
    backgroundColor: templateType === 'vanta' || templateType === 'cosmos' || templateType === 'hyperion' ? 
      `${colors.background}20` : colors.background === '#ffffff' ? '#f8fafc' : `${colors.background}10`,
    borderColor: `${colors.primary}20`,
    color: colors.text
  };
  
  const cardBaseClass = "rounded-lg p-6 h-full border transition-all duration-300 hover:shadow-md";
  
  const titleStyle: CSSProperties = {
    color: colors.primary
  };
  
  const subtitleStyle: CSSProperties = {
    color: colors.secondary
  };
  
  const tagStyle: CSSProperties = {
    backgroundColor: `${colors.accent}20`,
    color: colors.accent,
    borderColor: `${colors.accent}30`
  };
  
  switch (element.type) {
    case 'card':
      return (
        <div className={cardBaseClass} style={cardBaseStyle}>
          {element.content.imageUrl && (
            <div className="mb-4">
              <img 
                src={element.content.imageUrl} 
                alt={element.content.title} 
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}
          <h3 
            className={`text-xl font-semibold mb-2 ${typography.headingFont}`} 
            style={titleStyle}
          >
            {element.content.title}
          </h3>
          {element.content.subtitle && (
            <h4 
              className={`text-sm mb-3 ${typography.bodyFont}`} 
              style={subtitleStyle}
            >
              {element.content.subtitle}
            </h4>
          )}
          <p className="text-base" style={{ color: colors.text }}>
            {element.content.content}
          </p>
          
          {element.content.links && element.content.links.length > 0 && (
            <div className="mt-4 pt-3 border-t flex gap-3" style={{ borderColor: `${colors.primary}20` }}>
              {element.content.links.map((link: Link, index: number) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs rounded-full border"
                  style={tagStyle}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      );
      
    case 'text':
      if (element.content.isHeading) {
        const level = element.content.headingLevel || 2;
        const headingStyle: CSSProperties = { color: colors.primary };
        
        if (level === 1) return <h1 className={`font-bold text-3xl mb-6 ${typography.headingFont}`} style={headingStyle}>{element.content.content}</h1>;
        if (level === 2) return <h2 className={`font-bold text-2xl mb-4 ${typography.headingFont}`} style={headingStyle}>{element.content.content}</h2>;
        if (level === 3) return <h3 className={`font-bold text-xl mb-3 ${typography.headingFont}`} style={headingStyle}>{element.content.content}</h3>;
        if (level === 4) return <h4 className={`font-bold text-lg mb-2 ${typography.headingFont}`} style={headingStyle}>{element.content.content}</h4>;
        if (level === 5) return <h5 className={`font-bold text-base mb-2 ${typography.headingFont}`} style={headingStyle}>{element.content.content}</h5>;
        return <h6 className={`font-bold text-sm mb-2 ${typography.headingFont}`} style={headingStyle}>{element.content.content}</h6>;
      }
      
      return <p className={`mb-4 ${typography.bodyFont}`} style={{ color: colors.text }}>{element.content.content}</p>;
      
    case 'image':
      return (
        <div>
          <img 
            src={element.content.url} 
            alt={element.content.alt} 
            className="w-full rounded-lg"
          />
          {element.content.caption && (
            <p className="mt-2 text-sm text-center" style={{ color: `${colors.text}80` }}>
              {element.content.caption}
            </p>
          )}
        </div>
      );
      
    case 'divider':
      return (
        <hr 
          className={`my-6 border-0 border-t ${element.content.thickness || '1px'}`}
          style={{ 
            borderColor: element.content.color || colors.primary + '40',
            borderStyle: element.content.style || 'solid'
          }} 
        />
      );
      
    default:
      return null;
  }
} 