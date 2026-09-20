# Yash Musterya — Portfolio

A Minecraft-themed personal portfolio: pixel-edged panels, an inventory grid for
skills, an XP bar for semester grades and a hotbar for navigation — wrapped
around a restrained, readable layout that works as a professional site.

<p>
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

## Quick start

```bash
npm install
npm run dev
```

Opens on <http://localhost:8080>.

```bash
npm run build     # production build → dist/
npm run preview   # serve the build locally
npm run lint
```

## Editing the content

**All copy lives in `src/content/`.** You change the site by editing typed data
files, not components — see **[CUSTOMIZE.md](CUSTOMIZE.md)** for a field-by-field
guide.

| I want to change…              | Edit                          |
| ------------------------------ | ----------------------------- |
| Name, summary, contact details | `src/content/profile.ts`      |
| Projects                       | `src/content/projects.ts`     |
| Skills inventory               | `src/content/skills.ts`       |
| Jobs and internships           | `src/content/experience.ts`   |
| Degrees and grades             | `src/content/education.ts`    |
| Hackathons, leadership         | `src/content/achievements.ts` |
| Navigation, footer, form keys  | `src/content/site.ts`         |
| Colours                        | `src/content/theme.ts`        |
| Spacing and type scale         | `:root` in `src/index.css`    |

## How it is put together

```
src/
├── content/      all site copy and configuration (start here)
├── components/
│   ├── site/     window shell, sidebar, shared primitives
│   ├── sections/ one file per screen
│   └── ui/       shadcn/ui primitives
├── hooks/        theme + toast
├── lib/          icon registry, class helper
└── index.css     the entire visual design, as CSS custom properties + classes
```

The six screens (Overview, Projects, Skills, Journey, Achievements, Contact)
render inside one persistent window frame. Each has its own URL hash, so screens
are linkable and the back button works. Pressing **1**–**6** jumps between them.

## Features

- **Four biome themes** — Overworld, Deepslate, Nether, The End. Switchable from
  the title bar, remembered per browser, defined entirely as data.
- **Content-driven** — every string, project and skill comes from a typed file;
  the compiler catches mistakes before the browser does.
- **Filterable project archive** by domain, with honest status labels.
- **Responsive** down to 375px, with a bottom hotbar replacing the sidebar.
- **Accessible** — skip link, focus rings, `aria-current` navigation, keyboard
  shortcuts and `prefers-reduced-motion` support.

## Contact form

Uses EmailJS. Keys live in `src/content/site.ts` and can be overridden with
`VITE_EMAILJS_*` environment variables — copy `.env.example` to `.env`. The
public key is publishable by design; restrict abuse with allowed domains and
rate limits in the EmailJS dashboard rather than by hiding it.

## Tech

React 18 · TypeScript · Vite · Tailwind (for the shadcn/ui primitives) · plain
CSS for the portfolio itself · lucide-react · EmailJS.
