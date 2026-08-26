# Guardian Robot — Web (Next.js)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.42-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![CI](https://github.com/starlyn2010/guardian-robot-web/actions/workflows/ci.yml/badge.svg)](https://github.com/starlyn2010/guardian-robot-web/actions/workflows/ci.yml)

Next.js narrative landing for **Guardian Robot** — the Android guardian robot. Story-driven sections (Hero → Viaje → Timeline → Soluciones → TechStack → Download), Framer Motion entrance + scroll animations, particle canvas, glass-morphism cards, and a direct APK download. No hype, just what ships.

> **Related:** [guardian-robot](https://github.com/starlyn2010/guardian-robot) (Android app Kotlin+CameraX+TFLite) · [guardian-robot-site](https://github.com/starlyn2010/guardian-robot-site) (static official site)

---

## Features

- **App Router** — `src/app/layout.js` + `page.js` with `next.config.mjs` (`images.unoptimized: true`) and `vercel.json` (`framework: nextjs`)
- **Story timeline** — `Viaje`, `Timeline` components narrate the build from Arduino KeyBot to Bluetooth brain
- **Animated UI** — `framer-motion` for `initial/whileInView`, `Particles` canvas in `Hero`, hover glass effects
- **Tech showcase** — 6-card `TechStack` (Android/Kotlin, TFLite EfficientDet-Lite0, Arduino Uno, HC-06 Bluetooth, GitHub Actions, HC-SR04) + connection diagram
- **Design system** — Tailwind `cyber` palette (`green #00ff41`, `red #ff1744`, `yellow #ffd600`, `dark #0a0a0f`), `JetBrains Mono` + `Inter`, `glass` utilities, custom `glow`/`float` keyframes
- **APK delivery** — `public/guardian-robot.apk` served at `/guardian-robot.apk`, `Download.jsx` CTA with requirements list

### What this site is not

- Not the official minimal static site (see `guardian-robot-site` for zero-build HTML/CSS)
- No auth, no backend, no analytics by default — pure static marketing

---

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.js       # RootLayout + metadata (title/description/OG), globals.css
│   │   ├── page.js         # Composes Hero, Viaje, Timeline, Soluciones, TechStack, Download, Footer
│   │   └── globals.css     # Tailwind base + cyber theme, glass, grid-bg, glows
│   └── components/
│       ├── Hero.jsx        # Particle canvas, motion hero, download + GitHub CTAs
│       ├── Viaje.jsx       # Journey intro
│       ├── Timeline.jsx    # Build timeline / errors encountered
│       ├── Soluciones.jsx  # Solutions to hardware/software errors
│       ├── TechStack.jsx   # 6 tech cards + Phone↔BT↔Arduino diagram
│       ├── Download.jsx    # APK card (~19.9 MB, v1.0), requirements
│       └── Footer.jsx
├── public/
│   └── guardian-robot.apk  # APK binary (checked in for direct download)
├── jsconfig.json           # "@/*" → "src/*" alias
├── next.config.mjs         # images.unoptimized
├── tailwind.config.js      # cyber.* colors, fonts, animations
├── postcss.config.js
├── vercel.json             # framework nextjs, cleanUrls
└── package.json
```

---

## Prerequisites

- **Node.js** 18+ (CI uses 20) and **npm** 9+
- No native deps beyond `npm ci`

Check:

```bash
node -v   # >=18
npm -v
```

---

## Installation & Local Development

```bash
git clone https://github.com/starlyn2010/guardian-robot-web.git
cd guardian-robot-web

npm install
# or
npm ci
```

Run dev server:

```bash
npm run dev
# → http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build → .next/
npm run start   # serve build → http://localhost:3000
npm run lint    # eslint (next/core-web-vitals if configured)
```

Edit `src/app/layout.js` for site-wide `metadata` (title/description/OG), `tailwind.config.js` for theme, `src/components/*` for sections.

---

## Build & Deployment

### Vercel (recommended)

Configured via `vercel.json`:

```json
{
  "version": 2,
  "framework": "nextjs",
  "cleanUrls": true
}
```

Push to `main` auto-deploys if Vercel Git integration is connected. Manual:

```bash
npm i -g vercel
vercel --prod
```

Or via GitHub Actions: once CI passes, Vercel preview/prod hooks deploy automatically (if linked).

### Other hosts

`npm run build` produces `.next/` (Next.js build). For static export (if needed), set `output: 'export'` in `next.config.mjs` and use `out/`.

---

## Configuration

- **Alias:** `@/*` → `src/*` defined in `jsconfig.json` — use `import Hero from '@/components/Hero'`
- **APK:** replace `public/guardian-robot.apk` with a new build from `guardian-robot` Actions → keep `Download.jsx` `href="/guardian-robot.apk"` or point to `https://github.com/starlyn2010/guardian-robot/releases/latest/download/app-debug.apk`
- **Theme:** `tailwind.config.js` → `theme.extend.colors.cyber` and `fontFamily.mono`
- **Headers:** add security/cache headers in `vercel.json` if needed (see `guardian-robot-site` for example)

---

## CI

` .github/workflows/ci.yml` (new) — Node 20, `npm ci`, `npm run lint`, `npm run build`, checks `.next/` exists. Runs on push/PR to `main` and manual dispatch.

---

## Contributing

Issues and PRs welcome. Keep sections focused: `Hero` for above-fold, `Timeline`/`Soluciones` for narrative, `TechStack`/`Download` for conversion. Run `npm run lint && npm run build` before pushing.

---

## License

MIT — see [LICENSE](LICENSE). Copyright (c) 2026 Starlyn Rosario.

## Citation

```bibtex
@software{guardian_robot_web_2026,
  title  = {Guardian Robot — Web (Next.js)},
  author = {Rosario, Starlyn},
  year   = {2026},
  url    = {https://github.com/starlyn2010/guardian-robot-web},
  license= {MIT}
}
```

See [CITATION.cff](CITATION.cff).

## Acknowledgments

- Next.js, React, Tailwind CSS, Framer Motion, Lucide Icons
- Fonts: Inter + JetBrains Mono
- Hosting: Vercel
