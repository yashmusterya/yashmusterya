/* ───────────────────────────────────────────────────────────────
   SKILLS
   Rendered as Minecraft inventory slots, one panel per group.
   `code` is the 2-character label inside the gem — keep it to two
   characters or it will overflow. `tone` picks the gem colour:
   emerald | gold | sky | ore | ember | aqua | rose | stone
   ─────────────────────────────────────────────────────────────── */
import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'languages',
    blurb: 'Python and Java day to day; C++ for contest work.',
    skills: [
      { name: 'Python', code: 'PY', tone: 'emerald' },
      { name: 'Java', code: 'JV', tone: 'ember' },
      { name: 'C++', code: 'C+', tone: 'sky' },
      { name: 'C', code: 'C', tone: 'stone' },
      { name: 'SQL', code: 'SQ', tone: 'gold' },
      { name: 'JavaScript', code: 'JS', tone: 'gold' },
      { name: 'TypeScript', code: 'TS', tone: 'sky' },
      { name: 'HTML/CSS', code: 'WB', tone: 'aqua' },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: 'server',
    blurb: 'REST services with real auth, caching and role separation.',
    skills: [
      { name: 'Flask 3', code: 'FL', tone: 'emerald' },
      { name: 'Flask-RESTful', code: 'RS', tone: 'emerald' },
      { name: 'SQLAlchemy 2', code: 'SA', tone: 'ember' },
      { name: 'JWT auth / RBAC', code: 'JW', tone: 'ore' },
      { name: 'Celery', code: 'CY', tone: 'aqua' },
      { name: 'MySQL', code: 'MY', tone: 'sky' },
      { name: 'Supabase', code: 'SB', tone: 'emerald' },
      { name: 'REST design', code: 'AP', tone: 'gold' },
    ],
  },
  {
    title: 'Machine learning & data',
    icon: 'brain',
    blurb: 'Supervised models on imbalanced, real-world datasets.',
    skills: [
      { name: 'scikit-learn', code: 'SK', tone: 'gold' },
      { name: 'NumPy', code: 'NP', tone: 'sky' },
      { name: 'Pandas', code: 'PD', tone: 'ore' },
      { name: 'XGBoost', code: 'XG', tone: 'ember' },
      { name: 'TensorFlow', code: 'TF', tone: 'gold' },
      { name: 'OpenCV', code: 'CV', tone: 'aqua' },
      { name: 'MLP / backprop', code: 'NN', tone: 'ore' },
      { name: 'SMOTE & weighting', code: 'IB', tone: 'rose' },
    ],
  },
  {
    title: 'Security',
    icon: 'shield',
    blurb: 'Honors track plus an internship spent auditing real targets.',
    skills: [
      { name: 'VAPT', code: 'VA', tone: 'ember' },
      { name: 'Web app audits', code: 'AU', tone: 'gold' },
      { name: 'Cryptography', code: 'CR', tone: 'ore' },
      { name: 'Digital forensics', code: 'DF', tone: 'sky' },
      { name: 'Auth attack analysis', code: 'AA', tone: 'rose' },
      { name: 'Threat intel', code: 'TI', tone: 'emerald' },
    ],
  },
  {
    title: 'Geospatial',
    icon: 'map',
    blurb: 'District-level analysis and map deliverables for Pune and Beed.',
    skills: [
      { name: 'QGIS', code: 'QG', tone: 'emerald' },
      { name: 'Digitisation', code: 'DG', tone: 'gold' },
      { name: 'Shapefiles', code: 'SH', tone: 'stone' },
      { name: 'Spatial joins', code: 'SJ', tone: 'aqua' },
    ],
  },
  {
    title: 'Core computer science',
    icon: 'cpu',
    blurb: 'The fundamentals interviews actually test.',
    skills: [
      { name: 'Data structures', code: 'DS', tone: 'emerald' },
      { name: 'Algorithms', code: 'AL', tone: 'sky' },
      { name: 'Fenwick trees', code: 'FT', tone: 'ore' },
      { name: 'Segment trees', code: 'ST', tone: 'ore' },
      { name: 'Sparse tables', code: 'SP', tone: 'aqua' },
      { name: 'OOP design', code: 'OO', tone: 'gold' },
      { name: 'Database design', code: 'DB', tone: 'ember' },
      { name: 'Testing & debugging', code: 'QA', tone: 'stone' },
    ],
  },
  {
    title: 'Tooling & process',
    icon: 'wrench',
    blurb: 'How the work gets planned, tracked and shipped.',
    skills: [
      { name: 'Git / GitHub', code: 'GT', tone: 'ember' },
      { name: 'Vite', code: 'VT', tone: 'ore' },
      { name: 'Vue 3', code: 'VU', tone: 'emerald' },
      { name: 'Bootstrap 5', code: 'BS', tone: 'ore' },
      { name: 'Chart.js', code: 'CJ', tone: 'rose' },
      { name: 'JIRA / Trello', code: 'PM', tone: 'sky' },
      { name: 'LaTeX', code: 'TX', tone: 'stone' },
      { name: 'Vercel', code: 'VC', tone: 'stone' },
    ],
  },
];
