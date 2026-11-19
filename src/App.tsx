import { useState } from 'react';
import { InquiryMode } from './data/siteContent';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ResourcesSection } from './components/ResourcesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [inquiryMode, setInquiryMode] = useState<InquiryMode>('lecture');

  const scrollToContact = (mode?: InquiryMode) => {
    if (mode) {
      setInquiryMode(mode);
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#303532] selection:bg-[#EAE5DC]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-[#4E6150] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#F8F7F3]"
      >
        본문 바로가기
      </a>

      <Header onNavigateContact={() => scrollToContact()} />

      <main id="main-content">
        <HeroSection />
        <PhilosophySection />
        <ServicesSection onSelectInquiry={(mode) => scrollToContact(mode)} />
        <ExpertiseSection />
        <ResourcesSection />
        <ContactSection activeMode={inquiryMode} onModeChange={setInquiryMode} />
      </main>

      <Footer />
    </div>
  );
}
