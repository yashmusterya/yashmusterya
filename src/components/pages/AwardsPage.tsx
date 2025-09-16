import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Award } from 'lucide-react';

const awards = [
  {
    title: 'Top Course Grade - S Grade',
    institution: 'IIT Madras',
    program: 'Python Foundation Level Program',
    year: '2024',
    description: 'Achieved the highest grade (S Grade) in the Python Foundation Level Program, demonstrating exceptional understanding of programming concepts and practical implementation.',
    category: 'Academic Excellence',
    icon: Trophy,
    color: 'text-yellow-400'
  },
  {
    title: 'Program Finisher Badge',
    institution: 'IIT Madras',
    program: 'Data Science Foundation',
    year: '2024',
    description: 'Successfully completed the comprehensive Data Science Foundation program with distinction, showcasing dedication and commitment to learning.',
    category: 'Completion Award',
    icon: Award,
    color: 'text-blue-glow'
  },
  {
    title: 'Top Performer in Foundation Courses',
    institution: 'IIT Madras',
    program: 'Multiple Foundation Courses',
    year: '2024',
    description: 'Recognized as a top performer across multiple foundation-level courses in mathematics, statistics, and computational thinking.',
    category: 'Academic Recognition',
    icon: Star,
    color: 'text-blue-electric'
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Academic Excellence':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'Completion Award':
      return 'bg-blue-glow/20 text-blue-glow border-blue-glow/30';
    case 'Academic Recognition':
      return 'bg-blue-electric/20 text-blue-electric border-blue-electric/30';
    default:
      return 'bg-primary/20 text-primary border-primary/30';
  }
};

export const AwardsPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4 overflow-y-auto">
      <div className="max-w-3xl w-full space-y-3 sm:space-y-4">
        <div className="text-center space-y-1 sm:space-y-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Awards & Recognition</h1>
          <div className="h-0.5 w-16 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-sm">Celebrating achievements</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card p-3 sm:p-4 rounded-xl shadow-book border border-border/30 hover:shadow-glow/20 transition-all duration-300"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full bg-navy-medium/50 border border-border/30 ${award.color}`}>
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-bold text-primary">{award.title}</h3>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 text-foreground text-sm">
                            <span className="font-semibold">{award.institution}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{award.year}</span>
                          </div>
                          <div className="text-blue-soft font-medium text-sm">{award.program}</div>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getCategoryColor(award.category)} text-xs`}>
                      {award.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed pl-8 sm:pl-11">
                    {award.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="text-center space-y-1 p-2 sm:p-3 bg-gradient-card rounded-xl shadow-book border border-border/30">
            <div className="text-xl sm:text-2xl font-bold text-primary">3+</div>
            <div className="text-muted-foreground text-xs">Awards</div>
            <div className="text-xs text-blue-soft">Excellence</div>
          </div>
          <div className="text-center space-y-1 p-2 sm:p-3 bg-gradient-card rounded-xl shadow-book border border-border/30">
            <div className="text-xl sm:text-2xl font-bold text-primary">S Grade</div>
            <div className="text-muted-foreground text-xs">Highest</div>
            <div className="text-xs text-blue-soft">IIT Madras</div>
          </div>
          <div className="text-center space-y-1 p-2 sm:p-3 bg-gradient-card rounded-xl shadow-book border border-border/30">
            <div className="text-xl sm:text-2xl font-bold text-primary">2024</div>
            <div className="text-muted-foreground text-xs">Recognition</div>
            <div className="text-xs text-blue-soft">Year</div>
          </div>
        </div>

        <div className="bg-gradient-card p-3 sm:p-4 rounded-xl shadow-book border border-border/30 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Pursuit of Excellence</h3>
          <p className="text-muted-foreground text-xs sm:text-sm">
            These recognitions reflect commitment to academic excellence and continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};