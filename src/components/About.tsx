import Image from 'next/image';
import Reveal from './Reveal';
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

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 overflow-hidden px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-3xl bg-butter p-8 shadow-[10px_10px_30px_rgba(0,0,0,0.15)] md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              {/* ABOUT ME */}
              <div className="order-1 md:col-start-1 md:row-start-1">
                <div className="relative inline-block">
                  <h2 className="font-display text-5xl font-extrabold uppercase tracking-tight text-cobalt sm:text-6xl lg:text-7xl">About Me</h2>

                  <Sparkle className="-right-6 -top-3 h-5 w-5 text-cobalt" />
                </div>
              </div>

              {/* FOTO */}
              <div className="group relative order-2 mx-auto w-full max-w-sm md:col-start-2 md:row-span-2 md:row-start-1">
                <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-pink-soft transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" aria-hidden="true" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white bg-pale shadow-md">
                  <Image
                    src={profile.aboutPhoto}
                    alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
                    fill
                    sizes="(min-width: 768px) 384px, 90vw"
                    className="origin-bottom scale-[1.3] object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.38]"
                  />
                </div>

                {/* Decorative sparkle & heart */}
                <Sparkle className="-left-3 -top-3 h-6 w-6 text-cobalt" delay="0.6s" />
                <Heart className="-bottom-3 -left-3 h-6 w-6 text-pink-soft" />
              </div>

              {/* DESCRIPTION */}
              <div className="order-3 md:col-start-1 md:row-start-2">
                <div className="space-y-4 leading-relaxed text-ink">
                  {profile.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
