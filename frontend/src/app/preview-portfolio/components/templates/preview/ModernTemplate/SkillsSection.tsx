import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function SkillsSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <h2 
          className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Habilidades
        </h2>
        <div 
          className="h-1 w-24 mx-auto rounded-full mb-10" 
          style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
        ></div>
        
        <div className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            {(data?.skills || ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS']).map((skill, index) => (
              <div 
                key={typeof skill === 'string' ? skill : index} 
                className="group flex flex-col items-center text-center p-4 rounded-xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: colors.primary + '05' }}
              >
                {typeof skill !== 'string' ? (
                  <>
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`, 
                      }}
                    >
                      <span className="text-white text-xl font-bold">{skill.level}%</span>
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${typography.headingFont}`} style={{ color: colors.secondary }}>
                      {skill.name}
                    </h3>
                    {skill.category && (
                      <p className="text-sm opacity-70">{skill.category}</p>
                    )}
                  </>
                ) : (
                  <>
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.primary}80, ${colors.accent}60)`,
                      }}
                    >
                      <span className="text-white text-2xl font-bold">{skill.charAt(0)}</span>
                    </div>
                    <h3 className={`text-lg font-semibold ${typography.headingFont}`} style={{ color: colors.secondary }}>
                      {skill}
                    </h3>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };