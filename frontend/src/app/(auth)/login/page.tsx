'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-light tracking-tight text-white">
              VANTA
            </span>
          </Link>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-light text-white mb-2">
              {isLogin ? 'Bem-vindo de volta' : 'Crie sua conta'}
            </h1>
            <p className="text-gray-400 text-sm">
              {isLogin ? 'Entre para continuar' : 'Comece sua jornada profissional'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-colors duration-200"
                  placeholder="Seu nome completo"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-colors duration-200"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/20 transition-colors duration-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-medium py-2.5 rounded-lg hover:bg-white/90 transition-all duration-200 text-sm tracking-wide"
            >
              {isLogin ? 'ENTRAR' : 'CRIAR CONTA'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Entre'}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center space-y-4">
          <div className="text-sm text-gray-400">
            Ao continuar, você concorda com nossos{' '}
            <Link href="#" className="text-white hover:underline">
              Termos de Serviço
            </Link>
            {' '}e{' '}
            <Link href="#" className="text-white hover:underline">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 