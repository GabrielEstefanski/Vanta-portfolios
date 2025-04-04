import { TemplateConfig } from "@/app/types/TemplateConfig";

export const ExperienceSection = ({ config }: { config: TemplateConfig }) => {
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
        Experiência
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
      
      <div className="space-y-24">
        {(data?.experiences || []).map((exp, index) => (
          <div 
            key={index} 
            className="grid md:grid-cols-12 gap-10 relative"
          >
            {index < (data?.experiences || []).length - 1 && (
              <div 
                className="absolute left-[40px] md:left-[50%] top-[90px] md:top-[30px] w-[1px] h-[calc(100%+4rem)] md:transform md:-translate-x-[50%] opacity-20 hidden md:block" 
                style={{ 
                  background: `linear-gradient(to bottom, ${colors.accent}60, transparent)` 
                }}
              ></div>
            )}
            
            <div className="md:col-span-5 md:text-right">
              <h3 
                className={`text-xl tracking-tight mb-3 ${typography.headingFont}`} 
                style={{ 
                  color: colors.secondary,
                  fontWeight: 'lighter' 
                }}
              >
                {exp.position}
              </h3>
              
              <div 
                className="text-sm tracking-wider mb-4 uppercase opacity-90" 
                style={{ 
                  color: colors.secondary,
                  letterSpacing: '0.15em'
                }}
              >
                {exp.company}
              </div>
              
              <div 
                className="text-sm opacity-60 font-light tracking-wider"
                style={{ letterSpacing: '0.05em' }}
              >
                {exp.startDate} — {exp.endDate}
              </div>
            </div>
            
            <div className="md:col-span-7 relative">
              <div 
                className="w-2 h-2 rounded-full absolute left-[-31px] top-3 hidden md:block"
                style={{ backgroundColor: colors.accent }}
              >
                <div 
                  className="absolute w-6 h-6 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"
                  style={{ backgroundColor: colors.accent }}
                ></div>
              </div>
              
              <p className="mb-8 font-light leading-relaxed opacity-90">{exp.description}</p>
              
              <div className="flex flex-wrap gap-6 mt-6">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="py-1 text-xs uppercase tracking-widest font-light"
                    style={{ 
                      color: colors.accent,
                      letterSpacing: '0.1em'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {!data?.experiences?.length && (
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 md:text-right">
              <h3 
                className={`text-xl tracking-tight mb-3 ${typography.headingFont}`} 
                style={{ 
                  color: colors.secondary,
                  fontWeight: 'lighter' 
                }}
              >
                Desenvolvedor Full Stack Sênior
              </h3>
              
              <div 
                className="text-sm tracking-wider mb-4 uppercase opacity-90" 
                style={{ 
                  color: colors.secondary,
                  letterSpacing: '0.15em'
                }}
              >
                Tech Solutions
              </div>
              
              <div 
                className="text-sm opacity-60 font-light tracking-wider"
                style={{ letterSpacing: '0.05em' }}
              >
                2021 — Presente
              </div>
            </div>
            
            <div className="md:col-span-7 relative">
              <div 
                className="w-2 h-2 rounded-full absolute left-[-31px] top-3 hidden md:block"
                style={{ backgroundColor: colors.accent }}
              >
                <div 
                  className="absolute w-6 h-6 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-30"
                  style={{ backgroundColor: colors.accent }}
                ></div>
              </div>
              
              <p className="mb-6 font-light leading-relaxed opacity-90">
                Desenvolvimento de aplicações web usando React, Next.js e Node.js. Implementação de APIs RESTful e integração com diversos serviços.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};