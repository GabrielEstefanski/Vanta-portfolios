import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function SkillsSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    const skillsByCategory = data?.skills ? 
      data.skills.reduce((acc: Record<string, {name: string, level: number}[]>, skill) => {
        if (!acc[skill.category]) {
          acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
      }, {}) : {};
      
    const skillCategories = Object.keys(skillsByCategory).map(category => ({
      name: category,
      skills: skillsByCategory[category].map(skill => skill.name)
    }));
    
    const defaultCategories = [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "TailwindCSS"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express", "Python", "MongoDB"]
      },
      {
        name: "Ferramentas",
        skills: ["Git", "Docker", "AWS", "Figma"]
      }
    ];
    
    return (
      <section className="py-16 relative">
        <div className="absolute w-24 h-24 rounded-full opacity-10 left-20 top-20" 
          style={{ 
            background: `radial-gradient(circle, ${colors.secondary}, transparent 70%)` 
          }}
        />
        
        <h2 
          className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
          style={{ color: colors.secondary }}
        >
          <span className="relative z-10">Habilidades</span>
          <div 
            className="absolute bottom-0 left-0 w-full h-1 rounded"
            style={{ 
              background: `linear-gradient(to right, ${colors.secondary}, ${colors.accent})`,
              boxShadow: `0 0 10px ${colors.secondary}` 
            }}
          />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {(skillCategories.length > 0 ? skillCategories : defaultCategories).map((category, idx) => (
            <div 
              key={idx} 
              className="relative"
            >
              <div 
                className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-20"
                style={{ 
                  border: `1px solid ${colors.border}`,
                  animation: 'orbit 10s linear infinite'
                }}
              />
              
              <h3 
                className={`text-xl mb-6 text-center ${typography.headingFont}`}
                style={{ color: colors.text }}
              >
                {category.name}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {(category.skills || []).map((skill, i) => (
                  <div 
                    key={i} 
                    className="relative px-4 py-2 rounded-lg text-center transition-all transform hover:scale-110"
                    style={{ 
                      backgroundColor: `${colors.surface}60`,
                      backdropFilter: 'blur(5px)',
                      border: `1px solid ${colors.border}`,
                      boxShadow: `0 2px 10px ${colors.primary}20`
                    }}
                  >
                    <div 
                      className="absolute -inset-px rounded-lg opacity-0 hover:opacity-100 transition-opacity"
                      style={{ 
                        background: `linear-gradient(45deg, ${colors.primary}30, ${colors.accent}30)`,
                        boxShadow: `0 0 15px ${colors.primary}` 
                      }}
                    />
                    
                    <span className="relative z-10">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };