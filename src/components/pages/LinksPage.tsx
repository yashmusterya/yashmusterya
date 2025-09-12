import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Code, ExternalLink, Globe, User } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yashmusterya/',
    description: 'Open source projects, code repositories, and contributions to the developer community.',
    icon: Github,
    color: 'hover:text-gray-300 hover:border-gray-300',
    bgColor: 'bg-gray-900/20',
    stats: '50+ Repositories'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/yashmusterya/',
    description: 'Algorithm practice, competitive programming solutions, and problem-solving skills.',
    icon: Code,
    color: 'hover:text-orange-400 hover:border-orange-400',
    bgColor: 'bg-orange-500/20',
    stats: 'Active Problem Solver'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yashmusterya/',
    description: 'Professional network, career updates, and industry connections.',
    icon: Linkedin,
    color: 'hover:text-blue-400 hover:border-blue-400',
    bgColor: 'bg-blue-500/20',
    stats: 'Professional Network'
  }
];

const getIconColor = (name: string) => {
  switch (name) {
    case 'GitHub':
      return 'text-gray-300';
    case 'LeetCode':
      return 'text-orange-400';
    case 'LinkedIn':
      return 'text-blue-400';
    default:
      return 'text-primary';
  }
};

export const LinksPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary">Connect & Explore</h1>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-lg">Find me across platforms and explore my work</p>
        </div>

        <div className="space-y-6">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card p-6 md:p-8 rounded-2xl shadow-book border border-border/30 hover:shadow-glow/20 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className={`p-4 rounded-2xl ${link.bgColor} border border-border/30 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${getIconColor(link.name)}`} />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-primary">{link.name}</h3>
                      <Badge variant="outline" className="border-primary/30 text-primary w-fit">
                        {link.stats}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {link.description}
                    </p>
                    
                    <Button 
                      asChild
                      className={`glow-hover bg-gradient-accent hover:shadow-glow border-0 ${link.color} transition-all duration-300`}
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit {link.name} <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-card p-6 rounded-2xl shadow-book border border-border/30">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Globe className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Let's Connect!</h3>
            </div>
            <p className="text-muted-foreground">
              I'm always open to discussing new opportunities, collaborating on interesting projects, 
              or simply connecting with fellow developers and tech enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button 
                asChild
                variant="outline"
                className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <a href="mailto:musteryay@gmail.com">
                  <User className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <a href="tel:+919867684002">
                  <User className="mr-2 h-4 w-4" />
                  Call Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 pt-8">
          <p className="text-muted-foreground">
            Thank you for taking the time to explore my portfolio. 
            I look forward to connecting and creating something amazing together!
          </p>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-accent rounded-full shadow-glow animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};