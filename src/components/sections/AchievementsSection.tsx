import { achievements, interests } from '@/content';
import { Icon, Panel, ScreenHeader, SectionHeading } from '@/components/site/Primitives';

export const AchievementsSection = () => (
  <div className="screen">
    <ScreenHeader
      eyebrow="Advancements"
      title="Achievements & activities"
      description="Hackathons, campus leadership and the things I read about when nobody is grading me for it."
    />

    <ul className="advancement-grid">
      {achievements.map((item) => (
        <li key={item.title}>
          <Panel as="article" className="advancement">
            <span className={`emblem emblem--${item.tone}`}>
              <Icon name={item.icon} />
            </span>
            <div className="advancement__body">
              <p className="advancement__period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="advancement__org">{item.organisation}</p>
              <p className="advancement__detail">{item.detail}</p>
              {item.proofUrl ? (
                <a className="link-btn" href={item.proofUrl} target="_blank" rel="noreferrer">
                  <Icon name="award" /> {item.proofLabel ?? 'View certificate'}
                </a>
              ) : null}
            </div>
          </Panel>
        </li>
      ))}
    </ul>

    <Panel className="interests">
      <SectionHeading eyebrow="Off the clock" title="Interests" as="h3" />
      <ul className="interests__list">
        {interests.map((item) => (
          <li key={item.title}>
            <span className="interests__icon">
              <Icon name={item.icon} />
            </span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  </div>
);
