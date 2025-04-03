import { ColorScheme, TypographyConfig } from '../types';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
  colors: ColorScheme;
  typography: TypographyConfig;
}

export function Projects({ projects, colors, typography }: ProjectsProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16 py-24">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                
                <div className="relative p-8">
                  {project.imageUrl && (
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <div className="aspect-video bg-white/5" />
                      <img 
                        src={project.imageUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                      />
                    </div>
                  )}

                  <h3 className={`text-2xl font-light tracking-wide text-white/90 mb-4 ${typography.headingFont}`}>
                    {project.title}
                  </h3>

                  <p className={`text-white/70 leading-relaxed mb-6 ${typography.bodyFont}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm tracking-wide text-white/40 bg-white/5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/40 group-hover/link:bg-white transition-colors duration-300" />
                        <span className="text-sm tracking-wide">Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/40 group-hover/link:bg-white transition-colors duration-300" />
                        <span className="text-sm tracking-wide">GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 