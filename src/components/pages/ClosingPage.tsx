import { Heart, Star, Zap, Coffee } from 'lucide-react';

export const ClosingPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="max-w-lg text-center space-y-6">
        <div className="space-y-3">
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="w-16 h-16 text-red-500 animate-pulse" fill="currentColor" />
              <Star className="w-6 h-6 text-yellow-500 absolute -top-2 -right-2 animate-bounce" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Thank You!
          </h1>
        </div>

        <div className="space-y-4 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Thank you for taking the time to explore my portfolio. I hope you enjoyed this digital journey through my experiences and projects.
          </p>
          
          <div className="flex items-center justify-center gap-3 text-sm">
            <Coffee className="w-4 h-4 text-amber-600" />
            <span>Made with passion and lots of coffee</span>
            <Zap className="w-4 h-4 text-yellow-500" />
          </div>
        </div>

        <div className="bg-gradient-card p-4 rounded-xl border border-border/30 space-y-3">
          <h3 className="font-semibold text-primary">Let's Create Something Amazing</h3>
          <p className="text-sm text-muted-foreground">
            Ready to bring your ideas to life? I'm always excited about new challenges and opportunities to make an impact.
          </p>
          <div className="flex justify-center">
            <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
              Let's connect and build the future together
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground/70 font-mono">
          © 2024 Yash Musterya • Designed & Developed with ❤️
        </div>
      </div>
    </div>
  );
};