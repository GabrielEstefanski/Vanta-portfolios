'use client';

import React, { ReactNode } from 'react';
import { BaseSectionProps, TitledSectionProps } from './BaseSectionProps';

/**
 * Componente base para seções que inclui a estrutura comum de cabeçalho,
 * corpo e um wrapper geral com estilos configuráveis
 */
export function BaseSectionComponent<T extends TitledSectionProps>({
  config,
  sectionId,
  title,
  subtitle,
  children,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  showDivider = true,
  renderCustomHeader,
}: T & {
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  showDivider?: boolean;
  renderCustomHeader?: (props: T) => ReactNode;
}) {
  const { colors, typography, layout } = config.props;
  const section = sectionId ? config.props.sections[sectionId] : null;
  
  // Usar título da seção do config se não for fornecido como prop
  const sectionTitle = title || (section?.title || '');
  const sectionSubtitle = subtitle || (section?.subtitle || '');

  return (
    <section className={`section-component ${className}`}>
      {/* Cabeçalho da seção (pode ser personalizado ou usar o padrão) */}
      {renderCustomHeader ? (
        renderCustomHeader({ config, sectionId, title, subtitle } as T)
      ) : (
        sectionTitle && (
          <div className={`section-header mb-8 ${headerClassName}`}>
            <h2 
              className={`text-2xl md:text-3xl mb-2 ${typography.headingFont}`}
              style={{ color: colors.primary }}
            >
              {sectionTitle}
            </h2>
            
            {sectionSubtitle && (
              <p 
                className={`text-lg opacity-80 mb-4 ${typography.bodyFont}`}
                style={{ color: colors.secondary || colors.text }}
              >
                {sectionSubtitle}
              </p>
            )}
            
            {showDivider && (
              <div 
                className="h-1 w-20 mb-6"
                style={{ 
                  background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                }}
              />
            )}
          </div>
        )
      )}
      
      {/* Corpo da seção */}
      <div className={`section-body ${bodyClassName}`}>
        {children}
      </div>
    </section>
  );
}

/**
 * Componente wrapper para grids de conteúdo
 */
export function SectionGrid({
  config,
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = '6',
  className = '',
}: BaseSectionProps & {
  children: ReactNode;
  columns?: { mobile: number; tablet: number; desktop: number };
  gap?: string;
  className?: string;
}) {
  return (
    <div 
      className={`
        grid 
        grid-cols-${columns.mobile} 
        sm:grid-cols-${columns.tablet} 
        lg:grid-cols-${columns.desktop} 
        gap-${gap}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/**
 * Componente wrapper para cards com estilos consistentes
 */
export function SectionCard({
  config,
  children,
  className = '',
  hoverable = true,
}: BaseSectionProps & {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}) {
  const { colors } = config.props;
  
  return (
    <div 
      className={`
        p-5 rounded-lg border 
        ${hoverable ? 'transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1' : ''}
        ${className}
      `}
      style={{ 
        backgroundColor: `${colors.background === '#ffffff' ? '#f8fafc' : colors.background}30`,
        borderColor: `${colors.primary}20` 
      }}
    >
      {children}
    </div>
  );
} 