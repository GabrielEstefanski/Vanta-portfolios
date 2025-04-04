import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function AboutSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12 bg-opacity-5 rounded-xl" style={{ backgroundColor: colors.primary + '0a' }}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 
              className={`text-2xl font-semibold ${typography.headingFont}`} 
              style={{ color: colors.primary }}
            >
              Sobre Mim
            </h2>
            <div 
              className="h-1 w-12 mt-4 rounded-full" 
              style={{ backgroundColor: colors.accent }}
            ></div>
          </div>
          <div className="md:w-3/4">
            <div className="prose max-w-none">
              <p className="mb-4">
                {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
              </p>
              <p>
                Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Proativo', 'Colaborativo', 'Orientado a resultados', 'Ágil', 'Aprendizado contínuo'].map(trait => (
                  <span 
                    key={trait} 
                    className="px-3 py-1 text-sm rounded-full"
                    style={{ backgroundColor: colors.primary + '15', color: colors.primary }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };