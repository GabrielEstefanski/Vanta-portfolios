import { TemplateConfig } from "@/app/types/TemplateConfig";

export const ContactSection = ({ config }: { config: TemplateConfig }) => {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-28" id="contact">
        <h2 
          className={`text-2xl md:text-3xl tracking-tight mb-8 uppercase ${typography.headingFont}`} 
          style={{ 
            color: colors.primary,
            fontWeight: 'lighter',
            letterSpacing: '0.1em'
          }}
        >
          Contato
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
        
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <p className="mb-16 text-lg leading-relaxed font-light opacity-90">
              Estou sempre aberto a novas oportunidades e parcerias. Se você gostaria de trabalhar comigo ou apenas trocar uma ideia, entre em contato!
            </p>
            
            <div className="space-y-12">
              <div>
                <h4 
                  className="text-xs uppercase tracking-widest mb-3 opacity-70 font-light"
                  style={{ letterSpacing: '0.2em' }}
                >
                  Email
                </h4>
                <p 
                  className="text-lg"
                  style={{ 
                    color: colors.primary,
                    fontWeight: 'lighter'
                  }}
                >
                  {data?.email || 'joao@exemplo.com'}
                </p>
              </div>
              
              <div>
                <h4 
                  className="text-xs uppercase tracking-widest mb-3 opacity-70 font-light"
                  style={{ letterSpacing: '0.2em' }}
                >
                  Telefone
                </h4>
                <p 
                  className="text-lg"
                  style={{ 
                    color: colors.primary,
                    fontWeight: 'lighter'
                  }}
                >
                  {data?.phone || '(11) 98765-4321'}
                </p>
              </div>
              
              <div>
                <h4 
                  className="text-xs uppercase tracking-widest mb-3 opacity-70 font-light"
                  style={{ letterSpacing: '0.2em' }}
                >
                  Localização
                </h4>
                <p 
                  className="text-lg"
                  style={{ 
                    color: colors.primary,
                    fontWeight: 'lighter'
                  }}
                >
                  {data?.location || 'São Paulo, Brasil'}
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="flex space-x-6">
                {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((social, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center relative group"
                  >
                    <div 
                      className="absolute inset-0 rounded-full opacity-10 transition-opacity group-hover:opacity-20"
                      style={{ 
                        backgroundColor: colors.primary
                      }}
                    ></div>
                    <span 
                      className="text-sm uppercase transition-colors duration-300 group-hover:text-accent"
                      style={{ fontSize: '0.7rem' }}
                    >
                      {social.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <form className="space-y-8">
              <div>
                <label 
                  className="block mb-3 text-xs uppercase tracking-widest opacity-70 font-light"
                  style={{ letterSpacing: '0.2em' }}
                >
                  Nome
                </label>
                <input 
                  type="text" 
                  className="w-full py-3 px-4 bg-transparent focus:outline-none transition-colors"
                  style={{ 
                    borderBottom: `1px solid ${colors.secondary}30`,
                    color: colors.text
                  }}
                  placeholder="Seu nome"
                  disabled
                />
              </div>
              
              <div>
                <label 
                  className="block mb-3 text-xs uppercase tracking-widest opacity-70 font-light"
                  style={{ letterSpacing: '0.2em' }}
                >
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full py-3 px-4 bg-transparent focus:outline-none transition-colors"
                  style={{ 
                    borderBottom: `1px solid ${colors.secondary}30`,
                    color: colors.text
                  }}
                  placeholder="Seu email"
                  disabled
                />
              </div>
              
              <div>
                <label 
                  className="block mb-3 text-xs uppercase tracking-widest opacity-70 font-light"
                  style={{ letterSpacing: '0.2em' }}
                >
                  Mensagem
                </label>
                <textarea 
                  className="w-full py-3 px-4 bg-transparent focus:outline-none transition-colors"
                  style={{ 
                    borderBottom: `1px solid ${colors.secondary}30`,
                    color: colors.text
                  }}
                  rows={4}
                  placeholder="Sua mensagem"
                  disabled
                ></textarea>
              </div>
              
              <div className="pt-8">
                <button 
                  type="button"
                  className="px-8 py-3 uppercase tracking-widest text-sm transition-all duration-300 relative overflow-hidden group disabled:opacity-70"
                  style={{ 
                    letterSpacing: '0.2em',
                    fontWeight: 'lighter',
                    border: `1px solid ${colors.primary}80`,
                  }}
                  disabled
                >
                  <span 
                    className="relative z-10 transition-colors duration-300 group-hover:text-background"
                    style={{ color: colors.text }}
                  >
                    Enviar Mensagem
                  </span>
                  <div 
                    className="absolute inset-0 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{ 
                      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                    }}
                  ></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }; 