import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/yash-profile-new.jpg';

export const CoverPage = () => {
  return (
    <div className="book-page">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl mx-auto mb-6">
              <img 
                src={profileImage} 
                alt="Yash Musterya - Full Stack Developer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-accent bg-clip-text text-transparent animate-glow-pulse">
            Yash Musterya
          </h1>
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-xl md:text-2xl text-blue-soft font-light tracking-wide">
            "Turning ideas into scalable solutions"
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 bg-gradient-card p-8 rounded-2xl shadow-book border border-border/30">
          <h2 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h2>
          <div className="grid gap-4 text-left">
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
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            asChild
            className="glow-hover bg-gradient-accent hover:shadow-glow border-0"
          >
            <a href="https://github.com/yashmusterya/" target="_blank" rel="noopener noreferrer">
              GitHub <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button 
            asChild
            variant="outline"
            className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            <a href="https://linkedin.com/in/yashmusterya/" target="_blank" rel="noopener noreferrer">
              LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button 
            asChild
            variant="outline"
            className="glow-hover border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            <a href="https://leetcode.com/u/yashmusterya/" target="_blank" rel="noopener noreferrer">
              LeetCode <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <div className="text-sm text-muted-foreground">Scroll or navigate to explore</div>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full mx-auto mt-2 relative">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};