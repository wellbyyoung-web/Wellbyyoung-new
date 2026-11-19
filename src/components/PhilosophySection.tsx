import { motion } from 'motion/react';
import { PHILOSOPHY_CONTENT } from '../data/siteContent';

export function PhilosophySection() {
  return (
    <section id="about" className="border-b border-[#303532]/8 bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <p className="font-serif text-xs font-medium tracking-[0.22em] text-[#4E6150] uppercase">
              Philosophy · <span className="font-sans tracking-normal">{PHILOSOPHY_CONTENT.sectionLabel}</span>
            </p>
            <h2 className="mt-4 text-2xl font-medium leading-[1.38] tracking-[-0.025em] text-[#303532] sm:text-3xl">
              {PHILOSOPHY_CONTENT.title}
            </h2>

            <ol className="mt-8 border-t border-[#303532]/10">
              {PHILOSOPHY_CONTENT.highlights.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-[#303532]/10 py-4 text-sm font-medium text-[#303532]"
                >
                  <span className="font-serif text-xs tabular-nums text-[#4E6150]">
                    0{idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-lg font-normal leading-[1.85] tracking-[-0.015em] text-[#303532] sm:text-xl">
              {PHILOSOPHY_CONTENT.leadParagraph}
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-[#303532]/78 sm:text-base">
              {PHILOSOPHY_CONTENT.bodyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[#303532]/8 bg-[#F8F7F3] p-8 sm:p-10">
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#4E6150] uppercase">
              {PHILOSOPHY_CONTENT.mission.label} · {PHILOSOPHY_CONTENT.mission.title}
            </p>
            <p className="mt-3.5 text-base leading-[1.8] text-[#303532]/88">
              {PHILOSOPHY_CONTENT.mission.description}
            </p>
          </div>

          <div className="rounded-xl border border-[#303532]/8 bg-[#F8F7F3] p-8 sm:p-10">
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#4E6150] uppercase">
              {PHILOSOPHY_CONTENT.vision.label} · {PHILOSOPHY_CONTENT.vision.title}
            </p>
            <p className="mt-3.5 text-base leading-[1.8] text-[#303532]/88">
              {PHILOSOPHY_CONTENT.vision.description}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 border-t border-[#303532]/10 pt-12">
          <p className="text-[11px] font-medium tracking-[0.2em] text-[#4E6150] uppercase">
            Core Values · 핵심 가치
          </p>
          <div className="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PHILOSOPHY_CONTENT.coreValues.map((value) => (
              <div key={value.index} className="flex flex-col">
                <span className="font-serif text-xs tabular-nums text-[#788C7A]">
                  {value.index}
                </span>
                <h3 className="mt-2 text-base font-semibold text-[#303532]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.75] text-[#303532]/75">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
