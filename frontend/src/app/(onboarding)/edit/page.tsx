'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

export default function EditPage() {
  const [activeTab, setActiveTab] = useState('basic');
  const [mounted, setMounted] = useState(false);
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
  }, []);

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

        <div className={`bg-white/5 backdrop-blur-sm border border-white/5 rounded-lg p-8 relative overflow-hidden transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 animate-glow" />

          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {['basic', 'experience', 'projects', 'certificates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-white/10 text-white shadow-lg shadow-white/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'basic' && 'Informações Básicas'}
                {tab === 'experience' && 'Experiências'}
                {tab === 'projects' && 'Projetos'}
                {tab === 'certificates' && 'Certificados'}
              </button>
            ))}
          </div>

          <div className="relative">
            {activeTab === 'basic' && (
              <div className={`space-y-6 transform transition-all duration-500 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Nome</label>
                    <input
                      type="text"
                      value={basicInfo.name}
                      onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Título</label>
                    <input
                      type="text"
                      value={basicInfo.title}
                      onChange={(e) => setBasicInfo({ ...basicInfo, title: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Bio</label>
                  <textarea
                    value={basicInfo.bio}
                    onChange={(e) => setBasicInfo({ ...basicInfo, bio: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300 h-32 resize-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={basicInfo.email}
                      onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={basicInfo.phone}
                      onChange={(e) => setBasicInfo({ ...basicInfo, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Localização</label>
                    <input
                      type="text"
                      value={basicInfo.location}
                      onChange={(e) => setBasicInfo({ ...basicInfo, location: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className={`space-y-6 transform transition-all duration-500 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                {experiences.map((exp) => (
                  <div key={exp.id} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Empresa</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const newExperiences = experiences.map((experience) =>
                              experience.id === exp.id ? { ...experience, company: e.target.value } : experience
                            );
                            setExperiences(newExperiences);
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Cargo</label>
                        <input
                          type="text"
                          value={exp.position}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const newExperiences = experiences.map((experience) =>
                              experience.id === exp.id ? { ...experience, position: e.target.value } : experience
                            );
                            setExperiences(newExperiences);
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm text-gray-400 mb-2">Período</label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newExperiences = experiences.map((experience) =>
                            experience.id === exp.id ? { ...experience, period: e.target.value } : experience
                          );
                          setExperiences(newExperiences);
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                      />
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm text-gray-400 mb-2">Descrição</label>
                      <textarea
                        value={exp.description}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                          const newExperiences = experiences.map((experience) =>
                            experience.id === exp.id ? { ...experience, description: e.target.value } : experience
                          );
                          setExperiences(newExperiences);
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300 h-32 resize-none"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addExperience}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                >
                  Adicionar Experiência
                </button>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className={`space-y-6 transform transition-all duration-500 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                {projects.map((project) => (
                  <div key={project.id} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Nome do Projeto</label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => {
                          const newProjects = projects.map((p) =>
                            p.id === project.id ? { ...p, name: e.target.value } : p
                          );
                          setProjects(newProjects);
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                      />
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm text-gray-400 mb-2">Descrição</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => {
                          const newProjects = projects.map((p) =>
                            p.id === project.id ? { ...p, description: e.target.value } : p
                          );
                          setProjects(newProjects);
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300 h-32 resize-none"
                      />
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm text-gray-400 mb-2">Link do Projeto</label>
                      <input
                        type="url"
                        value={project.link}
                        onChange={(e) => {
                          const newProjects = projects.map((p) =>
                            p.id === project.id ? { ...p, link: e.target.value } : p
                          );
                          setProjects(newProjects);
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
                <button
                  onClick={addProject}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                >
                  Adicionar Projeto
                </button>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className={`space-y-6 transform transition-all duration-500 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                {certificates.map((cert) => (
                  <div key={cert.id} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Nome do Certificado</label>
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) => {
                            const newCertificates = certificates.map((c) =>
                              c.id === cert.id ? { ...c, name: e.target.value } : c
                            );
                            setCertificates(newCertificates);
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Instituição</label>
                        <input
                          type="text"
                          value={cert.issuer}
                          onChange={(e) => {
                            const newCertificates = certificates.map((c) =>
                              c.id === cert.id ? { ...c, issuer: e.target.value } : c
                            );
                            setCertificates(newCertificates);
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Data</label>
                        <input
                          type="text"
                          value={cert.date}
                          onChange={(e) => {
                            const newCertificates = certificates.map((c) =>
                              c.id === cert.id ? { ...c, date: e.target.value } : c
                            );
                            setCertificates(newCertificates);
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Link do Certificado</label>
                        <input
                          type="url"
                          value={cert.link}
                          onChange={(e) => {
                            const newCertificates = certificates.map((c) =>
                              c.id === cert.id ? { ...c, link: e.target.value } : c
                            );
                            setCertificates(newCertificates);
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-white/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addCertificate}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                >
                  Adicionar Certificado
                </button>
              </div>
            )}
          </div>

          <div className={`mt-12 transform transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Link 
              href="/onboarding/preview"
              className="block w-full max-w-2xl mx-auto bg-white text-black font-medium py-3 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm tracking-wide text-center shadow-lg shadow-white/5 hover:shadow-xl hover:shadow-white/10"
            >
              PREVIEW DO PORTFÓLIO
            </Link>
          </div>
        </div>

        <div className={`mt-8 text-center transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-sm text-gray-400">
            Suas informações serão salvas automaticamente
          </p>
        </div>
      </div>
    </div>
  );
} 