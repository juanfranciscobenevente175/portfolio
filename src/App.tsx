import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { HeaderBadge } from './components/HeaderBadge';
import { HeroCard } from './components/HeroCard';
import { AboutCard } from './components/AboutCard';
import { ProjectsCard } from './components/ProjectsCard';
import { EducationServicesCard } from './components/EducationServicesCard';
import { ContactCard } from './components/ContactCard';
import { DetailModal } from './components/DetailModal';
import { QuickContactModal } from './components/QuickContactModal';
import { Toast } from './components/Toast';
import { Capability, Project } from './types/portfolio';

export const App: React.FC = () => {
  const [selectedDetail, setSelectedDetail] = useState<Capability | Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleExploreScroll = () => {
    const bottomSection = document.getElementById('bottom-grid-section');
    if (bottomSection) {
      bottomSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between selection:bg-[#FF1E44] selection:text-white">
      {/* Interactive 3D Canvas Background (Futuristic Neon Red Theme) */}
      <BackgroundCanvas />

      {/* Main Content Container - Compact, unified & no empty voids */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between py-2 sm:py-3 px-2 sm:px-4 md:px-6 max-w-[1450px] mx-auto w-full">
        {/* Top Header Glass Badge (Non-redundant brand header) */}
        <HeaderBadge />

        {/* Central Hero Glass Card (Main prominent hero header) */}
        <main className="my-auto py-2 sm:py-3">
          <HeroCard
            onSelectCapability={(cap) => setSelectedDetail(cap)}
            onExploreClick={handleExploreScroll}
          />
        </main>

        {/* Bottom 4 Horizontal Glass Panels - Equal 340px height with zero blank space */}
        <section
          id="bottom-grid-section"
          className="w-full max-w-6xl mx-auto pt-1 pb-3 px-2 md:px-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            <AboutCard />
            <ProjectsCard onSelectProject={(proj) => setSelectedDetail(proj)} />
            <EducationServicesCard />
            <ContactCard
              onOpenMessageModal={() => setIsContactModalOpen(true)}
            />
          </div>
        </section>

        {/* Footer info line */}
        <footer className="text-center text-[10px] text-gray-500 pb-1.5 tracking-wider uppercase font-mono">
          <span>© 2026 Juan Francisco Benevente • Futuristic Neon Glassmorphism • Diseñado con precisión</span>
        </footer>
      </div>

      {/* Modals & Feedback Notifications */}
      <DetailModal
        item={selectedDetail}
        onClose={() => setSelectedDetail(null)}
      />

      <QuickContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        onSuccessToast={showToast}
      />

      <Toast message={toastMessage} />
    </div>
  );
};

export default App;
