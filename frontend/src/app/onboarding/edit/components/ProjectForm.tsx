interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

interface ProjectFormProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
  onAdd: () => void;
}

export default function ProjectForm({ projects, onChange, onAdd }: ProjectFormProps) {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Nome do Projeto</label>
            <input
              type="text"
              value={project.name}
              onChange={(e) => {
                const newProjects = projects.map((p) =>
                  p.id === project.id ? { ...p, name: e.target.value } : p
                );
                onChange(newProjects);
              }}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm text-gray-400 mb-2">Descrição</label>
            <textarea
              value={project.description}
              onChange={(e) => {
                const newProjects = projects.map((p) =>
                  p.id === project.id ? { ...p, description: e.target.value } : p
                );
                onChange(newProjects);
              }}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300 h-32 resize-none"
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm text-gray-400 mb-2">Link do Projeto</label>
            <input
              type="url"
              value={project.link}
              onChange={(e) => {
                const newProjects = projects.map((p) =>
                  p.id === project.id ? { ...p, link: e.target.value } : p
                );
                onChange(newProjects);
              }}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
            />
          </div>
        </div>
      ))}
      <button
        onClick={onAdd}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
      >
        Adicionar Projeto
      </button>
    </div>
  );
} 