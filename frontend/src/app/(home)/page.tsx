'use client';

import { useEffect, useState } from 'react';
import VantaEffect from '../components/ui/VantaEffect';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import TemplatesShowcase from './components/TemplatesShowcase';
import CallToAction from './components/CallToAction';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <VantaEffect />
      <Header />
      
      <div className={`relative z-10 min-h-screen transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <HeroSection />
        <Features />
        <TemplatesShowcase />
      </div>

      <CallToAction />

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
    </main>
  );
}
