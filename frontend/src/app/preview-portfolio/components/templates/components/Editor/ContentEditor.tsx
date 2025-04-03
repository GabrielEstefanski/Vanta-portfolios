import React from 'react';
import { PortfolioData, Experience, Project, Skill, Education } from '@/app/types/TemplateConfig';

interface ContentEditorProps {
  data: PortfolioData;
  onUpdate: (newData: PortfolioData) => void;
}

export function ContentEditor({ data, onUpdate }: ContentEditorProps) {
  const handleChange = (field: keyof PortfolioData, value: any) => {
    onUpdate({
      ...data,
      [field]: value
    });
  };

  const updateExperience = (index: number, updatedExp: Experience) => {
    const newExperiences = [...data.experiences];
    newExperiences[index] = updatedExp;
    handleChange('experiences', newExperiences);
  };

  const addExperience = () => {
    const newExperience: Experience = {
      company: 'Nova Empresa',
      position: 'Cargo',
      startDate: '2023',
      endDate: 'Presente',
      description: 'Descrição da experiência profissional',
      technologies: ['React', 'JavaScript']
    };
    handleChange('experiences', [...data.experiences, newExperience]);
  };

  const removeExperience = (index: number) => {
    const newExperiences = [...data.experiences];
    newExperiences.splice(index, 1);
    handleChange('experiences', newExperiences);
  };

  const updateProject = (index: number, updatedProj: Project) => {
    const newProjects = [...data.projects];
    newProjects[index] = updatedProj;
    handleChange('projects', newProjects);
  };

  const addProject = () => {
    const newProject: Project = {
      title: 'Novo Projeto',
      description: 'Descrição do projeto',
      technologies: ['React', 'JavaScript'],
      imageUrl: '/placeholder.jpg'
    };
    handleChange('projects', [...data.projects, newProject]);
  };

  const removeProject = (index: number) => {
    const newProjects = [...data.projects];
    newProjects.splice(index, 1);
    handleChange('projects', newProjects);
  };

  const updateSkill = (index: number, updatedSkill: Skill) => {
    const newSkills = [...data.skills];
    newSkills[index] = updatedSkill;
    handleChange('skills', newSkills);
  };

  const addSkill = () => {
    const newSkill: Skill = {
      name: 'Nova Habilidade',
      level: 75,
      category: 'Frontend'
    };
    handleChange('skills', [...data.skills, newSkill]);
  };

  const removeSkill = (index: number) => {
    const newSkills = [...data.skills];
    newSkills.splice(index, 1);
    handleChange('skills', newSkills);
  };

  const updateEducation = (index: number, updatedEdu: Education) => {
    const newEducation = [...(data.education || [])];
    newEducation[index] = updatedEdu;
    handleChange('education', newEducation);
  };

  const addEducation = () => {
    const newEducation: Education = {
      institution: 'Nova Instituição',
      degree: 'Curso/Graduação',
      period: '2020 - 2024',
      description: 'Descrição da formação'
    };
    handleChange('education', [...(data.education || []), newEducation]);
  };

  const removeEducation = (index: number) => {
    const newEducation = [...(data.education || [])];
    newEducation.splice(index, 1);
    handleChange('education', newEducation);
  };

  return (
    <div className="space-y-8 text-white">
      <h3 className="text-lg font-light tracking-wider mb-4">Informações Básicas</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">Nome</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">Título</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">Sobre</label>
          <textarea
            value={data.about}
            onChange={(e) => handleChange('about', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">Telefone</label>
            <input
              type="text"
              value={data.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-light text-gray-400 mb-2 tracking-wide">Localização</label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
          />
        </div>
      </div>
      
      {/* Experiências */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-light tracking-wider">Experiências</h3>
          <button
            onClick={addExperience}
            className="px-2 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors"
          >
            + Adicionar
          </button>
        </div>
        
        <div className="space-y-6">
          {data.experiences.map((exp, index) => (
            <div key={index} className="p-4 border border-white/10 rounded-lg bg-white/5">
              <div className="flex justify-between mb-2">
                <h4 className="font-medium">Experiência {index + 1}</h4>
                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remover
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Empresa</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(index, { ...exp, company: e.target.value })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Cargo</label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateExperience(index, { ...exp, position: e.target.value })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Data Início</label>
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(index, { ...exp, startDate: e.target.value })}
                      className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Data Fim</label>
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(index, { ...exp, endDate: e.target.value })}
                      className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Descrição</label>
                  <textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(index, { ...exp, description: e.target.value })}
                    rows={3}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Tecnologias (separadas por vírgula)</label>
                  <input
                    type="text"
                    value={exp.technologies.join(', ')}
                    onChange={(e) => updateExperience(index, { 
                      ...exp, 
                      technologies: e.target.value.split(',').map(item => item.trim()).filter(Boolean)
                    })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Projetos */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-light tracking-wider">Projetos</h3>
          <button
            onClick={addProject}
            className="px-2 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors"
          >
            + Adicionar
          </button>
        </div>
        
        <div className="space-y-6">
          {data.projects.map((project, index) => (
            <div key={index} className="p-4 border border-white/10 rounded-lg bg-white/5">
              <div className="flex justify-between mb-2">
                <h4 className="font-medium">Projeto {index + 1}</h4>
                <button
                  onClick={() => removeProject(index)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remover
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Título</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(index, { ...project, title: e.target.value })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Descrição</label>
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProject(index, { ...project, description: e.target.value })}
                    rows={3}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">URL da Imagem</label>
                  <input
                    type="text"
                    value={project.imageUrl || ''}
                    onChange={(e) => updateProject(index, { ...project, imageUrl: e.target.value })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Tecnologias (separadas por vírgula)</label>
                  <input
                    type="text"
                    value={project.technologies.join(', ')}
                    onChange={(e) => updateProject(index, { 
                      ...project, 
                      technologies: e.target.value.split(',').map(item => item.trim()).filter(Boolean)
                    })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Habilidades */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-light tracking-wider">Habilidades</h3>
          <button
            onClick={addSkill}
            className="px-2 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors"
          >
            + Adicionar
          </button>
        </div>
        
        <div className="space-y-4">
          {data.skills.map((skill, index) => (
            <div key={index} className="p-4 border border-white/10 rounded-lg bg-white/5">
              <div className="flex justify-between mb-2">
                <h4 className="font-medium">Habilidade {index + 1}</h4>
                <button
                  onClick={() => removeSkill(index)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remover
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Nome</label>
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => updateSkill(index, { ...skill, name: e.target.value })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Nível ({skill.level}%)</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    onChange={(e) => updateSkill(index, { ...skill, level: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Categoria</label>
                  <input
                    type="text"
                    value={skill.category}
                    onChange={(e) => updateSkill(index, { ...skill, category: e.target.value })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Educação */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-light tracking-wider">Educação</h3>
          <button
            onClick={addEducation}
            className="px-2 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors"
          >
            + Adicionar
          </button>
        </div>
        
        <div className="space-y-6">
          {(data.education || []).map((edu, index) => (
            <div key={index} className="p-4 border border-white/10 rounded-lg bg-white/5">
              <div className="flex justify-between mb-2">
                <h4 className="font-medium">Formação {index + 1}</h4>
                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remover
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Instituição</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(index, { ...edu, institution: e.target.value })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Curso/Graduação</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, { ...edu, degree: e.target.value })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Período</label>
                  <input
                    type="text"
                    value={edu.period}
                    onChange={(e) => updateEducation(index, { ...edu, period: e.target.value })}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Descrição</label>
                  <textarea
                    value={edu.description || ''}
                    onChange={(e) => updateEducation(index, { ...edu, description: e.target.value })}
                    rows={3}
                    className="w-full px-2 py-1 bg-white/5 border border-white/10 rounded text-white text-sm tracking-wide focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 