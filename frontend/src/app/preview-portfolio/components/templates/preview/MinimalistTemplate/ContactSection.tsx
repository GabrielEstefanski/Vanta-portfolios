import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function ContactSection({ config }: { config: TemplateConfig }) {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-16">
      <h2 
        className={`text-2xl md:text-3xl font-light tracking-wide mb-8 ${typography.headingFont}`} 
        style={{ color: colors.primary }}
      >
        Contato
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <p className="mb-6 font-light leading-relaxed">
            Estou sempre aberto a novas oportunidades e parcerias. Se você gostaria de trabalhar comigo ou apenas trocar uma ideia, entre em contato!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-light" style={{ color: colors.secondary }}>Email:</span>
              <span className="font-light">{data?.email || 'joao@exemplo.com'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-light" style={{ color: colors.secondary }}>Telefone:</span>
              <span className="font-light">{data?.phone || '(11) 98765-4321'}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-light" style={{ color: colors.secondary }}>Localização:</span>
              <span className="font-light">{data?.location || 'São Paulo, Brasil'}</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form className="space-y-4">
            <div>
              <label className="block mb-2 font-light" style={{ color: colors.secondary }}>Nome</label>
              <input 
                type="text" 
                className="w-full p-3 border bg-transparent font-light" 
                style={{ borderColor: colors.accent }}
                placeholder="Seu nome"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 font-light" style={{ color: colors.secondary }}>Email</label>
              <input 
                type="email" 
                className="w-full p-3 border bg-transparent font-light" 
                style={{ borderColor: colors.accent }}
                placeholder="Seu email"
                disabled
              />
            </div>
            <div>
              <label className="block mb-2 font-light" style={{ color: colors.secondary }}>Mensagem</label>
              <textarea 
                className="w-full p-3 border bg-transparent font-light" 
                style={{ borderColor: colors.accent }}
                rows={4}
                placeholder="Sua mensagem"
                disabled
              ></textarea>
            </div>
            <button 
              type="button"
              className="px-6 py-3 border font-light"
              style={{ borderColor: colors.accent, color: colors.text }}
              disabled
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};