import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ProjectsSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 border-b border-gray-100 dark:border-gray-800">
        <h2 
          className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Projetos
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {(data?.projects || []).map((project, index) => (
            <div 
              key={index} 
              className="group border rounded-none overflow-hidden transition-all hover:shadow-lg"
              style={{ borderColor: 'transparent' }}
            >
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                ) : (
                  <span className="text-gray-400">Imagem do Projeto</span>
                )}
              </div>
              <div className="p-6">
                <h3 
                  className={`text-xl font-light mb-3 ${typography.headingFont}`}
                  style={{ color: colors.secondary }}
                >
                  {project.title}
                </h3>
                <p className="mb-4 font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs border rounded-full"
                      style={{ borderColor: colors.accent, color: colors.secondary }}
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
              className="group border rounded-none overflow-hidden transition-all hover:shadow-lg"
              style={{ borderColor: 'transparent' }}
            >
              <div className="h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">Imagem do Projeto</span>
              </div>
              <div className="p-6">
                <h3 
                  className={`text-xl font-light mb-3 ${typography.headingFont}`}
                  style={{ color: colors.secondary }}
                >
                  Portfolio Generator
                </h3>
                <p className="mb-4 font-light">
                  Ferramenta para criação de portfólios personalizados com diferentes templates e opções de customização.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TailwindCSS'].map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs border rounded-full"
                      style={{ borderColor: colors.accent, color: colors.secondary }}
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