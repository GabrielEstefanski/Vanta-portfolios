import { Button } from '@/app/components/ui/Button';

export default function TemplatesShowcase() {
  const templates = [
    {
      name: "Minimal",
      description: "Design limpo e minimalista, perfeito para desenvolvedores e designers que preferem simplicidade.",
      features: ["Layout de uma coluna", "Foco no conteúdo", "Animações sutis", "Responsivo"],
      image: "/templates/minimal.png",
      color: "from-gray-900 to-black"
    },
    {
      name: "Modern",
      description: "Layout moderno com grid dinâmico e seções interativas, ideal para portfólios criativos.",
      features: ["Grid dinâmico", "Seções interativas", "Efeitos de hover", "Dark/Light mode"],
      image: "/templates/modern.png",
      color: "from-blue-900 to-black"
    },
    {
      name: "Professional",
      description: "Design corporativo e profissional, com foco em apresentação de projetos e habilidades.",
      features: ["Layout multi-coluna", "Timeline de projetos", "Seção de skills", "Integração com LinkedIn"],
      image: "/templates/professional.png",
      color: "from-purple-900 to-black"
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-white mb-4">
            Templates Profissionais
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto tracking-wider">
            Escolha entre diferentes estilos e layouts para criar um portfólio que reflita sua identidade profissional
          </p>
        </div>
  
        <div className="mb-24">
          <div className="relative bg-black/50 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden group hover:border-white/10 transition-all duration-500">
            <div className="relative h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-6xl font-extrabold tracking-tight text-white mb-4">
                  VANTA
                </span>
                <p className="text-xl text-gray-300 tracking-wider max-w-2xl mb-6">
                  Para aqueles que abraçam a elegância da escuridão
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 tracking-wider">Design Minimalista</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 tracking-wider">Tema Escuro</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 tracking-wider">Animações Sutis</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 tracking-wider">Responsivo</span>
                </div>
                <button className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white text-sm rounded transition-all duration-200 tracking-wider group-hover:scale-105">
                  Explorar Template Vanta
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div 
              key={template.name}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b ${template.color} opacity-30`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-4xl font-light tracking-wider">
                    {template.name}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-light tracking-wider text-white mb-2">{template.name}</h3>
                <p className="text-gray-400 text-sm mb-4 tracking-wider">{template.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-400 tracking-wider">
                      <svg className="w-4 h-4 mr-2 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full bg-white/5 hover:bg-white/10 text-white text-sm py-2 tracking-wider"
                >
                  Visualizar Template
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="white"
            className="px-8 py-3 text-sm tracking-wider hover:bg-gray-300"
          >
            VER TODOS OS TEMPLATES
          </Button>
        </div>
      </div>
    </section>
  );
} 