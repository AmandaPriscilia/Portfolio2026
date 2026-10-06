import Image from 'next/image';
import ButtonLink from './ButtonLink';
import { profile } from '@/data/portfolio';

function Sparkle({ className, delay }: { className: string; delay?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`pointer-events-none absolute animate-twinkle ${className}`} style={delay ? { animationDelay: delay } : undefined} fill="currentColor" aria-hidden="true">
      <path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z" />
    </svg>
  );
}

function Heart({ className, delay }: { className: string; delay?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`pointer-events-none absolute animate-heartbeat ${className}`} style={delay ? { animationDelay: delay } : undefined} fill="currentColor" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-16 overflow-hidden px-6 pb-20 pt-12 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-12 md:grid-cols-2">
        <div className="contents md:block">
          <div className="order-1 animate-rise text-center md:order-none md:text-left">
            <div className="relative mx-auto block w-fit md:mx-0">
              <p className="animate-sway font-script text-7xl leading-none text-cobalt sm:text-8xl lg:text-9xl">{profile.firstName}</p>

              <Sparkle className="-right-5 top-1 h-7 w-7 text-cobalt" />
              <Sparkle className="-left-5 top-8 h-4 w-4 text-pink-soft" delay="1s" />
              <Sparkle className="right-6 -top-2 h-4 w-4 text-butter" delay="0.5s" />
            </div>

            <div className="relative mx-auto block w-fit md:mx-0">
              <h1 className="-mt-1 font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl">{profile.lastName}</h1>

              <Sparkle className="-left-5 -top-1 h-4 w-4 text-cobalt" delay="1.2s" />
              <Heart className="-right-4 top-1 h-5 w-5 text-pink-soft" delay="0.4s" />
            </div>
          </div>

          <div className="order-3 animate-rise md:order-none">
            <p className="mt-3 md:mt-6 font-display text-xl font-semibold text-cobalt">{profile.role}</p>

            <p className="mt-3 max-w-md text-ink-soft">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects">View projects</ButtonLink>

              <ButtonLink href="#contact" variant="outline">
                Contact me
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="order-2 animate-rise relative mx-auto w-full max-w-[18rem] md:order-none md:max-w-sm" style={{ animationDelay: '0.15s' }}>
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-t-full bg-butter" aria-hidden="true" />

          <div className="absolute -left-3 top-12 h-14 w-14 animate-float rounded-full bg-cobalt" aria-hidden="true" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-pale">
            <Image src={profile.photo} alt={`Portrait of ${profile.firstName} ${profile.lastName}`} fill priority sizes="(min-width: 768px) 384px, 90vw" className="object-cover" />
          </div>

          {/* Decorative cute sparkles & heart */}
          <Sparkle className="-right-2 top-10 h-6 w-6 text-cobalt" />
          <Sparkle className="left-1 top-1 h-5 w-5 text-pink-soft" delay="0.8s" />
          <Sparkle className="-right-1 bottom-24 h-4 w-4 text-butter" delay="1.5s" />
          <Heart className="-left-1 bottom-8 h-7 w-7 text-pink-soft" />
        </div>
      </div>
    </section>
  );
}
