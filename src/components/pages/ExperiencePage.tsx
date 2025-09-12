import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
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
  },
  {
    title: 'Ambassador',
    company: 'Riidl',
    location: 'Mumbai',
    period: '05/2024 – Present',
    type: 'Community Role',
    responsibilities: [
      'Supported early-stage startups with workspace and mentorship',
      'Organized tech-driven community projects',
      'Fostered innovation and collaboration within the startup ecosystem',
      'Facilitated networking events and workshops'
    ],
    technologies: ['Community Building', 'Mentorship', 'Event Management', 'Startup Ecosystem']
  },
  {
    title: 'Organising Team Member',
    company: 'Symphony, KJSCE',
    location: 'Mumbai',
    period: '11/2024 – 12/2024',
    type: 'Event Management',
    responsibilities: [
      'Coordinated technical and cultural events',
      'Managed logistics and team coordination',
      'Ensured smooth execution of college symposium',
      'Collaborated with diverse teams for event success'
    ],
    technologies: ['Event Management', 'Team Coordination', 'Project Management', 'Communication']
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Internship':
      return 'bg-blue-glow/20 text-blue-glow border-blue-glow/30';
    case 'Community Role':
      return 'bg-blue-electric/20 text-blue-electric border-blue-electric/30';
    case 'Event Management':
      return 'bg-accent/20 text-accent border-accent/30';
    default:
      return 'bg-primary/20 text-primary border-primary/30';
  }
};

export const ExperiencePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary">Experience</h1>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-lg">Professional journey and contributions</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-card p-6 md:p-8 rounded-2xl shadow-book border border-border/30 hover:shadow-glow/20 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-foreground">
                      <Building className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <Badge className={getTypeColor(exp.type)}>
                    {exp.type}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
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
      </div>
    </div>
  );
};