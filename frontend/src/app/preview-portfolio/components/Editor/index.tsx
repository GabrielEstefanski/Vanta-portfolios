import React, { useState } from 'react';
import { PortfolioData, Experience, Project, Skill, Education } from '@/app/types/TemplateConfig';
import { TemplateType } from '@/app/preview-portfolio/components/templates/types';
import { renderExperienceSection } from './Components/renders/experienceSection';
import { renderBasicInfoSection } from './Components/renders/basicInfoSection';
import { renderSkillsSection } from './Components/renders/renderSkillsSection';
import { renderProjectsSection } from './Components/renders/projectsSection';
import { renderEducationSection } from './Components/renders/educationSection';
import { renderCustomSectionEditor, CustomSectionEditor } from './Components/renders/customSectionEditor';
import { SectionIcon } from './Components/sections/SectionIcon';

interface ContentEditorProps {
  data: PortfolioData;
  onUpdate: (newData: PortfolioData) => void;
  templateType?: TemplateType;
}

type ContentSection = 'basic' | 'experience' | 'projects' | 'skills' | 'education' | 'custom';

export function ContentEditor({ data, onUpdate, templateType = 'modern' }: ContentEditorProps) {
  const [activeSection, setActiveSection] = useState<ContentSection | null>(null);
  const [draggedItem, setDraggedItem] = useState<{ type: string; index: number } | null>(null);
  const [dragOverItem, setDragOverItem] = useState<{ type: string; index: number; position: 'top' | 'bottom' } | null>(null);
  const [expandedItem, setExpandedItem] = useState<{ type: string; index: number } | null>(null);

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
    const newExperiences = [...data.experiences, newExperience];
    handleChange('experiences', newExperiences);
    setExpandedItem({ type: 'experience', index: newExperiences.length - 1 });
  };

  const removeExperience = (index: number) => {
    const newExperiences = [...data.experiences];
    newExperiences.splice(index, 1);
    handleChange('experiences', newExperiences);
    setExpandedItem(null);
  };

  const reorderExperiences = (fromIndex: number, toIndex: number) => {
    const newExperiences = [...data.experiences];
    const [moved] = newExperiences.splice(fromIndex, 1);
    newExperiences.splice(toIndex, 0, moved);
    handleChange('experiences', newExperiences);
    if (expandedItem?.type === 'experience') {
      if (expandedItem.index === fromIndex) {
        setExpandedItem({ type: 'experience', index: toIndex });
      } else if (
        (fromIndex < expandedItem.index && toIndex >= expandedItem.index) ||
        (fromIndex > expandedItem.index && toIndex <= expandedItem.index)
      ) {
        const newIndex = fromIndex < expandedItem.index ? expandedItem.index - 1 : expandedItem.index + 1;
        setExpandedItem({ type: 'experience', index: newIndex });
      }
    }
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
    const newProjects = [...data.projects, newProject];
    handleChange('projects', newProjects);
    setExpandedItem({ type: 'project', index: newProjects.length - 1 });
  };

  const removeProject = (index: number) => {
    const newProjects = [...data.projects];
    newProjects.splice(index, 1);
    handleChange('projects', newProjects);
    setExpandedItem(null);
  };

  const reorderProjects = (fromIndex: number, toIndex: number) => {
    const newProjects = [...data.projects];
    const [moved] = newProjects.splice(fromIndex, 1);
    newProjects.splice(toIndex, 0, moved);
    handleChange('projects', newProjects);
    if (expandedItem?.type === 'project') {
      if (expandedItem.index === fromIndex) {
        setExpandedItem({ type: 'project', index: toIndex });
      } else if (
        (fromIndex < expandedItem.index && toIndex >= expandedItem.index) ||
        (fromIndex > expandedItem.index && toIndex <= expandedItem.index)
      ) {
        const newIndex = fromIndex < expandedItem.index ? expandedItem.index - 1 : expandedItem.index + 1;
        setExpandedItem({ type: 'project', index: newIndex });
      }
    }
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
    const newSkills = [...data.skills, newSkill];
    handleChange('skills', newSkills);
    setExpandedItem({ type: 'skill', index: newSkills.length - 1 });
  };

  const removeSkill = (index: number) => {
    const newSkills = [...data.skills];
    newSkills.splice(index, 1);
    handleChange('skills', newSkills);
    setExpandedItem(null);
  };

  const reorderSkills = (fromIndex: number, toIndex: number) => {
    const newSkills = [...data.skills];
    const [moved] = newSkills.splice(fromIndex, 1);
    newSkills.splice(toIndex, 0, moved);
    handleChange('skills', newSkills);
    if (expandedItem?.type === 'skill') {
      if (expandedItem.index === fromIndex) {
        setExpandedItem({ type: 'skill', index: toIndex });
      } else if (
        (fromIndex < expandedItem.index && toIndex >= expandedItem.index) ||
        (fromIndex > expandedItem.index && toIndex <= expandedItem.index)
      ) {
        const newIndex = fromIndex < expandedItem.index ? expandedItem.index - 1 : expandedItem.index + 1;
        setExpandedItem({ type: 'skill', index: newIndex });
      }
    }
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
    const newEducationList = [...(data.education || []), newEducation];
    handleChange('education', newEducationList);
    setExpandedItem({ type: 'education', index: newEducationList.length - 1 });
  };

  const removeEducation = (index: number) => {
    const newEducation = [...(data.education || [])];
    newEducation.splice(index, 1);
    handleChange('education', newEducation);
    setExpandedItem(null);
  };

  const reorderEducation = (fromIndex: number, toIndex: number) => {
    const newEducation = [...(data.education || [])];
    const [moved] = newEducation.splice(fromIndex, 1);
    newEducation.splice(toIndex, 0, moved);
    handleChange('education', newEducation);
    if (expandedItem?.type === 'education') {
      if (expandedItem.index === fromIndex) {
        setExpandedItem({ type: 'education', index: toIndex });
      } else if (
        (fromIndex < expandedItem.index && toIndex >= expandedItem.index) ||
        (fromIndex > expandedItem.index && toIndex <= expandedItem.index)
      ) {
        const newIndex = fromIndex < expandedItem.index ? expandedItem.index - 1 : expandedItem.index + 1;
        setExpandedItem({ type: 'education', index: newIndex });
      }
    }
  };

  const handleDragStart = (type: string, index: number) => {
    setDraggedItem({ type, index });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.type !== type) return;
    
    const targetElement = e.currentTarget as HTMLElement;
    const rect = targetElement.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    
    const position = e.clientY < midpoint ? 'top' : 'bottom';
    setDragOverItem({ type, index, position });
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setDragOverItem(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, type: string, index: number) => {
    e.preventDefault();
    
    if (!draggedItem || draggedItem.type !== type || draggedItem.index === index) {
      setDraggedItem(null);
      setDragOverItem(null);
      return;
    }
    
    const targetElement = e.currentTarget as HTMLElement;
    const rect = targetElement.getBoundingClientRect();
    const midpoint = rect.top + rect.height / 2;
    let dropIndex = index;
    if (e.clientY >= midpoint) {
        dropIndex += 1;
    }
    
    const finalDropIndex = dropIndex > draggedItem.index ? dropIndex - 1 : dropIndex;

    switch (type) {
      case 'experience':
        reorderExperiences(draggedItem.index, finalDropIndex);
        break;
      case 'project':
        reorderProjects(draggedItem.index, finalDropIndex);
        break;
      case 'skill':
        reorderSkills(draggedItem.index, finalDropIndex);
        break;
      case 'education':
        reorderEducation(draggedItem.index, finalDropIndex);
        break;
    }
    
    setDraggedItem(null);
    setDragOverItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverItem(null);
  };

  const toggleExpandItem = (type: string, index: number) => {
    if (expandedItem?.type === type && expandedItem.index === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem({ type, index });
    }
  };

  const getIsDragging = (type: string, index: number) => {
    return draggedItem?.type === type && draggedItem.index === index;
  };

  const getIsDraggedOver = (type: string, index: number) => {
    return dragOverItem?.type === type && dragOverItem.index === index;
  };

  const getInsertPosition = (type: string, index: number) => {
    if (!dragOverItem || dragOverItem.type !== type || dragOverItem.index !== index) {
      return null;
    }
    return dragOverItem.position;
  };
  
  const sectionLinks = [
    { id: 'basic', label: 'Informações Básicas', icon: 'basic', count: 1 },
    { id: 'experience', label: 'Experiências', icon: 'experience', count: data.experiences.length },
    { id: 'projects', label: 'Projetos', icon: 'projects', count: data.projects.length },
    { id: 'skills', label: 'Habilidades', icon: 'skills', count: data.skills.length },
    { id: 'education', label: 'Educação', icon: 'education', count: data.education?.length || 0 },
    { id: 'custom', label: 'Seções Personalizadas', icon: 'custom', count: data.customSections?.length || 0 }
  ];

  const renderSectionContent = (sectionId: ContentSection) => {
    switch (sectionId) {
      case 'basic':
        return renderBasicInfoSection(data, handleChange);
      case 'experience':
        return renderExperienceSection(
          addExperience, data, expandedItem, handleDragStart, handleDragOver,
          handleDragLeave, handleDrop, toggleExpandItem, updateExperience, removeExperience
        );
      case 'projects':
        return renderProjectsSection(
          addProject, data, expandedItem, handleDragStart, handleDragOver,
          handleDragLeave, handleDrop, toggleExpandItem, updateProject, removeProject,
          getIsDragging, getIsDraggedOver, getInsertPosition
        );
      case 'skills':
        return renderSkillsSection(
          addSkill, data, expandedItem, handleDragStart, handleDragOver,
          handleDragLeave, handleDrop, toggleExpandItem, updateSkill, removeSkill
        );
      case 'education':
        return renderEducationSection(
          addEducation, data, expandedItem, handleDragStart, handleDragOver,
          handleDragLeave, handleDrop, toggleExpandItem, updateEducation, removeEducation
        );
      case 'custom':
        return (
          <CustomSectionEditor 
            sections={Array.isArray(data.customSections) ? data.customSections : []}
            onUpdate={(customSections) => handleChange('customSections', customSections)}
            templateType={templateType}
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="h-full text-white bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm overflow-y-auto custom-scrollbar">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-1">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Conteúdo do Portfólio
            </span>
          </h2>
          <p className="text-white/60 text-sm">
            Gerencie todas as seções e informações do seu portfólio
          </p>
        </div>

        <div className="space-y-4">
          {sectionLinks.map((section) => (
            <div 
              key={section.id} 
              className="border border-white/10 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm hover:border-purple-500/50 transition-all"
            >
              <button
                onClick={() => setActiveSection(activeSection === section.id as ContentSection ? null : section.id as ContentSection)}
                className="w-full px-5 py-4 flex items-center justify-between transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${activeSection === section.id ? 'bg-purple-500/20' : 'bg-white/5'}`}>
                    <SectionIcon 
                      icon={section.icon} 
                      size="small" 
                      showBackground={false} 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-md font-medium text-white">{section.label}</h3>
                    <p className="text-xs text-white/60">
                      {section.id === 'basic' 
                        ? 'Informações principais do seu perfil' 
                        : `${section.count} ${section.count === 1 ? 'item' : 'itens'} adicionados`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full ${
                    activeSection === section.id 
                      ? 'bg-purple-500/20 text-purple-300' 
                      : 'bg-white/5 text-white/60'
                  }`}>
                    {activeSection === section.id ? 'Editando' : 'Editar'}
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 text-white/60 transition-transform ${activeSection === section.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {activeSection === section.id && (
                <div className="border-t border-white/10 px-5 py-6 bg-black/10">
                  {renderSectionContent(section.id as ContentSection)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </div>
  );
} 