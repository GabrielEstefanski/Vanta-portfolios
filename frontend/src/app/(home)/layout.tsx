'use client';

import { ReactNode } from 'react';
import Footer from '../components/ui/footer';

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {children}
      <Footer />
    </div>
  );
}