import React, { useState, useRef } from 'react';
import { PortfolioData, ProfilePictureOptions } from '@/app/types/TemplateConfig';

interface ProfileEditorProps {
  data: PortfolioData;
  onUpdate: (newData: PortfolioData) => void;
}

export function ProfileEditor({ data, onUpdate }: ProfileEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  
  const defaultProfilePicture: ProfilePictureOptions = {
    url: data.profilePictureUrl || '',
    shape: 'round',
    size: 'medium',
    border: false,
    effects: {
      shadow: false,
      glow: false,
      animation: 'none'
    }
  };
  
  const profilePicture = data.profilePicture || defaultProfilePicture;
  
  const handleChange = (field: keyof PortfolioData, value: any) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  const updateProfilePicture = (field: keyof ProfilePictureOptions, value: any) => {
    const updatedPicture = {
      ...profilePicture,
      [field]: value
    };
    
    onUpdate({
      ...data,
      profilePicture: updatedPicture
    });
  };
  
  const updateProfilePictureEffect = (field: string, value: any) => {
    const updatedEffects = {
      ...(profilePicture.effects || {}),
      [field]: value
    };
    
    const updatedPicture = {
      ...profilePicture,
      effects: updatedEffects
    };
    
    onUpdate({
      ...data,
      profilePicture: updatedPicture
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        updateProfilePicture('url', url);
        handleChange('profilePictureUrl', url);
        handleChange('showProfilePicture', true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!dragActive) {
      setDragActive(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        updateProfilePicture('url', url);
        handleChange('profilePictureUrl', url);
        handleChange('showProfilePicture', true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8 text-white">
      <div>
        <h3 className="text-lg font-light tracking-wider text-white mb-4">
          Foto de Perfil
        </h3>
        
        <div className="mb-4">
          <label className="relative inline-flex items-center cursor-pointer mb-4">
            <input 
              type="checkbox" 
              checked={data.showProfilePicture || false} 
              onChange={(e) => handleChange('showProfilePicture', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            <span className="ml-3 text-sm font-light text-gray-300">Mostrar foto de perfil</span>
          </label>
        </div>
        
        {data.showProfilePicture && (
          <div className="space-y-6">
            <div 
              className={`relative w-48 h-48 mx-auto mb-4 border-2 border-dashed ${dragActive ? 'border-purple-500 bg-purple-500/10' : 'border-white/20 hover:border-white/40'} rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors`}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {profilePicture.url ? (
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={profilePicture.url} 
                    alt="Foto de perfil" 
                    className={`
                      w-full h-full object-cover 
                      ${profilePicture.shape === 'round' ? 'rounded-full' : profilePicture.shape === 'rounded' ? 'rounded-lg' : ''} 
                      ${profilePicture.border ? 'border-2 border-white/40' : ''}
                      ${profilePicture.effects?.shadow ? 'shadow-lg' : ''}
                      ${profilePicture.effects?.glow ? 'shadow-lg shadow-purple-500/50' : ''}
                      ${profilePicture.effects?.animation === 'pulse' ? 'animate-pulse' : 
                         profilePicture.effects?.animation === 'bounce' ? 'animate-bounce' : 
                         profilePicture.effects?.animation === 'float' ? 'animate-float' : ''}
                    `}
                    style={{
                      borderColor: profilePicture.borderColor || 'rgba(255,255,255,0.4)'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                    <div className="text-white text-sm">Alterar imagem</div>
                  </div>
                </div>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white/40 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="text-white/60 text-sm text-center px-4">
                    Clique ou arraste uma imagem aqui
                  </div>
                </>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </div>
            
            {profilePicture.url && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2">Formato</label>
                    <select
                      value={profilePicture.shape}
                      onChange={(e) => updateProfilePicture('shape', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                    >
                      <option value="round" className="bg-gray-800">Redondo</option>
                      <option value="square" className="bg-gray-800">Quadrado</option>
                      <option value="rounded" className="bg-gray-800">Arredondado</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2">Tamanho</label>
                    <select
                      value={profilePicture.size}
                      onChange={(e) => updateProfilePicture('size', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                    >
                      <option value="small" className="bg-gray-800">Pequeno</option>
                      <option value="medium" className="bg-gray-800">Médio</option>
                      <option value="large" className="bg-gray-800">Grande</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-light text-gray-400">Borda</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={profilePicture.border} 
                        onChange={(e) => updateProfilePicture('border', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  
                  {profilePicture.border && (
                    <div className="mb-3">
                      <label className="block text-sm font-light text-gray-400 mb-2">Cor da Borda</label>
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <input
                            type="color"
                            value={profilePicture.borderColor || '#ffffff'}
                            onChange={(e) => updateProfilePicture('borderColor', e.target.value)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <div 
                            className="absolute inset-0 rounded-full border border-white/20"
                            style={{ backgroundColor: profilePicture.borderColor || '#ffffff' }}
                          />
                        </div>
                        <input
                          type="text"
                          value={profilePicture.borderColor || '#ffffff'}
                          onChange={(e) => updateProfilePicture('borderColor', e.target.value)}
                          className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-md font-light text-white mb-3">Efeitos</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-light text-gray-400">Sombra</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={profilePicture.effects?.shadow || false} 
                            onChange={(e) => updateProfilePictureEffect('shadow', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-light text-gray-400">Brilho</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={profilePicture.effects?.glow || false} 
                            onChange={(e) => updateProfilePictureEffect('glow', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2">Animação</label>
                    <select
                      value={profilePicture.effects?.animation || 'none'}
                      onChange={(e) => updateProfilePictureEffect('animation', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                    >
                      <option value="none" className="bg-gray-800">Nenhuma</option>
                      <option value="pulse" className="bg-gray-800">Pulsar</option>
                      <option value="bounce" className="bg-gray-800">Quicar</option>
                      <option value="float" className="bg-gray-800">Flutuar</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 