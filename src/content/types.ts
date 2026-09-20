/**
 * Shape of every piece of content on the site.
 *
 * These types exist so the compiler catches typos while you edit the files in
 * this folder. If TypeScript complains after an edit, the message tells you
 * exactly which field is wrong.
 */
import type { IconName } from '@/lib/icons';

/** Accent colours available to badges, gems and project art. */
export type Tone =
  | 'emerald'
  | 'gold'
  | 'sky'
  | 'ore'
  | 'ember'
  | 'aqua'
  | 'rose'
  | 'stone';

/** How finished a project is. Keep these honest — recruiters read them. */
export type ProjectStatus =
  | 'Shipped'
  | 'In progress'
  | 'Professional'
  | 'Academic'
  | 'Prototype'
  | 'Explored';

export interface LinkItem {
  label: string;
  href: string;
  icon: IconName;
  /** Shown under the label in the contact panel. Optional. */
  hint?: string;
  /** Set false for mailto:/tel: links so they don't open a new tab. */
  external?: boolean;
}

export interface Profile {
  name: string;
  /** Short role line under the name. */
  title: string;
  /** Used in the browser tab, OG tags and the window title bar. */
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  /** Green "available" pill at the top of the hero. Set to null to hide it. */
  availability: string | null;
  /** 2–3 sentences. This is the first thing a recruiter reads. */
  summary: string;
  /** Longer paragraph for the About panel. */
  about: string[];
  avatar: string;
  /** Path inside /public, or an absolute URL. Set to null to hide the button. */
  resumeUrl: string | null;
  website?: string;
}

export interface Stat {
  value: string;
  label: string;
  hint?: string;
}

export interface Skill {
  name: string;
  /** 2 characters, shown inside the inventory gem. */
  code: string;
  tone: Tone;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  blurb: string;
  skills: Skill[];
}

export interface Project {
  /** Stable id, also used as the React key. */
  id: string;
  title: string;
  /** Optional second line, e.g. a project code or competition id. */
  subtitle?: string;
  status: ProjectStatus;
  /** One sentence. Shown on cards and in the featured strip. */
  summary: string;
  /** Bullet points. Lead with the outcome, then the method. */
  highlights: string[];
  /**
   * Domain categories. These drive the filter chips on the Projects
   * screen, so keep the vocabulary small and reuse existing values
   * rather than inventing one tag per project.
   */
  tags: string[];
  /** Concrete technologies, shown as chips on the card. */
  stack?: string[];
  icon: IconName;
  tone: Tone;
  /** Shows on the overview screen. Aim for three. */
  featured?: boolean;
  links?: LinkItem[];
  period?: string;
}

export interface ExperienceItem {
  role: string;
  organisation: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  icon: IconName;
  tags?: string[];
}

export interface EducationItem {
  qualification: string;
  institution: string;
  period: string;
  /** e.g. "CGPA 9.29/10". Free text so you can use any grading scheme. */
  result?: string;
  detail?: string;
  icon: IconName;
  /** Optional per-semester scores, rendered as XP bars. */
  progression?: { label: string; value: number }[];
  /** Upper bound for the progression bars (10 for CGPA, 100 for percentage). */
  progressionMax?: number;
  focus?: string[];
}

export interface Achievement {
  title: string;
  organisation: string;
  period: string;
  detail: string;
  icon: IconName;
  tone: Tone;
  /** Path inside /public, or an absolute URL, to a certificate. */
  proofUrl?: string;
  proofLabel?: string;
}

export interface Interest {
  title: string;
  detail: string;
  icon: IconName;
}
