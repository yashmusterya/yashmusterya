import { useMemo, useState } from 'react';
import { projectTags, projects, socialLinks } from '@/content';
import {
  BulletList,
  Icon,
  Panel,
  ScreenHeader,
  StatusPill,
  TagRow,
} from '@/components/site/Primitives';

const ALL = 'All';

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>(ALL);

  const visible = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  const github = socialLinks.find((link) => link.icon === 'github');

  return (
    <div className="screen">
      <ScreenHeader
        eyebrow="Build archive"
        title="Projects"
        description="Eleven builds across machine learning, full-stack engineering and security. Status labels are accurate — shipped means shipped, explored means explored."
      />

      <div className="filter-bar" role="group" aria-label="Filter projects by tag">
        <button
          type="button"
          className="chip"
          aria-pressed={filter === ALL}
          onClick={() => setFilter(ALL)}
        >
          {ALL}
          <span className="chip__count">{projects.length}</span>
        </button>
        {projectTags.map((tag) => {
          const count = projects.filter((p) => p.tags.includes(tag)).length;
          return (
            <button
              key={tag}
              type="button"
              className="chip"
              aria-pressed={filter === tag}
              onClick={() => setFilter(tag)}
            >
              {tag}
              <span className="chip__count">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="project-grid">
        {visible.map((project) => (
          <li key={project.id}>
            <Panel as="article" className="project-card">
              <div className={`project-card__art art--${project.tone}`}>
                <Icon name={project.icon} />
                <span>{`BUILD ${String(projects.indexOf(project) + 1).padStart(2, '0')}`}</span>
              </div>

              <div className="project-card__body">
                <div className="project-card__meta">
                  <StatusPill status={project.status} />
                  <span>{project.tags.join(' · ')}</span>
                </div>

                <h3>{project.title}</h3>
                {project.subtitle ? <p className="project-card__sub">{project.subtitle}</p> : null}
                {project.period ? <p className="project-card__period">{project.period}</p> : null}
                <p className="project-card__summary">{project.summary}</p>

                <BulletList items={project.highlights} />

                {project.stack?.length ? (
                  <TagRow tags={project.stack} className="project-card__tags" />
                ) : null}

                {project.links?.length ? (
                  <div className="project-card__links">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-btn"
                      >
                        <Icon name={link.icon} /> {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </Panel>
          </li>
        ))}
      </ul>

      {visible.length === 0 ? <p className="empty-state">Nothing tagged “{filter}” yet.</p> : null}

      {github ? (
        <a className="wide-link panel panel--raised" href={github.href} target="_blank" rel="noreferrer">
          <Icon name="github" />
          <span>Browse the full source archive on GitHub</span>
          <Icon name="external" />
        </a>
      ) : null}
    </div>
  );
};
