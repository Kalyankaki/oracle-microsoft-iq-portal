# Oracle × Microsoft IQ — Progression Demo Portal

A polished, production-ready demo portal that visually shows how AI agents grounded on
Oracle Fusion data get progressively smarter as Microsoft IQ layers — **Fabric IQ**,
**Foundry IQ**, **Work IQ** — are added on top.

The portal answers the same prompt four times, side-by-side, on synthetic Oracle
Fusion-style data:

1. **Baseline** — Microsoft Copilot + Oracle data mirrored into Fabric / OneLake (no IQ).
2. **+ Fabric IQ** — semantic intelligence over the mirrored Oracle data.
3. **+ Fabric IQ + Foundry IQ** — agent reasoning, retrieval, and grounding.
4. **+ Fabric IQ + Foundry IQ + Work IQ** — personalized via Microsoft Graph.

## Tech stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- `framer-motion` for tier transitions and IQ-badge animations
- `lucide-react` for iconography
- No database — all synthetic data lives in `src/lib/data/*.ts`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/tier/baseline` with the
Supply Chain Risk scenario pre-loaded. Use the left sidebar to step through tiers,
or click **Compare All** for the side-by-side view.

## Build & deploy

```bash
npm run build   # production build
npm run start   # serve the build
```

The repo is ready to deploy to Vercel with zero config — point Vercel at this
repository and it will detect Next.js automatically.

## Project layout

```
src/
  app/
    layout.tsx                      # root layout (fonts, metadata)
    page.tsx                        # redirects to /tier/baseline
    globals.css
    (portal)/
      layout.tsx                    # shared portal shell (header + sidebar)
      tier/[tierId]/page.tsx        # main demo view, per IQ tier
      compare/page.tsx              # 2×2 compare-all view
  components/
    Header.tsx
    Sidebar.tsx
    ArchitectureStrip.tsx
    IQBadge.tsx
    ScenarioPicker.tsx
    ChatExchange.tsx
    ResponseBlocks.tsx
    WhatChangedCallout.tsx
    CompareGrid.tsx
  lib/
    utils.ts
    data/
      tiers.ts                      # tier metadata + enabled IQ layers
      scenarios.ts                  # the three demo prompts
      architecture.ts               # architecture stages + Purview
      oracle-mirror.ts              # synthetic Oracle Fusion records
      responses.ts                  # tier × scenario response matrix
public/
  logos/                            # SVG placeholders (no real brand marks)
```

## Notes for the audience

- All numbers, names, and account references are **synthetic**. No live system
  is queried.
- The architecture strip lights up progressively as IQ layers are enabled.
  Microsoft Purview is shown as governing every stage at all times.
- Tier 3 (Work IQ) intentionally feels more proactive and personal than Tier 2
  — that contrast is the headline of the demo.
