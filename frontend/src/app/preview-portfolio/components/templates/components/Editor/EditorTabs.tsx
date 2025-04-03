import React from 'react';
import { Button } from '@/app/components/ui/Button';

export type EditorTabType = 'template' | 'style' | 'sections' | 'content' | 'typography' | 'layout';

interface EditorTabsProps {
  activeTab: EditorTabType;
  onTabChange: (tab: EditorTabType) => void;
}

export function EditorTabs({ activeTab, onTabChange }: EditorTabsProps) {
  const tabs = [
    { id: 'template', label: 'Templates' },
    { id: 'content', label: 'Conteúdo' },
    { id: 'style', label: 'Cores' },
    { id: 'typography', label: 'Fontes' },
    { id: 'layout', label: 'Layout' },
    { id: 'sections', label: 'Seções' }
  ] as const;

  return (
    <div className="flex flex-wrap border-b border-white/10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-3 py-3 text-sm font-light tracking-wider transition-colors ${
            activeTab === tab.id
              ? 'text-white border-b-2 border-white'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
} 