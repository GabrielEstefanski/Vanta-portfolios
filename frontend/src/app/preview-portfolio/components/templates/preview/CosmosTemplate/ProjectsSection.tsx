import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ProjectsSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 relative">
        <div className="absolute w-40 h-40 rounded-full opacity-5 right-0 bottom-0" 
          style={{ 
            background: `radial-gradient(circle, ${colors.accent}, transparent 70%)` 
          }}
        />
        
        <h2 
          className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
          style={{ color: colors.secondary }}
        >
          <span className="relative z-10">Projetos</span>
          <div 
            className="absolute bottom-0 left-0 w-full h-1 rounded"
            style={{ 
              background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
              boxShadow: `0 0 10px ${colors.primary}` 
            }}
          />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(data?.projects || [
            {
              title: "Explorador Estelar",
              description: "Aplicação web que mostra dados em tempo real de missões espaciais usando a API da NASA.",
              technologies: ["React", "TypeScript", "TailwindCSS"]
            },
            {
              title: "Portal Interestelar",
              description: "Plataforma de e-commerce com sistema de pagamentos integrado e painel administrativo.",
              technologies: ["Next.js", "Node.js", "MongoDB"]
            },
            {
              title: "Cosmos Dashboard",
              description: "Dashboard para visualização e análise de dados com gráficos interativos.",
              technologies: ["React", "D3.js", "Material UI"]
            }
          ]).map((project, index) => (
            <div 
              key={index} 
              className="relative rounded-lg p-6 transition-all transform hover:-translate-y-2"
              style={{ 
                backgroundColor: `${colors.surface}90`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${colors.border}`,
                boxShadow: `0 5px 20px ${colors.primary}30`
              }}
            >
              <div 
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full opacity-70"
                style={{ 
                  background: `radial-gradient(circle, ${colors.accent}40, transparent 70%)` 
                }}
              />
              
              <h3 
                className={`text-xl mb-4 ${typography.headingFont}`}
                style={{ color: colors.text }}
              >
                {project.title}
              </h3>
              
              <p className="mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {(project.technologies || []).map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full text-xs"
                    style={{ 
                      backgroundColor: `${colors.primary}30`,
                      color: colors.text,
                      border: `1px solid ${colors.primary}50`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button 
                className="mt-6 px-4 py-2 rounded-full text-sm transition-all hover:pl-6"
                style={{ 
                  background: `linear-gradient(45deg, ${colors.primary}90, ${colors.secondary}90)`,
                  color: colors.text,
                  boxShadow: `0 2px 10px ${colors.primary}30`
                }}
              >
                Ver Projeto →
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  