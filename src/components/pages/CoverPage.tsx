import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/yash-profile-new.jpg';

export const CoverPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-center space-y-6 w-full max-w-xl px-4">
        {/* Profile Image */}
        <div className="mb-6">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mx-auto">
              <img 
                src={profileImage} 
                alt="Yash Musterya - Full Stack Developer" 
                className="w-full h-full object-cover object-center scale-110"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            Yash Musterya
          </h1>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light tracking-wide">
            "Turning ideas into scalable solutions"
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 bg-gradient-card p-4 sm:p-6 rounded-xl shadow-book border border-border/30">
          <h2 className="text-lg sm:text-xl font-semibold text-primary mb-4">Get In Touch</h2>
          <div className="grid gap-3 text-left text-sm sm:text-base">
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
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <Button 
            asChild
            size="sm"
            className="glow-hover bg-gradient-accent hover:shadow-glow border-0 text-xs sm:text-sm"
          >
            <a href="https://github.com/yashmusterya/" target="_blank" rel="noopener noreferrer">
              GitHub <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="sm"
            className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10 text-xs sm:text-sm"
          >
            <a href="https://linkedin.com/in/yashmusterya/" target="_blank" rel="noopener noreferrer">
              LinkedIn <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="sm"
            className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10 text-xs sm:text-sm"
          >
            <a href="https://leetcode.com/u/yashmusterya/" target="_blank" rel="noopener noreferrer">
              LeetCode <ExternalLink className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-6 animate-bounce">
          <div className="text-xs sm:text-sm text-muted-foreground">Scroll or navigate to explore</div>
          <div className="w-5 h-8 border-2 border-primary/30 rounded-full mx-auto mt-2 relative">
            <div className="w-0.5 h-2 bg-primary rounded-full mx-auto mt-1.5 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};