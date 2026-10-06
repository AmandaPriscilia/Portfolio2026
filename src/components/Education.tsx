import Section from './Section';
import Reveal from './Reveal';
import Timeline from './Timeline';
import { educations, experiences } from '@/data/portfolio';

export default function Education() {
  return (
    <Section id="education" title="Education & experience" className="bg-pale">
      <div className="grid gap-14 md:grid-cols-2">
        <Reveal>
          <h3 className="mb-8 inline-block rounded-full bg-cobalt px-5 py-2 font-display text-lg font-semibold text-white">Education</h3>
          <Timeline items={educations} accent="cobalt" />
        </Reveal>
        <Reveal delay={150}>
          <h3 className="mb-8 inline-block rounded-full bg-butter px-5 py-2 font-display text-lg font-semibold text-cobalt">Experience</h3>
          <Timeline items={experiences} accent="rose" />
        </Reveal>
      </div>
    </Section>
  );
}
