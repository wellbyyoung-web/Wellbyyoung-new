import { motion } from 'motion/react';
import { EXPERTISE_CONTENT } from '../data/siteContent';
import { EditorialPhotoSlot } from './EditorialPhotoSlot';

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-b border-[#303532]/8 bg-[#EAE5DC]/45">
      <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14"
        >
          {/* Left Column: Section Heading + Compact 1/3-scale Portrait */}
          <div className="lg:col-span-4">
            <p className="font-serif text-xs font-medium tracking-[0.22em] text-[#4E6150] uppercase">
              Expertise · <span className="font-sans tracking-normal">{EXPERTISE_CONTENT.sectionLabel}</span>
            </p>
            <h2 className="mt-4 text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-[#303532] sm:text-3xl">
              {EXPERTISE_CONTENT.title}
            </h2>

            <div className="mt-8 flex items-end gap-5 lg:block">
              <div className="w-32 shrink-0 sm:w-40">
                <EditorialPhotoSlot
                  config={EXPERTISE_CONTENT.photo}
                  aspectClass="aspect-[4/5]"
                  showCaption={false}
                />
              </div>

              <div className="lg:mt-4">
                <p className="text-lg font-semibold tracking-tight text-[#303532]">
                  {EXPERTISE_CONTENT.specialistName}
                </p>
                <p className="mt-0.5 text-sm text-[#303532]/68">
                  {EXPERTISE_CONTENT.specialistTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quote, Bio & Verified Credentials */}
          <div className="lg:col-span-8">
            <blockquote className="border-y border-[#303532]/12 py-6 text-lg font-light leading-[1.85] tracking-[-0.015em] text-[#303532] sm:text-[19px]">
              “{EXPERTISE_CONTENT.quote}”
            </blockquote>

            <p className="mt-6 text-[15px] leading-[1.85] text-[#303532]/80 sm:text-base">
              {EXPERTISE_CONTENT.description}
            </p>

            {/* Verified Credentials Definition List */}
            <div className="mt-9 rounded-xl border border-[#303532]/10 bg-[#FFFFFF]/75 p-6 sm:p-8">
              <h3 className="text-xs font-semibold tracking-wider text-[#4E6150]">
                {EXPERTISE_CONTENT.credentialsTitle}
              </h3>
              <dl className="mt-4 border-t border-[#303532]/12">
                {EXPERTISE_CONTENT.credentials.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 gap-1 border-b border-[#303532]/10 py-3.5 sm:grid-cols-12 sm:gap-4"
                  >
                    <dt className="text-xs font-medium text-[#303532]/58 sm:col-span-3 sm:text-sm">
                      {item.category}
                    </dt>
                    <dd className="text-sm font-medium text-[#303532] sm:col-span-9 sm:text-[15px]">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-[#303532]/60">
                {EXPERTISE_CONTENT.verificationNote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
