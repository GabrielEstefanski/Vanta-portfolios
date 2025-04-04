import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ContactSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16">
        <h2 
          className={`text-3xl font-bold mb-6 text-center ${typography.headingFont}`} 
          style={{ color: colors.primary }}
        >
          Contato
        </h2>
        <div 
          className="h-1 w-24 mx-auto rounded-full mb-12" 
          style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
        ></div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div 
              className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 shadow-xl h-full"
              style={{ backgroundColor: colors.primary + '08' }}
            >
              <h3 
                className={`text-xl font-semibold mb-6 ${typography.headingFont}`}
                style={{ color: colors.secondary }}
              >
                Informações para Contato
              </h3>
              
              <div className="space-y-6 mb-10">
                {[
                  { icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ), label: "Email", value: data?.email || "contato@exemplo.com" },
                  { icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ), label: "Telefone", value: data?.phone || "(11) 98765-4321" },
                  { icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ), label: "Localização", value: data?.location || "São Paulo, Brasil" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div 
                      className="w-12 h-12 flex items-center justify-center rounded-lg transition-all group-hover:scale-110"
                      style={{ 
                        backgroundColor: colors.primary + '15',
                        color: colors.primary
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm opacity-75 mb-1">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 
                className={`text-xl font-semibold mb-6 ${typography.headingFont}`}
                style={{ color: colors.secondary }}
              >
                Redes Sociais
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {data?.socialLinks && data.socialLinks.length > 0 ? (
                  data.socialLinks.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ 
                          backgroundColor: colors.primary + '15',
                          color: colors.primary
                        }}
                      >
                        {social.icon ? (
                          <div 
                            className="text-current w-5 h-5"
                            dangerouslySetInnerHTML={{ __html: social.icon }} 
                          />
                        ) : (
                          <span>{social.platform.substring(0, 1)}</span>
                        )}
                      </div>
                      <span 
                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap px-2 py-1 rounded-md"
                        style={{ 
                          backgroundColor: colors.primary,
                          color: '#fff'
                        }}
                      >
                        {social.platform}
                      </span>
                    </a>
                  ))
                ) : (
                  ["LinkedIn", "GitHub", "Twitter", "Instagram"].map((social, idx) => (
                    <div 
                      key={idx}
                      className="w-12 h-12 rounded-lg flex items-center justify-center opacity-50"
                      style={{ 
                        backgroundColor: colors.primary + '15',
                        color: colors.primary
                      }}
                    >
                      <span className="text-sm">{social.substring(0, 1)}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          
          <div>
            <div 
              className="bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
              style={{ backgroundColor: colors.primary + '08' }}
            >
              <h3 
                className={`text-xl font-semibold mb-6 ${typography.headingFont}`}
                style={{ color: colors.secondary }}
              >
                Envie uma Mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-sm font-medium" htmlFor="name">Nome</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full p-3 rounded-lg transition-all"
                      style={{ 
                        backgroundColor: colors.primary + '10',
                        border: `1px solid ${colors.primary}20`,
                        color: colors.text,
                        outline: 'none',
                        boxShadow: `0 0 0 0 ${colors.primary}00`
                      }}
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full p-3 rounded-lg transition-all"
                      style={{ 
                        backgroundColor: colors.primary + '10',
                        border: `1px solid ${colors.primary}20`,
                        color: colors.text,
                        outline: 'none'
                      }}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium" htmlFor="subject">Assunto</label>
                  <input 
                    type="text" 
                    id="subject"
                    className="w-full p-3 rounded-lg transition-all"
                    style={{ 
                      backgroundColor: colors.primary + '10',
                      border: `1px solid ${colors.primary}20`,
                      color: colors.text,
                      outline: 'none'
                    }}
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 text-sm font-medium" htmlFor="message">Mensagem</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full p-3 rounded-lg transition-all"
                    style={{ 
                      backgroundColor: colors.primary + '10',
                      border: `1px solid ${colors.primary}20`,
                      color: colors.text,
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="px-8 py-3 rounded-lg w-full transition-all duration-300 font-medium transform hover:translate-y-[-2px] hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.primary,
                    color: '#fff'
                  }}
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };