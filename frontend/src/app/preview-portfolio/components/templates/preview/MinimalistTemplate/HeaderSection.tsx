import { TemplateConfig } from "../../../../../types/TemplateConfig";

export function HeaderSection({ config }: { config: TemplateConfig }) {
    const { colors, typography, data } = config.props;
    
    return (
      <section className="py-16 text-center border-b border-gray-100 dark:border-gray-800">
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-light mb-4 ${typography.headingFont}`}
          style={{ color: colors.primary }}
        >
          {data?.name || 'João da Silva'}
        </h1>
        <h2 
          className={`text-xl md:text-2xl font-extralight tracking-wide mb-8 ${typography.bodyFont}`}
          style={{ color: colors.secondary }}
        >
          {data?.title || 'Desenvolvedor Full Stack'}
        </h2>
        <p className="max-w-2xl mx-auto text-lg font-light leading-relaxed">
          {data?.about || 'Desenvolvedor apaixonado por criar soluções web eficientes e experiências digitais incríveis.'}
        </p>
      </section>
    );
  };