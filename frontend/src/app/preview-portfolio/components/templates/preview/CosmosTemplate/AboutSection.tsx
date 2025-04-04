import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function AboutSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 relative">
        <div className="absolute w-20 h-20 rounded-full opacity-10 right-0 top-0" 
          style={{ 
            background: `radial-gradient(circle, ${colors.accent}, transparent 70%)` 
          }}
        />
        
        <h2 
          className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
          style={{ color: colors.secondary }}
        >
          <span className="relative z-10">Sobre Mim</span>
          <div 
            className="absolute bottom-0 left-0 w-full h-1 rounded"
            style={{ 
              background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
              boxShadow: `0 0 10px ${colors.primary}` 
            }}
          />
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="mb-6 text-lg leading-relaxed">
              {data?.about || 'Com mais de 5 anos de experiência em desenvolvimento web, tenho trabalhado com as mais variadas tecnologias para criar produtos digitais de alto impacto.'}
            </p>
            <p className="text-lg leading-relaxed">
              Sou especializado em React, Next.js, Node.js e bancos de dados SQL/NoSQL, sempre buscando as melhores práticas e arquiteturas escaláveis para cada projeto.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {['Inovador', 'Criativo', 'Analítico', 'Proativo', 'Adaptável'].map(trait => (
                <span 
                  key={trait} 
                  className="px-4 py-2 rounded-full inline-block text-sm"
                  style={{ 
                    backgroundColor: colors.surface,
                    color: colors.text,
                    border: `1px solid ${colors.border}`
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative perspective-800">
            <div 
              className="w-full aspect-square rounded-full overflow-hidden relative max-w-sm mx-auto transform-gpu"
              style={{ 
                transform: 'rotateY(10deg) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div 
                className="absolute inset-0 animate-pulse opacity-60"
                style={{ 
                  background: `radial-gradient(circle, ${colors.primary}30, transparent 70%)`,
                  filter: 'blur(20px)',
                  transform: 'translateZ(-20px)'
                }}
              />
              
              <div 
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{ 
                  transform: 'translateZ(-10px)',
                  background: `linear-gradient(to right, ${colors.background}80, ${colors.primary}10)`,
                  border: `2px solid ${colors.primary}60`,
                  boxShadow: `0 0 30px ${colors.primary}40, inset 0 0 30px ${colors.primary}30`
                }}
              >
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${Math.random() * 2 + 1}px`,
                      height: `${Math.random() * 2 + 1}px`,
                      backgroundColor: colors.text,
                      boxShadow: `0 0 ${Math.random() * 3 + 1}px ${colors.text}`,
                      animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
                    }}
                  />
                ))}
              </div>
              
              <div 
                className="absolute inset-4 rounded-full"
                style={{ 
                  background: `radial-gradient(circle, ${colors.background}90, ${colors.background})`,
                  border: `2px solid ${colors.accent}50`,
                  boxShadow: `0 0 20px ${colors.accent}30, inset 0 0 20px ${colors.accent}20`
                }}
              />
              
              <div className="absolute inset-8 rounded-full overflow-hidden flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: data?.profilePictureUrl ? `url(${data.profilePictureUrl})` : 'none',
                  border: `1px solid ${colors.border}`,
                  background: data?.profilePictureUrl ? `url(${data.profilePictureUrl})` : `radial-gradient(circle, ${colors.surface}, ${colors.background})`
                }}
              />
              <div 
                className="absolute inset-0 opacity-70"
                style={{ animation: 'planetRotate 30s linear infinite' }}
              >
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: '120%',
                    height: '30%',
                    borderRadius: '50%',
                    border: `1px solid ${colors.primary}30`,
                    boxShadow: `0 0 5px ${colors.primary}20`,
                    transform: 'rotate(30deg)'
                  }}
                />
              </div>
              
              <div 
                className="absolute w-4 h-4 rounded-full"
                style={{ 
                  backgroundColor: colors.accent,
                  boxShadow: `0 0 10px ${colors.accent}`,
                  animation: 'orbit 8s linear infinite',
                  top: '50%',
                  left: '50%'
                }}
              />
              
              <div 
                className="absolute w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: colors.primary,
                  boxShadow: `0 0 8px ${colors.primary}`,
                  animation: 'orbit 12s linear infinite reverse',
                  animationDelay: '2s',
                  top: '50%',
                  left: '50%'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };