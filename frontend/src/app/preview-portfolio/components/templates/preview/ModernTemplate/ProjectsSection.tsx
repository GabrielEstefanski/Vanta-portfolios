import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ProjectsSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <h2 
          className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Projetos Recentes
        </h2>
        <div 
          className="h-1 w-24 mx-auto rounded-full mb-10" 
          style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
        ></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {(data?.projects || []).map((project, index) => (
            <div 
              key={index} 
              className="group rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: colors.primary + '08' }}
            >
              <div className="h-56 overflow-hidden relative">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Imagem do Projeto</span>
                  </div>
                )}
                
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm"
                  style={{ backgroundColor: colors.primary + '60' }}
                >
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="p-3 rounded-full transition-transform hover:scale-110"
                      style={{ backgroundColor: colors.background, color: colors.primary }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="p-3 rounded-full transition-transform hover:scale-110"
                      style={{ backgroundColor: colors.background, color: colors.primary }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 
                  className={`text-xl font-bold mb-3 ${typography.headingFont}`}
                  style={{ color: colors.secondary }}
                >
                  {project.title}
                </h3>
                <p className="mb-6 text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs rounded-full transition-all hover:scale-105"
                      style={{ backgroundColor: colors.accent + '15', color: colors.accent }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {!data?.projects?.length && (
            <div 
              className="group rounded-2xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{ backgroundColor: colors.primary + '08' }}
            >
              <div className="h-56 overflow-hidden relative">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Imagem do Projeto</span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 
                  className={`text-xl font-bold mb-3 ${typography.headingFont}`}
                  style={{ color: colors.secondary }}
                >
                  Portfolio Generator
                </h3>
                <p className="mb-6 text-base">
                  Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs rounded-full transition-all hover:scale-105"
                      style={{ backgroundColor: colors.accent + '15', color: colors.accent }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };