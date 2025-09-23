import { useState, useEffect } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { BookNavigation } from '@/components/BookNavigation';
import { CoverPage } from '@/components/pages/CoverPage';
import { AboutPage } from '@/components/pages/AboutPage';
import { SkillsPage } from '@/components/pages/SkillsPage';
import { ProfessionalExperiencePage } from '@/components/pages/ProfessionalExperiencePage';
import { CommunityLeadershipPage } from '@/components/pages/CommunityLeadershipPage';
import { ProjectsPage } from '@/components/pages/ProjectsPage';
import { EducationPage } from '@/components/pages/EducationPage';
import { AwardsPage } from '@/components/pages/AwardsPage';
import { LinksPage } from '@/components/pages/LinksPage';
import { ContactPage } from '@/components/pages/ContactPage';
import { ClosingPage } from '@/components/pages/ClosingPage';

// Organize pages into pairs for the two-page layout
const pageGroups = [
  { left: { name: 'Cover', component: CoverPage }, right: { name: 'About', component: AboutPage } },
  { left: { name: 'Skills', component: SkillsPage }, right: { name: 'Professional', component: ProfessionalExperiencePage } },
  { left: { name: 'Community', component: CommunityLeadershipPage }, right: { name: 'Projects', component: ProjectsPage } },
  { left: { name: 'Education', component: EducationPage }, right: { name: 'Awards', component: AwardsPage } },
  { left: { name: 'Links', component: LinksPage }, right: { name: 'Contact', component: ContactPage } },
  { left: { name: 'Thank You', component: ClosingPage }, right: null },
];

const Index = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handlePageChange = (newGroup: number) => {
    if (newGroup === currentGroup || isFlipping) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentGroup(newGroup);
      setIsFlipping(false);
    }, 250);
  };

  // Scroll navigation
  useEffect(() => {
    let isScrolling = false;
    
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling || isFlipping) return;
      
      e.preventDefault();
      isScrolling = true;
      
      if (e.deltaY > 0 && currentGroup < pageGroups.length - 1) {
        handlePageChange(currentGroup + 1);
      } else if (e.deltaY < 0 && currentGroup > 0) {
        handlePageChange(currentGroup - 1);
      }
      
      setTimeout(() => {
        isScrolling = false;
      }, 300);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore key events when user is typing in input fields
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handlePageChange(Math.min(pageGroups.length - 1, currentGroup + 1));
      } else if (e.key === 'ArrowLeft') {
        handlePageChange(Math.max(0, currentGroup - 1));
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentGroup, isFlipping]);

  const currentPageGroup = pageGroups[currentGroup];
  const LeftPageComponent = currentPageGroup.left?.component;
  const RightPageComponent = currentPageGroup.right?.component;

  return (
    <main className="relative h-screen w-screen bg-gradient-primary overflow-hidden">
      <ParticleBackground />
      
      {/* Book Container */}
      <div className="book-container">
        <div className="book">
          <div className="book-spine"></div>
          <div 
            className={`book-page left ${
              isFlipping ? 'page-turn' : ''
            }`}
          >
            {LeftPageComponent && <LeftPageComponent />}
          </div>
          <div 
            className={`book-page right ${
              isFlipping ? 'page-flip-back' : ''
            }`}
          >
            {RightPageComponent && <RightPageComponent />}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <BookNavigation
        currentPage={currentGroup}
        totalPages={pageGroups.length}
        onPageChange={handlePageChange}
        pageNames={pageGroups.map((group, index) => group.right ? `${group.left.name} & ${group.right.name}` : group.left.name)}
      />

      {/* Instructions */}
      <div className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-sm rounded-lg p-3 text-sm text-muted-foreground border border-border/50">
        <div className="space-y-1">
          <div>🖱️ Scroll to flip pages</div>
          <div>← → Arrow keys to navigate</div>
          <div>Space bar for next page</div>
        </div>
      </div>
    </main>
  );
};

export default Index;