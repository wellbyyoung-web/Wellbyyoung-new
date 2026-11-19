import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_CONTENT, SITE_META } from '../data/siteContent';
import { EditorialPhotoSlot } from './EditorialPhotoSlot';

export function HeroSection() {
  return (
    <section id="top" className="border-b border-[#303532]/8 bg-[#F8F7F3]">
      <div className="mx-auto max-w-[1160px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
        {/* Centered Editorial Title & Subtitle Stack */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-serif text-xs font-medium tracking-[0.22em] text-[#4E6150] uppercase sm:text-[13px]">
            <span>WELL BY YOUNG</span>
            <span aria-hidden="true" className="text-[#303532]/30">·</span>
            <span className="font-sans text-[11px] font-normal tracking-[0.16em] text-[#303532]/70">
              {SITE_META.slogan}
            </span>
          </div>

          <h1 className="mt-6 text-[clamp(2rem,4.2vw,3.15rem)] font-medium leading-[1.28] tracking-[-0.03em] text-[#303532]">
            {HERO_CONTENT.title}
          </h1>

          <p className="mt-4 text-base font-light leading-relaxed tracking-[-0.01em] text-[#303532]/85 sm:text-[19px]">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="mx-auto mt-4 max-w-lg space-y-1 text-sm font-light leading-[1.85] text-[#303532]/68 sm:text-[15px]">
            {HERO_CONTENT.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {/* Balanced Twin Editorial CTAs */}
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#education"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#303532] px-7 py-3 text-sm font-medium text-[#F8F7F3] whitespace-nowrap transition-colors duration-150 hover:bg-[#4E6150] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150]"
            >
              <span>{HERO_CONTENT.ctaLecture}</span>
            </a>

            <a
              href="#consultation"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-[#303532]/18 bg-[#FFFFFF] px-7 py-3 text-sm font-medium text-[#303532] whitespace-nowrap transition-colors duration-150 hover:border-[#4E6150] hover:bg-[#EAE5DC]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150]"
            >
              <span>{HERO_CONTENT.ctaConsultation}</span>
              <ArrowUpRight className="h-4 w-4 text-[#4E6150]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Wide Serene Visual Showcase with Scrim Editorial Overlay */}
        <div className="mx-auto mt-12 max-w-[940px] sm:mt-14">
          <EditorialPhotoSlot
            config={HERO_CONTENT.photo}
            aspectClass="aspect-[16/10] sm:aspect-[16/9]"
            showCaption={false}
            overlayKicker="MINDFUL NUTRITION & DAILY VITALITY"
            overlayTitle="올바르게 배우고, 자신의 건강을 이해하며, 일상에서 실천하는 영양관리."
          />
        </div>

        {/* Quiet Scroll Cue */}
        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 font-serif text-xs font-medium tracking-[0.24em] text-[#303532]/60 uppercase transition-colors hover:text-[#4E6150]"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
