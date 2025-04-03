export default function CallToAction() {
    return (
        <section className="relative py-32 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
            
            <div className="relative max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-6">
                    Pronto para Criar Seu Portfólio?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 tracking-wider">
                    Comece agora e tenha seu portfólio profissional em minutos. 
                    Sem código, sem complicações.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm tracking-wider">
                    COMEÇAR AGORA
                    </button>
                    <button className="border border-white/20 text-white font-medium px-8 py-4 rounded-lg hover:bg-white/5 transition-all duration-200 text-sm tracking-wider">
                    VER MAIS DETALHES
                    </button>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm tracking-wider">
                    <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sem Código</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Setup em 5 Minutos</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suporte 24/7</span>
                    </div>
                </div>
            </div>
      </section>
    );
}