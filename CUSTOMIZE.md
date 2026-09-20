# Editing this portfolio

Everything you'd normally want to change lives in **`src/content/`**. You should
almost never need to open a component file.

```
src/content/
├── profile.ts       name, role, summary, contact links, hero stats
├── projects.ts      every project, its status, bullets and stack
├── skills.ts        the inventory grid, grouped
├── experience.ts    jobs and internships
├── education.ts     degrees, grades, semester progression
├── achievements.ts  hackathons, leadership, interests
├── site.ts          navigation, window chrome text, EmailJS keys
├── theme.ts         the four biome colour presets
└── types.ts         the shape of all of the above (don't edit casually)
```

TypeScript checks these files, so if you mistype a field name the build tells you
which line is wrong. Run `npm run dev` and the page reloads as you save.

---

## Common edits

### Change your headline or summary

`src/content/profile.ts` — `profile.summary` is the paragraph in the hero,
`profile.about` is the array of paragraphs in the About panel (add or remove
strings freely).

To hide the green "available" pill, set `availability: null`.

### Add a project

Copy an existing block in `src/content/projects.ts` and change the fields.

```ts
{
  id: 'my-project',            // must be unique
  title: 'My Project',
  subtitle: 'optional second line',
  status: 'Shipped',           // see the list below
  featured: true,              // pins it to the Overview screen
  icon: 'blocks',              // any key from src/lib/icons.ts
  tone: 'emerald',             // emerald gold sky ore ember aqua rose stone
  summary: 'One sentence.',
  highlights: ['Bullet one.', 'Bullet two.'],
  tags: ['Full-stack'],        // domains — these drive the filter chips
  stack: ['Flask', 'Vue 3'],   // technologies — shown as chips on the card
  links: [{ label: 'Source', href: 'https://…', icon: 'github' }],
}
```

`status` is one of `Shipped`, `In progress`, `Professional`, `Academic`,
`Prototype`, `Explored`. Keep it honest — the labels are the point.

**`tags` vs `stack`:** tags are broad domains and become the filter buttons, so
reuse the existing eight rather than inventing a new one per project. `stack` is
the concrete technology list and can be anything.

### Add or change an icon

Icons are referenced by name. To use one that isn't registered yet, open
`src/lib/icons.ts`, import it from `lucide-react`, and add it to the `icons`
object. Browse the full set at [lucide.dev/icons](https://lucide.dev/icons/).

### Change the navigation

`src/content/site.ts` — reorder or rename `navItems`. The sidebar, the mobile
hotbar and the number-key shortcuts all follow this array automatically.
Removing an entry also removes its screen from the shortcuts.

### Swap the résumé

Drop your PDF into `public/` and point `profile.resumeUrl` at it, e.g.
`'/my-resume.pdf'`. Set it to `null` to hide every download button.

### Swap the photo

Replace `src/assets/yash-profile-new.jpg` (keep the filename) or add a new file
and change the `import avatar from …` line at the top of `profile.ts`.

### Add a certificate

Put the image or PDF in `public/certificates/` and add `proofUrl` to the
achievement in `src/content/achievements.ts`.

---

## Theming

`src/content/theme.ts` holds four biome presets. The picker in the title bar
switches between them and the choice is remembered per browser.

To add a fifth, copy a block and change the values:

```ts
{
  id: 'lush-caves',
  name: 'Lush Caves',
  description: 'Shown in the tooltip.',
  swatch: ['140 50% 55%', '340 60% 70%', '140 10% 20%'],  // the 3 preview colours
  vars: { '--accent': '140 50% 55%', /* …the rest… */ },
}
```

It appears in the picker with no other changes. Values are bare HSL triples
(`"h s% l%"`, no `hsl()` wrapper) — that's what lets the stylesheet write things
like `hsl(var(--accent) / 0.4)`.

To change which theme new visitors see, set `defaultThemeId`.

### Spacing, type size, borders

`src/index.css`, in the `:root` block at the top. Everything downstream reads
these variables, so bumping `--text-base` or `--gap` rescales the whole site.

---

## Contact form

The form posts through [EmailJS](https://www.emailjs.com/). Credentials live in
`src/content/site.ts` and fall back to the existing account.

To use your own, copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=…
VITE_EMAILJS_TEMPLATE_ID=…
VITE_EMAILJS_PUBLIC_KEY=…
```

The EmailJS public key is *publishable* — it ships inside the JavaScript bundle
by design, and anyone can read it in any deployment. Hiding it is not the
control that matters; set **allowed domains** and a **rate limit** in the
EmailJS dashboard instead.

Your EmailJS template needs these variables: `from_name`, `from_email`,
`reply_to`, `subject`, `message`, `to_name`.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build into dist/
npm run lint
```

## Keyboard shortcuts

Press **1**–**6** anywhere outside a form field to jump between screens. Each
screen also has its own URL (`/#projects`, `/#contact`, …), so they are
linkable and the browser back button works.
