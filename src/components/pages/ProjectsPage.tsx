import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Car Parking Booking System',
    description: 'A comprehensive full-stack solution for booking parking slots with secure user authentication, real-time availability tracking, and payment integration.',
    technologies: ['Flask', 'Python', 'Flask-SQLAlchemy', 'HTML', 'Hashing Libraries', 'SQLite'],
    features: [
      'Secure user authentication with password hashing',
      'Real-time parking slot availability',
      'Modular backend architecture with RESTful APIs',
      'Responsive web interface',
      'Payment processing integration',
      'Admin dashboard for slot management'
    ],
    type: 'Full-Stack Web Application',
    status: 'Completed'
  },
  {
    title: 'Time Insight Tracker Pro',
    description: 'A TypeScript-powered productivity tracking application with real-time data visualization, helping users analyze and optimize their time management.',
    technologies: ['TypeScript', 'React', 'Chart.js', 'Local Storage API', 'CSS3'],
    features: [
      'Real-time activity tracking',
      'Interactive data visualizations',
      'Productivity analytics and insights',
      'Goal setting and progress monitoring',
      'Export functionality for reports',
      'Responsive design for all devices'
    ],
    type: 'TypeScript Web Application',
    status: 'Completed'
  },
  {
    title: 'Live Threatmap',
    description: 'Real-time global cyber threat visualization platform using geolocation data to display security incidents worldwide with high performance and seamless UX.',
    technologies: ['TypeScript', 'Geolocation API', 'WebSockets', 'D3.js', 'Node.js'],
    features: [
      'Real-time global threat visualization',
      'Geolocation-based incident mapping',
      'Interactive world map interface',
      'Live data streaming and updates',
      'Threat categorization and filtering',
      'Performance-optimized rendering'
    ],
    type: 'Real-time Data Visualization',
    status: 'In Development'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'In Development':
      return 'bg-blue-glow/20 text-blue-glow border-blue-glow/30';
    default:
      return 'bg-accent/20 text-accent border-accent/30';
  }
};

export const ProjectsPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="max-w-4xl w-full h-full space-y-4 sm:space-y-6 flex flex-col justify-center">
        <div className="text-center space-y-2 sm:space-y-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">Projects</h1>
          <div className="h-0.5 w-16 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-sm">Showcasing technical expertise through real-world solutions</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-card p-4 sm:p-5 md:p-6 rounded-xl shadow-book border border-border/30 hover:shadow-glow/20 transition-all duration-300"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{project.title}</h3>
                    <Badge variant="outline" className="border-border/50 text-muted-foreground w-fit">
                      {project.type}
                    </Badge>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-semibold text-sm sm:text-base text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm sm:text-base text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-4">
                  <Button 
                    className="glow-hover bg-gradient-accent hover:shadow-glow border-0"
                    size="sm"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  {project.status === 'Completed' && (
                    <Button 
                      variant="outline"
                      className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10"
                      size="sm"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card p-4 sm:p-6 rounded-xl shadow-book border border-border/30 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-4">More Projects Coming Soon</h3>
          <p className="text-muted-foreground text-sm">
            Currently working on several exciting projects in AI/ML, cybersecurity, and web development. 
            Stay tuned for updates!
          </p>
          <Button 
            asChild
            className="mt-4 glow-hover bg-gradient-accent hover:shadow-glow border-0"
          >
            <a href="https://github.com/yashmusterya/" target="_blank" rel="noopener noreferrer">
              Explore All Projects <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};