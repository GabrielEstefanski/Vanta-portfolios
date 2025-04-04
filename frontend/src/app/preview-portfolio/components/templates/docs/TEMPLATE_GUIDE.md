# Guia para Criação de Novos Templates

Este guia explica como criar novos templates de portfólio utilizando a estrutura modular que desenvolvemos.

## Estrutura Geral

A arquitetura dos templates foi construída para maximizar a reutilização de componentes e minimizar a duplicação de código. A estrutura principal inclui:

1. **BaseTemplate**: Componente base que gerencia a estrutura comum, organização e renderização das seções
2. **Componentes de Seção Base**: Implementações genéricas das seções principais (About, Experience, etc.)
3. **Seções Específicas por Template**: Personalizações de seções para cada template

## Como criar um novo Template

### 1. Crie a estrutura de pastas

```
frontend/src/app/preview-portfolio/components/templates/preview/MeuNovoTemplate/
├── MeuNovoTemplate.tsx      # Componente principal do template
├── HeaderSection.tsx        # Seção de cabeçalho personalizada
├── AboutSection.tsx         # Seção sobre personalizada
└── ...                      # Outras seções personalizadas
```

### 2. Crie o componente principal do Template

```tsx
// MeuNovoTemplate.tsx
'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { BaseTemplate, TemplateRenderers } from '../../common/BaseTemplate';
import { HeaderSection } from './HeaderSection';
import { AboutSection } from './AboutSection';
// Importe as outras seções personalizadas...

interface MeuNovoTemplateProps {
  config: TemplateConfig;
}

export function MeuNovoTemplate({ config }: MeuNovoTemplateProps) {
  if (!config || !config.props) {
    return null;
  }

  const { colors } = config.props;

  // Definição dos renderizadores específicos para o seu template
  const renderers: TemplateRenderers = {
    // Renderizadores de seções obrigatórias
    header: (config) => <HeaderSection config={config} key="header" />,
    about: (config) => <AboutSection config={config} key="about" />,
    experience: (config) => <ExperienceSection config={config} key="experience" />,
    projects: (config) => <ProjectsSection config={config} key="projects" />,
    skills: (config) => <SkillsSection config={config} key="skills" />,
    education: (config) => <EducationSection config={config} key="education" />,
    contact: (config) => <ContactSection config={config} key="contact" />,
    
    // Elementos específicos do seu template (opcionais)
    background: () => (
      // Elementos de fundo personalizados
      <div className="custom-background">
        {/* Seus elementos decorativos */}
      </div>
    ),
    
    // Estilos personalizados para este template
    customStyles: {
      // Estilos CSS específicos para o template
      backgroundColor: colors.background,
      // Outros estilos...
    }
  };

  // Usar o BaseTemplate com os renderizadores específicos
  return <BaseTemplate config={config} renderers={renderers} />;
}
```

### 3. Implementando Seções Personalizadas

Você pode optar por duas abordagens:

#### Abordagem 1: Usar componentes base com personalizações

```tsx
// AboutSection.tsx
'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { AboutSectionBase } from '../common/AboutSectionBase';

interface AboutSectionProps {
  config: TemplateConfig;
}

export function AboutSection({ config }: AboutSectionProps) {
  const { colors } = config.props;
  
  // Use o componente base com personalizações específicas
  return (
    <div className="about-wrapper relative">
      {/* Elementos decorativos específicos */}
      <div className="decorative-element"></div>
      
      {/* Usando o componente base */}
      <AboutSectionBase 
        config={config}
        sectionId="about"
        imageShape="rounded"  // Personalize parâmetros
        showImage={true}
        alignment="left"
        className="relative z-10" // Adicione classes específicas
      />
    </div>
  );
}
```

#### Abordagem 2: Implementar uma seção completamente nova

Se a seção requer uma estrutura completamente diferente, você pode criar uma implementação do zero:

```tsx
// ProjectsSection.tsx
'use client';

import React from 'react';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { BaseSectionComponent, SectionGrid, SectionCard } from '../../common/BaseSectionComponent';

interface ProjectsSectionProps {
  config: TemplateConfig;
}

export function ProjectsSection({ config }: ProjectsSectionProps) {
  const { colors, typography, data } = config.props;
  
  if (!data?.projects || data.projects.length === 0) {
    return null;
  }
  
  return (
    <BaseSectionComponent
      config={config}
      sectionId="projects"
      className="projects-section py-12"
    >
      {/* Implementação personalizada da grade de projetos */}
      <SectionGrid 
        config={config}
        columns={{ mobile: 1, tablet: 2, desktop: 3 }} 
        gap="6"
      >
        {data.projects.map((project, index) => (
          <SectionCard key={index} config={config} hoverable>
            {/* Conteúdo do card */}
            <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
              {project.title}
            </h3>
            <p className="mb-4">{project.description}</p>
            
            {/* Tecnologias */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 text-xs rounded-full"
                  style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </SectionCard>
        ))}
      </SectionGrid>
    </BaseSectionComponent>
  );
}
```

### 4. Registre seu Template

Adicione-o ao componente `TemplatePreview.tsx` para que possa ser selecionado:

```tsx
// TemplatePreview.tsx
import { MeuNovoTemplate } from './templates/preview/MeuNovoTemplate/MeuNovoTemplate';

// ...

export function TemplatePreview({ config }: TemplatePreviewProps) {
  switch (config.template) {
    case 'meu-novo-template':
      return <MeuNovoTemplate config={config} />;
    // ... outros templates
  }
}
```

## Melhores Práticas

1. **Reutilize componentes base** sempre que possível
2. **Mantenha personalizações específicas do template** separadas da lógica comum
3. **Use o sistema de cores e tipografia** do template para manter consistência
4. **Explore os componentes auxiliares** como `SectionGrid` e `SectionCard` para padronização
5. **Documente personalizações específicas** para facilitar manutenção futura

## Extensão do Sistema

Para adicionar novas funcionalidades:

1. **Componentes Base adicionais**: Crie em `common/` e disponibilize para todos os templates
2. **Props e Interfaces**: Estenda as interfaces em `BaseSectionProps.ts` conforme necessário
3. **Componentes de UI reutilizáveis**: Para elementos de UI comuns, crie no diretório `common/ui/`

## Solução de Problemas

- **Estilos não aplicados**: Verifique se está passando corretamente as propriedades `colors`, `typography` e `layout`
- **Seções não renderizadas**: Confirme que o objeto `sections` do template tem a seção habilitada e com ordem definida
- **Dados não exibidos**: Verifique se os dados estão sendo passados corretamente em `config.props.data` 