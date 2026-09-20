import { useEffect, useRef, type ReactNode } from 'react';
import { navItems, profile, socialLinks, windowChrome, type SectionId } from '@/content';
import { useTheme } from '@/hooks/use-theme';
import { Icon } from './Primitives';
import { ThemePicker } from './ThemePicker';

interface AppShellProps {
  section: SectionId;
  onNavigate: (section: SectionId) => void;
  children: ReactNode;
}

export const AppShell = ({ section, onNavigate, children }: AppShellProps) => {
  const { themes, themeId, setTheme } = useTheme();
  const consoleRef = useRef<HTMLDivElement>(null);
  const active = navItems.find((item) => item.id === section) ?? navItems[0];

  // Each screen is its own view, so start it at the top rather than
  // inheriting the previous screen's scroll position.
  useEffect(() => {
    consoleRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, [section]);

  // 1–9 jump straight to a screen, the way a hotbar does.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (target?.isContentEditable) return;

      const index = Number(event.key) - 1;
      if (Number.isInteger(index) && index >= 0 && index < navItems.length) {
        onNavigate(navItems[index].id);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onNavigate]);

  return (
    <div className="shell">
      <div className="shell__grid" aria-hidden="true" />

      <a className="skip-link" href="#console">
        Skip to content
      </a>

      <div className="window">
        <header className="titlebar">
          <button
            type="button"
            className="titlebar__brand"
            onClick={() => onNavigate('overview')}
            aria-label={`${profile.name} — go to overview`}
          >
            <span className="pixel-cube pixel-cube--lit" aria-hidden="true" />
            <span className="titlebar__name">
              {profile.name}
              <small>/ {windowChrome.processName}</small>
            </span>
          </button>

          <div className="titlebar__right">
            <ThemePicker themes={themes} themeId={themeId} onSelect={setTheme} />
            <div className="titlebar__controls" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </header>

        <div className="window__body">
          <aside className="sidebar">
            <div className="sidebar__portrait">
              <img src={profile.avatar} alt={`Portrait of ${profile.name}`} />
              <span className="sidebar__badge">Online</span>
            </div>

            <div className="sidebar__identity">
              <p className="sidebar__name">{profile.name}</p>
              <p className="sidebar__role">{profile.title}</p>
              <p className="sidebar__meta">
                <Icon name="mapPin" /> {profile.location}
              </p>
            </div>

            <nav className="sidenav" aria-label="Sections">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className="sidenav__item"
                  aria-current={section === item.id ? 'page' : undefined}
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon name={item.icon} className="sidenav__icon" />
                  <span className="sidenav__text">
                    <strong>{item.label}</strong>
                    <small>{item.hint}</small>
                  </span>
                  <kbd aria-hidden="true">{index + 1}</kbd>
                </button>
              ))}
            </nav>

            <div className="sidebar__foot">
              {profile.resumeUrl ? (
                <a className="btn btn--ghost btn--block" href={profile.resumeUrl} download>
                  <Icon name="download" /> Résumé (PDF)
                </a>
              ) : null}

              <div className="sidebar__social">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    title={link.label}
                    {...(link.external === false ? {} : { target: '_blank', rel: 'noreferrer' })}
                  >
                    <Icon name={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <main id="console" className="console" ref={consoleRef} tabIndex={-1}>
            {children}
          </main>
        </div>

        <footer className="hotbar">
          <p className="hotbar__note">
            <Icon name="wrench" /> {windowChrome.footerNote}
          </p>

          <nav className="hotbar__nav" aria-label="Sections">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="hotbar__slot"
                aria-current={section === item.id ? 'page' : undefined}
                aria-label={item.label}
                title={item.label}
                onClick={() => onNavigate(item.id)}
              >
                <Icon name={item.icon} />
              </button>
            ))}
          </nav>

          <p className="hotbar__version">
            <span className="hotbar__here">{active.label}</span>
            <span aria-hidden="true">·</span>
            {windowChrome.version}
          </p>
        </footer>
      </div>
    </div>
  );
};
