import { Badge } from '@/components/ui/badge';
import { Calendar, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Data Science Program',
    institution: 'IIT Madras',
    period: 'Expected 05/2028',
    status: 'In Progress',
    level: 'Foundation Level Completed',
    achievements: [
      'Foundation Level completed with distinction',
      'Topper & Finisher badges earned',
      'S Grade in Python Foundation Level Program',
      'Strong foundation in Python, statistics, mathematics',
      'Advanced computational thinking skills'
    ],
    subjects: ['Python Programming', 'Statistics', 'Mathematics', 'Data Analysis', 'Machine Learning Fundamentals'],
    type: 'Professional Certification'
  },
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'KJ Somaiya College of Engineering',
    period: 'Expected 05/2028',
    status: 'In Progress',
    level: 'Undergraduate',
    achievements: [
      'Strong academic performance in core subjects',
      'Active participation in technical events',
      'Member of various technical committees',
      'Focus on practical applications of AI/DS'
    ],
    subjects: ['AI/ML', 'Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Deep Learning'],
    type: 'Bachelor\'s Degree'
  },
  {
    degree: 'Higher Secondary Certificate (HSC) Science',
    institution: 'Mumbai University',
    period: '02/2024',
    status: 'Completed',
    level: 'Higher Secondary',
    achievements: [
      'Strong foundation in Science and Mathematics',
      'Excellent performance in Physics, Chemistry, Mathematics',
      'Developed analytical and problem-solving skills'
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    type: 'High School Diploma'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress':
      return 'bg-blue-glow/20 text-blue-glow border-blue-glow/30';
    case 'Completed':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    default:
      return 'bg-accent/20 text-accent border-accent/30';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Professional Certification':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'Bachelor\'s Degree':
      return 'bg-blue-electric/20 text-blue-electric border-blue-electric/30';
    case 'High School Diploma':
      return 'bg-accent/20 text-accent border-accent/30';
    default:
      return 'bg-primary/20 text-primary border-primary/30';
  }
};

export const EducationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary">Education</h1>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-lg">Academic journey and continuous learning</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-card p-6 md:p-8 rounded-2xl shadow-book border border-border/30 hover:shadow-glow/20 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-primary">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-foreground">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-lg">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={getStatusColor(edu.status)}>
                      {edu.status}
                    </Badge>
                    <Badge className={getTypeColor(edu.type)} variant="outline">
                      {edu.type}
                    </Badge>
                  </div>
                </div>

                {edu.level && (
                  <div className="bg-navy-medium/30 p-4 rounded-xl border border-border/20">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Award className="h-4 w-4" />
                      <span>{edu.level}</span>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Key Achievements:
                  </h4>
                  <div className="grid gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Core Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card p-6 rounded-2xl shadow-book border border-border/30 text-center">
          <h3 className="text-xl font-semibold text-primary mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground">
            Committed to lifelong learning through online courses, workshops, and hands-on projects. 
            Always exploring new technologies and methodologies to stay at the forefront of innovation.
          </p>
        </div>
      </div>
    </div>
  );
};