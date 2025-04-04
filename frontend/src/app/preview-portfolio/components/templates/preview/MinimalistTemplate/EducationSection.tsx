import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function EducationSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 border-b border-gray-100 dark:border-gray-800">
        <h2 
          className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Educação
        </h2>
        <div className="space-y-10">
          {(data?.education || []).map((edu, index) => (
            <div key={index} className="border-l-2 pl-8 py-2" style={{ borderColor: colors.accent }}>
              <h3 className={`text-xl font-light mb-2 ${typography.headingFont}`} style={{ color: colors.secondary }}>
                {edu.degree}
              </h3>
              <div className="text-sm font-light mb-4" style={{ color: colors.secondary }}>
                {edu.institution} • {edu.period}
              </div>
              <p className="font-light">{edu.description}</p>
            </div>
          ))}
          
          {!data?.education?.length && (
            <div className="border-l-2 pl-8 py-2" style={{ borderColor: colors.accent }}>
              <h3 className={`text-xl font-light mb-2 ${typography.headingFont}`} style={{ color: colors.secondary }}>
                Bacharelado em Ciência da Computação
              </h3>
              <div className="text-sm font-light mb-4" style={{ color: colors.secondary }}>
                Universidade Federal do Brasil • 2015 - 2019
              </div>
              <p className="font-light">
                Formação completa em computação com foco em engenharia de software, algoritmos avançados e desenvolvimento full stack.
              </p>
            </div>
          )}
        </div>
      </section>
    );
  };
  
  