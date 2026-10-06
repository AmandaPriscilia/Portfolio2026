'use client';

import { useState } from 'react';
import { navLinks, profile } from '@/data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [journeyOpen, setJourneyOpen] = useState(false);

  const linkStyle = 'relative py-1 text-sm font-medium after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-pink-soft after:transition-all hover:after:w-full';

  const handleJourneyClick = (tab: 'training' | 'certifications' | 'achievements') => {
    window.history.pushState(null, '', `?tab=${tab}`);

    window.dispatchEvent(new Event('journeyTabChange'));

    setJourneyOpen(false);
    setOpen(false);

    document.getElementById('training')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleMobileLinkClick = () => {
    setOpen(false);
    setJourneyOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-warm bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3" aria-label="Main">
        {/* Logo */}
        <a href="#home" onClick={handleMobileLinkClick} className="font-script text-3xl leading-none">
          {profile.firstName}
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href} className="relative">
              {l.label === 'My Journey' ? (
                <div>
                  <button type="button" onClick={() => setJourneyOpen(!journeyOpen)} className={linkStyle} aria-expanded={journeyOpen}>
                    My Journey
                    <span className="ml-1 inline-block text-xs">{journeyOpen ? '↑' : '↓'}</span>
                  </button>

                  {journeyOpen && (
                    <div className="absolute left-1/2 top-full z-50 mt-4 w-48 -translate-x-1/2 rounded-2xl border border-warm bg-white p-2 shadow-lg">
                      <button type="button" onClick={() => handleJourneyClick('training')} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-pink-soft">
                        Training
                      </button>

                      <button type="button" onClick={() => handleJourneyClick('certifications')} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-pink-soft">
                        Certifications
                      </button>

                      <button type="button" onClick={() => handleJourneyClick('achievements')} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-pink-soft">
                        Achievements
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <a href={l.href} className={linkStyle}>
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink text-lg transition-colors hover:bg-pink-soft md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? '×' : '☰'}
        </button>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      {open && (
        <>
          {/* Overlay */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => {
              setOpen(false);
              setJourneyOpen(false);
            }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] md:hidden"
          />

          {/* Drawer */}
          <aside id="mobile-menu" className="fixed right-0 top-0 z-50 h-dvh w-[82%] max-w-sm overflow-y-auto border-l border-warm bg-white shadow-2xl md:hidden">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-warm px-6 py-5">
              <a href="#home" onClick={handleMobileLinkClick} className="font-script text-3xl leading-none">
                {profile.firstName}
              </a>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setJourneyOpen(false);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink text-xl leading-none transition-colors hover:bg-pink-soft"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Drawer Navigation */}
            <ul className="px-5 py-6">
              {navLinks.map((l) => (
                <li key={l.href}>
                  {l.label === 'My Journey' ? (
                    <>
                      <button type="button" onClick={() => setJourneyOpen(!journeyOpen)} className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-base font-medium transition-colors hover:bg-pink-soft">
                        <span>My Journey</span>

                        <span className={`text-sm transition-transform duration-300 ${journeyOpen ? 'rotate-180' : ''}`}>↓</span>
                      </button>

                      {journeyOpen && (
                        <div className="ml-4 mt-1 border-l-2 border-pink-soft pl-3">
                          <button type="button" onClick={() => handleJourneyClick('training')} className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-ink-soft transition-colors hover:bg-pink-soft hover:text-ink">
                            Training
                          </button>

                          <button
                            type="button"
                            onClick={() => handleJourneyClick('certifications')}
                            className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-ink-soft transition-colors hover:bg-pink-soft hover:text-ink"
                          >
                            Certifications
                          </button>

                          <button
                            type="button"
                            onClick={() => handleJourneyClick('achievements')}
                            className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-ink-soft transition-colors hover:bg-pink-soft hover:text-ink"
                          >
                            Achievements
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={l.href} onClick={handleMobileLinkClick} className="block rounded-xl px-4 py-4 text-base font-medium transition-colors hover:bg-pink-soft">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </>
      )}
    </header>
  );
}
