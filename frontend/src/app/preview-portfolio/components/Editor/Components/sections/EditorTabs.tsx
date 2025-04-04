import React from 'react';

export type EditorTabType = 'content' | 'style' | 'typography' | 'layout' | 'profile' | 'social';

interface EditorTabsProps {
  activeTab: EditorTabType;
  onTabChange: (tab: EditorTabType) => void;
}

interface TabGroup {
  title: string;
  tabs: {
    id: EditorTabType;
    label: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

export function EditorTabs({ activeTab, onTabChange }: EditorTabsProps) {
  const tabGroups: TabGroup[] = [
    {
      title: "Conteúdo",
      tabs: [
        {
          id: 'content',
          label: 'Conteúdo',
          description: 'Gerencie todo o conteúdo do seu portfólio',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          id: 'profile',
          label: 'Perfil',
          description: 'Edite suas informações de perfil',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )
        },
        {
          id: 'social',
          label: 'Social',
          description: 'Configure suas redes sociais',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9-9v18" />
            </svg>
          )
        },
      ]
    },
    {
      title: "Aparência",
      tabs: [
        { 
          id: 'style', 
          label: 'Cores',
          description: 'Personalize as cores do seu portfólio',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          )
        },
        { 
          id: 'typography', 
          label: 'Fontes',
          description: 'Escolha as fontes para seu portfólio',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 7 4 4 20 4 20 7"></polyline>
              <line x1="9" y1="20" x2="15" y2="20"></line>
              <line x1="12" y1="4" x2="12" y2="20"></line>
            </svg>
          )
        },
        { 
          id: 'layout', 
          label: 'Layout',
          description: 'Configure o layout e a estrutura do portfólio',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          )
        }
      ]
    }
  ];

  const activeGroup = tabGroups.find(group => 
    group.tabs.some(tab => tab.id === activeTab)
  )?.title || tabGroups[0].title;

  return (
    <div className="border-b border-white/10 bg-black/40">
      <div className="flex items-stretch border-b border-white/10">
        {tabGroups.map((group) => (
          <button
            key={group.title}
            className={`px-4 py-2 text-sm font-medium flex items-center
              ${activeGroup === group.title 
                ? 'text-white border-b-2 border-purple-500 -mb-px' 
                : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            onClick={() => {
              if (activeGroup !== group.title) {
                onTabChange(group.tabs[0].id);
              }
            }}
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap overflow-x-auto scrollbar-thin px-2 py-1">
        {tabGroups.find(group => group.title === activeGroup)?.tabs.map((tab) => (
          <div key={tab.id} className="relative group">
            <button
              onClick={() => onTabChange(tab.id)}
              className={`px-3 py-2 my-1 mx-1 text-sm font-medium rounded-lg flex items-center gap-2 whitespace-nowrap
                ${activeTab === tab.id
                  ? 'bg-purple-600/20 text-white border border-purple-500/50'
                  : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              aria-label={tab.description}
            >
              <span className={`${activeTab === tab.id ? 'text-purple-400' : 'text-white/60'}`}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
            
            <div className="absolute z-50 w-48 px-3 py-2 text-sm bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none transform -translate-y-1 group-hover:translate-y-0 left-0 bottom-full mb-2 text-white/80">
              {tab.description}
              <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -bottom-1 left-5"></div>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
} 