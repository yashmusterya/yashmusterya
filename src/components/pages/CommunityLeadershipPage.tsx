import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Users, Heart } from 'lucide-react';

const communityExperiences = [
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
    case 'Community Role':
      return 'bg-blue-electric/20 text-blue-electric border-blue-electric/30';
    case 'Event Management':
      return 'bg-accent/20 text-accent border-accent/30';
    default:
      return 'bg-primary/20 text-primary border-primary/30';
  }
};

export const CommunityLeadershipPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4 overflow-y-auto">
      <div className="max-w-3xl w-full space-y-3 sm:space-y-4">
        <div className="text-center space-y-1 sm:space-y-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Community & Leadership</h1>
          <div className="h-0.5 w-16 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-sm">Community contributions & leadership roles</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {communityExperiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-card p-3 sm:p-4 md:p-5 rounded-xl shadow-book border border-border/30 hover:shadow-glow/20 transition-all duration-300"
            >
              <div className="space-y-2 sm:space-y-3">
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
                  <h4 className="font-semibold text-sm text-foreground">Key Contributions:</h4>
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
                  <h4 className="font-semibold text-sm text-foreground">Skills:</h4>
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

        <div className="grid grid-cols-2 gap-3">
          <div className="text-center space-y-2 p-3 bg-gradient-card rounded-xl shadow-book border border-border/30">
            <Users className="h-6 w-6 text-primary mx-auto" />
            <div className="text-lg font-bold text-primary">Community</div>
            <div className="text-muted-foreground text-xs">Building connections and fostering collaboration</div>
          </div>
          <div className="text-center space-y-2 p-3 bg-gradient-card rounded-xl shadow-book border border-border/30">
            <Heart className="h-6 w-6 text-primary mx-auto" />
            <div className="text-lg font-bold text-primary">Leadership</div>
            <div className="text-muted-foreground text-xs">Organizing events and mentoring others</div>
          </div>
        </div>

        <div className="bg-gradient-card p-4 rounded-xl shadow-book border border-border/30 text-center">
          <h3 className="text-lg font-semibold text-primary mb-2">Community Impact</h3>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Passionate about building communities, supporting startups, and creating meaningful connections 
            that drive innovation and collaboration in the tech ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};