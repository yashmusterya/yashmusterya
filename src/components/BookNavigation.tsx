import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageNames: string[];
}

export const BookNavigation = ({
  currentPage,
  totalPages,
  onPageChange,
  pageNames,
}: BookNavigationProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-book border border-border/50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="rounded-full p-2 hover:bg-accent/20 hover:scale-110 transition-all duration-300 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          {pageNames.map((name, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'bg-primary w-6 shadow-glow'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              title={name}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
          disabled={currentPage === totalPages - 1}
          className="rounded-full p-2 hover:bg-accent/20 hover:scale-110 transition-all duration-300 disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-center mt-3">
        <span className="text-sm text-muted-foreground">
          {pageNames[currentPage]} ({currentPage + 1} of {totalPages})
        </span>
      </div>
    </div>
  );
};