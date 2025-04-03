interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

interface ColorScheme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
}

interface TemplateSelectorProps {
  templates: Template[];
  colorSchemes: ColorScheme[];
  selectedTemplate: string | null;
  selectedColors: ColorScheme;
  onTemplateSelect: (templateId: string) => void;
  onColorSelect: (colors: ColorScheme) => void;
  onGenerate: () => void;
}

export default function TemplateSelector({
  templates,
  colorSchemes,
  selectedTemplate,
  selectedColors,
  onTemplateSelect,
  onColorSelect,
  onGenerate
}: TemplateSelectorProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/5 rounded-lg p-8 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
      
      <div className="text-center mb-12">
        <h1 className="text-3xl font-light text-white mb-4 tracking-tight">
          Escolha seu template
        </h1>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Selecione um template e personalize as cores para criar um portfólio único
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onTemplateSelect(template.id)}
            className={`relative p-6 rounded-lg border transition-all duration-300 group ${
              selectedTemplate === template.id
                ? 'bg-white/10 border-white/20 shadow-lg shadow-white/5'
                : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
            }`}
          >
            <div className="aspect-video bg-white/5 rounded-lg mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent group-hover:from-white/10 transition-all duration-300" />
            </div>
            <h3 className="text-white text-sm font-medium mb-2">{template.name}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{template.description}</p>
          </button>
        ))}
      </div>

      <div className="mb-12">
        <h3 className="text-white text-sm font-medium mb-6 text-center">Esquema de Cores</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {colorSchemes.map((scheme) => (
            <button
              key={scheme.name}
              onClick={() => onColorSelect(scheme)}
              className={`relative p-4 rounded-lg border transition-all duration-300 ${
                selectedColors.name === scheme.name
                  ? 'bg-white/10 border-white/20 shadow-lg shadow-white/5'
                  : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
              }`}
            >
              <div className="flex gap-2 mb-3">
                <div className="w-8 h-8 rounded-full shadow-lg" style={{ backgroundColor: scheme.primary }} />
                <div className="w-8 h-8 rounded-full shadow-lg" style={{ backgroundColor: scheme.secondary }} />
                <div className="w-8 h-8 rounded-full shadow-lg" style={{ backgroundColor: scheme.accent }} />
              </div>
              <span className="text-white text-sm font-medium">{scheme.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <button
          onClick={onGenerate}
          className="block w-full max-w-2xl mx-auto bg-white text-black font-medium py-3 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm tracking-wide text-center shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-white/10"
        >
          GERAR PORTFÓLIO
        </button>
      </div>
    </div>
  );
} 