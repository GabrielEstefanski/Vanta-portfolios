import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function HeaderSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="min-h-[90vh] py-16 flex flex-col items-center justify-center relative text-center perspective">
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ 
            background: `radial-gradient(ellipse at center, ${colors.primary}40 0%, transparent 70%)`,
            filter: 'blur(50px)',
            transform: 'translateZ(-50px)'
          }}
        />
        
        <div className="relative mb-8 transform-gpu">
          <div 
            className="absolute inset-0 rounded-full opacity-40 animate-pulse"
            style={{ 
              transform: 'scale(1.5) translateZ(-20px)',
              background: `radial-gradient(circle, ${colors.primary}70, transparent 70%)`,
              filter: 'blur(20px)'
            }}
          />
          
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 200 - 100}px`,
                left: `${Math.random() * 400 - 200}px`,
                width: '2px',
                height: '15px',
                background: colors.text,
                opacity: 0.6,
                filter: 'blur(1px)',
                transform: `rotate(${45 + Math.random() * 45}deg)`,
                boxShadow: `0 0 10px ${colors.text}, 0 0 20px ${colors.accent}`,
                animation: `meteor ${5 + Math.random() * 10}s linear ${Math.random() * 10}s infinite`
              }}
            />
          ))}
          
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl mb-4 ${typography.headingFont} tracking-wider relative z-10`}
            style={{ 
              color: colors.text,
              textShadow: `0 0 20px ${colors.primary}, 0 0 40px ${colors.primary}80, 0 0 60px ${colors.primary}40`
            }}
          >
            {data?.name || 'João da Silva'}
          </h1>
        </div>
        
        <h2 
          className={`text-xl md:text-2xl lg:text-3xl mb-8 ${typography.bodyFont} tracking-widest transform-gpu`}
          style={{ 
            color: colors.secondary,
            textShadow: `0 0 15px ${colors.secondary}80`,
            letterSpacing: '0.2em',
            transform: 'translateZ(10px)'
          }}
        >
          {data?.title || 'Desenvolvedor Full Stack'}
        </h2>
        
        <p 
          className="max-w-2xl text-lg mb-12 leading-relaxed backdrop-blur-sm rounded-lg px-6 py-4"
          style={{
            backgroundColor: `${colors.background}30`,
            boxShadow: `0 0 30px ${colors.primary}20`,
            transform: 'translateZ(30px)'
          }}
        >
          {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center transform-gpu" style={{ transform: 'translateZ(40px)' }}>
          <button 
            className="px-8 py-3 rounded-full transition-all transform hover:scale-110 focus:outline-none relative overflow-hidden"
            style={{ 
              background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
              color: colors.text,
              boxShadow: `0 6px 30px -10px ${colors.primary}`
            }}
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-white" />
            <span className="relative z-10">Meus Projetos</span>
          </button>
          <button 
            className="px-8 py-3 rounded-full transition-all transform hover:scale-110 focus:outline-none relative overflow-hidden"
            style={{ 
              background: `linear-gradient(45deg, transparent, ${colors.primary}30)`,
              backdropFilter: 'blur(10px)',
              border: `2px solid ${colors.primary}`,
              color: colors.text,
              boxShadow: `0 6px 30px -10px ${colors.primary}`
            }}
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-white" />
            <span className="relative z-10">Contato</span>
          </button>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ 
            color: colors.text,
            filter: `drop-shadow(0 0 8px ${colors.primary})`,
            transform: 'translateZ(50px)'
          }}
        >
          <div className="w-10 h-16 rounded-full border-2 flex items-center justify-center relative"
            style={{ 
              borderColor: colors.primary,
              boxShadow: `0 0 15px ${colors.primary}60 inset, 0 0 10px ${colors.primary}60`
            }}
          >
            <div 
              className="w-2 h-2 rounded-full absolute top-4 animate-pingSlowly"
              style={{ 
                backgroundColor: colors.accent,
                boxShadow: `0 0 10px ${colors.accent}` 
              }}
            />
          </div>
        </div>
      </section>
    );
  };