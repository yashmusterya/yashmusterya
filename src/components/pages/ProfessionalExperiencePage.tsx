import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const professionalExperiences = [
  {
    title: 'Cyber Research Analyst (Intern)',
    company: 'DeepCytes Ventures',
    location: 'Mumbai',
    period: '03/2025 – Present',
    type: 'Internship',
    responsibilities: [
      'Conducted in-depth digital footprint analysis to detect cyber threats',
      'Developed audit procedures for vulnerability assessments',
      'Collaborated on threat mitigation strategies',
      'Enhanced detection using AI-powered tools',
      'Implemented counter-surveillance measures & ransomware protection services'
    ],
    technologies: ['Cybersecurity', 'AI Tools', 'Threat Analysis', 'Digital Forensics']
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Internship':
      return 'bg-blue-glow/20 text-blue-glow border-blue-glow/30';
    default:
      return 'bg-primary/20 text-primary border-primary/30';
  }
};

export const ProfessionalExperiencePage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4">
      <div className="max-w-3xl w-full h-full space-y-3 sm:space-y-4 flex flex-col justify-center">
        <div className="text-center space-y-1 sm:space-y-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Professional Experience</h1>
          <div className="h-0.5 w-16 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-sm">Industry experience & internships</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {professionalExperiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-card p-4 sm:p-5 md:p-6 rounded-xl shadow-book border border-border/30 hover:shadow-glow/20 transition-all duration-300"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-primary">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-foreground text-sm">
                      <Building className="h-3 w-3 text-primary" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <Badge className={`${getTypeColor(exp.type)} text-xs`}>
                    {exp.type}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-sm text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors text-xs px-2 py-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card p-4 rounded-xl shadow-book border border-border/30 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Industry Focus</h3>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Specializing in cybersecurity, threat analysis, and digital forensics with hands-on experience 
            in AI-powered security tools and vulnerability assessment procedures.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="text-center space-y-1 p-3 bg-gradient-card rounded-xl shadow-book border border-border/30">
            <div className="text-xl font-bold text-primary">Current</div>
            <div className="text-muted-foreground text-xs">Active Internship</div>
            <div className="text-xs text-blue-soft">DeepCytes Ventures</div>
          </div>
          <div className="text-center space-y-1 p-3 bg-gradient-card rounded-xl shadow-book border border-border/30">
            <div className="text-xl font-bold text-primary">Focus</div>
            <div className="text-muted-foreground text-xs">Cybersecurity</div>
            <div className="text-xs text-blue-soft">Research & Analysis</div>
          </div>
        </div>
      </div>
    </div>
  );
};