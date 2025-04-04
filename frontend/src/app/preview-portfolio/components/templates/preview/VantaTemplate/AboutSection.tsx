import { TemplateConfig } from "@/app/types/TemplateConfig";

export const AboutSection = ({ config }: { config: TemplateConfig }) => {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-28">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 lg:col-span-4 order-2 md:order-1">
            <div 
              className="w-full aspect-square overflow-hidden relative luxury-border"
              style={{ 
                background: `linear-gradient(${colors.background}, ${colors.background})`,
                boxShadow: `0 20px 60px -20px ${colors.primary}15`
              }}
            >
              <div className="absolute inset-0 opacity-30 z-0"
                style={{ 
                  background: `radial-gradient(circle at 30% 20%, ${colors.primary}20, transparent 70%)` 
                }}
              ></div>
              <div className="w-full h-full bg-gray-900 flex items-center justify-center relative z-10">
                <span className="text-gray-700 uppercase tracking-[0.2em] font-light">Foto</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8 order-1 md:order-2">
            <h2 
              className={`text-2xl md:text-3xl tracking-tight mb-8 uppercase ${typography.headingFont}`} 
              style={{ 
                color: colors.primary,
                fontWeight: 'lighter',
                letterSpacing: '0.1em'
              }}
            >
              Sobre Mim
            </h2>
            
            <div 
              className="h-[1px] w-16 mb-14 relative overflow-hidden" 
            >
              <div className="absolute inset-0" style={{ backgroundColor: colors.accent }}></div>
              <div 
                className="absolute inset-0 opacity-50"
                style={{ 
                  background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
                  animation: 'shimmer 3s infinite' 
                }}
              ></div>
            </div>
            
            <p className="mb-10 leading-loose text-lg font-light opacity-90">
              {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
            </p>
            
            <p className="leading-loose text-lg font-light opacity-90">
              Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
            </p>
            
            <div className="mt-14 flex items-center gap-8">
              <a 
                href="#contact" 
                className="px-6 py-2 inline-flex items-center uppercase text-xs tracking-[0.2em] relative overflow-hidden transition-all"
                style={{ 
                  color: colors.accent,
                  borderBottom: `1px solid ${colors.accent}40`
                }}
              >
                <span>Entre em contato</span>
                <span className="ml-3">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };