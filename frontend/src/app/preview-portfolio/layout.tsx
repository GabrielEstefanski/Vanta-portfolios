'use client';

import React, { ReactNode } from 'react';
import { TemplateConfig } from '../types/TemplateConfig';
import { TemplateSelector } from './components/TemplateSelector';
import Link from 'next/link';

interface PreviewLayoutProps {
  children: ReactNode;
  onTemplateSelect: (templateId: string) => void;
  selectedTemplate: TemplateConfig;
}

export default function PreviewLayout({ 
  children, 
  onTemplateSelect, 
  selectedTemplate 
}: PreviewLayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-light tracking-wider text-white">
                  VANTA
                </span>
              </div>
              <div className="hidden sm:ml-12 sm:block">
                <div className="flex space-x-8">
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                    HOME
                  </Link>
                  <Link href="#" className="text-white transition-colors duration-200 text-sm tracking-wider">
                    EDITOR
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                    TEMPLATES
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <TemplateSelector 
                selected={selectedTemplate?.id || 'minimalist'}
                onSelect={onTemplateSelect}
              />
              
              <Link
                href="/"
                className="hidden sm:block text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider"
              >
                VOLTAR
              </Link>
              
              <button className="bg-white text-black font-medium px-6 py-2 text-sm tracking-wider hover:bg-gray-100 transition-all duration-200">
                EXPORTAR
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex-1 relative pt-8">
        {children}
      </div>
    </div>
  );
}