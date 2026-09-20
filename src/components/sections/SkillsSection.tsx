import { skillGroups } from '@/content';
import { Icon, Panel, ScreenHeader } from '@/components/site/Primitives';

export const SkillsSection = () => {
  const total = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

  return (
    <div className="screen">
      <ScreenHeader
        eyebrow="Inventory"
        title="Technical skills"
        description={`${total} items across ${skillGroups.length} groups. Hover a slot for the full name — the two-letter code is the block label.`}
      />

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <Panel key={group.title} className="skill-group">
            <header className="skill-group__head">
              <span className="skill-group__icon">
                <Icon name={group.icon} />
              </span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.blurb}</p>
              </div>
              <span className="skill-group__count">{group.skills.length}</span>
            </header>

            <ul className="inventory">
              {group.skills.map((skill) => (
                <li key={skill.name} className="slot" title={skill.name}>
                  <span className={`gem gem--${skill.tone}`} aria-hidden="true">
                    {skill.code}
                  </span>
                  <span className="slot__name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </div>
  );
};
