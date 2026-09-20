/* ───────────────────────────────────────────────────────────────
   WORK EXPERIENCE
   Newest first. Each `highlights` bullet should start with what you
   did and, where you have one, end with the result.
   ─────────────────────────────────────────────────────────────── */
import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    role: 'Cyber Research Analyst — Intern',
    organisation: 'Deepcytes.io Ventures',
    // TODO: swap in the real dates, e.g. 'Jun 2025 – Aug 2025'.
    period: '3-month internship',
    location: 'Mumbai, India',
    icon: 'shield',
    summary:
      'Threat research and tooling inside a small security team — footprint analysis, audits, and a live visualisation of global attack activity.',
    highlights: [
      'Conducted digital footprint analysis alongside the security team, identifying exposed assets and live threats across client surfaces.',
      'Designed and built a live cyber threat map — a real-time visualisation over geolocation data that improved monitoring and observability of active global threats.',
      'Used AI-assisted tooling for threat detection and pattern analysis across incoming event data.',
      'Performed cyber audits and implemented counter-surveillance and ransomware-protection measures against current best practice.',
    ],
    tags: ['Threat intelligence', 'Data visualisation', 'Auditing'],
  },
];
