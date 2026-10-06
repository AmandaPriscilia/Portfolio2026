'use client';

import { useEffect, useRef, useState } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import { skills } from '@/data/portfolio';

const chipStyles = ['bg-white text-cobalt', 'bg-cobalt text-white', 'bg-pink-soft text-ink'];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const skillsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (skillsRef.current && !skillsRef.current.contains(event.target as Node)) {
        setActiveSkill(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Section id="skills" title="Skills" className="bg-butter/50">
      <ul ref={skillsRef} className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <li key={skill.name}>
            <Reveal delay={i * 40}>
              <span
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
    </Section>
  );
}
