import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { InquiryMode, SERVICES_CONTENT } from '../data/siteContent';
import { EditorialPhotoSlot } from './EditorialPhotoSlot';

interface ServicesSectionProps {
  onSelectInquiry: (mode: InquiryMode) => void;
}

export function ServicesSection({ onSelectInquiry }: ServicesSectionProps) {
  const { education, consultation } = SERVICES_CONTENT;

  return (
    <section id="services" className="border-b border-[#303532]/8 bg-[#F8F7F3]">
      <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-serif text-xs font-medium tracking-[0.22em] text-[#4E6150] uppercase">
            Core Services · <span className="font-sans tracking-normal">{SERVICES_CONTENT.sectionLabel}</span>
          </p>
          <h2 className="mt-4 text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-[#303532] sm:text-3xl">
            {SERVICES_CONTENT.sectionTitle}
          </h2>
          <p className="mt-3.5 text-[15px] leading-[1.8] text-[#303532]/75 sm:text-base">
            {SERVICES_CONTENT.sectionIntro}
          </p>
        </div>

        {/* Two Independent Core Services Side-by-Side */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* SERVICE 01. Nutrition Education */}
          <motion.article
            id="education"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-xl border border-[#303532]/10 bg-[#FFFFFF] p-7 sm:p-10"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#303532]/10 pb-4 text-xs">
                <span className="font-medium tracking-wider text-[#4E6150]">
                  {education.code} · {education.categoryTitle}
                </span>
                <span className="text-[11px] tracking-wider text-[#303532]/50 uppercase">
                  {education.englishTitle}
                </span>
              </div>

              <div className="mt-6">
                <EditorialPhotoSlot
                  config={education.photo}
                  aspectClass="aspect-[3/2]"
                  captionIndex="01"
                />
              </div>

              <h3 className="mt-7 text-xl font-medium leading-snug tracking-[-0.02em] text-[#303532] sm:text-2xl">
                {education.title}
              </h3>

              <div className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[#303532]/78">
                {education.paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>

              <div className="mt-8 border-t border-[#303532]/10 pt-6">
                <h4 className="text-xs font-semibold tracking-wider text-[#4E6150]">
                  {education.targetsTitle}
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-[#303532]/85">
                  {education.targets.map((target) => (
                    <li key={target} className="flex items-start gap-2.5">
                      <span className="shrink-0 text-[#788C7A]" aria-hidden="true">—</span>
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-[#303532]/10 pt-6">
                <h4 className="text-xs font-semibold tracking-wider text-[#4E6150]">
                  {education.topicsTitle}
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-[#303532]/85">
                  {education.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5">
                      <span className="shrink-0 text-[#788C7A]" aria-hidden="true">—</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-md bg-[#F8F7F3] px-4 py-3 text-xs leading-relaxed text-[#303532]/72">
                  {education.customNote}
                </p>
              </div>
            </div>

            <div className="mt-9 pt-2">
              <button
                type="button"
                onClick={() => onSelectInquiry('lecture')}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[#303532] px-6 py-3 text-sm font-medium text-[#F8F7F3] transition-colors duration-150 hover:bg-[#4E6150] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150]"
              >
                <span>{education.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.article>

          {/* SERVICE 02. Personalized Nutrition Consultation */}
          <motion.article
            id="consultation"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-xl border border-[#303532]/10 bg-[#FFFFFF] p-7 sm:p-10"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#303532]/10 pb-4 text-xs">
                <span className="font-medium tracking-wider text-[#4E6150]">
                  {consultation.code} · {consultation.categoryTitle}
                </span>
                <span className="text-[11px] tracking-wider text-[#303532]/50 uppercase">
                  {consultation.englishTitle}
                </span>
              </div>

              <div className="mt-6">
                <EditorialPhotoSlot
                  config={consultation.photo}
                  aspectClass="aspect-[3/2]"
                  captionIndex="02"
                />
              </div>

              <h3 className="mt-7 text-xl font-medium leading-snug tracking-[-0.02em] text-[#303532] sm:text-2xl">
                {consultation.title}
              </h3>

              <div className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[#303532]/78">
                {consultation.paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>

              <div className="mt-8 border-t border-[#303532]/10 pt-6">
                <h4 className="text-xs font-semibold tracking-wider text-[#4E6150]">
                  {consultation.targetsTitle}
                </h4>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#303532]/85">
                  {consultation.targets.map((target) => (
                    <li key={target} className="flex items-start gap-2.5">
                      <span className="shrink-0 text-[#788C7A]" aria-hidden="true">—</span>
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-[#303532]/10 pt-6">
                <h4 className="text-xs font-semibold tracking-wider text-[#4E6150]">
                  {consultation.principlesTitle}
                </h4>
                <ol className="mt-3 space-y-2 text-sm leading-relaxed text-[#303532]/85">
                  {consultation.principles.map((principle, idx) => (
                    <li key={principle} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-xs font-medium tabular-nums text-[#4E6150]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 rounded-md bg-[#F8F7F3] px-4 py-3 text-xs leading-relaxed text-[#303532]/72">
                  {consultation.scheduleNote}
                </p>
              </div>
            </div>

            <div className="mt-9 pt-2">
              <button
                type="button"
                onClick={() => onSelectInquiry('consultation')}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md border border-[#303532]/25 bg-[#F8F7F3] px-6 py-3 text-sm font-medium text-[#303532] transition-colors duration-150 hover:border-[#4E6150] hover:bg-[#EAE5DC]/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150]"
              >
                <span>{consultation.ctaLabel}</span>
                <ArrowRight className="h-4 w-4 text-[#4E6150]" aria-hidden="true" />
              </button>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
