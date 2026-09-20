/* ───────────────────────────────────────────────────────────────
   PROJECTS
   Order matters — the Projects screen renders this array top to
   bottom. `featured: true` also pins a project to the overview.

   status: 'Shipped' | 'In progress' | 'Professional'
         | 'Academic' | 'Prototype' | 'Explored'
   Keep these accurate. "Explored" is not a weakness; a project
   listed as shipped that isn't will cost you an interview.

   `tags` are broad domains and drive the filter chips — reuse the
   existing eight rather than adding one per project. `stack` is the
   concrete technology list shown on the card.

   To add a repo or demo link:
     links: [
       { label: 'Source', href: 'https://github.com/...', icon: 'github' },
       { label: 'Live demo', href: 'https://...', icon: 'external' },
     ],
   ─────────────────────────────────────────────────────────────── */
import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'kjs-ces-01',
    title: 'Climate Intelligence System',
    subtitle: 'KJS-CES-01 · Heatwave monitoring, prediction & early warning',
    status: 'Academic',
    period: 'Pune district, Maharashtra',
    featured: true,
    icon: 'thermometer',
    tone: 'ember',
    summary:
      'Cross-disciplinary system that detects and forecasts heatwaves across Pune district, pairing a from-scratch neural network with district-level GIS deliverables.',
    highlights: [
      'Built and compared Naïve Bayes, Decision Tree and multi-kernel SVM baselines against a backpropagation MLP written from scratch in NumPy — 83.67% accuracy over 2,000 epochs after tuning learning rate and activation function.',
      'Handled a ~4% positive class with balanced class weights and decision-threshold engineering rather than blind resampling, so rare-event recall stayed usable.',
      'Trained and validated on real data at scale: the 96,453-row Szeged weather set and a 970,000-row IMD/AWS multi-station set covering 406 stations across India, 2015–2025.',
      'Produced the GIS layer in QGIS — taluka-level maps for Pune, digitised SGNP green zones, and district data joins for Pune and Beed.',
      'Scoped and entered as a hackathon project under a Climate & Sustainability track.',
    ],
    tags: ['Machine learning', 'Geospatial', 'Sustainability'],
    stack: ['Python', 'NumPy', 'scikit-learn', 'QGIS'],
  },
  {
    id: 'gridsync',
    title: 'GridSync',
    subtitle: 'SIH26_18 · Team Stranger Strings · Energy & Power',
    status: 'In progress',
    featured: true,
    icon: 'battery',
    tone: 'emerald',
    summary:
      'Grid-aware EV charging platform that forecasts transformer load and prices charging sessions dynamically, so demand lands where the grid can carry it.',
    highlights: [
      'Full-stack web application deployed on Supabase and Vercel, with Google Maps routing and live station data.',
      'XGBoost models for transformer load forecasting, feeding a dynamic pricing signal that steers drivers away from stressed feeders.',
      'Integrated Open Charge Map, OSRM, Open-Meteo, Grid-India and the CEA CO₂ baseline into one data layer.',
      'Built for the Smart India Hackathon Software Edition under the Energy & Power theme.',
    ],
    tags: ['Full-stack', 'Machine learning', 'Sustainability'],
    stack: ['XGBoost', 'Supabase', 'Vercel', 'Google Maps'],
  },
  {
    id: 'threat-map',
    title: 'Live Cyber Threat Map',
    subtitle: 'Built during the Deepcytes internship',
    status: 'Professional',
    featured: true,
    icon: 'radar',
    tone: 'ore',
    summary:
      'Real-time visualisation of active global threats, plotting geolocated events on a live map to make ongoing attack activity legible at a glance.',
    highlights: [
      'Turned raw geolocation telemetry into a continuously updating map view for the security team.',
      'Improved monitoring and observability of active global threats — analysts could see concentration and movement instead of reading event logs.',
      'Shipped as an internal tool during a three-month research internship.',
    ],
    tags: ['Security', 'Data visualisation'],
    stack: ['Geolocation data', 'Real-time dashboards'],
  },
  {
    id: 'trekquest',
    title: 'Trek Management App',
    subtitle: 'TrekQuest · three-tier trek booking platform',
    status: 'Shipped',
    icon: 'mountain',
    tone: 'emerald',
    summary:
      'Full-stack trek booking platform with separate admin, staff and trekker roles, built to be maintained rather than demoed.',
    highlights: [
      'Flask 3 backend with Flask-RESTful, SQLAlchemy 2, Flask-JWT-Extended, custom RBAC decorators and Flask-Caching.',
      'Vue 3 + Vite frontend with vue-router, Bootstrap 5 and Chart.js dashboards.',
      'Built an axios interceptor that transparently refreshes expired access tokens on 401, plus a blacklisted-users feature for moderation.',
      'Ran a security review of the codebase and remediated hardcoded credentials and exposed configuration values.',
      'Iterated feature requirements with stakeholders and folded the feedback back across both tiers.',
    ],
    tags: ['Full-stack', 'Security'],
    stack: ['Flask 3', 'SQLAlchemy 2', 'Vue 3', 'Bootstrap 5', 'Chart.js', 'JWT'],
  },
  {
    id: 'parking',
    title: 'Car Parking Booking System',
    status: 'Shipped',
    icon: 'car',
    tone: 'sky',
    summary:
      'Multi-location parking reservation platform with normalised data models and authentication that holds up under concurrent bookings.',
    highlights: [
      'RESTful APIs over normalised SQL models with Flask-SQLAlchemy, designed for concurrent bookings across multiple sites.',
      'Object-oriented backend modules with clear separation between booking, location and user concerns.',
      'Secure authentication using hashing rather than reversible storage, protecting sensitive user data.',
    ],
    tags: ['Full-stack'],
    stack: ['Flask', 'Flask-SQLAlchemy', 'SQL', 'REST APIs'],
  },
  {
    id: 'green-ai',
    title: 'Green AI Carbon Emission Analyzer',
    status: 'In progress',
    icon: 'leaf',
    tone: 'emerald',
    summary:
      'Tool for estimating the carbon cost of training and serving machine-learning models, aimed at making efficiency a visible design constraint.',
    highlights: [
      'Connects compute usage to emissions using a regional grid CO₂ baseline.',
      'Grew out of an interest in reducing the memory and compute footprint of neural networks.',
    ],
    tags: ['Machine learning', 'Sustainability'],
    stack: ['Python', 'CEA CO₂ baseline'],
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    status: 'Academic',
    icon: 'creditCard',
    tone: 'gold',
    summary:
      'Comparison of three classifiers on a heavily imbalanced transaction dataset, with SMOTE applied to rebalance the training distribution.',
    highlights: [
      'Benchmarked Logistic Regression, Random Forest and XGBoost on the same split.',
      'Applied SMOTE for imbalance handling and compared the effect on precision and recall, not just accuracy.',
    ],
    tags: ['Machine learning'],
    stack: ['scikit-learn', 'XGBoost', 'SMOTE'],
  },
  {
    id: 'keystroke',
    title: 'Keystroke Dynamics Authentication',
    status: 'Academic',
    icon: 'fingerprint',
    tone: 'ore',
    summary:
      'Behavioural biometric login that identifies users by typing rhythm rather than by what they type.',
    highlights: [
      'KNN and Random Forest classifiers trained on a public Kaggle keystroke dataset.',
      'Tkinter GUI for live capture and verification against the enrolled profile.',
    ],
    tags: ['Machine learning', 'Security'],
    stack: ['scikit-learn', 'KNN', 'Random Forest', 'Tkinter'],
  },
  {
    id: 'rba',
    title: 'Risk-Based Authentication',
    subtitle: 'Applied Cyber Security coursework',
    status: 'Academic',
    icon: 'lock',
    tone: 'rose',
    summary:
      'Login system that scores each attempt for risk and escalates or locks the account instead of treating every sign-in the same.',
    highlights: [
      'Python/Tkinter GUI over a CSV-backed user store.',
      'Account lockout logic driven by failed-attempt thresholds and risk signals.',
    ],
    tags: ['Security'],
    stack: ['Python', 'Tkinter', 'CSV store'],
  },
  {
    id: 'drone-routing',
    title: 'Multi-Agent Drone Routing',
    status: 'Explored',
    icon: 'plane',
    tone: 'aqua',
    summary:
      'Contest-style routing problem: schedule multiple drones through shared airspace while avoiding no-fly zones and timed collisions.',
    highlights: [
      'Temporal collision avoidance between agents, not just static obstacle avoidance.',
      'Solved as a competitive-programming exercise in Python; not developed into a product.',
    ],
    tags: ['Algorithms'],
    stack: ['Python'],
  },
  {
    id: 'trading-assistant',
    title: 'Intraday Trading Assistant',
    status: 'Explored',
    icon: 'trending',
    tone: 'stone',
    summary:
      'Exploration of a semi-automated intraday workflow with a human approving every order before it reaches the broker.',
    highlights: [
      'Angel One SmartAPI integration for market data and order placement.',
      'Telegram alerts with human-in-the-loop confirmation — deliberately never fully autonomous.',
      'Explored rather than deployed; no live capital was traded through it.',
    ],
    tags: ['Automation'],
    stack: ['Angel One SmartAPI', 'Telegram Bot API', 'Python'],
  },
];

/** Every distinct tag, for the filter chips on the Projects screen. */
export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags)),
).sort();

export const featuredProjects = projects.filter((project) => project.featured);
