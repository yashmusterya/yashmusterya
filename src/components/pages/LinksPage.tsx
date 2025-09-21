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
    stats: '5+ Repositories'
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
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4 overflow-y-auto">
      <div className="max-w-2xl w-full space-y-3 sm:space-y-4">
        <div className="text-center space-y-1 sm:space-y-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Connect & Explore</h1>
          <div className="h-0.5 w-16 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-sm">Find me across platforms</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card p-3 sm:p-4 rounded-xl shadow-book border border-border/30 hover:shadow-glow/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`p-2 sm:p-3 rounded-xl ${link.bgColor} border border-border/30 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${getIconColor(link.name)}`} />
                  </div>
                  
                  <div className="flex-1 space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-primary">{link.name}</h3>
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                        {link.stats}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {link.description}
                    </p>
                    
                    <Button 
                      size="sm"
                      asChild
                      className={`glow-hover bg-gradient-accent hover:shadow-glow border-0 ${link.color} transition-all duration-300 text-xs`}
                    >
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Visit {link.name} <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-card p-3 sm:p-4 rounded-xl shadow-book border border-border/30">
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
              <h3 className="text-lg sm:text-xl font-semibold">Let's Connect!</h3>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Open to new opportunities and collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-3">
              <Button 
                size="sm"
                asChild
                variant="outline"
                className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10 text-xs"
              >
                <a href="mailto:musteryay@gmail.com">
                  <User className="mr-1 h-3 w-3" />
                  Email
                </a>
              </Button>
              <Button 
                size="sm"
                asChild
                variant="outline"
                className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10 text-xs"
              >
                <a href="tel:+919867684002">
                  <User className="mr-1 h-3 w-3" />
                  Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};