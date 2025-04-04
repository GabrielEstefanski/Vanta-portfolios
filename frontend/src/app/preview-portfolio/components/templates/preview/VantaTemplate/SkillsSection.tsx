import { TemplateConfig } from "@/app/types/TemplateConfig";

export const SkillsSection = ({ config }: { config: TemplateConfig }) => {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-28">
        <h2 
          className={`text-2xl md:text-3xl tracking-tight mb-8 uppercase ${typography.headingFont}`} 
          style={{ 
            color: colors.primary,
            fontWeight: 'lighter',
            letterSpacing: '0.1em'
          }}
        >
          Habilidades
        </h2>
        
        <div 
          className="h-[1px] w-16 mb-14 relative overflow-hidden" 
        >
          <div className="absolute inset-0" style={{ backgroundColor: colors.accent }}></div>
          <div 
            className="absolute inset-0 opacity-50"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
              animation: 'shimmer 3s infinite' 
            }}
          ></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-16">
          {(data?.skills || ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS']).map((skill, index) => (
            <div 
              key={typeof skill === 'string' ? skill : index} 
              className="group"
            >
              {typeof skill !== 'string' && (
                <div className="flex justify-between mb-3">
                  <span 
                    className="text-sm uppercase tracking-widest font-light"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {skill.name}
                  </span>
                  <span 
                    className="text-sm font-light"
                    style={{ color: colors.accent }}
                  >
                    {skill.level}%
                  </span>
                </div>
              )}
              
              <div 
                className="h-[1px] mb-6 w-full overflow-hidden relative"
                style={{ backgroundColor: colors.secondary + '15' }}
              >
                {typeof skill !== 'string' && (
                  <div 
                    className="h-full absolute top-0 left-0 transition-all duration-1000 group-hover:opacity-80" 
                    style={{ 
                      backgroundColor: colors.accent,
                      width: `${typeof skill !== 'string' ? skill.level : 75}%`
                    }}
                  >
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        background: `linear-gradient(90deg, transparent, ${colors.primary}80, transparent)`,
                        animation: 'shimmer 2s infinite',
                        opacity: 0.3 
                      }}
                    ></div>
                  </div>
                )}
              </div>
              
              {typeof skill === 'string' && (
                <div className="flex justify-between mb-3">
                  <span 
                    className="text-sm uppercase tracking-widest font-light"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {skill}
                  </span>
                </div>
              )}
              
              {typeof skill !== 'string' && skill.category && (
                <p 
                  className="text-xs opacity-60 uppercase tracking-wider font-light"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {skill.category}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  };