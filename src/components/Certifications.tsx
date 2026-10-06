'use client';

import { useEffect, useState } from 'react';
import Section from './Section';
import Reveal from './Reveal';
import CertificateModal from './CertificateModal';
import AchievementModal from './AchievementModal';
import { training, certifications, achievements } from '@/data/portfolio';

const certBg = ['bg-pink-soft', 'bg-butter'];

type Tab = 'certifications' | 'training' | 'achievements';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<Tab>('certifications');

  useEffect(() => {
    const updateTab = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');

      if (tab === 'training' || tab === 'certifications' || tab === 'achievements') {
        setActiveTab(tab);
      }
    };

    updateTab();

    window.addEventListener('journeyTabChange', updateTab);

    return () => {
      window.removeEventListener('journeyTabChange', updateTab);
    };
  }, []);

  const [activeCert, setActiveCert] = useState<(typeof certifications)[number] | null>(null);

  const [activeAchievement, setActiveAchievement] = useState<(typeof achievements)[number] | null>(null);

  return (
    <Section id="training" title="Training, certifications & Achievements">
      {/* TAB */}
      <div className="mb-10 flex border-b border-ink/15">
        <button
          type="button"
          onClick={() => setActiveTab('certifications')}
          className={`px-5 py-3 text-sm font-semibold transition-colors duration-300 ${activeTab === 'certifications' ? 'border-b-2 border-cobalt text-cobalt' : 'text-ink/60 hover:text-cobalt'}`}
        >
          Certifications
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('training')}
          className={`px-5 py-3 text-sm font-semibold transition-colors duration-300 ${activeTab === 'training' ? 'border-b-2 border-cobalt text-cobalt' : 'text-ink/60 hover:text-cobalt'}`}
        >
          Training
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('achievements')}
          className={`px-5 py-3 text-sm font-semibold transition-colors duration-300 ${activeTab === 'achievements' ? 'border-b-2 border-cobalt text-cobalt' : 'text-ink/60 hover:text-cobalt'}`}
        >
          Achievements
        </button>
      </div>

      {/* =====================================================
          CERTIFICATIONS
      ===================================================== */}
      {activeTab === 'certifications' && (
        <div>
          <Reveal>
            <h3 className="mb-5 font-display text-2xl font-semibold text-cobalt">Certifications</h3>
          </Reveal>

          <ul className="space-y-5">
            {certifications.map((cert, i) => (
              <li key={cert.title}>
                <Reveal delay={i * 100}>
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className={`group block w-full rounded-3xl p-8 text-left transition duration-300 hover:-translate-y-1 hover:bg-cobalt hover:shadow-[0_18px_40px_rgba(0,75,173,0.25)] ${certBg[i % certBg.length]}`}
                  >
                    <h4 className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-white">{cert.title}</h4>

                    <p className="text-ink/75 transition-colors duration-300 group-hover:text-white/80">{cert.issuer}</p>

                    <p className="mt-1 text-sm text-ink/70 transition-colors duration-300 group-hover:text-white/70">Issued {cert.issued}</p>

                    <span className="mt-5 inline-block text-sm font-semibold text-cobalt transition-colors duration-300 group-hover:text-butter">
                      View credential/details
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* =====================================================
          TRAINING
      ===================================================== */}
      {activeTab === 'training' && (
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-3xl bg-cobalt p-8 text-white">
              <p className="inline-block rounded-full bg-butter px-4 py-1 text-sm font-semibold text-cobalt">{training.period}</p>

              <h3 className="mt-5 font-display text-3xl font-semibold">{training.program}</h3>

              <p className="mt-3 font-medium text-butter">{training.path}</p>

              <p className="text-white/80">{training.organizer}</p>

              <p className="mt-5 leading-relaxed text-white/90">{training.summary}</p>
            </article>
          </Reveal>
        </div>
      )}

      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}
      {activeTab === 'achievements' && (
        <div>
          <Reveal>
            <h3 className="mb-5 font-display text-2xl font-semibold text-cobalt">Achievements</h3>
          </Reveal>

          <ul className="space-y-5">
            {achievements.map((achievement, i) => (
              <li key={achievement.title}>
                <Reveal delay={i * 100}>
                  <button
                    type="button"
                    onClick={() => setActiveAchievement(achievement)}
                    className="group block w-full rounded-3xl bg-butter p-8 text-left transition duration-300 hover:-translate-y-1 hover:bg-cobalt hover:shadow-[0_18px_40px_rgba(0,75,173,0.25)]"
                  >
                    <h4 className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-white">{achievement.title}</h4>

                    <p className="text-ink/75 transition-colors duration-300 group-hover:text-white/80">{achievement.issuer}</p>

                    <p className="mt-1 text-sm text-ink/70 transition-colors duration-300 group-hover:text-white/70">Achieved {achievement.date}</p>

                    <p className="mt-4 leading-relaxed text-ink/75 transition-colors duration-300 group-hover:text-white/80">{achievement.description}</p>

                    <span className="mt-5 inline-block text-sm font-semibold text-cobalt transition-colors duration-300 group-hover:text-butter">
                      View credential/details
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CERTIFICATE MODAL */}
      {activeCert && <CertificateModal title={activeCert.title} images={activeCert.images} onClose={() => setActiveCert(null)} />}

      {/* ACHIEVEMENT MODAL */}
      {activeAchievement && <AchievementModal title={activeAchievement.title} images={activeAchievement.images} onClose={() => setActiveAchievement(null)} />}
    </Section>
  );
}
