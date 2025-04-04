import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function HeaderSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${typography.headingFont}`}
              style={{ color: colors.primary }}
            >
              {data?.name || 'João da Silva'}
            </h1>
            <h2 
              className={`text-xl md:text-2xl mb-6 ${typography.bodyFont}`}
              style={{ color: colors.secondary }}
            >
              {data?.title || 'Desenvolvedor Full Stack'}
            </h2>
            <p className="text-lg leading-relaxed">
              {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
            </p>
            <div className="mt-8">
              <button 
                className="px-6 py-3 rounded-md shadow-md mr-4 transition-colors duration-300"
                style={{ 
                  backgroundColor: colors.primary, 
                  color: '#fff' 
                }}
              >
                Meu CV
              </button>
              <button 
                className="px-6 py-3 rounded-md border transition-colors duration-300"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.primary
                }}
              >
                Contato
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div 
              className="w-64 h-64 rounded-lg overflow-hidden shadow-lg" 
              style={{ borderColor: colors.accent }}
            >
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Foto</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };