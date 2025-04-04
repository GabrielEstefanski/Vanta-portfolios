import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function SkillsSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 border-b border-gray-100 dark:border-gray-800">
        <h2 
          className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {(data?.skills || ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS']).map((skill, index) => (
            <div 
              key={typeof skill === 'string' ? skill : index} 
              className="p-4 text-center transition-all hover:transform hover:translate-y-[-5px]"
            >
              {typeof skill !== 'string' && (
                <div 
                  className="mb-2 h-1 rounded-full overflow-hidden"
                  style={{ backgroundColor: colors.secondary + '20' }}
                >
                  <div 
                    className="h-full rounded-full" 
                    style={{ 
                      backgroundColor: colors.secondary,
                      width: `${skill.level}%`
                    }}
                  ></div>
                </div>
              )}
              <h3 className={`${typography.headingFont} font-light text-lg`}>
                {typeof skill === 'string' ? skill : skill.name}
              </h3>
              {typeof skill !== 'string' && skill.category && (
                <p className="text-sm opacity-70 mt-1 font-light">{skill.category}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  };