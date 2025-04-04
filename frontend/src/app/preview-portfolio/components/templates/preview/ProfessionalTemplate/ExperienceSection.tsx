import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ExperienceSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 
              className={`text-2xl font-semibold ${typography.headingFont}`} 
              style={{ color: colors.primary }}
            >
              Experiência
            </h2>
            <div 
              className="h-1 w-12 mt-4 rounded-full" 
              style={{ backgroundColor: colors.accent }}
            ></div>
          </div>
          <div className="md:w-3/4">
            <div className="relative">
              <div 
                className="absolute top-0 bottom-0 left-0 w-0.5 ml-2.5" 
                style={{ backgroundColor: colors.primary + '30' }}
              ></div>
              
              <div className="space-y-10">
                {(data?.experiences || []).map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    <div 
                      className="absolute left-0 top-1.5 w-5 h-5 rounded-full" 
                      style={{ backgroundColor: colors.primary }}
                    ></div>
                    
                    <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start flex-wrap mb-2">
                        <h3 className={`text-xl font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                          {exp.position}
                        </h3>
                        <span 
                          className="text-sm px-3 py-1 rounded-full"
                          style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                        >
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      
                      <p className="text-sm font-medium mb-4" style={{ color: colors.secondary }}>
                        {exp.company}
                      </p>
                      
                      <p className="mb-4">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
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
                
                {!data?.experiences?.length && (
                  <div className="relative pl-10">
                    <div 
                      className="absolute left-0 top-1.5 w-5 h-5 rounded-full" 
                      style={{ backgroundColor: colors.primary }}
                    ></div>
                    
                    <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start flex-wrap mb-2">
                        <h3 className={`text-xl font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                          Desenvolvedor Full Stack Sênior
                        </h3>
                        <span 
                          className="text-sm px-3 py-1 rounded-full"
                          style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                        >
                          2021 - Presente
                        </span>
                      </div>
                      
                      <p className="text-sm font-medium mb-4" style={{ color: colors.secondary }}>
                        Tech Solutions
                      </p>
                      
                      <p className="mb-4">
                        Desenvolvimento de aplicações web usando React, Next.js e Node.js. Implementação de APIs RESTful e integração com diversos serviços.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };