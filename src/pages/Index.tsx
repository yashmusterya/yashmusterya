import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Award,
  Blocks,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  UserRound,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import profileImage from '@/assets/yash-profile-new.jpg';

type View = 'dashboard' | 'projects' | 'journey' | 'contact';

const skills = [
  { name: 'Python', code: 'PY', tone: 'emerald' },
  { name: 'TypeScript', code: 'TS', tone: 'blue' },
  { name: 'Flask', code: 'FL', tone: 'gold' },
  { name: 'React', code: 'RE', tone: 'cyan' },
  { name: 'SQL', code: 'DB', tone: 'violet' },
  { name: 'Git', code: 'GT', tone: 'coral' },
  { name: 'TensorFlow', code: 'AI', tone: 'amber' },
  { name: 'Linux', code: 'LX', tone: 'stone' },
];

const projects = [
  {
    title: 'Car Parking Booking System',
    description: 'Full-stack booking platform with secure authentication, live availability, payments, and an admin workspace.',
    tags: ['Flask', 'Python', 'SQLite'],
    status: 'Complete',
    icon: Blocks,
  },
  {
    title: 'Time Insight Tracker Pro',
    description: 'Productivity tracker with real-time activity insights, interactive visualizations, goals, and report exports.',
    tags: ['TypeScript', 'React', 'Chart.js'],
    status: 'Complete',
    icon: Sparkles,
  },
  {
    title: 'Live Threatmap',
    description: 'Performance-focused global cyber-threat visualization with live incident streams and geolocation filtering.',
    tags: ['TypeScript', 'WebSockets', 'D3.js'],
    status: 'Building',
    icon: ShieldCheck,
  },
];

const journey = [
  {
    period: '2025 — Present',
    role: 'Cyber Research Analyst Intern',
    place: 'DeepCytes Ventures · Mumbai',
    detail: 'Digital footprint analysis, vulnerability assessment, AI-assisted threat detection, and mitigation research.',
    icon: BriefcaseBusiness,
  },
  {
    period: '2024 — Present',
    role: 'Community Ambassador',
    place: 'Riidl · Mumbai',
    detail: 'Supporting early-stage startups, organizing technology initiatives, and strengthening founder communities.',
    icon: UserRound,
  },
  {
    period: 'Expected 2028',
    role: 'Data Science Program',
    place: 'IIT Madras',
    detail: 'Foundation level completed with distinction, including an S Grade in Python.',
    icon: GraduationCap,
  },
  {
    period: 'Expected 2028',
    role: 'B.Tech, AI & Data Science',
    place: 'KJ Somaiya College of Engineering',
    detail: 'Focused on practical AI, data structures, databases, software engineering, and deep learning.',
    icon: BookOpen,
  },
];

const navItems: { id: View; label: string; icon: typeof Terminal }[] = [
  { id: 'dashboard', label: 'Overview', icon: Terminal },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'journey', label: 'Journey', icon: BriefcaseBusiness },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const SectionTitle = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="section-heading">
    <span className="section-cube" aria-hidden="true" />
    <div>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  </div>
);

const Dashboard = ({ navigate }: { navigate: (view: View) => void }) => (
  <div className="dashboard-grid view-enter">
    <section className="intro-panel panel-raised">
      <div className="intro-copy">
        <span className="status-line"><span /> AVAILABLE FOR COLLABORATION</span>
        <p className="intro-kicker">Hello, I’m</p>
        <h1>YASH<br />MUSTERYA</h1>
        <p className="intro-role">Backend developer & data science enthusiast</p>
        <p className="intro-summary">I build dependable digital products by turning difficult technical problems into clear, useful systems.</p>
        <div className="intro-actions">
          <Button onClick={() => navigate('projects')} className="pixel-button">
            Explore work <ChevronRight className="h-4 w-4" />
          </Button>
          <Button onClick={() => navigate('contact')} variant="outline" className="pixel-button ghost-button">
            Start a conversation
          </Button>
        </div>
      </div>
      <div className="build-mark" aria-hidden="true">
        <div className="build-cube cube-one" />
        <div className="build-cube cube-two" />
        <div className="build-cube cube-three" />
        <span>BUILD / TEST / IMPROVE</span>
      </div>
    </section>

    <section className="about-panel panel-sunken">
      <SectionTitle eyebrow="Player profile" title="About me" />
      <p>I’m a curious developer focused on backend systems, data-driven tools, and cybersecurity. My work combines analytical precision with practical design.</p>
      <div className="stat-row">
        <div><strong>03+</strong><span>Core projects</span></div>
        <div><strong>02</strong><span>Degree tracks</span></div>
        <div><strong>01</strong><span>Current role</span></div>
      </div>
    </section>

    <section className="skills-panel panel-sunken">
      <SectionTitle eyebrow="Technical inventory" title="Skills" />
      <div className="inventory-grid">
        {skills.map((skill) => (
          <div className="inventory-slot" key={skill.name} title={skill.name}>
            <span className={`skill-gem ${skill.tone}`}>{skill.code}</span>
            <small>{skill.name}</small>
          </div>
        ))}
      </div>
    </section>

    <section className="featured-panel panel-sunken">
      <div className="panel-title-row">
        <SectionTitle eyebrow="Selected builds" title="Featured projects" />
        <button className="text-link" onClick={() => navigate('projects')}>View all <ChevronRight /></button>
      </div>
      <div className="featured-list">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <article className="project-mini" key={project.title}>
              <div className={`project-emblem emblem-${index + 1}`}><Icon /></div>
              <div>
                <span className="project-status">{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  </div>
);

const ProjectsView = () => (
  <div className="content-view view-enter">
    <div className="view-header">
      <SectionTitle eyebrow="Build archive" title="Projects" />
      <p>Selected systems built to solve practical problems with clean architecture and measurable utility.</p>
    </div>
    <div className="project-grid">
      {projects.map((project, index) => {
        const Icon = project.icon;
        return (
          <article className="project-card panel-sunken" key={project.title}>
            <div className={`project-visual visual-${index + 1}`}>
              <Icon />
              <span>BUILD 0{index + 1}</span>
            </div>
            <div className="project-card-body">
              <div className="project-card-top"><span>{project.status}</span><ExternalLink /></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        );
      })}
    </div>
    <a className="wide-link panel-raised" href="https://github.com/yashmusterya/" target="_blank" rel="noreferrer">
      <Github /> Explore the complete build archive <ChevronRight />
    </a>
  </div>
);

const JourneyView = () => (
  <div className="content-view view-enter">
    <div className="view-header">
      <SectionTitle eyebrow="Progress log" title="Experience & education" />
      <p>A path shaped by applied research, community leadership, and continuous technical learning.</p>
    </div>
    <div className="journey-layout">
      <div className="timeline">
        {journey.map((item) => {
          const Icon = item.icon;
          return (
            <article className="timeline-item panel-sunken" key={`${item.role}-${item.place}`}>
              <div className="timeline-icon"><Icon /></div>
              <div>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <h4>{item.place}</h4>
                <p>{item.detail}</p>
              </div>
            </article>
          );
        })}
      </div>
      <aside className="achievement-panel panel-raised">
        <Award />
        <p>Achievement unlocked</p>
        <h3>S Grade</h3>
        <span>Python Foundation · IIT Madras</span>
        <div className="xp-track"><i /></div>
        <small>Foundation level completed</small>
      </aside>
    </div>
  </div>
);

const ContactView = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    try {
      await emailjs.send('service_tt5e8sg', 'template_lm91bre', {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_name: 'Yash Musterya',
      }, 'lyUaPD5TapWe7HfjH');
      setForm({ name: '', email: '', subject: '', message: '' });
      toast({ title: 'Message sent', description: 'Thanks for reaching out. I’ll reply soon.' });
    } catch {
      toast({ title: 'Message not sent', description: 'Please email me directly at musteryay@gmail.com.', variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="content-view contact-view view-enter">
      <div className="view-header">
        <SectionTitle eyebrow="Open channel" title="Let’s build something useful" />
        <p>Have a project, internship, or collaboration in mind? Send a message and I’ll get back to you.</p>
      </div>
      <div className="contact-layout">
        <aside className="contact-details panel-sunken">
          <div className="contact-signal"><span /><span /><span /></div>
          <h3>Connection details</h3>
          <a href="mailto:musteryay@gmail.com"><Mail /> <span><small>Email</small>musteryay@gmail.com</span></a>
          <div><MapPin /> <span><small>Location</small>Thane, Maharashtra, India</span></div>
          <a href="https://www.linkedin.com/in/yashmusterya/" target="_blank" rel="noreferrer"><Linkedin /> <span><small>LinkedIn</small>/in/yashmusterya</span></a>
          <p className="response-note"><Check /> Usually responds within 24 hours</p>
        </aside>
        <form className="message-form panel-raised" onSubmit={submit}>
          <div className="form-row">
            <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
          </div>
          <label>Subject<input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="What are we building?" /></label>
          <label>Message<textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your idea..." /></label>
          <Button type="submit" disabled={sending} className="pixel-button submit-button">
            <Send /> {sending ? 'Sending...' : 'Send message'}
          </Button>
        </form>
      </div>
    </div>
  );
};

const Index = () => {
  const [view, setView] = useState<View>('dashboard');

  return (
    <main className="portfolio-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="portfolio-window">
        <header className="title-bar">
          <button className="brand" onClick={() => setView('dashboard')} aria-label="Open overview">
            <span className="brand-cube"><i /></span>
            <span>YASH MUSTERYA <small>// PORTFOLIO.EXE</small></span>
          </button>
          <div className="window-controls" aria-hidden="true"><span /><span /><span /></div>
        </header>

        <div className="window-body">
          <aside className="profile-sidebar">
            <div className="portrait-frame">
              <img src={profileImage} alt="Yash Musterya" />
              <span className="online-badge">ONLINE</span>
            </div>
            <div className="profile-copy">
              <p className="profile-name">Yash Musterya</p>
              <p>Developer · Analyst</p>
              <span><MapPin /> Thane, India</span>
            </div>
            <nav className="side-nav" aria-label="Portfolio sections">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.id} className={view === item.id ? 'active' : ''} onClick={() => setView(item.id)}>
                    <Icon /> <span>{item.label}</span><ChevronRight className="nav-arrow" />
                  </button>
                );
              })}
            </nav>
            <div className="sidebar-links">
              <a href="https://github.com/yashmusterya/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href="https://www.linkedin.com/in/yashmusterya/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:musteryay@gmail.com" aria-label="Email"><Mail /></a>
            </div>
            <div className="xp-block">
              <div><span>Growth</span><strong>78%</strong></div>
              <div className="xp-track"><i /></div>
            </div>
          </aside>

          <div className="main-console">
            {view === 'dashboard' && <Dashboard navigate={setView} />}
            {view === 'projects' && <ProjectsView />}
            {view === 'journey' && <JourneyView />}
            {view === 'contact' && <ContactView />}
          </div>
        </div>

        <footer className="hotbar">
          <div className="hotbar-copy"><Wrench /> <span>BUILDING IDEAS, ONE BLOCK AT A TIME.</span></div>
          <div className="mobile-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              return <button key={item.id} className={view === item.id ? 'active' : ''} onClick={() => setView(item.id)} aria-label={item.label}><Icon /></button>;
            })}
          </div>
          <span className="version">v2.0 · READY</span>
        </footer>
      </div>
    </main>
  );
};

export default Index;