import { TemplateConfig } from "@/app/types/TemplateConfig";

export const ProjectsSection = ({ config }: { config: TemplateConfig }) => {
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
          Projetos
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
        
        <div className="grid md:grid-cols-12 gap-x-10 gap-y-20">
          {(data?.projects || []).map((project, index) => (
            <div 
              key={index} 
              className="md:col-span-6 group relative"
            >
              <div className="relative mb-8 overflow-hidden">
                <div 
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center luxury-border"
                  style={{ backgroundColor: colors.background + 'f0' }}
                >
                  <span 
                    className="text-sm uppercase tracking-widest relative py-2 px-4 overflow-hidden transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    style={{ 
                      color: colors.accent,
                      letterSpacing: '0.2em'
                    }}
                  >
                    <span className="relative z-10">Ver Projeto</span>
                    <span 
                      className="absolute bottom-0 left-0 h-[1px] w-full"
                      style={{ backgroundColor: colors.accent + '50' }}
                    ></span>
                  </span>
                </div>
                
                <div 
                  className="aspect-video bg-gray-900 flex items-center justify-center overflow-hidden"
                >
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  ) : (
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: colors.background }}
                    >
                      <span className="text-gray-700 uppercase tracking-widest font-light">Imagem do Projeto</span>
                    </div>
                  )}
                </div>
              </div>
              
              <h3 
                className={`text-xl tracking-tight mb-3 ${typography.headingFont} transition-all duration-300 group-hover:text-accent`}
                style={{ 
                  color: colors.secondary,
                  fontWeight: 'lighter'
                }}
              >
                {project.title}
              </h3>
              
              <p className="mb-6 font-light leading-relaxed opacity-80 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs uppercase tracking-widest font-light"
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
          ))}
          
          {!data?.projects?.length && (
            <div 
              className="md:col-span-6 group relative"
            >
              <div className="relative mb-8 overflow-hidden">
                <div 
                  className="absolute inset-0 z-10 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center luxury-border"
                  style={{ backgroundColor: colors.background + 'f0' }}
                >
                  <span 
                    className="text-sm uppercase tracking-widest relative py-2 px-4 overflow-hidden transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                    style={{ 
                      color: colors.accent,
                      letterSpacing: '0.2em'
                    }}
                  >
                    <span className="relative z-10">Ver Projeto</span>
                    <span 
                      className="absolute bottom-0 left-0 h-[1px] w-full"
                      style={{ backgroundColor: colors.accent + '50' }}
                    ></span>
                  </span>
                </div>
                
                <div 
                  className="aspect-video bg-gray-900 flex items-center justify-center overflow-hidden"
                >
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: colors.background }}
                  >
                    <span className="text-gray-700 uppercase tracking-widest font-light">Imagem do Projeto</span>
                  </div>
                </div>
              </div>
              
              <h3 
                className={`text-xl tracking-tight mb-3 ${typography.headingFont} transition-all duration-300 group-hover:text-accent`}
                style={{ 
                  color: colors.secondary,
                  fontWeight: 'lighter'
                }}
              >
                Portfolio Generator
              </h3>
              
              <p className="mb-6 font-light leading-relaxed opacity-80">
                Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.
              </p>
              
              <div className="flex flex-wrap gap-6">
                {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                  <span 
                    key={tech} 
                    className="text-xs uppercase tracking-widest font-light"
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
          )}
        </div>
      </section>
    );
  };