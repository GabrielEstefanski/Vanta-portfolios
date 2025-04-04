import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ContactSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                opacity: Math.random() * 0.5 + 0.2,
                backgroundColor: i % 2 === 0 ? colors.accent : colors.primary,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 2 === 0 ? colors.accent : colors.primary}`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
              }}
            />
          ))}
        </div>
        
        <h2 
          className={`text-3xl mb-12 ${typography.headingFont} text-center relative inline-block`}
          style={{ color: colors.secondary }}
        >
          <span className="relative z-10">Contato</span>
          <div 
            className="absolute bottom-0 left-0 w-full h-1 rounded"
            style={{ 
              background: `linear-gradient(to right, ${colors.secondary}, ${colors.primary})`,
              boxShadow: `0 0 10px ${colors.secondary}` 
            }}
          />
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg mb-8 leading-relaxed">
              Fique à vontade para entrar em contato se quiser colaborar em projetos, discutir ideias ou simplesmente trocar uma mensagem.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { icon: "✉️", text: data?.email || "seuemail@exemplo.com", label: "Email" },
                { icon: "📱", text: data?.phone || "(11) 98765-4321", label: "Telefone" },
                { icon: "📍", text: data?.location || "São Paulo, Brasil", label: "Localização" }
              ].map((contact, idx) => (
                <div key={idx} className="flex items-center group">
                  <div 
                    className="mr-4 w-14 h-14 flex items-center justify-center rounded-full text-xl transition-all group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${colors.surface}80`,
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${colors.border}`,
                      boxShadow: `0 4px 20px ${colors.primary}30`,
                      transform: 'translateZ(5px)'
                    }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: colors.secondary }}>{contact.label}</p>
                    <p className="text-lg">{contact.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative p-4">
              <h3 
                className="text-lg mb-6"
                style={{ color: colors.secondary }}
              >
                Redes Sociais
              </h3>
              
              <div className="flex flex-wrap gap-5 relative">
                {(data?.socialLinks || [
                  { platform: "LinkedIn", url: "#" },
                  { platform: "GitHub", url: "#" },
                  { platform: "Twitter", url: "#" },
                  { platform: "Instagram", url: "#" }
                ]).map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full transition-all transform hover:scale-125 group"
                    style={{ 
                      backgroundColor: `${colors.surface}90`,
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${colors.border}`,
                      boxShadow: `0 4px 20px ${colors.primary}30`
                    }}
                  >
                    {social.icon ? (
                      <div 
                        className="text-white w-5 h-5"
                        dangerouslySetInnerHTML={{ __html: social.icon }} 
                      />
                    ) : (
                      <span>{social.platform.substring(0, 1)}</span>
                    )}
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30"
                      style={{ 
                        background: `radial-gradient(circle, ${colors.accent}, transparent 70%)`,
                        filter: 'blur(5px)'
                      }}
                    />
                    <div 
                      className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ 
                        border: `1px solid ${colors.accent}50`,
                        boxShadow: `0 0 15px ${colors.accent}30`,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                    <span className="absolute opacity-0 group-hover:opacity-100 -bottom-8 text-xs px-2 py-1 rounded whitespace-nowrap"
                      style={{
                        background: `${colors.background}90`,
                        backdropFilter: 'blur(5px)',
                        border: `1px solid ${colors.primary}50`,
                        color: colors.text,
                        transition: 'opacity 0.2s ease-in-out'
                      }}
                    >
                      {social.platform}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className="rounded-lg p-6"
            style={{ 
              backgroundColor: `${colors.surface}70`,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.border}`,
              boxShadow: `0 8px 30px ${colors.primary}20`
            }}
          >
            <form className="space-y-4">
              <div>
                <label className="block mb-2" style={{ color: colors.secondary }}>Nome</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg bg-transparent"
                  style={{ 
                    border: `1px solid ${colors.border}`,
                    color: colors.text
                  }}
                />
              </div>
              
              <div>
                <label className="block mb-2" style={{ color: colors.secondary }}>Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-lg bg-transparent"
                  style={{ 
                    border: `1px solid ${colors.border}`,
                    color: colors.text
                  }}
                />
              </div>
              
              <div>
                <label className="block mb-2" style={{ color: colors.secondary }}>Mensagem</label>
                <textarea 
                  rows={5}
                  className="w-full p-3 rounded-lg bg-transparent"
                  style={{ 
                    border: `1px solid ${colors.border}`,
                    color: colors.text
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 rounded-lg transition-all transform hover:translate-y-[-2px]"
                style={{ 
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
                  color: colors.text,
                  boxShadow: `0 4px 15px ${colors.primary}50`
                }}
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  