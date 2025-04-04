import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function EducationSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 relative">
        <div className="absolute w-32 h-32 rounded-full opacity-10 right-10 top-10" 
          style={{ 
            background: `radial-gradient(circle, ${colors.primary}, transparent 70%)` 
          }}
        />
        
        <h2 
          className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
          style={{ color: colors.secondary }}
        >
          <span className="relative z-10">Educação</span>
          <div 
            className="absolute bottom-0 left-0 w-full h-1 rounded"
            style={{ 
              background: `linear-gradient(to right, ${colors.accent}, ${colors.primary})`,
              boxShadow: `0 0 10px ${colors.accent}` 
            }}
          />
        </h2>
        
        <div className="space-y-10">
          {(data?.education || [
            {
              institution: "Universidade Estelar",
              degree: "Mestrado em Ciência da Computação",
              period: "2018 - 2020",
              description: "Especialização em Inteligência Artificial e Processamento de Dados"
            },
            {
              institution: "Academia Galáctica",
              degree: "Bacharelado em Engenharia de Software",
              period: "2014 - 2018",
              description: "Foco em desenvolvimento web e mobile com destaque em inovação tecnológica"
            }
          ]).map((edu, index) => (
            <div 
              key={index} 
              className="relative rounded-lg p-6"
              style={{ 
                backgroundColor: `${colors.surface}50`,
                backdropFilter: 'blur(8px)',
                border: `1px solid ${colors.border}`,
                boxShadow: `0 4px 15px ${colors.primary}20`
              }}
            >
              <div 
                className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full"
                style={{ 
                  backgroundColor: colors.accent,
                  boxShadow: `0 0 15px ${colors.accent}` 
                }}
              />
              
              <div className="flex justify-between flex-wrap mb-3">
                <h3 
                  className={`text-xl ${typography.headingFont}`}
                  style={{ color: colors.text }}
                >
                  {edu.degree}
                </h3>
                <span 
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: `${colors.primary}30`,
                    color: colors.text
                  }}
                >
                  {edu.period}
                </span>
              </div>
              
              <h4 
                className="text-lg mb-3"
                style={{ color: colors.secondary }}
              >
                {edu.institution}
              </h4>
              
              <p className="leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };