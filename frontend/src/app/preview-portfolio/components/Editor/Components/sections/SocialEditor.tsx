import React, { useState } from 'react';
import { PortfolioData, SocialLink } from '@/app/types/TemplateConfig';

interface SocialEditorProps {
  data: PortfolioData;
  onUpdate: (newData: PortfolioData) => void;
}

export function SocialEditor({ data, onUpdate }: SocialEditorProps) {
  const [platformInput, setPlatformInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  
  const socialLinks = data.socialLinks || [];
  
  const handleAddSocial = () => {
    if (platformInput.trim() && urlInput.trim()) {
      const newSocialLink: SocialLink = {
        platform: platformInput.trim(),
        url: urlInput.trim(),
        icon: getSocialIcon(platformInput.trim().toLowerCase())
      };
      
      onUpdate({
        ...data,
        socialLinks: [...socialLinks, newSocialLink]
      });
      
      setPlatformInput('');
      setUrlInput('');
    }
  };
  
  const handleRemoveSocial = (index: number) => {
    const updatedLinks = [...socialLinks];
    updatedLinks.splice(index, 1);
    
    onUpdate({
      ...data,
      socialLinks: updatedLinks
    });
  };
  
  const handleUpdateSocial = (index: number, field: keyof SocialLink, value: string) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index] = {
      ...updatedLinks[index],
      [field]: value
    };
    
    if (field === 'platform') {
      updatedLinks[index].icon = getSocialIcon(value.toLowerCase());
    }
    
    onUpdate({
      ...data,
      socialLinks: updatedLinks
    });
  };
  
  const getSocialIcon = (platform: string): string => {
    const icons: Record<string, string> = {
      'linkedin': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
      'github': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
      'twitter': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>',
      'facebook': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
      'instagram': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
      'youtube': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>',
      'dribbble': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>',
      'behance': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12h6v4H1z"></path><path d="M1 5h9v4H1z"></path><path d="M9.5 19h7a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-2v-1h4V5h-8z"></path></svg>',
      'medium': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 41.6c0 2.5-2 4.4-4.4 4.4H4.4C2 46 0 44 0 41.6V4.4C0 2 2 0 4.4 0h9.2C16 0 18 2 18 4.4v37.2z"></path><path d="M46 41.6c0 2.5-2 4.4-4.4 4.4H32.6c-2.5 0-4.4-2-4.4-4.4V4.4c0-2.4 2-4.4 4.4-4.4h9C44 0 46 2 46 4.4v37.2z"></path><path d="M72 41.6c0 2.5-2 4.4-4.4 4.4H58.6c-2.6 0-4.6-2-4.6-4.4V4.4c0-2.4 2-4.4 4.6-4.4h9c2.4 0 4.4 2 4.4 4.4v37.2z"></path></svg>'
    };
    
    if (platform.includes('linkedin')) return icons.linkedin;
    if (platform.includes('git')) return icons.github;
    if (platform.includes('twitter') || platform.includes('x.com')) return icons.twitter;
    if (platform.includes('face')) return icons.facebook;
    if (platform.includes('insta')) return icons.instagram;
    if (platform.includes('you')) return icons.youtube;
    if (platform.includes('drib')) return icons.dribbble;
    if (platform.includes('be')) return icons.behance;
    if (platform.includes('med')) return icons.medium;
    
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';
  };
  
  return (
    <div className="space-y-8 text-white">
      <h3 className="text-lg font-light tracking-wider text-white mb-4">
        Redes Sociais
      </h3>
      
      <div className="space-y-4">
        {socialLinks.length > 0 ? (
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <div key={index} className="p-4 border border-white/10 rounded-lg bg-white/5 group">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 text-white flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: link.icon || '' }}
                    />
                    <h4 className="font-medium">{link.platform}</h4>
                  </div>
                  <button
                    onClick={() => handleRemoveSocial(index)}
                    className="text-red-400 hover:text-red-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Remover
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Plataforma</label>
                    <input
                      type="text"
                      value={link.platform}
                      onChange={(e) => handleUpdateSocial(index, 'platform', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">URL</label>
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => handleUpdateSocial(index, 'url', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-white/5 border border-white/10 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-white/60 text-sm">
              Nenhuma rede social adicionada. Adicione suas redes abaixo.
            </p>
          </div>
        )}
        
        <div className="mt-6 p-4 border border-white/10 rounded-lg bg-white/5">
          <h4 className="font-medium mb-3">Adicionar Rede Social</h4>
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Plataforma</label>
              <input
                type="text"
                value={platformInput}
                onChange={(e) => setPlatformInput(e.target.value)}
                placeholder="LinkedIn, GitHub, Twitter, etc."
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-xs text-gray-400 mb-1">URL</label>
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            
            <button
              onClick={handleAddSocial}
              disabled={!platformInput.trim() || !urlInput.trim()}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 disabled:cursor-not-allowed text-white rounded text-sm transition-colors"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
        <h4 className="font-medium mb-3">Redes sociais populares</h4>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {['LinkedIn', 'GitHub', 'Twitter', 'Instagram', 'Facebook', 'YouTube', 'Dribbble', 'Behance', 'Medium'].map((platform) => (
            <button
              key={platform}
              onClick={() => setPlatformInput(platform)}
              className="px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors"
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
        <h4 className="font-medium mb-2">Dica</h4>
        <p className="text-sm text-white/70">
          Adicione suas principais redes sociais para fortalecer sua presença online e aumentar suas chances de networking. Certifique-se de que os links estão corretos e atualizados.
        </p>
      </div>
    </div>
  );
} 