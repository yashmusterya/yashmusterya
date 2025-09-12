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
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary">Awards & Recognition</h1>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-lg">Celebrating achievements and milestones</p>
        </div>

        <div className="space-y-6">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card p-6 md:p-8 rounded-2xl shadow-book border border-border/30 hover:shadow-glow/20 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full bg-navy-medium/50 border border-border/30 ${award.color}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-primary">{award.title}</h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-foreground">
                            <span className="font-semibold">{award.institution}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{award.year}</span>
                          </div>
                          <div className="text-blue-soft font-medium">{award.program}</div>
                        </div>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(award.category)}>
                      {award.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed pl-16 md:pl-20">
                    {award.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center space-y-3 p-6 bg-gradient-card rounded-2xl shadow-book border border-border/30">
            <div className="text-3xl font-bold text-primary">3+</div>
            <div className="text-muted-foreground">Awards Received</div>
            <div className="text-sm text-blue-soft">Academic Excellence</div>
          </div>
          <div className="text-center space-y-3 p-6 bg-gradient-card rounded-2xl shadow-book border border-border/30">
            <div className="text-3xl font-bold text-primary">S Grade</div>
            <div className="text-muted-foreground">Highest Achievement</div>
            <div className="text-sm text-blue-soft">IIT Madras</div>
          </div>
          <div className="text-center space-y-3 p-6 bg-gradient-card rounded-2xl shadow-book border border-border/30">
            <div className="text-3xl font-bold text-primary">2024</div>
            <div className="text-muted-foreground">Recognition Year</div>
            <div className="text-sm text-blue-soft">Multiple Awards</div>
          </div>
        </div>

        <div className="bg-gradient-card p-6 rounded-2xl shadow-book border border-border/30 text-center">
          <h3 className="text-xl font-semibold text-primary mb-4">Pursuit of Excellence</h3>
          <p className="text-muted-foreground">
            These recognitions reflect my commitment to academic excellence and continuous improvement. 
            They motivate me to keep pushing boundaries and achieving new milestones in my learning journey.
          </p>
        </div>
      </div>
    </div>
  );
};