'use client';

import { useEffect, useRef, useState } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { skills, softSkills } from '@/data/portfolio';

const chipStyles = ['bg-white text-cobalt', 'bg-cobalt text-white', 'bg-pink-soft text-ink'];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const skillsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Tutup tooltip begitu klik/tap terjadi di mana pun selain di icon skill
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target || !target.closest('[data-skill-chip]')) {
        setActiveSkill(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveSkill(null);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Section id="skills" title="Skills" className="bg-butter/50">
      <div className="space-y-10 sm:space-y-12">
        {/* TECHNICAL SKILLS (ICON) */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-ink/70 sm:text-sm">Technical Skills</h3>

          <ul ref={skillsRef} className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <li key={skill.name}>
                <Reveal delay={i * 40}>
                  <span
                    data-skill-chip
                    title={skill.name}
                    onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                    className={`group relative inline-flex cursor-pointer items-center justify-center rounded-full p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${chipStyles[i % chipStyles.length]}`}
                  >
                    <img src={skill.icon} alt={skill.name} className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110 active:scale-95" />

                    {activeSkill === skill.name && <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-sm font-semibold text-white shadow-lg">{skill.name}</span>}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* SOFT SKILLS (TEKS SAJA) */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-ink/70 sm:text-sm">Soft Skills</h3>

          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {softSkills.map((skill, i) => (
              <li key={skill}>
                <Reveal delay={i * 40}>
                  <span
                    className={`soft-chip inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 sm:px-6 sm:py-3 sm:text-base ${chipStyles[i % chipStyles.length]}`}
                  >
                    {skill}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
