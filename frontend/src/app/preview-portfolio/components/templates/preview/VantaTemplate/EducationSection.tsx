import { TemplateConfig } from "@/app/types/TemplateConfig";

export const EducationSection = ({ config }: { config: TemplateConfig }) => {
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
          Educação
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
        
        <div className="space-y-20">
          {(data?.education || []).map((edu, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-10 relative">
              {index < (data?.education || []).length - 1 && (
                <div 
                  className="absolute left-[40px] md:left-[50%] top-[90px] md:top-[30px] w-[1px] h-[calc(100%+3rem)] md:transform md:-translate-x-[50%] opacity-20 hidden md:block" 
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
                  {edu.degree}
                </h3>
                
                <div 
                  className="text-sm tracking-wider mb-4 uppercase opacity-90" 
                  style={{ 
                    color: colors.secondary,
                    letterSpacing: '0.15em'
                  }}
                >
                  {edu.institution}
                </div>
                
                <div 
                  className="text-sm opacity-60 font-light tracking-wider"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {edu.period}
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
                
                <p className="font-light leading-relaxed opacity-80">{edu.description}</p>
              </div>
            </div>
          ))}
          
          {!data?.education?.length && (
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5 md:text-right">
                <h3 
                  className={`text-xl tracking-tight mb-3 ${typography.headingFont}`} 
                  style={{ 
                    color: colors.secondary,
                    fontWeight: 'lighter'
                  }}
                >
                  Bacharelado em Ciência da Computação
                </h3>
                
                <div 
                  className="text-sm tracking-wider mb-4 uppercase opacity-90" 
                  style={{ 
                    color: colors.secondary,
                    letterSpacing: '0.15em'
                  }}
                >
                  Universidade Federal do Brasil
                </div>
                
                <div 
                  className="text-sm opacity-60 font-light tracking-wider"
                  style={{ letterSpacing: '0.05em' }}
                >
                  2015 — 2019
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
                
                <p className="font-light leading-relaxed opacity-80">
                  Formação completa em computação com foco em engenharia de software, algoritmos avançados e desenvolvimento full stack.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };