'use client';

import { useEffect } from 'react';
import Image from 'next/image';

type AchievementModalProps = {
  title: string;
  images: string[];
  onClose: () => void;
};

export default function AchievementModal({ title, images, onClose }: AchievementModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[1000] overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-[5px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative mx-auto w-full max-w-4xl rounded-3xl bg-white p-5 shadow-2xl md:p-6">
        {/* HEADER */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <h3 className="font-display text-lg font-semibold text-ink md:text-xl">{title}</h3>

          <button type="button" onClick={onClose} aria-label="Close modal" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-2xl leading-none text-ink-soft transition hover:bg-pink-soft hover:text-ink">
            ×
          </button>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {images.map((src, i) => (
            <a key={`${src}-${i}`} href={src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl">
              <Image src={src} alt={`${title}, achievement ${i + 1}`} width={1200} height={850} className="h-auto w-full rounded-xl border border-warm transition-transform duration-200 hover:scale-[1.02]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
