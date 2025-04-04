import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function HeaderSection({ config }: { config: TemplateConfig }) {
  const { colors, typography, data } = config.props;
  
  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 text-left">
        <h1 
          className={`text-5xl md:text-6xl font-bold mb-6 ${typography.headingFont} relative`}
          style={{ color: colors.primary }}
        >
          <span className="relative">
            {data?.name || 'João da Silva'}
            <div 
              className="absolute -bottom-3 left-0 h-2 w-16 rounded-full"
              style={{ background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})` }}
            ></div>
          </span>
        </h1>
        <h2 
          className={`text-xl md:text-2xl mb-8 ${typography.bodyFont}`}
          style={{ color: colors.secondary }}
        >
          {data?.title || 'Desenvolvedor Full Stack'}
        </h2>
        <p className="max-w-2xl text-lg mb-10">
          {data?.about ? data.about.substring(0, 150) + (data.about.length > 150 ? '...' : '') : 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href={`mailto:${data?.email || 'exemplo@email.com'}`}
            className="px-6 py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2"
            style={{ 
              backgroundColor: colors.primary,
              color: '#fff'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Contato
          </a>
          
          <a 
            href="#projects"
            className="px-6 py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg border-2 flex items-center gap-2"
            style={{ 
              borderColor: colors.primary,
              color: colors.primary
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            Projetos
          </a>
        </div>
        
        <div className="mt-8 flex gap-4">
          {data?.socialLinks && data.socialLinks.length > 0 ? (
            data.socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
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
              </a>
            ))
          ) : (
            ["LinkedIn", "GitHub", "Twitter", "Instagram"].map((social, idx) => (
              <div 
                key={idx}
                className="w-10 h-10 rounded-lg flex items-center justify-center opacity-50"
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
      
      {data?.showProfilePicture !== false && (
        <div className="relative flex-shrink-0">
          <div 
            className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 shadow-2xl relative z-10"
            style={{ 
              borderColor: colors.accent,
              boxShadow: `0 10px 30px -5px ${colors.primary}40`
            }}
          >
            {data?.profilePictureUrl ? (
              <img 
                src={data.profilePictureUrl} 
                alt={data?.name || "Perfil"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-3">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="text-gray-500">Foto do Perfil</span>
              </div>
            )}
          </div>
          
          <div 
            className="absolute top-8 -right-8 w-64 h-64 rounded-xl z-0"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}40, ${colors.accent}40)`,
              filter: 'blur(2px)'
            }}
          ></div>
          
          <div 
            className="absolute -bottom-8 -left-8 w-64 h-64 rounded-xl z-0"
            style={{ 
              background: `linear-gradient(135deg, ${colors.accent}40, ${colors.primary}40)`,
              filter: 'blur(2px)'
            }}
          ></div>
        </div>
      )}
    </section>
  );
}
