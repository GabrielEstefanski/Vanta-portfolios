'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import BasicInfoForm from './components/BasicInfoForm';
import ExperienceForm from './components/ExperienceForm';
import ProjectForm from './components/ProjectForm';
import CertificateForm from './components/CertificateForm';
import TemplateSelector from './components/TemplateSelector';
import FormTabs from './components/FormTabs';
import EmptyFieldsWarning from './components/EmptyFieldsWarning';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
}

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

const templates: Template[] = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Design limpo e minimalista, focado no conteúdo',
    preview: '/templates/minimal.png',
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      accent: '#666666'
    }
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Layout moderno com elementos interativos',
    preview: '/templates/modern.png',
    colors: {
      primary: '#1a1a1a',
      secondary: '#ffffff',
      accent: '#3b82f6'
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Design profissional e corporativo',
    preview: '/templates/professional.png',
    colors: {
      primary: '#111827',
      secondary: '#ffffff',
      accent: '#4f46e5'
    }
  }
];

const colorSchemes: ColorScheme[] = [
  {
    name: 'Classic',
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#666666'
  },
  {
    name: 'Ocean',
    primary: '#0f172a',
    secondary: '#ffffff',
    accent: '#3b82f6'
  },
  {
    name: 'Forest',
    primary: '#1a2e1a',
    secondary: '#ffffff',
    accent: '#22c55e'
  },
  {
    name: 'Sunset',
    primary: '#2a1a1a',
    secondary: '#ffffff',
    accent: '#f97316'
  }
];

export default function EditPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState('basic');
  const [mounted, setMounted] = useState(false);
  const [showWarnings, setShowWarnings] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [importSource, setImportSource] = useState<'linkedin' | 'github' | 'manual' | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState(colorSchemes[0]);
  const [basicInfo, setBasicInfo] = useState({
    name: 'João Silva',
    title: 'Desenvolvedor Full Stack',
    email: 'joao@example.com',
    phone: '(11) 99999-9999',
    location: 'São Paulo, SP',
    bio: 'Desenvolvedor apaixonado por criar experiências digitais incríveis.',
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      company: 'Tech Solutions',
      position: 'Desenvolvedor Full Stack',
      period: '2020 - Presente',
      description: 'Desenvolvimento de aplicações web modernas usando React e Node.js.',
    },
    {
      id: 2,
      company: 'Digital Agency',
      position: 'Desenvolvedor Frontend',
      period: '2018 - 2020',
      description: 'Criação de interfaces responsivas e otimizadas.',
    },
  ]);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho e pagamentos.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/example/ecommerce',
    },
    {
      id: 2,
      name: 'Portfolio Generator',
      description: 'Gerador de portfólios profissionais com templates modernos.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/example/portfolio',
    },
  ]);

  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: 1,
      name: 'Certificado Exemplo',
      issuer: 'Instituição de Ensino',
      date: '2023',
      link: 'https://example.com/certificate',
    },
  ]);

  useEffect(() => {
    setMounted(true);
    
    const source = searchParams.get('import');
    const templateParam = searchParams.get('template');
    const colorsParam = searchParams.get('colors');
    
    if (source) setImportSource(source as 'linkedin' | 'github' | 'manual');
    if (templateParam) setSelectedTemplate(templateParam);
    if (colorsParam) setSelectedColors(JSON.parse(colorsParam));
  }, [searchParams]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: experiences.length + 1,
        company: '',
        position: '',
        period: '',
        description: '',
      },
    ]);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        name: '',
        description: '',
        technologies: [],
        link: '',
      },
    ]);
  };

  const addCertificate = () => {
    setCertificates([
      ...certificates,
      {
        id: certificates.length + 1,
        name: '',
        issuer: '',
        date: '',
        link: '',
      },
    ]);
  };

  const checkEmptyFields = () => {
    const emptyFields = [];
    
    if (!basicInfo.name) emptyFields.push('Nome');
    if (!basicInfo.title) emptyFields.push('Título');
    if (!basicInfo.bio) emptyFields.push('Bio');
    if (!basicInfo.email) emptyFields.push('Email');
  
    experiences.forEach((exp, index) => {
      if (!exp.company) emptyFields.push(`Empresa ${index + 1}`);
      if (!exp.position) emptyFields.push(`Cargo ${index + 1}`);
      if (!exp.period) emptyFields.push(`Período ${index + 1}`);
      if (!exp.description) emptyFields.push(`Descrição ${index + 1}`);
    });
    
    projects.forEach((proj, index) => {
      if (!proj.name) emptyFields.push(`Nome do Projeto ${index + 1}`);
      if (!proj.description) emptyFields.push(`Descrição do Projeto ${index + 1}`);
      if (!proj.link) emptyFields.push(`Link do Projeto ${index + 1}`);
    });
    
    certificates.forEach((cert, index) => {
      if (!cert.name) emptyFields.push(`Nome do Certificado ${index + 1}`);
      if (!cert.issuer) emptyFields.push(`Instituição ${index + 1}`);
      if (!cert.date) emptyFields.push(`Data ${index + 1}`);
      if (!cert.link) emptyFields.push(`Link do Certificado ${index + 1}`);
    });
    
    return emptyFields;
  };

  const handlePreview = () => {
    const emptyFields = checkEmptyFields();
    if (emptyFields.length > 0) {
      setShowWarnings(true);
      return;
    }
    setShowTemplates(true);
  };

  const handleGenerate = () => {
    window.location.href = `/onboarding/preview?template=${selectedTemplate}&colors=${JSON.stringify(selectedColors)}`;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] animate-grid-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <Link href="/" className="inline-block mb-4 group">
            <span className="text-4xl font-light tracking-tight text-white relative">
              VANTA
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
          </Link>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-150" />
            <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse delay-300" />
          </div>
        </div>

        {showWarnings && (
          <EmptyFieldsWarning emptyFields={checkEmptyFields()} />
        )}

        {!showTemplates ? (
          <div className={`bg-white/5 backdrop-blur-sm border border-white/5 rounded-lg p-8 relative overflow-hidden transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 animate-glow" />
            
            <FormTabs activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="relative">
              {activeTab === 'basic' && (
                <BasicInfoForm basicInfo={basicInfo} onChange={setBasicInfo} />
              )}

              {activeTab === 'experience' && (
                <ExperienceForm
                  experiences={experiences}
                  onChange={setExperiences}
                  onAdd={addExperience}
                />
              )}

              {activeTab === 'projects' && (
                <ProjectForm
                  projects={projects}
                  onChange={setProjects}
                  onAdd={addProject}
                />
              )}

              {activeTab === 'certificates' && (
                <CertificateForm
                  certificates={certificates}
                  onChange={setCertificates}
                  onAdd={addCertificate}
                />
              )}
            </div>

            <div className={`mt-12 transform transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <button 
                onClick={handlePreview}
                className="block w-full max-w-2xl mx-auto bg-white text-black font-medium py-3 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm tracking-wide text-center shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-white/10"
              >
                ESCOLHER TEMPLATE
              </button>
            </div>
          </div>
        ) : (
          <TemplateSelector
            templates={templates}
            colorSchemes={colorSchemes}
            selectedTemplate={selectedTemplate}
            selectedColors={selectedColors}
            onTemplateSelect={setSelectedTemplate}
            onColorSelect={setSelectedColors}
            onGenerate={handleGenerate}
          />
        )}

        <div className={`mt-8 text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-sm text-gray-400">
            {importSource === 'manual' 
              ? 'Preencha todos os campos para gerar seu portfólio'
              : 'Revise e ajuste as informações importadas antes de gerar seu portfólio'}
          </p>
        </div>
      </div>
    </div>
  );
} 