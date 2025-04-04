import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ExperienceSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <h2 
          className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Experiência Profissional
        </h2>
        <div 
          className="h-1 w-24 mx-auto rounded-full mb-10" 
          style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
        ></div>
        
        <div className="grid gap-8">
          {(data?.experiences || []).map((exp, index) => (
            <div 
              key={index} 
              className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: colors.primary + '08' }}
            >
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <h3 
                  className={`text-xl font-bold ${typography.headingFont} md:flex-1`} 
                  style={{ color: colors.secondary }}
                >
                  {exp.position}
                </h3>
                <div 
                  className="mt-2 md:mt-0 px-4 py-1 rounded-full text-sm inline-block w-max"
                  style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                >
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              
              <div 
                className="text-sm font-medium mb-4 pb-4 border-b border-opacity-10" 
                style={{ borderColor: colors.accent }}
              >
                {exp.company}
              </div>
              
              <p className="mb-6">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs rounded-lg"
                    style={{ backgroundColor: colors.accent + '15', color: colors.accent }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {!data?.experiences?.length && (
            <div 
              className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              style={{ backgroundColor: colors.primary + '08' }}
            >
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <h3 
                  className={`text-xl font-bold ${typography.headingFont} md:flex-1`} 
                  style={{ color: colors.secondary }}
                >
                  Desenvolvedor Full Stack Sênior
                </h3>
                <div 
                  className="mt-2 md:mt-0 px-4 py-1 rounded-full text-sm inline-block w-max"
                  style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                >
                  2021 - Presente
                </div>
              </div>
              
              <div 
                className="text-sm font-medium mb-4 pb-4 border-b border-opacity-10" 
                style={{ borderColor: colors.accent }}
              >
                Tech Solutions
              </div>
              
              <p className="mb-6">
                Desenvolvimento de aplicações web usando React, Next.js e Node.js. Implementação de APIs RESTful e integração com diversos serviços.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TailwindCSS', 'MongoDB'].map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs rounded-lg"
                    style={{ backgroundColor: colors.accent + '15', color: colors.accent }}
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