/* ───────────────────────────────────────────────────────────────
   ACHIEVEMENTS, LEADERSHIP & INTERESTS
   `proofUrl` points at a certificate in /public (or any URL) and
   turns the card into a link. Leave it out and the card is static.
   ─────────────────────────────────────────────────────────────── */
import type { Achievement, Interest } from './types';

export const achievements: Achievement[] = [
  {
    title: 'MumbaiHacks 2025',
    organisation: 'Tech Entrepreneurs Association of Mumbai × Made in Mumbai',
    period: '28–29 November 2025',
    detail:
      'Participant in what the organisers billed as the largest Agentic AI hackathon, presented by HCLTech with the Maharashtra State Innovation Society as state partner.',
    icon: 'trophy',
    tone: 'gold',
    proofUrl: '/certificates/mumbaihacks-2025.png',
    proofLabel: 'View certificate',
  },
  {
    title: 'Smart India Hackathon — GridSync',
    organisation: 'Team Stranger Strings · Problem statement SIH26_18',
    period: '2026 cycle',
    detail:
      'Built a grid-aware EV charging platform for the Energy & Power theme, Software Edition — load forecasting, dynamic pricing and live station data.',
    icon: 'battery',
    tone: 'emerald',
  },
  {
    title: 'Ambassador',
    organisation: 'Riidl — Somaiya Innovation & Incubation Centre',
    period: 'Ongoing',
    detail:
      'Coordinated mentorship for early-stage startups and helped organise tech-driven innovation events on campus.',
    icon: 'users',
    tone: 'sky',
  },
  {
    title: 'Organising Team Member',
    organisation: 'Symphony, KJSCE',
    period: 'Nov – Dec 2024',
    detail:
      'Ran event planning and logistics for a large-scale college festival across a multi-week schedule.',
    icon: 'sparkles',
    tone: 'ore',
  },
];

export const interests: Interest[] = [
  {
    title: 'Equity markets',
    detail:
      'Follow NSE/BSE with an intraday focus — which is where the trading-assistant experiment came from.',
    icon: 'trending',
  },
  {
    title: 'Competitive programming',
    detail:
      'Regular LeetCode and HackerEarth-style practice. Comfortable with Fenwick trees, segment trees, sparse tables and bitmask DP.',
    icon: 'terminal',
  },
  {
    title: 'Model internals & efficient AI',
    detail:
      'Reading on neural network internals and how to cut the memory and compute a model needs to run.',
    icon: 'brain',
  },
  {
    title: 'Academic writing',
    detail:
      'Drafted a piece on India’s mountain and highland cultures — a change of register from technical writing.',
    icon: 'mountain',
  },
];
