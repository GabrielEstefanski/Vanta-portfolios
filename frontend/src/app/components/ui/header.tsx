export default function Header() {
  return (
    <header className="bg-black/30 backdrop-blur-sm sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xltext-white tracking-tight">
                VANTA
              </span>
            </div>
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                  Home
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                  Showcase
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                  Templates
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
                  Enterprise
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider">
              Login
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded text-sm tracking-wider transition-all duration-200">
              Começar Agora
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
