import { TemplateConfig } from '@/app/types/TemplateConfig';

/**
 * Interface básica para props de seções em templates
 * Todas as seções devem receber pelo menos a configuração completa do template
 */
export interface BaseSectionProps {
  config: TemplateConfig;
  sectionId?: string;
}

/**
 * Interface para seções que possuem um título configurável
 */
export interface TitledSectionProps extends BaseSectionProps {
  title?: string;
  subtitle?: string;
}

/**
 * Interface para seções que podem ser renderizadas com animações
 */
export interface AnimatedSectionProps extends BaseSectionProps {
  animation?: {
    type?: 'fade' | 'slide' | 'zoom';
    delay?: number;
    duration?: number;
  };
} 