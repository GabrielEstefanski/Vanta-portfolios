import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function EducationSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 
              className={`text-2xl font-semibold ${typography.headingFont}`} 
              style={{ color: colors.primary }}
            >
              Educação
            </h2>
            <div 
              className="h-1 w-12 mt-4 rounded-full" 
              style={{ backgroundColor: colors.accent }}
            ></div>
          </div>
          <div className="md:w-3/4">
            <div className="space-y-8">
              {(data?.education || []).map((edu, index) => (
                <div key={index} className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <h3 className={`text-xl font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                      {edu.degree}
                    </h3>
                    <div className="flex justify-between items-start flex-wrap">
                      <p className="text-sm font-medium" style={{ color: colors.secondary }}>
                        {edu.institution}
                      </p>
                      <span 
                        className="text-sm px-3 py-1 rounded-full"
                        style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                      >
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <p>{edu.description}</p>
                </div>
              ))}
              
              {!data?.education?.length && (
                <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                  <div className="mb-4">
                    <h3 className={`text-xl font-medium ${typography.headingFont}`} style={{ color: colors.secondary }}>
                      Bacharelado em Ciência da Computação
                    </h3>
                    <div className="flex justify-between items-start flex-wrap">
                      <p className="text-sm font-medium" style={{ color: colors.secondary }}>
                        Universidade Federal do Brasil
                      </p>
                      <span 
                        className="text-sm px-3 py-1 rounded-full"
                        style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                      >
                        2015 - 2019
                      </span>
                    </div>
                  </div>
                  <p>
                    Formação completa em computação com foco em engenharia de software, algoritmos avançados e desenvolvimento full stack.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };