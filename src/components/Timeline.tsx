'use client';

import { useState } from 'react';
import CertificateModal from './CertificateModal';

type TimelineItem = {
  period: string;
  title: string;
  place: string;
  detail?: string;
  images?: string[];
};

type Accent = 'cobalt' | 'rose';

const accents: Record<Accent, { line: string; dot: string; period: string }> = {
  cobalt: {
    line: 'border-cobalt/25',
    dot: 'bg-cobalt',
    period: 'text-cobalt',
  },
  rose: {
    line: 'border-rose/30',
    dot: 'bg-rose',
    period: 'text-rose',
  },
};

export default function Timeline({ items, accent = 'cobalt' }: { items: TimelineItem[]; accent?: Accent }) {
  const a = accents[accent];

  const [activeItem, setActiveItem] = useState<TimelineItem | null>(null);

  return (
    <>
      <ul className={`border-l-2 ${a.line}`}>
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`} className="group relative pb-8 pl-7 last:pb-0">
            <span className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full ring-4 ring-pale transition duration-300 group-hover:scale-125 group-hover:bg-butter group-hover:ring-cobalt/20 ${a.dot}`} aria-hidden="true" />

            <p className={`text-sm font-semibold ${a.period}`}>{item.period}</p>

            <h4 className="mt-1 font-display text-lg font-semibold transition-colors duration-300 group-hover:text-cobalt">{item.title}</h4>

            <p className="font-medium text-ink-soft">{item.place}</p>

            {item.detail && <p className="mt-2 leading-relaxed text-ink-soft">{item.detail}</p>}

            {item.images && item.images.length > 0 && (
              <button type="button" onClick={() => setActiveItem(item)} className="mt-4 text-sm font-semibold text-cobalt transition-colors duration-300 hover:text-rose hover:underline">
                View certificate/details
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            )}
          </li>
        ))}
      </ul>

      {activeItem && <CertificateModal title={activeItem.title} images={activeItem.images ?? []} onClose={() => setActiveItem(null)} />}
    </>
  );
}
