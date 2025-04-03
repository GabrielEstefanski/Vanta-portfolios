interface FormTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function FormTabs({ activeTab, onTabChange }: FormTabsProps) {
  return (
    <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
      {['basic', 'experience', 'projects', 'certificates'].map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer relative group ${
            activeTab === tab
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="relative z-10">{tab === 'basic' && 'Informações Básicas'}
            {tab === 'experience' && 'Experiências'}
            {tab === 'projects' && 'Projetos'}
            {tab === 'certificates' && 'Certificados'}</span>
          <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
            activeTab === tab
              ? 'bg-white/10 shadow-lg shadow-white/5'
              : 'bg-transparent group-hover:bg-white/5'
          }`} />
        </button>
      ))}
    </div>
  );
} 