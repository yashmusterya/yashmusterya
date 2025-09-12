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
    }, 300);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handlePageChange(Math.min(pages.length - 1, currentPage + 1));
      } else if (e.key === 'ArrowLeft') {
        handlePageChange(Math.max(0, currentPage - 1));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <main className="relative min-h-screen bg-gradient-primary overflow-hidden">
      <ParticleBackground />
      
      {/* Book Container */}
      <div className="relative z-10">
        <div 
          className={`transition-all duration-600 ease-in-out ${
            isFlipping ? 'transform scale-95 opacity-80' : 'transform scale-100 opacity-100'
          }`}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="book-page">
            <CurrentPageComponent />
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

      {/* Keyboard Instructions */}
      <div className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-sm rounded-lg p-3 text-sm text-muted-foreground border border-border/50">
        <div className="space-y-1">
          <div>← → Arrow keys to navigate</div>
          <div>Space bar for next page</div>
        </div>
      </div>
    </main>
  );
};

export default Index;