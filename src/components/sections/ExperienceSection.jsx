import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const ExperienceCard = ({ job, index, isOpen, onToggle, reduceMotion }) => {
  const isCurrent = index === 0;
  const meta = [job.type, job.location].filter(Boolean).join(' · ');
  const panelId = `experience-panel-${job.id}`;

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative pl-10 md:pl-14"
    >
      {/* Timeline node */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-8 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full border-2 bg-black ${
          isOpen ? 'border-cyan-300' : 'border-cyan-500/50'
        } transition-colors duration-300`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            isOpen ? 'bg-cyan-300' : 'bg-cyan-500/50'
          } transition-colors duration-300`}
        />
        {isCurrent && !reduceMotion && (
          <span className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping" />
        )}
      </span>

      <div
        className={`rounded-2xl border bg-black transition-all duration-300 ${
          isOpen
            ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.12)]'
            : 'border-cyan-500/20 hover:border-cyan-500/40'
        }`}
      >
        {/* Header (click to expand / collapse) */}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full text-left p-6 md:p-8 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-cyan-300">{job.period}</p>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold text-gray-100">
                {job.role}
              </h3>
              <p className="mt-1 text-base md:text-lg bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent inline-block">
                {job.company}
              </p>
              {meta && <p className="mt-1 text-sm text-gray-500">{meta}</p>}
            </div>

            <span
              aria-hidden="true"
              className={`mt-1 flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-cyan-500/30 text-cyan-300 transition-transform duration-300 ${
                isOpen ? 'rotate-180 bg-cyan-500/10' : ''
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 8l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          {job.summary && (
            <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl">
              {job.summary}
            </p>
          )}
        </button>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              key="details"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="border-t border-cyan-500/20 pt-6">
                  <ul className="space-y-3">
                    {job.bullets.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-300 leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-7">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

export const ExperienceSection = ({ experience = [] }) => {
  const reduceMotion = useReducedMotion();
  // Most recent role open by default
  const [openId, setOpenId] = useState(experience[0]?.id ?? null);

  if (!experience.length) return null;

  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow, same as the other sections */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400" />
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative ml-2 md:ml-0">
            {/* Timeline line */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-transparent"
            />

            <ol className="space-y-8">
              {experience.map((job, index) => (
                <ExperienceCard
                  key={job.id}
                  job={job}
                  index={index}
                  isOpen={openId === job.id}
                  onToggle={() =>
                    setOpenId((prev) => (prev === job.id ? null : job.id))
                  }
                  reduceMotion={reduceMotion}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};