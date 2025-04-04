import { v4 as uuidv4 } from 'uuid';
import { CustomSection, CustomElement, CustomCard } from '@/app/preview-portfolio/components/templates/types';
import { TemplateType } from '@/app/preview-portfolio/components/templates/types';

export function createSectionTemplate(templateType: TemplateType): CustomSection {
  const sectionId = uuidv4();
  
  switch (templateType) {
    case 'modern':
      return createModernSectionTemplate(sectionId);
    case 'cosmos':
      return createCosmosSectionTemplate(sectionId);
    case 'vanta':
      return createVantaSectionTemplate(sectionId);
    default:
      return createDefaultSectionTemplate(sectionId);
  }
}

function createDefaultSectionTemplate(sectionId: string): CustomSection {
  return {
    id: sectionId,
    title: 'Nova Seção',
    elements: [
      createTextElement('Título da Seção', true, 2),
      createTextElement('Este é um parágrafo de exemplo. Você pode editar ou remover este texto e adicionar outros elementos à sua seção personalizada.', false)
    ],
    layout: 'standard',
    columns: 1,
    gap: '1rem'
  };
}

function createModernSectionTemplate(sectionId: string): CustomSection {
  return {
    id: sectionId,
    title: 'Conquistas',
    layout: 'grid',
    columns: 3,
    gap: '1.5rem',
    elements: [
      createCardElement({
        title: 'Projetos Concluídos',
        subtitle: 'Mais de 50+',
        content: 'Entrega consistente de projetos com alta qualidade e dentro do prazo.',
        imageUrl: ''
      }),
      createCardElement({
        title: 'Clientes Satisfeitos',
        subtitle: 'Satisfação 100%',
        content: 'Comprometimento com a excelência e satisfação do cliente em todos os projetos.',
        imageUrl: ''
      }),
      createCardElement({
        title: 'Reconhecimentos',
        subtitle: 'Premiações',
        content: 'Reconhecimento por inovação e qualidade pela comunidade tecnológica.',
        imageUrl: ''
      }),
      createTextElement('Sua jornada profissional é marcada por realizações significativas. Esta seção destaca seus principais marcos e conquistas.', false)
    ]
  };
}

function createCosmosSectionTemplate(sectionId: string): CustomSection {
  return {
    id: sectionId,
    title: 'Especialidades',
    layout: 'grid',
    columns: 2,
    gap: '2rem',
    elements: [
      createTextElement('Áreas de Especialização', true, 2),
      createCardElement({
        title: 'Desenvolvimento Web',
        subtitle: 'Frontend & Backend',
        content: 'Especialista em criar aplicações web responsivas, performáticas e acessíveis utilizando tecnologias modernas.',
        imageUrl: ''
      }),
      createCardElement({
        title: 'UI/UX Design',
        subtitle: 'Experiência do Usuário',
        content: 'Design de interfaces intuitivas que equilibram estética e funcionalidade para criar experiências memoráveis.',
        imageUrl: ''
      }),
      createCardElement({
        title: 'DevOps',
        subtitle: 'Infraestrutura & CI/CD',
        content: 'Implementação de pipelines de integração contínua e entrega contínua para automatizar processos de desenvolvimento.',
        imageUrl: ''
      }),
      createCardElement({
        title: 'Consultoria',
        subtitle: 'Soluções Tecnológicas',
        content: 'Assessoria em decisões tecnológicas, arquitetura de software e escolha de ferramentas adequadas para cada projeto.',
        imageUrl: ''
      })
    ]
  };
}

function createVantaSectionTemplate(sectionId: string): CustomSection {
  return {
    id: sectionId,
    title: 'Publicações e Contribuições',
    layout: 'standard',
    gap: '1rem',
    elements: [
      createTextElement('Artigos & Contribuições Open Source', true, 2),
      createTextElement('Compartilho regularmente conhecimento com a comunidade tecnológica através de artigos, palestras e contribuições para projetos de código aberto.', false),
      createCardElement({
        title: 'Clean Architecture em Aplicações React',
        subtitle: 'Medium - 2023',
        content: 'Artigo detalhando como implementar princípios de Clean Architecture em aplicações React para melhorar a manutenibilidade e escalabilidade.',
        imageUrl: ''
      }),
      createCardElement({
        title: 'Contribuições para React Testing Library',
        subtitle: 'GitHub - 2022',
        content: 'Melhorias na documentação e novos helpers para facilitar testes em componentes React com contextos complexos.',
        imageUrl: ''
      }),
      createDividerElement(),
      createTextElement('Palestras Recentes', true, 3),
      createCardElement({
        title: 'O Futuro do Desenvolvimento Frontend',
        subtitle: 'ReactConf BR - 2023',
        content: 'Análise das tendências e tecnologias emergentes que estão moldando o futuro do desenvolvimento frontend.',
        imageUrl: ''
      })
    ]
  };
}

function createTextElement(
  content: string, 
  isHeading: boolean = false, 
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 2
): CustomElement {
  return {
    id: uuidv4(),
    type: 'text',
    content: {
      content,
      isHeading,
      headingLevel: isHeading ? headingLevel : undefined
    },
    styles: {}
  };
}

function createCardElement(card: Partial<CustomCard>): CustomElement {
  return {
    id: uuidv4(),
    type: 'card',
    content: {
      title: card.title || 'Título do Card',
      subtitle: card.subtitle || '',
      content: card.content || 'Conteúdo do card',
      imageUrl: card.imageUrl || '',
      links: card.links || []
    },
    styles: {}
  };
}

function createDividerElement(): CustomElement {
  return {
    id: uuidv4(),
    type: 'divider',
    content: {
      style: 'solid',
      color: '#e2e8f0',
      thickness: '1px'
    },
    styles: {}
  };
}

function createImageElement(url: string, alt: string, caption: string = ''): CustomElement {
  return {
    id: uuidv4(),
    type: 'image',
    content: {
      url,
      alt,
      caption
    },
    styles: {}
  };
} 