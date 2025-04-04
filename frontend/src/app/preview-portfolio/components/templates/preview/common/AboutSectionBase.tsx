'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { BaseSectionComponent } from '../../common/BaseSectionComponent';
import { TitledSectionProps } from '../../common/BaseSectionProps';

export interface AboutSectionBaseProps extends TitledSectionProps {
  imageShape?: 'circle' | 'square' | 'rounded';
  showImage?: boolean;
  reversed?: boolean;
  alignment?: 'left' | 'center' | 'right';
  withSocial?: boolean;
  className?: string;
}

export function AboutSectionBase({
  config,
  sectionId = 'about',
  imageShape = 'circle',
  showImage = true,
  reversed = false,
  alignment = 'left',
  withSocial = true,
  className = '',
}: AboutSectionBaseProps) {
  const { colors, typography } = config.props;
  const { data } = config.props;
  
  if (!data) return null;
  
  const { name, title, about, profilePicture, socialLinks } = data;
  
  const imageStyles = {
    borderRadius: 
      imageShape === 'circle' ? '50%' : 
      imageShape === 'rounded' ? '1rem' : 
      '0',
    maxWidth: '100%',
    border: profilePicture?.border ? `4px solid ${profilePicture.borderColor || colors.primary}` : 'none',
    boxShadow: profilePicture?.effects?.shadow ? `0 10px 25px -10px ${colors.primary}50` : 'none',
  };

  const textAlignClass = 
    alignment === 'center' ? 'text-center' : 
    alignment === 'right' ? 'text-right' : 
    'text-left';

  const contentContainerClass = showImage 
    ? `grid grid-cols-1 ${reversed ? 'md:grid-cols-[2fr_1fr]' : 'md:grid-cols-[1fr_2fr]'} gap-8 items-center`
    : '';
  
  // Organizar os elementos conforme o layout
  const imageElement = showImage && profilePicture?.url && (
    <div className={`about-image ${reversed ? 'md:order-2' : 'md:order-1'} mb-6 md:mb-0`}>
      <img 
        src={profilePicture.url}
        alt={name}
        className={`mx-auto max-w-[280px] ${profilePicture?.effects?.animation || ''}`}
        style={imageStyles}
      />
    </div>
  );
  
  const bioElement = (
    <div className={`about-content ${reversed ? 'md:order-1' : 'md:order-2'} ${textAlignClass}`}>
      <h3 
        className={`text-xl mb-2 ${typography.bodyFont}`}
        style={{ color: colors.secondary }}
      >
        {title}
      </h3>
      
      <div 
        className={`mt-4 whitespace-pre-line ${typography.bodyFont}`}
        style={{ color: colors.text }}
      >
        {about}
      </div>
      
      {withSocial && socialLinks && socialLinks.length > 0 && (
        <div className={`mt-6 flex ${alignment === 'center' ? 'justify-center' : alignment === 'right' ? 'justify-end' : 'justify-start'} gap-4`}>
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-10"
              style={{ 
                color: colors.primary,
                backgroundColor: `${colors.primary}10`
              }}
            >
              {link.icon ? (
                <span className={link.icon}></span>
              ) : (
                <span>{link.platform}</span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
  
  return (
    <BaseSectionComponent
      config={config}
      sectionId={sectionId}
      className={`about-section py-12 ${className}`}
    >
      <div className={contentContainerClass}>
        {imageElement}
        {bioElement}
      </div>
    </BaseSectionComponent>
  );
} 