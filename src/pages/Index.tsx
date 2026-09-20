import { useCallback, useEffect, useState } from 'react';
import { navItems, profile, type SectionId } from '@/content';
import { AppShell } from '@/components/site/AppShell';
import { OverviewSection } from '@/components/sections/OverviewSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const isSection = (value: string): value is SectionId =>
  navItems.some((item) => item.id === value);

const sectionFromHash = (): SectionId => {
  const hash = window.location.hash.replace('#', '');
  return isSection(hash) ? hash : 'overview';
};

const Index = () => {
  const [section, setSection] = useState<SectionId>(sectionFromHash);

  // The URL hash keeps screens linkable and makes the back button work.
  const navigate = useCallback((next: SectionId) => {
    setSection(next);
    if (window.location.hash !== `#${next}`) {
      window.history.pushState(null, '', `#${next}`);
    }
  }, []);

  useEffect(() => {
    const onPopState = () => setSection(sectionFromHash());
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onPopState);
    };
  }, []);

  useEffect(() => {
    const label = navItems.find((item) => item.id === section)?.label ?? 'Portfolio';
    document.title = `${profile.name} — ${label}`;
  }, [section]);

  return (
    <AppShell section={section} onNavigate={navigate}>
      <div key={section} className="screen-enter">
        {section === 'overview' && <OverviewSection onNavigate={navigate} />}
        {section === 'projects' && <ProjectsSection />}
        {section === 'skills' && <SkillsSection />}
        {section === 'journey' && <JourneySection />}
        {section === 'achievements' && <AchievementsSection />}
        {section === 'contact' && <ContactSection />}
      </div>
    </AppShell>
  );
};

export default Index;
