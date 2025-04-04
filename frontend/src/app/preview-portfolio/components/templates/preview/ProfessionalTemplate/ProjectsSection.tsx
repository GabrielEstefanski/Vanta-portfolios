import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ProjectsSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 
              className={`text-2xl font-semibold ${typography.headingFont}`} 
              style={{ color: colors.primary }}
            >
              Projetos
            </h2>
            <div 
              className="h-1 w-12 mt-4 rounded-full" 
              style={{ backgroundColor: colors.accent }}
            ></div>
            <p className="mt-6 text-sm leading-relaxed">
              Uma seleção dos projetos mais recentes e relevantes que demonstram minhas habilidades e competências.
            </p>
          </div>
          <div className="md:w-3/4">
            <div className="grid md:grid-cols-2 gap-6">
              {(data?.projects || []).map((project, index) => (
                <div 
                  key={index} 
                  className="group overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: colors.background + '30' }}
                >
                  <div className="h-48 overflow-hidden relative">
                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Imagem do Projeto</span>
                      </div>
                    )}
                    
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      style={{ backgroundColor: colors.primary + '80' }}
                    >
                      <div className="flex space-x-4">
                        <button className="p-2 rounded-full bg-white text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button className="p-2 rounded-full bg-white text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 
                      className={`text-lg font-medium mb-2 ${typography.headingFont}`}
                      style={{ color: colors.secondary }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 text-xs rounded-md"
                          style={{ backgroundColor: colors.accent + '20', color: colors.accent }}
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
                  className="group overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: colors.background + '30' }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Imagem do Projeto</span>
                    </div>
                    
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      style={{ backgroundColor: colors.primary + '80' }}
                    >
                      <div className="flex space-x-4">
                        <button className="p-2 rounded-full bg-white text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button className="p-2 rounded-full bg-white text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 
                      className={`text-lg font-medium mb-2 ${typography.headingFont}`}
                      style={{ color: colors.secondary }}
                    >
                      Portfolio Generator
                    </h3>
                    <p className="text-sm mb-4">
                      Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs rounded-md"
                          style={{ backgroundColor: colors.accent + '20', color: colors.accent }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  