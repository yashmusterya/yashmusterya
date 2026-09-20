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
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="max-w-2xl w-full space-y-3">
        <div className="text-center space-y-1">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Skills & Expertise</h1>
          <div className="h-0.5 w-16 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {categories.slice(0, 4).map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category} className="bg-gradient-card p-3 rounded-lg border border-border/20">
                <h3 className="text-sm font-semibold text-primary mb-2 text-center">
                  {category}
                </h3>
                <div className="space-y-1">
                  {categorySkills.slice(0, 3).map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary/30 rounded-full h-1.5">
                        <div 
                          className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
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

        <div className="grid grid-cols-3 gap-2">
          {categories.slice(4).map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category} className="bg-gradient-card p-2 rounded-lg border border-border/20">
                <h4 className="text-xs font-semibold text-primary mb-1 text-center">
                  {category}
                </h4>
                <div className="space-y-1">
                  {categorySkills.slice(0, 2).map((skill) => (
                    <div key={skill.name} className="text-center">
                      <div className="text-xs font-medium text-foreground">{skill.name}</div>
                      <div className="text-xs text-primary font-semibold">{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-card p-3 rounded-lg border border-border/20 text-center">
          <h3 className="text-sm font-semibold text-primary mb-1">Always Learning</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Passionate about staying current with emerging technologies and continuously expanding my skill set.
          </p>
        </div>
      </div>
    </div>
  );
};