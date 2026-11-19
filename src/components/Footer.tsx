import { NAV_LINKS, SITE_META } from '../data/siteContent';

export function Footer() {
  return (
    <footer className="border-t border-[#303532]/10 bg-[#EAE5DC]/55">
      <div className="mx-auto max-w-[1160px] px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-5">
            <p className="text-lg font-semibold tracking-tight text-[#303532]">
              {SITE_META.brandName}
            </p>
            <p className="mt-1 text-xs tracking-wide text-[#303532]/65">
              {SITE_META.brandEnglish} · {SITE_META.slogan}
            </p>
            <p className="mt-4 max-w-sm text-xs leading-[1.78] text-[#303532]/72">
              과학적 영양 지식과 현장 상담 경험을 바탕으로 영양교육·강의 및 개인별 심층 영양상담을 제공합니다.
            </p>
          </div>

          {/* Site Navigation Mirror */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-wider text-[#4E6150]">메뉴</p>
            <ul className="mt-3 space-y-2 text-sm text-[#303532]/80">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-[#4E6150] hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#4E6150] hover:underline hover:underline-offset-4"
                >
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Info & Pending Contact Notice */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-wider text-[#4E6150]">운영 안내</p>
            <dl className="mt-3 space-y-2 text-xs leading-relaxed text-[#303532]/78">
              <div className="flex gap-3">
                <dt className="shrink-0 font-medium text-[#303532]/60">대표 전문가</dt>
                <dd>{SITE_META.specialistName}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="shrink-0 font-medium text-[#303532]/60">주요 업무</dt>
                <dd>영양교육·강의 및 개인별 심층 영양상담</dd>
              </div>
              <div className="flex gap-3">
                <dt className="shrink-0 font-medium text-[#303532]/60">연락처 안내</dt>
                <dd>공식 채널 및 접수 연동 확정 후 업데이트 예정</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#303532]/10 pt-6 text-xs text-[#303532]/58 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_META.brandName} ({SITE_META.brandEnglish}). All rights reserved.
          </p>
          <p>본 사이트는 의학적 진단이나 질병 치료를 제공하지 않습니다.</p>
        </div>
      </div>
    </footer>
  );
}
