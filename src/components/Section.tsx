import Reveal from './Reveal';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-16 px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-cobalt md:text-6xl">{title}</h2>
          {subtitle && <p className="mt-4 max-w-xl text-ink-soft">{subtitle}</p>}
        </Reveal>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
