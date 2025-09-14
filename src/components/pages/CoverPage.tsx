import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/yash-profile-new.jpg';

export const CoverPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-4">
      <div className="text-center space-y-4 w-full max-w-lg px-3">
        {/* Profile Image */}
        <div className="mb-4">
          <div className="relative inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-3 border-primary/40 shadow-book mx-auto">
              <img 
                src={profileImage} 
                alt="Yash Musterya - Full Stack Developer" 
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent leading-tight">
            Yash Musterya
          </h1>
          <div className="h-0.5 w-20 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-light tracking-wide">
            "Turning ideas into scalable solutions"
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 bg-gradient-card p-3 sm:p-4 rounded-lg shadow-book border border-border/30">
          <h2 className="text-base sm:text-lg font-semibold text-primary mb-3">Get In Touch</h2>
          <div className="grid gap-2 text-left text-xs sm:text-sm">
            <div className="flex items-center gap-3 group hover:text-primary transition-colors">
              <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <a 
                href="mailto:musteryay@gmail.com"
                className="hover:underline"
              >
                musteryay@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 group hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <a 
                href="tel:+919867684002"
                className="hover:underline"
              >
                +91 9867684002
              </a>
            </div>
            <div className="flex items-center gap-3 group hover:text-primary transition-colors">
              <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span>Thane, Maharashtra</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
          <Button 
            asChild
            size="sm"
            className="glow-hover bg-gradient-accent hover:shadow-glow border-0 text-xs h-8 px-3"
          >
            <a href="https://github.com/yashmusterya/" target="_blank" rel="noopener noreferrer">
              GitHub <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="sm"
            className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10 text-xs h-8 px-3"
          >
            <a href="https://linkedin.com/in/yashmusterya/" target="_blank" rel="noopener noreferrer">
              LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="sm"
            className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10 text-xs h-8 px-3"
          >
            <a href="https://leetcode.com/u/yashmusterya/" target="_blank" rel="noopener noreferrer">
              LeetCode <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-3 animate-bounce">
          <div className="text-xs text-muted-foreground">Scroll or navigate to explore</div>
          <div className="w-4 h-6 border-2 border-primary/30 rounded-full mx-auto mt-1 relative">
            <div className="w-0.5 h-1.5 bg-primary rounded-full mx-auto mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};