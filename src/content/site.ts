/* ───────────────────────────────────────────────────────────────
   SITE CONFIGURATION
   Navigation, window chrome copy, and the contact form backend.
   ─────────────────────────────────────────────────────────────── */
import type { IconName } from '@/lib/icons';

export type SectionId =
  | 'overview'
  | 'projects'
  | 'skills'
  | 'journey'
  | 'achievements'
  | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
  /** Shown in the sidebar under the label. */
  hint: string;
  icon: IconName;
}

/** Reorder freely — the sidebar, hotbar and 1–9 shortcuts all follow this. */
export const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', hint: 'Start here', icon: 'terminal' },
  { id: 'projects', label: 'Projects', hint: 'What I have built', icon: 'blocks' },
  { id: 'skills', label: 'Skills', hint: 'Inventory', icon: 'layers' },
  { id: 'journey', label: 'Journey', hint: 'Work & education', icon: 'briefcase' },
  { id: 'achievements', label: 'Achievements', hint: 'Awards & activities', icon: 'trophy' },
  { id: 'contact', label: 'Contact', hint: 'Open a channel', icon: 'mail' },
];

export const windowChrome = {
  /** Small monospace suffix after the name in the title bar. */
  processName: 'PORTFOLIO.EXE',
  /** Left-hand text in the hotbar at the bottom of the window. */
  footerNote: 'Building ideas, one block at a time.',
  /** Right-hand text in the hotbar. */
  version: 'v3.0',
};

/**
 * EmailJS credentials for the contact form.
 *
 * These are *publishable* keys — EmailJS is designed to be called from the
 * browser and the public key is visible in any deployed bundle, so this is
 * about making them easy to swap, not about keeping them secret. Set the
 * VITE_EMAILJS_* variables in a .env file (see .env.example) to override.
 *
 * Add allowed domains and rate limits in the EmailJS dashboard — that, not
 * hiding the key, is what stops abuse.
 */
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_tt5e8sg',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_lm91bre',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'lyUaPD5TapWe7HfjH',
};
