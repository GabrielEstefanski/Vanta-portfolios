'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className={`max-w-2xl mx-auto text-center transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-9xl font-light tracking-wider text-white mb-4 relative">
          404
          <div className="absolute inset-0 bg-white/5 blur-3xl -z-10" />
        </h1>
        
        <h2 className="text-2xl font-light tracking-wider text-white mb-6">
            Nem toda luz alcança este espaço. Mas você pode encontrar o seu caminho.
        </h2>
        
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto tracking-wider">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="group px-8 py-3 rounded-lg bg-white/5 text-white font-light tracking-wider transition-all duration-300 hover:bg-white/10"
          >
            <span className="relative">
              Voltar para o início
              <span className="absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-white/40" />
            </span>
          </Link>

          <Link 
            href="/import"
            className="group px-8 py-3 rounded-lg bg-white/5 text-white font-light tracking-wider transition-all duration-300 hover:bg-white/10"
          >
            <span className="relative">
              Criar novo portfólio
              <span className="absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-white/40" />
            </span>
          </Link>
        </div>

        <div className="mt-12 text-gray-500 text-sm tracking-wider">
          <p>Se você acredita que isso é um erro, por favor entre em contato com o suporte.</p>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}