import {
  currentFocus,
  experience,
  featuredProjects,
  profile,
  stats,
  type SectionId,
} from '@/content';
import { Icon, Panel, SectionHeading, StatusPill, TagRow } from '@/components/site/Primitives';

export const OverviewSection = ({ onNavigate }: { onNavigate: (id: SectionId) => void }) => {
  const [firstRole] = experience;

  return (
    <div className="screen screen--overview">
      <Panel variant="raised" className="hero">
        <div className="hero__copy">
          {profile.availability ? (
            <p className="hero__status">
              <span aria-hidden="true" />
              {profile.availability}
            </p>
          ) : null}

          <p className="hero__kicker">Hello — I’m</p>
          <h1 className="hero__name">
            {profile.name.split(' ').map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <button type="button" className="btn" onClick={() => onNavigate('projects')}>
              <Icon name="blocks" /> View projects
            </button>
            {profile.resumeUrl ? (
              <a className="btn btn--ghost" href={profile.resumeUrl} download>
                <Icon name="download" /> Download résumé
              </a>
            ) : null}
            <button type="button" className="btn btn--quiet" onClick={() => onNavigate('contact')}>
              <Icon name="mail" /> Get in touch
            </button>
          </div>
        </div>

        <div className="hero__blocks" aria-hidden="true">
          <span className="hero__block hero__block--a" />
          <span className="hero__block hero__block--b" />
          <span className="hero__block hero__block--c" />
          <span className="hero__block hero__block--d" />
          <small>BUILD · TEST · IMPROVE</small>
        </div>
      </Panel>

      <ul className="stat-strip">
        {stats.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            {stat.hint ? <small>{stat.hint}</small> : null}
          </li>
        ))}
      </ul>

      <Panel className="about">
        <SectionHeading eyebrow="Player profile" title="About" />
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </Panel>

      <Panel className="focus">
        <SectionHeading eyebrow="Right now" title="Currently building" />
        <ul className="focus__list">
          {currentFocus.map((item) => (
            <li key={item.title}>
              <span className="focus__icon">
                <Icon name={item.icon} />
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        {firstRole ? (
          <div className="focus__role">
            <span className="focus__icon focus__icon--highlight">
              <Icon name={firstRole.icon} />
            </span>
            <div>
              <small>Most recent role</small>
              <strong>{firstRole.role}</strong>
              <p>
                {firstRole.organisation} · {firstRole.period}
              </p>
            </div>
          </div>
        ) : null}
      </Panel>

      <Panel className="featured">
        <div className="panel__title-row">
          <SectionHeading eyebrow="Selected builds" title="Featured projects" />
          <button type="button" className="link-btn" onClick={() => onNavigate('projects')}>
            All projects <Icon name="external" />
          </button>
        </div>

        <ul className="featured__list">
          {featuredProjects.map((project) => (
            <li key={project.id}>
              <article>
                <span className={`emblem emblem--${project.tone}`}>
                  <Icon name={project.icon} />
                </span>
                <div className="featured__body">
                  <StatusPill status={project.status} />
                  <h3>{project.title}</h3>
                  {project.subtitle ? <p className="featured__sub">{project.subtitle}</p> : null}
                  <p className="featured__summary">{project.summary}</p>
                  <TagRow tags={(project.stack ?? project.tags).slice(0, 3)} />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
};
