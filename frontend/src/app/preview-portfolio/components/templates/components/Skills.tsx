import { ColorScheme, Typography } from '@/app/types/TemplateConfig';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
  colors: ColorScheme;
  typography: Typography;
}

export function Skills({ skills, colors, typography }: SkillsProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16 py-24">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className={`text-xl font-light tracking-wide text-white/80 ${typography.headingFont}`}>
                {category}
              </h3>

              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm tracking-wide text-white/60 ${typography.bodyFont}`}>
                        {skill.name}
                      </span>
                      <span className="text-sm tracking-wide text-white/40">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative h-0.5 bg-white/5 overflow-hidden rounded-full">
                      <div 
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-white/40 to-white/20 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 