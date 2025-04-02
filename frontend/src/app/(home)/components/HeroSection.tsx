export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-white">
                VANTA
              </h1>
              <p className="text-xl text-gray-300">
                Portfólios elegantes e minimalistas para profissionais criativos
              </p>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Conecte seu LinkedIn ou GitHub e tenha um portfólio profissional gerado automaticamente. 
              Personalize com templates modernos e mostre seu trabalho da melhor forma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm tracking-wider">
                COMEÇAR AGORA
              </button>
              <button className="border border-white/20 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/5 transition-all duration-200 text-sm tracking-wider">
                VER TEMPLATES
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-sm tracking-wider">Geração Automática</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-sm tracking-wider">Templates Modernos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-sm tracking-wider">Personalização Total</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-sm tracking-wider">100% Responsivo</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <div className="text-gray-400 text-sm tracking-wider">Preview</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-8 bg-white/5 rounded w-1/3"></div>
                  <div className="flex gap-2">
                    <div className="h-8 bg-white/5 rounded w-16"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-6 bg-white/5 rounded w-3/4"></div>
                  <div className="h-4 bg-white/5 rounded w-1/2"></div>
                  <div className="h-4 bg-white/5 rounded w-2/3"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-white/5 rounded-lg p-3">
                      <div className="h-4 bg-white/5 rounded w-2/3 mb-2"></div>
                      <div className="h-3 bg-white/5 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="h-4 bg-white/5 rounded w-1/4"></div>
                  <div className="flex gap-2">
                    <div className="h-4 bg-white/5 rounded w-4"></div>
                    <div className="h-4 bg-white/5 rounded w-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
