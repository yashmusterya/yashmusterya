export const AboutPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="max-w-3xl space-y-4 sm:space-y-6">
        <div className="text-center space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">About Me</h1>
          <div className="h-0.5 w-16 sm:w-20 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
        </div>

        <div className="bg-gradient-card p-4 sm:p-6 md:p-8 rounded-xl shadow-book border border-border/30 space-y-4 sm:space-y-5">
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
            <p className="text-foreground/90 first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 sm:first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              A passionate developer specializing in backend development and data-driven solutions, 
              with expertise in Flask, Python, and SQLAlchemy. I thrive on transforming complex 
              challenges into elegant, scalable solutions.
            </p>
            
            <p className="text-muted-foreground">
              My journey in technology is driven by an insatiable curiosity and a commitment to 
              continuous learning. Whether it's architecting robust backend systems, diving deep 
              into data science, or exploring the latest in cybersecurity, I approach each project 
              with creativity and analytical precision.
            </p>

            <p className="text-muted-foreground">
              Currently expanding my expertise through my Data Science program at IIT Madras while 
              pursuing my B.Tech in Artificial Intelligence and Data Science. I believe in the 
              power of technology to solve real-world problems and create meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="text-center space-y-1 p-2 sm:p-3 rounded-lg bg-secondary/50 border border-border/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center space-y-1 p-2 sm:p-3 rounded-lg bg-secondary/50 border border-border/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">3+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center space-y-1 p-2 sm:p-3 rounded-lg bg-secondary/50 border border-border/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Solving</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};