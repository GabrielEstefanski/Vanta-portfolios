import { minimalistConfig } from './minimalist';
import { vantaConfig } from './vanta';
import { professionalConfig } from './professional';
import { modernConfig } from './modern';
import { zenithConfig } from './zenith';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { cosmosConfig } from './cosmos';
import { hyperionConfig } from './hyperion';
import { nebulaConfig } from './nebula';

export const defaultConfigs: Record<string, TemplateConfig> = {
  minimalist: minimalistConfig,
  vanta: vantaConfig,
  professional: professionalConfig,
  modern: modernConfig,
  zenith: zenithConfig,
  cosmos: cosmosConfig,
  hyperion: hyperionConfig,
  nebula: nebulaConfig
};

export function getTemplateById(id: string): TemplateConfig {
  return defaultConfigs[id] || minimalistConfig;
}

export const defaultTemplate = minimalistConfig; 