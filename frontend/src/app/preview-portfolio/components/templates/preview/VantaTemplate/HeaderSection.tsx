import { TemplateConfig } from "@/app/types/TemplateConfig";

export const HeaderSection = ({ config }: { config: TemplateConfig }) => {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-28 flex flex-col items-center justify-center min-h-[85vh]">
        <div 
          className="text-center max-w-4xl relative"
          style={{ animation: 'fadeIn 1s ease-out' }}
        >
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 ${typography.headingFont}`}
            style={{ 
              color: colors.primary,
              letterSpacing: '-.02em',
              fontWeight: 'lighter',
              textShadow: `0 0 40px ${colors.primary}30`
            }}
          >
            {data?.name || 'João da Silva'}
          </h1>
          
          <div 
            className="h-[1px] w-24 mx-auto mb-10 relative overflow-hidden" 
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
          
          <h2 
            className={`text-base md:text-xl tracking-[0.25em] uppercase mb-14 ${typography.bodyFont}`}
            style={{ 
              color: colors.secondary,
              fontWeight: 'lighter',
              letterSpacing: '0.3em'
            }}
          >
            {data?.title || 'Desenvolvedor Full Stack'}
          </h2>
          
          <p 
            className="max-w-2xl mx-auto text-lg tracking-wide leading-relaxed opacity-80 font-light"
            style={{ animation: 'slideUp 0.8s ease-out' }}
          >
            {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
          </p>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div 
            className="w-[1px] h-10 relative overflow-hidden"
            style={{ backgroundColor: `${colors.primary}40` }}
          >
            <div 
              className="w-full absolute top-0 animate-[scrollIndicator_1.5s_ease-in-out_infinite]"
              style={{ 
                height: '30%', 
                backgroundColor: colors.accent,
                animation: 'slideDown 1.5s infinite' 
              }}
            ></div>
          </div>
        </div>
      </section>
    );
  };