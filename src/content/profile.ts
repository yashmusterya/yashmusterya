/* ───────────────────────────────────────────────────────────────
   WHO YOU ARE
   Edit this file to change the hero, the sidebar and the contact
   screen. Nothing here is referenced by name anywhere else, so you
   can rewrite every string freely.
   ─────────────────────────────────────────────────────────────── */
import type { LinkItem, Profile, Stat } from './types';
import avatar from '@/assets/yash-profile-new.jpg';

export const profile: Profile = {
  name: 'Yash Musterya',
  title: 'Software Engineering Intern Candidate',
  tagline: 'AI & Data Science · Cybersecurity Honors',
  location: 'Mumbai, India',
  email: 'musteryay@gmail.com',
  phone: '+91 98676 84002',
  website: 'https://yashmusterya.vercel.app',
  availability: 'Open to Summer 2027 internships',

  summary:
    'Third-year B.Tech student in Artificial Intelligence & Data Science with Honors in Cybersecurity. I build full-stack systems and machine-learning pipelines end to end — from normalised data models and REST APIs to models trained on real, messy, imbalanced data.',

  about: [
    'I work across the stack and across disciplines: Flask and Vue for the systems people actually click on, scikit-learn and NumPy for the models underneath, and a security reviewer’s habits applied to both.',
    'My strongest work sits where those meet — a climate intelligence system that pairs a from-scratch neural network with GIS deliverables, and a grid-aware EV charging platform that turns load forecasts into live pricing.',
    'Outside coursework I practise competitive programming, follow the Indian equity markets, and read about model internals and how to make networks cheaper to run.',
  ],

  avatar,

  // Drop a new PDF into /public and point this at it. Set to null to hide
  // the download button everywhere.
  resumeUrl: '/yash-musterya-resume.pdf',
};

/* Headline numbers in the hero strip and the sidebar. */
export const stats: Stat[] = [
  { value: '9.29', label: 'B.Tech CGPA', hint: 'out of 10' },
  { value: 'TY · V', label: 'Year · Semester', hint: 'Graduating 2028' },
  { value: '11', label: 'Projects built', hint: 'ML, full-stack, security' },
  { value: '2', label: 'Programmes', hint: 'KJSCE + IIT Madras' },
];

/* Sidebar icon row and the contact screen. `hint` shows as the small
   uppercase label above the value on the contact screen. */
export const contactLinks: LinkItem[] = [
  {
    label: 'musteryay@gmail.com',
    hint: 'Email',
    href: 'mailto:musteryay@gmail.com',
    icon: 'mail',
    external: false,
  },
  {
    label: 'yash.musterya@somaiya.edu',
    hint: 'Academic email',
    href: 'mailto:yash.musterya@somaiya.edu',
    icon: 'mail',
    external: false,
  },
  {
    label: '+91 98676 84002',
    hint: 'Phone',
    href: 'tel:+919867684002',
    icon: 'phone',
    external: false,
  },
  {
    label: 'linkedin.com/in/yashmusterya',
    hint: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yashmusterya/',
    icon: 'linkedin',
  },
  {
    label: 'github.com/yashmusterya',
    hint: 'GitHub',
    href: 'https://github.com/yashmusterya/',
    icon: 'github',
  },
];

/* The compact icon row in the sidebar. */
export const socialLinks: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/yashmusterya/', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yashmusterya/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:musteryay@gmail.com', icon: 'mail', external: false },
];

/* Shown on the overview screen under "Currently". */
export const currentFocus = [
  {
    icon: 'thermometer' as const,
    title: 'Climate intelligence',
    detail: 'Extending KJS-CES-01 — heatwave prediction across Pune district.',
  },
  {
    icon: 'battery' as const,
    title: 'Grid-aware charging',
    detail: 'GridSync: transformer load forecasting and dynamic EV pricing.',
  },
  {
    icon: 'code' as const,
    title: 'Algorithms practice',
    detail: 'Fenwick trees, segment trees and sparse tables, in C++ and Python.',
  },
];
