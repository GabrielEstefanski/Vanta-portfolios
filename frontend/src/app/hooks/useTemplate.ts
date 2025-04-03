import { useState, useCallback } from 'react';
import { TemplateConfig, TemplateProps } from '@/app/types/TemplateConfig';

interface HistoryEntry {
  id: string;
  timestamp: Date;
  config: TemplateConfig;
  description: string;
}

export function useTemplate(initialConfig: TemplateConfig) {
  const [config, setConfig] = useState<TemplateConfig>(initialConfig);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const addToHistory = useCallback((description: string) => {
    const entry: HistoryEntry = {
      id: Date.now().toString(),
      timestamp: new Date(),
      config: { ...config },
      description
    };
    setHistory(prev => [entry, ...prev]);
  }, [config]);

  const updateData = useCallback((data: any) => {
    setConfig(prev => {
      const newConfig = { ...prev, data };
      addToHistory('Dados atualizados');
      return newConfig;
    });
  }, [addToHistory]);

  const updateColors = useCallback((colors: any) => {
    setConfig(prev => {
      const newConfig = {
        ...prev,
        props: {
          ...prev.props,
          colors: { ...prev.props.colors, ...colors }
        }
      };
      addToHistory('Cores atualizadas');
      return newConfig;
    });
  }, [addToHistory]);

  const updateSection = useCallback((sectionId: keyof typeof config.props.sections, updates: any) => {
    setConfig(prev => {
      const newConfig = {
        ...prev,
        props: {
          ...prev.props,
          sections: {
            ...prev.props.sections,
            [sectionId]: {
              ...prev.props.sections[sectionId],
              ...updates
            }
          }
        }
      };
      addToHistory(`Seção ${sectionId} atualizada`);
      return newConfig;
    });
  }, [addToHistory]);

  const updateLayout = useCallback((layout: any) => {
    setConfig(prev => {
      const newConfig = {
        ...prev,
        props: {
          ...prev.props,
          layout: { ...prev.props.layout, ...layout }
        }
      };
      addToHistory('Layout atualizado');
      return newConfig;
    });
  }, [addToHistory]);

  const updateTypography = useCallback((typography: any) => {
    setConfig(prev => {
      const newConfig = {
        ...prev,
        props: {
          ...prev.props,
          typography: { ...prev.props.typography, ...typography }
        }
      };
      addToHistory('Tipografia atualizada');
      return newConfig;
    });
  }, [addToHistory]);

  const toggleSection = useCallback((sectionId: keyof typeof config.props.sections) => {
    setConfig(prev => {
      const newConfig = {
        ...prev,
        props: {
          ...prev.props,
          sections: {
            ...prev.props.sections,
            [sectionId]: {
              ...prev.props.sections[sectionId],
              enabled: !prev.props.sections[sectionId].enabled
            }
          }
        }
      };
      addToHistory(`Seção ${sectionId} ${newConfig.props.sections[sectionId].enabled ? 'ativada' : 'desativada'}`);
      return newConfig;
    });
  }, [addToHistory]);

  const reorderSections = useCallback((newOrder: number[]) => {
    setConfig(prev => {
      const sections = Object.entries(prev.props.sections);
      
      const newSections = newOrder.reduce((acc, _, index) => {
        const [id, section] = sections[index];
        return {
          ...acc,
          [id]: {
            ...section,
            order: index
          }
        };
      }, {});
      
      const newConfig = {
        ...prev,
        props: {
          ...prev.props,
          sections: newSections
        }
      };
      
      addToHistory('Ordem das seções atualizada');
      return newConfig;
    });
  }, [addToHistory]);

  const restoreFromHistory = useCallback((entry: HistoryEntry) => {
    setConfig(entry.config);
    addToHistory(`Configuração restaurada de ${entry.timestamp.toLocaleString()}`);
  }, [addToHistory]);

  return {
    config,
    history,
    updateData,
    updateColors,
    updateSection,
    updateLayout,
    updateTypography,
    toggleSection,
    reorderSections,
    restoreFromHistory
  };
} 