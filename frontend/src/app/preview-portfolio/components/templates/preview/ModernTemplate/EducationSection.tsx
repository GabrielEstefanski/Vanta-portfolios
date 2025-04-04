import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function EducationSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <h2 
          className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Educação
        </h2>
        <div 
          className="h-1 w-24 mx-auto rounded-full mb-10" 
          style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
        ></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {(data?.education || []).map((edu, index) => (
            <div 
              key={index} 
              className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: colors.primary + '08' }}
            >
              <div 
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
              >
                {edu.period}
              </div>
              <h3 
                className={`text-xl font-bold mb-2 ${typography.headingFont}`} 
                style={{ color: colors.secondary }}
              >
                {edu.degree}
              </h3>
              <p 
                className="text-base font-medium mb-4" 
                style={{ color: colors.accent }}
              >
                {edu.institution}
              </p>
              <p className="text-base">{edu.description}</p>
            </div>
          ))}
          
          {!data?.education?.length && (
            <div 
              className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: colors.primary + '08' }}
            >
              <div 
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
              >
                2015 - 2019
              </div>
              <h3 
                className={`text-xl font-bold mb-2 ${typography.headingFont}`} 
                style={{ color: colors.secondary }}
              >
                Bacharelado em Ciência da Computação
              </h3>
              <p 
                className="text-base font-medium mb-4" 
                style={{ color: colors.accent }}
              >
                Universidade Federal do Brasil
              </p>
              <p className="text-base">
                Formação completa em computação com foco em engenharia de software, algoritmos avançados e desenvolvimento full stack.
              </p>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  