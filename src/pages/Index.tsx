import { useState, useEffect } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { BookNavigation } from '@/components/BookNavigation';
import { CoverPage } from '@/components/pages/CoverPage';
import { AboutPage } from '@/components/pages/AboutPage';
import { SkillsPage } from '@/components/pages/SkillsPage';
import { ExperiencePage } from '@/components/pages/ExperiencePage';
import { ProjectsPage } from '@/components/pages/ProjectsPage';
import { EducationPage } from '@/components/pages/EducationPage';
import { AwardsPage } from '@/components/pages/AwardsPage';
import { LinksPage } from '@/components/pages/LinksPage';
import { ContactPage } from '@/components/pages/ContactPage';

const pages = [
  { name: 'Cover', component: CoverPage },
  { name: 'About', component: AboutPage },
  { name: 'Skills', component: SkillsPage },
  { name: 'Experience', component: ExperiencePage },
  { name: 'Projects', component: ProjectsPage },
  { name: 'Education', component: EducationPage },
  { name: 'Awards', component: AwardsPage },
  { name: 'Links', component: LinksPage },
  { name: 'Contact', component: ContactPage },
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage || isFlipping) return;
    
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsFlipping(false);
    }, 800);
  };

  // Scroll navigation
  useEffect(() => {
    let isScrolling = false;
    
    const handleScroll = (e: WheelEvent) => {
      if (isScrolling || isFlipping) return;
      
      e.preventDefault();
      isScrolling = true;
      
      if (e.deltaY > 0 && currentPage < pages.length - 1) {
        handlePageChange(currentPage + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        handlePageChange(currentPage - 1);
      }
      
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handlePageChange(Math.min(pages.length - 1, currentPage + 1));
      } else if (e.key === 'ArrowLeft') {
        handlePageChange(Math.max(0, currentPage - 1));
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentPage, isFlipping]);

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <main className="relative min-h-screen bg-gradient-primary overflow-hidden">
      <ParticleBackground />
      
      {/* Book Container */}
      <div className="relative z-10 flex justify-center items-center min-h-screen p-8">
        <div className="book-container">
          <div className="book">
            <div className="book-spine"></div>
            <div 
              className={`book-page transition-all duration-700 ease-in-out ${
                isFlipping ? 'page-turn' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <CurrentPageComponent />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <BookNavigation
        currentPage={currentPage}
        totalPages={pages.length}
        onPageChange={handlePageChange}
        pageNames={pages.map(p => p.name)}
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