interface Experience {
    id: number;
    company: string;
    position: string;
    period: string;
    description: string;
  }
  
  interface ExperienceFormProps {
    experiences: Experience[];
    onChange: (experiences: Experience[]) => void;
    onAdd: () => void;
  }
  
  export default function ExperienceForm({ experiences, onChange, onAdd }: ExperienceFormProps) {
    return (
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Empresa</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => {
                    const newExperiences = experiences.map((experience) =>
                      experience.id === exp.id ? { ...experience, company: e.target.value } : experience
                    );
                    onChange(newExperiences);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Cargo</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => {
                    const newExperiences = experiences.map((experience) =>
                      experience.id === exp.id ? { ...experience, position: e.target.value } : experience
                    );
                    onChange(newExperiences);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm text-gray-400 mb-2">Período</label>
              <input
                type="text"
                value={exp.period}
                onChange={(e) => {
                  const newExperiences = experiences.map((experience) =>
                    experience.id === exp.id ? { ...experience, period: e.target.value } : experience
                  );
                  onChange(newExperiences);
                }}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
              />
            </div>
            <div className="mt-6">
              <label className="block text-sm text-gray-400 mb-2">Descrição</label>
              <textarea
                value={exp.description}
                onChange={(e) => {
                  const newExperiences = experiences.map((experience) =>
                    experience.id === exp.id ? { ...experience, description: e.target.value } : experience
                  );
                  onChange(newExperiences);
                }}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300 h-32 resize-none"
              />
            </div>
          </div>
        ))}
        <button
          onClick={onAdd}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
        >
          Adicionar Experiência
        </button>
      </div>
    );
  }