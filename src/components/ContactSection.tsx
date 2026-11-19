import { useState, FormEvent } from 'react';
import { Check, Copy, Info, RotateCcw } from 'lucide-react';
import { CONTACT_CONTENT, InquiryMode } from '../data/siteContent';

interface ContactSectionProps {
  activeMode: InquiryMode;
  onModeChange: (mode: InquiryMode) => void;
}

interface LectureFormState {
  organization: string;
  contactPerson: string;
  contactInfo: string;
  targetAudience: string;
  desiredTopic: string;
  desiredSchedule: string;
  estimatedParticipants: string;
  notes: string;
}

interface ConsultationFormState {
  name: string;
  contactInfo: string;
  purpose: string;
}

const INITIAL_LECTURE_FORM: LectureFormState = {
  organization: '',
  contactPerson: '',
  contactInfo: '',
  targetAudience: CONTACT_CONTENT.lectureTab.audienceOptions[0],
  desiredTopic: CONTACT_CONTENT.lectureTab.topicOptions[0],
  desiredSchedule: '',
  estimatedParticipants: '',
  notes: '',
};

const INITIAL_CONSULTATION_FORM: ConsultationFormState = {
  name: '',
  contactInfo: '',
  purpose: '',
};

function isValidContactInfo(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length < 5) return false;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneDigits = trimmed.replace(/[^0-9]/g, '');
  return emailPattern.test(trimmed) || phoneDigits.length >= 8;
}

export function ContactSection({ activeMode, onModeChange }: ContactSectionProps) {
  const [lectureForm, setLectureForm] = useState<LectureFormState>(INITIAL_LECTURE_FORM);
  const [consultationForm, setConsultationForm] = useState<ConsultationFormState>(
    INITIAL_CONSULTATION_FORM,
  );
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleTabSwitch = (mode: InquiryMode) => {
    onModeChange(mode);
    setErrorMessage(null);
    setSubmittedSummary(null);
    setCopied(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setCopied(false);

    if (activeMode === 'lecture') {
      if (!lectureForm.organization.trim()) {
        setErrorMessage('기관명 또는 단체명을 입력해 주세요.');
        return;
      }
      if (!lectureForm.contactPerson.trim()) {
        setErrorMessage('담당자 성함을 입력해 주세요.');
        return;
      }
      if (!isValidContactInfo(lectureForm.contactInfo)) {
        setErrorMessage('회신 가능한 전화번호 또는 이메일 형식을 확인해 주세요.');
        return;
      }
    } else {
      if (!consultationForm.name.trim()) {
        setErrorMessage('성함을 입력해 주세요.');
        return;
      }
      if (!isValidContactInfo(consultationForm.contactInfo)) {
        setErrorMessage('회신 가능한 전화번호 또는 이메일 형식을 확인해 주세요.');
        return;
      }
      if (consultationForm.purpose.trim().length < 10) {
        setErrorMessage('상담 목적에 대한 설명을 10자 이상 간략히 작성해 주세요.');
        return;
      }
    }

    if (!privacyAgreed) {
      setErrorMessage('개인정보 수집·이용 안내에 동의해 주셔야 입력 내용을 확인할 수 있습니다.');
      return;
    }

    const summaryLines =
      activeMode === 'lecture'
        ? [
            '[웰바이영 건강상담소 · 강의 의뢰 입력 요약 (테스트용)]',
            `기관명: ${lectureForm.organization.trim()}`,
            `담당자: ${lectureForm.contactPerson.trim()}`,
            `연락처: ${lectureForm.contactInfo.trim()}`,
            `교육 대상: ${lectureForm.targetAudience}`,
            `희망 주제: ${lectureForm.desiredTopic}`,
            `희망 일정: ${lectureForm.desiredSchedule.trim() || '협의 희망'}`,
            `예상 인원: ${lectureForm.estimatedParticipants.trim() || '미정'}`,
            ...(lectureForm.notes.trim() ? [`추가 사항: ${lectureForm.notes.trim()}`] : []),
          ]
        : [
            '[웰바이영 건강상담소 · 심층 영양상담 문의 입력 요약 (테스트용)]',
            `성함: ${consultationForm.name.trim()}`,
            `연락처: ${consultationForm.contactInfo.trim()}`,
            `상담 목적 설명: ${consultationForm.purpose.trim()}`,
          ];

    setSubmittedSummary(summaryLines.join('\n'));
  };

  const handleCopySummary = async () => {
    if (!submittedSummary) return;
    try {
      await navigator.clipboard.writeText(submittedSummary);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setSubmittedSummary(null);
    setErrorMessage(null);
    setCopied(false);
    setPrivacyAgreed(false);
    if (activeMode === 'lecture') {
      setLectureForm(INITIAL_LECTURE_FORM);
    } else {
      setConsultationForm(INITIAL_CONSULTATION_FORM);
    }
  };

  return (
    <section id="contact" className="bg-[#F8F7F3]">
      <div className="mx-auto max-w-[1160px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Guidance Column */}
          <div className="lg:col-span-5">
            <p className="font-serif text-xs font-medium tracking-[0.22em] text-[#4E6150] uppercase">
              Contact & Inquiry · <span className="font-sans tracking-normal">{CONTACT_CONTENT.sectionLabel}</span>
            </p>
            <h2 className="mt-4 text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-[#303532] sm:text-3xl">
              {CONTACT_CONTENT.title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#303532]/78 sm:text-base">
              {CONTACT_CONTENT.subtitle}
            </p>

            {/* Transparent Test UI Notice */}
            <div className="mt-8 rounded-xl border border-[#303532]/12 bg-[#EAE5DC]/55 p-5">
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#4E6150]" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[#303532]">
                    테스트용 문의 UI 안내
                  </p>
                  <p className="mt-1.5 text-xs leading-[1.7] text-[#303532]/78">
                    {CONTACT_CONTENT.testUiNotice}
                  </p>
                </div>
              </div>
            </div>

            {/* Active Mode Description */}
            <div className="mt-6 border-t border-[#303532]/10 pt-6">
              <p className="text-xs font-semibold tracking-wider text-[#4E6150]">
                선택된 문의 유형
              </p>
              <p className="mt-2 text-sm font-semibold text-[#303532]">
                {activeMode === 'lecture'
                  ? CONTACT_CONTENT.lectureTab.label
                  : CONTACT_CONTENT.consultationTab.label}
              </p>
              <p className="mt-2 text-sm leading-[1.75] text-[#303532]/75">
                {activeMode === 'lecture'
                  ? CONTACT_CONTENT.lectureTab.description
                  : CONTACT_CONTENT.consultationTab.description}
              </p>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#303532]/10 bg-[#FFFFFF] p-6 sm:p-10">
              {/* Segmented Inquiry Type Switcher */}
              <div
                role="tablist"
                aria-label="문의 유형 선택"
                className="grid grid-cols-2 gap-1.5 rounded-lg border border-[#303532]/10 bg-[#F8F7F3] p-1.5"
              >
                <button
                  role="tab"
                  type="button"
                  aria-selected={activeMode === 'lecture'}
                  onClick={() => handleTabSwitch('lecture')}
                  className={`min-h-[44px] rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150] ${
                    activeMode === 'lecture'
                      ? 'bg-[#303532] text-[#F8F7F3]'
                      : 'text-[#303532]/75 hover:text-[#303532]'
                  }`}
                >
                  {CONTACT_CONTENT.lectureTab.label}
                </button>
                <button
                  role="tab"
                  type="button"
                  aria-selected={activeMode === 'consultation'}
                  onClick={() => handleTabSwitch('consultation')}
                  className={`min-h-[44px] rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150] ${
                    activeMode === 'consultation'
                      ? 'bg-[#303532] text-[#F8F7F3]'
                      : 'text-[#303532]/75 hover:text-[#303532]'
                  }`}
                >
                  {CONTACT_CONTENT.consultationTab.label}
                </button>
              </div>

              {submittedSummary ? (
                <div className="mt-8 space-y-6">
                  <div className="rounded-lg border border-[#788C7A]/35 bg-[#F8F7F3] p-6">
                    <p className="text-xs font-semibold tracking-wider text-[#4E6150]">
                      테스트 입력 확인 완료 · 실제 전송 미연동 상태
                    </p>
                    <h3 className="mt-2 text-lg font-medium tracking-[-0.015em] text-[#303532]">
                      입력하신 문의 내용을 확인했습니다.
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#303532]/80">
                      현재 테스트용 화면이므로 외부 서버로 전송되지 않았습니다. 정식 연동 후 동일한 구조로 접수가 진행됩니다.
                    </p>
                    <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-md border border-[#303532]/10 bg-[#FFFFFF] p-4 font-sans text-xs leading-relaxed text-[#303532]/85">
                      {submittedSummary}
                    </pre>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#303532] px-5 py-2.5 text-sm font-medium text-[#F8F7F3] hover:bg-[#4E6150] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4" aria-hidden="true" />
                          <span>입력 요약 복사됨</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" aria-hidden="true" />
                          <span>입력 내용 복사하기</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-[#303532]/25 bg-[#FFFFFF] px-5 py-2.5 text-sm font-medium text-[#303532] hover:bg-[#F8F7F3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150]"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      <span>새로 작성하기</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                  {activeMode === 'lecture' ? (
                    <>
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="lecture-org"
                            className="block text-xs font-medium text-[#303532]"
                          >
                            기관명 <span className="text-[#4E6150]">(필수)</span>
                          </label>
                          <input
                            id="lecture-org"
                            name="organization"
                            type="text"
                            required
                            value={lectureForm.organization}
                            onChange={(e) =>
                              setLectureForm({ ...lectureForm, organization: e.target.value })
                            }
                            placeholder="예: OO시 보건소, OO기업 인사팀"
                            className="mt-1.5 min-h-[44px] w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2 text-sm text-[#303532] placeholder:text-[#303532]/40 focus:border-[#4E6150] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="lecture-person"
                            className="block text-xs font-medium text-[#303532]"
                          >
                            담당자 <span className="text-[#4E6150]">(필수)</span>
                          </label>
                          <input
                            id="lecture-person"
                            name="contactPerson"
                            type="text"
                            required
                            value={lectureForm.contactPerson}
                            onChange={(e) =>
                              setLectureForm({ ...lectureForm, contactPerson: e.target.value })
                            }
                            placeholder="성함 및 직함"
                            className="mt-1.5 min-h-[44px] w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2 text-sm text-[#303532] placeholder:text-[#303532]/40 focus:border-[#4E6150] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="lecture-contact"
                          className="block text-xs font-medium text-[#303532]"
                        >
                          연락처 (전화번호 또는 이메일) <span className="text-[#4E6150]">(필수)</span>
                        </label>
                        <input
                          id="lecture-contact"
                          name="contactInfo"
                          type="text"
                          required
                          value={lectureForm.contactInfo}
                          onChange={(e) =>
                            setLectureForm({ ...lectureForm, contactInfo: e.target.value })
                          }
                          placeholder="예: 010-0000-0000 또는 contact@organization.kr"
                          className="mt-1.5 min-h-[44px] w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2 text-sm text-[#303532] placeholder:text-[#303532]/40 focus:border-[#4E6150] focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="lecture-audience"
                            className="block text-xs font-medium text-[#303532]"
                          >
                            교육 대상
                          </label>
                          <select
                            id="lecture-audience"
                            name="targetAudience"
                            value={lectureForm.targetAudience}
                            onChange={(e) =>
                              setLectureForm({ ...lectureForm, targetAudience: e.target.value })
                            }
                            className="mt-1.5 min-h-[44px] w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2 text-sm text-[#303532] focus:border-[#4E6150] focus:outline-none"
                          >
                            {CONTACT_CONTENT.lectureTab.audienceOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="lecture-topic"
                            className="block text-xs font-medium text-[#303532]"
                          >
                            희망 주제
                          </label>
                          <select
                            id="lecture-topic"
                            name="desiredTopic"
                            value={lectureForm.desiredTopic}
                            onChange={(e) =>
                              setLectureForm({ ...lectureForm, desiredTopic: e.target.value })
                            }
                            className="mt-1.5 min-h-[44px] w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2 text-sm text-[#303532] focus:border-[#4E6150] focus:outline-none"
                          >
                            {CONTACT_CONTENT.lectureTab.topicOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="lecture-schedule"
                            className="block text-xs font-medium text-[#303532]"
                          >
                            희망 일정
                          </label>
                          <input
                            id="lecture-schedule"
                            name="desiredSchedule"
                            type="text"
                            value={lectureForm.desiredSchedule}
                            onChange={(e) =>
                              setLectureForm({ ...lectureForm, desiredSchedule: e.target.value })
                            }
                            placeholder="예: 2026년 하반기 또는 희망 날짜"
                            className="mt-1.5 min-h-[44px] w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2 text-sm text-[#303532] placeholder:text-[#303532]/40 focus:border-[#4E6150] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="lecture-participants"
                            className="block text-xs font-medium text-[#303532]"
                          >
                            예상 인원
                          </label>
                          <input
                            id="lecture-participants"
                            name="estimatedParticipants"
                            type="text"
                            inputMode="numeric"
                            value={lectureForm.estimatedParticipants}
                            onChange={(e) =>
                              setLectureForm({
                                ...lectureForm,
                                estimatedParticipants: e.target.value,
                              })
                            }
                            placeholder="예: 약 30명"
                            className="mt-1.5 min-h-[44px] w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2 text-sm tabular-nums text-[#303532] placeholder:text-[#303532]/40 focus:border-[#4E6150] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="lecture-notes"
                          className="block text-xs font-medium text-[#303532]"
                        >
                          추가 전달 사항 (선택)
                        </label>
                        <textarea
                          id="lecture-notes"
                          name="notes"
                          rows={3}
                          value={lectureForm.notes}
                          onChange={(e) =>
                            setLectureForm({ ...lectureForm, notes: e.target.value })
                          }
                          placeholder="강의 장소(대면/비대면 여부)나 교육 목적 등 참고할 내용을 적어주세요."
                          className="mt-1.5 w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2.5 text-sm leading-relaxed text-[#303532] placeholder:text-[#303532]/40 focus:border-[#4E6150] focus:outline-none"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Sensitive Health Info Prevention Advisory */}
                      <div className="rounded-lg border border-[#788C7A]/35 bg-[#F8F7F3] p-4">
                        <p className="text-xs font-semibold text-[#4E6150]">
                          {CONTACT_CONTENT.consultationTab.sensitiveWarningTitle}
                        </p>
                        <p className="mt-1 text-xs leading-[1.65] text-[#303532]/80">
                          {CONTACT_CONTENT.consultationTab.sensitiveWarningBody}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="consult-name"
                            className="block text-xs font-medium text-[#303532]"
                          >
                            이름 <span className="text-[#4E6150]">(필수)</span>
                          </label>
                          <input
                            id="consult-name"
                            name="name"
                            type="text"
                            required
                            value={consultationForm.name}
                            onChange={(e) =>
                              setConsultationForm({ ...consultationForm, name: e.target.value })
                            }
                            placeholder="성함을 입력해 주세요"
                            className="mt-1.5 min-h-[44px] w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2 text-sm text-[#303532] placeholder:text-[#303532]/40 focus:border-[#4E6150] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="consult-contact"
                            className="block text-xs font-medium text-[#303532]"
                          >
                            연락처 (전화번호 또는 이메일) <span className="text-[#4E6150]">(필수)</span>
                          </label>
                          <input
                            id="consult-contact"
                            name="contactInfo"
                            type="text"
                            required
                            value={consultationForm.contactInfo}
                            onChange={(e) =>
                              setConsultationForm({
                                ...consultationForm,
                                contactInfo: e.target.value,
                              })
                            }
                            placeholder="회신받으실 연락처"
                            className="mt-1.5 min-h-[44px] w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2 text-sm text-[#303532] placeholder:text-[#303532]/40 focus:border-[#4E6150] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="consult-purpose"
                          className="block text-xs font-medium text-[#303532]"
                        >
                          상담 목적에 대한 간략한 설명 <span className="text-[#4E6150]">(필수)</span>
                        </label>
                        <textarea
                          id="consult-purpose"
                          name="purpose"
                          rows={4}
                          required
                          value={consultationForm.purpose}
                          onChange={(e) =>
                            setConsultationForm({ ...consultationForm, purpose: e.target.value })
                          }
                          placeholder="일상 식생활 관리, 생활습관과 연계된 영양 방향 탐색 등 상담을 희망하시는 배경을 간략히 적어주세요. (상세 병력이나 복용 약물명은 작성하지 말아 주세요.)"
                          className="mt-1.5 w-full rounded-md border border-[#303532]/20 bg-[#FFFFFF] px-3.5 py-2.5 text-sm leading-relaxed text-[#303532] placeholder:text-[#303532]/40 focus:border-[#4E6150] focus:outline-none"
                        />
                      </div>
                    </>
                  )}

                  {/* Privacy Collection & Consent */}
                  <div className="border-t border-[#303532]/10 pt-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-[#303532]">
                        {CONTACT_CONTENT.privacyPolicy.title}
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowPrivacyDetails((prev) => !prev)}
                        className="text-xs text-[#4E6150] underline underline-offset-4 hover:text-[#303532]"
                      >
                        {showPrivacyDetails ? '안내 접기' : '안내 보기'}
                      </button>
                    </div>

                    {showPrivacyDetails && (
                      <ul className="mt-3 space-y-1.5 rounded-md bg-[#F8F7F3] p-4 text-xs leading-relaxed text-[#303532]/75">
                        {CONTACT_CONTENT.privacyPolicy.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}

                    <label className="mt-3 flex min-h-[44px] cursor-pointer items-center gap-2.5 text-sm text-[#303532]">
                      <input
                        type="checkbox"
                        checked={privacyAgreed}
                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                        className="h-4 w-4 accent-[#4E6150]"
                      />
                      <span className="text-xs sm:text-sm">
                        {CONTACT_CONTENT.privacyPolicy.checkboxLabel}
                      </span>
                    </label>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="rounded-md border border-[#9A3412]/30 bg-[#9A3412]/5 px-4 py-3 text-xs font-medium text-[#7C2D12]"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-[#303532] px-6 py-3 text-sm font-medium text-[#F8F7F3] transition-colors duration-150 hover:bg-[#4E6150] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150]"
                    >
                      {activeMode === 'lecture'
                        ? '강의 의뢰 내용 확인하기 (테스트용)'
                        : '심층 영양상담 문의 내용 확인하기 (테스트용)'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
