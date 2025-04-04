import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ExperienceSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 relative">
        <div className="absolute w-32 h-32 rounded-full opacity-10 left-0 top-10" 
          style={{ 
            background: `radial-gradient(circle, ${colors.primary}, transparent 70%)` 
          }}
        />
        
        <h2 
          className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
          style={{ color: colors.secondary }}
        >
          <span className="relative z-10">Experiência</span>
          <div 
            className="absolute bottom-0 left-0 w-full h-1 rounded"
            style={{ 
              background: `linear-gradient(to right, ${colors.accent}, ${colors.primary})`,
              boxShadow: `0 0 10px ${colors.primary}` 
            }}
          />
        </h2>
        
        <div className="space-y-12">
          {(data?.experiences || [
            {
              company: "Empresa Espacial",
              position: "Desenvolvedor Frontend Senior",
              startDate: "2020",
              endDate: "Presente",
              description: "Desenvolvimento de interfaces interativas utilizando React e Next.js para aplicações web de alta performance.",
              technologies: []
            },
            {
              company: "Galáxia Tech",
              position: "Desenvolvedor Fullstack",
              startDate: "2018",
              endDate: "2020",
              description: "Responsável pelo desenvolvimento fullstack de aplicações web usando React, Node.js e MongoDB.",
              technologies: []
            }
          ]).map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px"
              style={{ 
                borderLeft: `2px solid ${colors.border}`,
                boxShadow: `-3px 0 10px ${colors.primary}40`
              }}
            >
              <div 
                className="absolute left-[-7px] top-2 w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: colors.accent,
                  boxShadow: `0 0 10px ${colors.accent}`
                }}
              />
              
              <div className="mb-2 flex justify-between flex-wrap">
                <h3 
                  className={`text-xl ${typography.headingFont}`}
                  style={{ color: colors.text }}
                >
                  {exp.position}
                </h3>
                <span 
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: `${colors.surface}80`,
                    color: colors.secondary,
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              
              <h4 
                className="text-lg mb-3"
                style={{ color: colors.secondary }}
              >
                {exp.company}
              </h4>
              
              <p className="leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };