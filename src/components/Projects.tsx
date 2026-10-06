import Image from 'next/image';
import Section from './Section';
import Reveal from './Reveal';
import ButtonLink from './ButtonLink';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="A selection of websites and apps I have built.">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.name} className="flex">
            <Reveal delay={i * 100} className="flex w-full">
              <article className="group flex w-full flex-col overflow-hidden rounded-3xl bg-pale transition duration-300 hover:-translate-y-2 hover:bg-butter hover:shadow-[0_18px_40px_rgba(0,75,173,0.18)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={project.image} alt={`Screenshot of ${project.name}`} fill sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-cobalt">{project.name}</h3>
                  <p className="mt-2 flex-1 text-ink-soft group-hover:text-ink">{project.description}</p>
                  <div className="mt-5">
                    <ButtonLink href={project.link} external>
                      View project
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
