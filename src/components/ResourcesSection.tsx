import { useState } from 'react';
import { Youtube, BookOpen, ArrowUpRight } from 'lucide-react';
import { RESOURCES_CONTENT } from '../data/siteContent';

export function ResourcesSection() {
  const [selectedTopicId, setSelectedTopicId] = useState(RESOURCES_CONTENT.topics[0].id);

  const activeTopic =
    RESOURCES_CONTENT.topics.find((topic) => topic.id === selectedTopicId) ??
    RESOURCES_CONTENT.topics[0];

  return (
    <section id="resources" className="border-b border-[#303532]/8 bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-serif text-xs font-medium tracking-[0.22em] text-[#4E6150] uppercase">
            Nutrition Insights · <span className="font-sans tracking-normal">{RESOURCES_CONTENT.sectionLabel}</span>
          </p>
          <h2 className="mt-4 text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-[#303532] sm:text-3xl">
            {RESOURCES_CONTENT.title}
          </h2>
          <p className="mt-3.5 text-[15px] leading-[1.8] text-[#303532]/76 sm:text-base">
            {RESOURCES_CONTENT.subtitle}
          </p>
        </div>

        {/* Interactive Topic Explorer */}
        <div className="mt-10 rounded-xl border border-[#303532]/10 bg-[#F8F7F3] p-6 sm:p-9">
          <div
            role="tablist"
            aria-label="영양정보 주제 분류"
            className="flex flex-wrap gap-2 border-b border-[#303532]/10 pb-5"
          >
            {RESOURCES_CONTENT.topics.map((topic, idx) => {
              const isSelected = topic.id === activeTopic.id;
              return (
                <button
                  key={topic.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`min-h-[40px] rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150] ${
                    isSelected
                      ? 'bg-[#303532] text-[#F8F7F3]'
                      : 'border border-[#303532]/12 bg-[#FFFFFF] text-[#303532]/78 hover:border-[#4E6150] hover:text-[#303532]'
                  }`}
                >
                  <span className="mr-1.5 font-serif text-xs tabular-nums opacity-75">
                    0{idx + 1}
                  </span>
                  {topic.title}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start"
          >
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-wider text-[#4E6150]">다루는 주제</p>
              <h3 className="mt-2 text-xl font-medium tracking-[-0.015em] text-[#303532]">
                {activeTopic.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-[#303532]/80 sm:text-[15px]">
                {activeTopic.summary}
              </p>
            </div>

            <div className="border-t border-[#303532]/10 pt-5 lg:col-span-7 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
              <p className="text-xs font-medium tracking-wider text-[#4E6150]">주요 안내 방향</p>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#303532]/85">
                {activeTopic.focusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="shrink-0 text-[#788C7A]" aria-hidden="true">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* YouTube & Blog Connection Slots */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {RESOURCES_CONTENT.channels.map((channel) => {
            const hasLiveUrl = Boolean(channel.url);
            const Icon = channel.id === 'youtube' ? Youtube : BookOpen;

            return (
              <div
                key={channel.id}
                className="flex flex-col justify-between rounded-xl border border-[#303532]/10 bg-[#FFFFFF] p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#303532]/10 pb-4">
                    <div className="flex items-center gap-2.5 text-xs font-medium tracking-wider text-[#4E6150]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{channel.platform}</span>
                    </div>
                    <span className="text-xs text-[#303532]/52">{channel.statusText}</span>
                  </div>

                  <h3 className="mt-5 text-lg font-medium tracking-[-0.015em] text-[#303532]">
                    {channel.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.78] text-[#303532]/76">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  {hasLiveUrl ? (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-[#303532]/25 px-4 py-2 text-sm font-medium text-[#303532] transition-colors hover:border-[#4E6150] hover:bg-[#F8F7F3]"
                    >
                      <span>바로가기</span>
                      <ArrowUpRight className="h-4 w-4 text-[#4E6150]" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="text-xs font-medium text-[#303532]/52">
                      {channel.actionLabel}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-[#303532]/58">
          {RESOURCES_CONTENT.emptyNotice}
        </p>
      </div>
    </section>
  );
}
