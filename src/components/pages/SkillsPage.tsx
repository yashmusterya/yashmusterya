import { Badge } from '@/components/ui/badge';

const skills = [
  { name: 'Python', level: 95, category: 'Programming' },
  { name: 'TensorFlow', level: 85, category: 'AI/ML' },
  { name: 'C/C++', level: 80, category: 'Programming' },
  { name: 'HTML/CSS', level: 90, category: 'Frontend' },
  { name: 'SQL', level: 85, category: 'Database' },
  { name: 'Flask', level: 90, category: 'Backend' },
  { name: 'SQLAlchemy', level: 85, category: 'Backend' },
  { name: 'TypeScript', level: 80, category: 'Programming' },
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
  { name: 'Linux', level: 75, category: 'Systems' },
];

const categories = ['Programming', 'Backend', 'AI/ML', 'Frontend', 'Database', 'Tools', 'Systems'];

export const SkillsPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="max-w-4xl w-full space-y-4 sm:space-y-6">
        <div className="text-center space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Skills & Expertise</h1>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full shadow-glow"></div>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category} className="bg-gradient-card p-6 rounded-2xl shadow-book border border-border/30">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {category}
                  </Badge>
                </h3>
                <div className="grid gap-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-navy-medium rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-accent rounded-full shadow-glow transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-card p-6 rounded-2xl shadow-book border border-border/30 text-center">
          <h3 className="text-xl font-semibold text-primary mb-4">Always Learning</h3>
          <p className="text-muted-foreground">
            Passionate about staying current with emerging technologies and continuously expanding my skill set 
            through hands-on projects and formal education.
          </p>
        </div>
      </div>
    </div>
  );
};