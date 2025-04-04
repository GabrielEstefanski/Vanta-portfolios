import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ContactSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 
              className={`text-2xl font-semibold ${typography.headingFont}`} 
              style={{ color: colors.primary }}
            >
              Contato
            </h2>
            <div 
              className="h-1 w-12 mt-4 rounded-full" 
              style={{ backgroundColor: colors.accent }}
            ></div>
            <p className="mt-6 text-sm leading-relaxed">
              Fique à vontade para entrar em contato comigo para discutir oportunidades de colaboração ou projetos interessantes.
            </p>
          </div>
          <div className="md:w-3/4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                <h3 className={`text-lg font-medium mb-4 ${typography.headingFont}`} style={{ color: colors.secondary }}>
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div 
                      className="w-8 h-8 mt-1 rounded-full flex items-center justify-center mr-4" 
                      style={{ backgroundColor: colors.primary + '15' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm opacity-70 mb-1">Email</p>
                      <p className="text-lg">{data?.email || 'joao@exemplo.com'}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div 
                      className="w-8 h-8 mt-1 rounded-full flex items-center justify-center mr-4" 
                      style={{ backgroundColor: colors.primary + '15' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm opacity-70 mb-1">Telefone</p>
                      <p className="text-lg">{data?.phone || '(11) 98765-4321'}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div 
                      className="w-8 h-8 mt-1 rounded-full flex items-center justify-center mr-4" 
                      style={{ backgroundColor: colors.primary + '15' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm opacity-70 mb-1">Localização</p>
                      <p className="text-lg">{data?.location || 'São Paulo, Brasil'}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg shadow-sm">
                <h3 className={`text-lg font-medium mb-4 ${typography.headingFont}`} style={{ color: colors.secondary }}>
                  Envie uma Mensagem
                </h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      className="w-full p-3 rounded-lg bg-transparent border" 
                      style={{ borderColor: colors.accent + '30' }}
                      placeholder="Seu nome"
                      disabled
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      className="w-full p-3 rounded-lg bg-transparent border" 
                      style={{ borderColor: colors.accent + '30' }}
                      placeholder="Seu email"
                      disabled
                    />
                  </div>
                  <div>
                    <textarea 
                      className="w-full p-3 rounded-lg bg-transparent border resize-none" 
                      style={{ borderColor: colors.accent + '30' }}
                      rows={3}
                      placeholder="Sua mensagem"
                      disabled
                    ></textarea>
                  </div>
                  <button 
                    type="button"
                    className="w-full p-3 rounded-lg text-center transition-colors duration-300"
                    style={{ backgroundColor: colors.primary, color: '#fff' }}
                    disabled
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }; 