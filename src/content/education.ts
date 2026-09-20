/* ───────────────────────────────────────────────────────────────
   EDUCATION
   `progression` renders as Minecraft XP bars — use it for per-
   semester scores. `progressionMax` is the top of the scale
   (10 for CGPA/SGPA, 100 for a percentage).
   ─────────────────────────────────────────────────────────────── */
import type { EducationItem } from './types';

export const education: EducationItem[] = [
  {
    qualification: 'B.Tech, Artificial Intelligence & Data Science',
    institution: 'K J Somaiya College of Engineering · Somaiya Vidyavihar University',
    period: '2024 – 2028 (expected)',
    result: 'CGPA 9.29 / 10',
    detail:
      'Honors in Cybersecurity. Currently in the third year, semester V. Consistent upward trajectory across every semester so far.',
    icon: 'graduation',
    progression: [
      { label: 'Sem I', value: 8.21 },
      { label: 'Sem II', value: 8.79 },
      { label: 'Sem III', value: 9.21 },
      { label: 'Sem IV', value: 9.33 },
    ],
    progressionMax: 10,
    focus: [
      'Machine Learning',
      'Soft Computing',
      'Design & Analysis of Algorithms',
      'Object-Oriented Software Engineering',
      'Operating Systems',
      'Computer Networks & Information Security',
      'AI & Cyber Security',
      'Geographic Information Systems',
    ],
  },
  {
    qualification: 'Diploma in Programming',
    institution: 'Indian Institute of Technology Madras',
    period: 'Completed 2026',
    result: 'Grade 7.04 / 10',
    detail:
      'Online degree programme taken alongside the B.Tech. Coursework included Modern Application Development II, covering full-stack application architecture.',
    icon: 'code',
  },
  {
    qualification: 'Higher Secondary Certificate (Science)',
    institution: 'Pace Junior College of Science · Mumbai',
    period: 'Completed 2024',
    result: '71%',
    icon: 'book',
  },
];
