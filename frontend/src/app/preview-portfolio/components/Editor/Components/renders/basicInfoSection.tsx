import { SectionIcon } from "../sections/SectionIcon";
import { PortfolioData } from "@/app/types/TemplateConfig";

export const renderBasicInfoSection = (
    data: PortfolioData,
    handleChange: (field: keyof PortfolioData, value: string) => void
) => (
    <div className="space-y-8">
      <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-4">
        <SectionIcon icon="basic" size="small" showBackground={false} />
        <div>
          <h2 className="text-xl font-medium text-white">Informações Básicas</h2>
          <p className="text-sm text-white/60">Adicione suas informações pessoais e de contato</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">Nome</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Seu nome completo"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">Título Profissional</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Ex: Desenvolvedor Frontend"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-white/80">Sobre</label>
          <textarea
            value={data.about}
            onChange={(e) => handleChange('about', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors resize-y"
            placeholder="Descreva brevemente quem você é, suas habilidades principais e objetivos profissionais"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pt-4 border-t border-white/10">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="seu.email@exemplo.com"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/80">Telefone</label>
          <input
            type="text"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="(00) 00000-0000"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-white/80">Localização</label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
            placeholder="Cidade, Estado, País"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-white/80">Foto de Perfil (URL)</label>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={data.avatarUrl || ''}
              onChange={(e) => handleChange('avatarUrl', e.target.value)}
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="https://exemplo.com/sua-foto.jpg"
            />
            {data.avatarUrl ? (
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/20">
                <img 
                  src={data.avatarUrl} 
                  alt={data.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(data.name || 'User');
                  }}
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-lg flex-shrink-0 border border-white/10 flex items-center justify-center bg-white/5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );