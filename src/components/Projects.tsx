'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from './Section';
import Reveal from './Reveal';
import ButtonLink from './ButtonLink';
import ProjectScreenshotModal from './ProjectScreenshotModal';
import { projects } from '@/data/portfolio';

const MOBILE_LIMIT = 3;

type Category = 'Web Development' | 'Machine Learning';

const categories: Category[] = ['Web Development', 'Machine Learning'];

type ScreenshotProject = (typeof projects)[number] & {
  type: 'screenshots';
  screenshots: string[];
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Category>('Web Development');
  const [expanded, setExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ScreenshotProject | null>(null);

  const filteredProjects = projects.filter((project) => project.category === activeTab);

  const hasMore = filteredProjects.length > MOBILE_LIMIT;

  const screenshotProjects = projects as (typeof projects)[number][];

  const openScreenshots = (project: (typeof projects)[number]) => {
    if (project.type === 'screenshots' && 'screenshots' in project && Array.isArray(project.screenshots)) {
      setSelectedProject(project as ScreenshotProject);
    }
  };

  const changeTab = (tab: Category) => {
    setActiveTab(tab);
    setExpanded(false);
  };

  return (
    <>
      <Section id="projects" title="Projects">
        {/* TAB */}
        <div className="mb-10 flex border-b border-ink/15">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => changeTab(category)}
              className={`px-5 py-3 text-sm font-semibold transition-colors duration-300 ${activeTab === category ? 'border-b-2 border-cobalt text-cobalt' : 'text-ink/60 hover:text-cobalt'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul key={activeTab} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <li key={project.name} className={!expanded && i >= MOBILE_LIMIT ? 'hidden sm:flex' : 'flex'}>
              <Reveal delay={i * 100} className="flex w-full">
                <article className="group flex w-full flex-col overflow-hidden rounded-3xl bg-pale transition duration-300 hover:-translate-y-2 hover:bg-butter hover:shadow-[0_18px_40px_rgba(0,75,173,0.18)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={project.image} alt={`Screenshot of ${project.name}`} fill sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-cobalt">{project.name}</h3>

                    <p className="mt-2 flex-1 text-ink-soft group-hover:text-ink">{project.description}</p>

                    <div className="mt-5">
                      {project.type === 'screenshots' ? (
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            openScreenshots(project);
                          }}
                        >
                          <ButtonLink href="#">View project</ButtonLink>
                        </div>
                      ) : project.link ? (
                        <ButtonLink href={project.link} external>
                          View project
                        </ButtonLink>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {hasMore && (
          <div className="mt-8 flex justify-center sm:hidden">
            <button type="button" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded} className="rounded-full border-2 border-cobalt px-6 py-2.5 font-semibold text-cobalt transition hover:bg-cobalt hover:text-white">
              {expanded ? 'Show less' : `Show more (${filteredProjects.length - MOBILE_LIMIT})`}
            </button>
          </div>
        )}
      </Section>

      {selectedProject && <ProjectScreenshotModal title={selectedProject.name} images={selectedProject.screenshots} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
