'use client';

export default function Header() {
  return (
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                  HOME
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                  TEMPLATES
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                  SHOWCASE
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                  ENTERPRISE
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="hidden sm:block text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
              LOGIN
            </button>
            <button className="bg-white text-black font-medium px-6 py-2 text-sm tracking-wider hover:bg-gray-100 transition-all duration-200">
              COMEÇAR
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
