import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function AboutSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 border-b border-gray-100 dark:border-gray-800">
        <h2 
          className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Sobre Mim
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/3">
            <p className="mb-6 font-light leading-relaxed text-lg">
              {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
            </p>
            <p className="font-light leading-relaxed text-lg">
              Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div 
              className="w-64 h-64 rounded-full overflow-hidden border" 
              style={{ borderColor: colors.accent }}
            >
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">Foto</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };