import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function SkillsSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 
              className={`text-2xl font-semibold ${typography.headingFont}`} 
              style={{ color: colors.primary }}
            >
              Habilidades
            </h2>
            <div 
              className="h-1 w-12 mt-4 rounded-full" 
              style={{ backgroundColor: colors.accent }}
            ></div>
          </div>
          <div className="md:w-3/4">
            <div className="grid md:grid-cols-2 gap-6">
              {(data?.skills || ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS']).map((skill, index) => (
                <div 
                  key={typeof skill === 'string' ? skill : index} 
                  className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm"
                >
                  {typeof skill !== 'string' ? (
                    <>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className={`text-lg font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                          {skill.name}
                        </h3>
                        <span 
                          className="px-2 py-1 text-xs rounded-full"
                          style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div 
                        className="h-2 w-full rounded-full overflow-hidden"
                        style={{ backgroundColor: colors.accent + '20' }}
                      >
                        <div 
                          className="h-full rounded-full" 
                          style={{ 
                            backgroundColor: colors.primary, 
                            width: `${skill.level}%` 
                          }}
                        ></div>
                      </div>
                      {skill.category && (
                        <p className="text-sm mt-2 opacity-70">{skill.category}</p>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center justify-between">
                      <h3 className={`text-lg font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                        {skill}
                      </h3>
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: colors.primary }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  
  