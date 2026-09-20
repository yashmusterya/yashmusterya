import { education, experience, profile } from '@/content';
import {
  BulletList,
  Icon,
  Panel,
  ScreenHeader,
  SectionHeading,
  TagRow,
  XpBar,
} from '@/components/site/Primitives';

export const JourneySection = () => (
  <div className="screen">
    <ScreenHeader
      eyebrow="Progress log"
      title="Experience & education"
      description="Where the work has happened so far — a security research internship, an engineering degree with a cybersecurity honors track, and a programming diploma taken alongside it."
      action={
        profile.resumeUrl ? (
          <a className="btn btn--ghost" href={profile.resumeUrl} download>
            <Icon name="download" /> Résumé
          </a>
        ) : undefined
      }
    />

    <section className="journey-block" aria-labelledby="journey-work">
      <SectionHeading eyebrow="Industry" title="Work experience" as="h3" />
      <ul className="timeline">
        {experience.map((item) => (
          <li key={`${item.role}-${item.organisation}`}>
            <Panel as="article" className="timeline__card">
              <span className="timeline__icon">
                <Icon name={item.icon} />
              </span>
              <div className="timeline__body">
                <p className="timeline__period">{item.period}</p>
                <h4>{item.role}</h4>
                <p className="timeline__org">
                  {item.organisation}
                  {item.location ? ` · ${item.location}` : ''}
                </p>
                <p className="timeline__summary">{item.summary}</p>
                <BulletList items={item.highlights} />
                {item.tags?.length ? <TagRow tags={item.tags} /> : null}
              </div>
            </Panel>
          </li>
        ))}
      </ul>
      <span id="journey-work" className="sr-only">
        Work experience
      </span>
    </section>

    <section className="journey-block" aria-labelledby="journey-education">
      <SectionHeading eyebrow="Academics" title="Education" as="h3" />
      <ul className="timeline">
        {education.map((item) => (
          <li key={item.qualification}>
            <Panel as="article" className="timeline__card">
              <span className="timeline__icon">
                <Icon name={item.icon} />
              </span>
              <div className="timeline__body">
                <p className="timeline__period">{item.period}</p>
                <h4>{item.qualification}</h4>
                <p className="timeline__org">{item.institution}</p>
                {item.result ? <p className="timeline__result">{item.result}</p> : null}
                {item.detail ? <p className="timeline__summary">{item.detail}</p> : null}

                {item.progression?.length ? (
                  <div className="progression">
                    <p className="progression__label">Semester-wise CGPA</p>
                    <ul>
                      {item.progression.map((point) => (
                        <li key={point.label}>
                          <span>{point.label}</span>
                          <XpBar value={point.value} max={item.progressionMax ?? 10} />
                          <strong>{point.value.toFixed(2)}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {item.focus?.length ? (
                  <>
                    <p className="coursework__label">Relevant coursework</p>
                    <TagRow tags={item.focus} />
                  </>
                ) : null}
              </div>
            </Panel>
          </li>
        ))}
      </ul>
      <span id="journey-education" className="sr-only">
        Education
      </span>
    </section>
  </div>
);
