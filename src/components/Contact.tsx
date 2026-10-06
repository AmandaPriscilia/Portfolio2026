import Image from 'next/image';
import Section from './Section';
import Reveal from './Reveal';
import SocialIcon from './SocialIcons';
import { contact, socials, profile } from '@/data/portfolio';

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <div className="bg-pink-soft p-2.5 shadow-[4px_4px_12px_rgba(51,51,51,0.3)] sm:p-3 md:p-5 md:shadow-[8px_8px_18px_rgba(51,51,51,0.35)]">
          <div className="grid gap-8 rounded-2xl bg-warm p-6 sm:p-8 md:grid-cols-2 md:grid-rows-[1fr_auto] md:gap-x-10 md:gap-y-10 md:rounded-3xl md:p-12">
            <div className="order-1 min-w-0 md:col-start-1 md:row-start-1">
              <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-cobalt sm:text-5xl md:text-6xl">Let&apos;s work together</h3>

              <p className="mt-5 max-w-sm text-ink-soft md:mt-6">{contact.location}</p>

              <a href={contact.phoneHref} target="_blank" rel="noopener noreferrer" className="mt-1 block text-ink-soft hover:text-cobalt hover:underline">
                {contact.phone}
              </a>
            </div>

            <div className="group relative order-2 mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border-4 border-white bg-pale shadow-md sm:max-w-sm md:col-start-2 md:row-span-2 md:row-start-1 md:ml-auto md:mr-0">
              <Image
                src={profile.contactPhoto}
                alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
                fill
                sizes="(min-width: 768px) 384px, (min-width: 640px) 384px, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="order-3 min-w-0 text-cobalt md:col-start-1 md:row-start-2">
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <SocialIcon label={s.label} href={s.href} />
                  </li>
                ))}
              </ul>

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=priscillaleza@gmail.com" target="_blank" rel="noopener noreferrer" className="mt-3 block break-all text-sm font-semibold text-cobalt hover:underline">
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-10 text-center text-sm text-ink-soft md:mt-12">
        © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
      </footer>
    </Section>
  );
}
