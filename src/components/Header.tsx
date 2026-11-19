import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_META } from '../data/siteContent';

interface HeaderProps {
  onNavigateContact: () => void;
}

export function Header({ onNavigateContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    onNavigateContact();
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#303532]/10'
          : 'bg-[#F8F7F3]/90 backdrop-blur-xs border-b border-[#303532]/6'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Brand Signature Monogram + Single-line Wordmark */}
        <a
          href="#top"
          onClick={handleLinkClick}
          className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4E6150]"
        >
          <span className="inline-flex items-center" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path
                d="M7.5 8.5C9 12.5 11.2 16 13.5 17.5C15.8 16 18.5 11.5 20.5 7"
                stroke="#303532"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 17.5C12.5 21 10.5 23.5 8 24.5"
                stroke="#303532"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M19.5 9.5C21.5 8 23.5 8.5 24 10.5C22 11.8 20.2 11.2 19.5 9.5Z"
                fill="#788C7A"
              />
            </svg>
          </span>
          <span className="h-3.5 w-px bg-[#303532]/20" aria-hidden="true" />
          <span className="inline-flex items-baseline gap-1.5 tracking-tight text-[#303532]">
            <span className="text-[16px] font-semibold">웰바이영</span>
            <span className="text-[12px] font-normal text-[#303532]/75">건강상담소</span>
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="주요 메뉴"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#303532]/78"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#4E6150] hover:underline hover:underline-offset-8 hover:decoration-[#788C7A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4E6150]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleContactClick}
            className="hidden md:inline-flex items-center justify-center rounded-md bg-[#303532] px-4 py-2 text-xs font-medium tracking-wide text-[#F8F7F3] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#4E6150] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150]"
          >
            문의하기
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#303532] hover:bg-[#EAE5DC]/60 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4E6150]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#303532]/10 bg-[#F8F7F3] px-5 py-5 md:hidden"
        >
          <nav aria-label="모바일 메뉴" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center border-b border-[#303532]/8 px-1 text-base font-medium text-[#303532] hover:text-[#4E6150]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleContactClick}
                className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#303532] px-4 py-2.5 text-sm font-medium text-[#F8F7F3] hover:bg-[#4E6150]"
              >
                문의하기
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
