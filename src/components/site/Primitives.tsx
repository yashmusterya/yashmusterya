/**
 * Shared building blocks for the portfolio UI.
 *
 * Every visual style lives in src/index.css as a plain class — these
 * components only decide which class goes where, so restyling the site
 * means editing CSS, not JSX.
 */
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { getIcon, type IconName } from '@/lib/icons';
import { cn } from '@/lib/utils';

/* ── Icon ─────────────────────────────────────────────────────── */

export const Icon = ({
  name,
  className,
  ...rest
}: { name: IconName } & ComponentPropsWithoutRef<'svg'>) => {
  const Component = getIcon(name);
  return <Component className={className} aria-hidden="true" {...rest} />;
};

/* ── Panel ────────────────────────────────────────────────────── */

type PanelProps<T extends ElementType> = {
  as?: T;
  variant?: 'raised' | 'sunken';
  children: ReactNode;
  className?: string;
};

export const Panel = <T extends ElementType = 'section'>({
  as,
  variant = 'sunken',
  className,
  children,
  ...rest
}: PanelProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof PanelProps<T>>) => {
  const Component = (as ?? 'section') as ElementType;
  return (
    <Component
      className={cn(variant === 'raised' ? 'panel panel--raised' : 'panel panel--sunken', className)}
      {...rest}
    >
      {children}
    </Component>
  );
};

/* ── Section heading ──────────────────────────────────────────── */

export const SectionHeading = ({
  eyebrow,
  title,
  as: Heading = 'h2',
  className,
}: {
  eyebrow: string;
  title: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}) => (
  <div className={cn('section-heading', className)}>
    <span className="pixel-cube" aria-hidden="true" />
    <div>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <Heading className="section-heading__title">{title}</Heading>
    </div>
  </div>
);

/* ── Screen header ────────────────────────────────────────────── */

export const ScreenHeader = ({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) => (
  <header className="screen-header">
    <div>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <p className="screen-header__description">{description}</p>
    </div>
    {action ? <div className="screen-header__action">{action}</div> : null}
  </header>
);

/* ── Tags ─────────────────────────────────────────────────────── */

export const TagRow = ({ tags, className }: { tags: string[]; className?: string }) => (
  <ul className={cn('tag-row', className)}>
    {tags.map((tag) => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
);

/* ── XP bar ───────────────────────────────────────────────────── */

export const XpBar = ({
  value,
  max = 10,
  tone = 'accent',
}: {
  value: number;
  max?: number;
  tone?: 'accent' | 'highlight';
}) => {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      className={cn('xp-bar', tone === 'highlight' && 'xp-bar--highlight')}
      role="img"
      aria-label={`${value} out of ${max}`}
    >
      <i style={{ width: `${pct}%` }} />
    </div>
  );
};

/* ── Status pill ──────────────────────────────────────────────── */

export const StatusPill = ({ status }: { status: string }) => (
  <span className="status-pill" data-status={status.toLowerCase().replace(/\s+/g, '-')}>
    {status}
  </span>
);

/* ── Bullet list ──────────────────────────────────────────────── */

export const BulletList = ({ items, className }: { items: string[]; className?: string }) => (
  <ul className={cn('bullet-list', className)}>
    {items.map((item) => (
      <li key={item}>
        <span className="bullet-list__mark" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
