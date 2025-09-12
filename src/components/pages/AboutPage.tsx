export const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary">About Me</h1>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
        </div>

        <div className="bg-gradient-card p-8 md:p-12 rounded-2xl shadow-book border border-border/30 space-y-6">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90 first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none">
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

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center space-y-2 p-4 rounded-xl bg-navy-medium/50 border border-border/20">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center space-y-2 p-4 rounded-xl bg-navy-medium/50 border border-border/20">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div className="text-center space-y-2 p-4 rounded-xl bg-navy-medium/50 border border-border/20">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Problem Solving</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};