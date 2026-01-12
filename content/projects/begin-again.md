---
title: "Begin Again Coffee"
slug: "begin-again-coffee-landing"
summary: "Designed and built a fast, accessible marketing site with a reusable menu system and clean content workflow for a small coffee business."
role: "Solo Creator"
year: "2025"
tech: ["SvelteKit", "Tailwind CSS", "shadcn-svelte", "MDsveX"]
link:
  label: "Github"
  url: "https://example.com"
thumbnail: "/projects/thumbnail.webp"
highlights:
  - "Implemented a single-column project hero with thumbnail-first layout for better scannability."
  - "Created reusable UI primitives (Button, Badge, Card) based on shadcn-svelte."
  - "Improved Lighthouse scores by optimizing images, routing, and font loading strategy."
featured: true
---

<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
</script>

## Key Highlights

This project is a **case study preview** written in MDsveX. It’s structured like a real portfolio entry:

- clear narrative (problem → approach → results),
- scannable sections,
- and light UI enhancements (badges, buttons).

> Tip: Keep the content here “editorial”, and keep your page layout/data in `Project` (frontmatter) so the UI stays consistent.

---

## Problem

The business needed a small site that:

- loads fast on mobile networks,
- is easy to update (menu changes happen often),
- and looks consistent across sections without a heavy CMS.

**Constraints**

- Time-boxed build
- Minimal maintenance
- Content should be editable without touching layout code

---

## Goals

- Ship a clean marketing site with strong typography and consistent components
- Establish a content workflow using MDsveX
- Make updates safe: predictable structure, minimal “custom HTML” in content

---

## Approach

### Information architecture

- **Home**: short positioning + CTA
- **Projects**: case studies (this page)
- **Writing**: notes / posts
- **About**: short profile + links

### UI system

I standardized the look using a small set of primitives:

<Badge variant="outline">Button</Badge>
<Badge variant="outline">Badge</Badge>
<Badge variant="outline">Card</Badge>
<Badge variant="outline">Typography</Badge>

---

## Implementation notes

### Hero layout

The project hero uses a single-column flow:

1. thumbnail
2. title + meta line
3. summary
4. links + built-with

This keeps the reading rhythm consistent and avoids “title competing with sidebar”.

### Content strategy

- Put structured fields in frontmatter (role, year, tech, link, highlights)
- Put narrative content in the body (Problem, Goals, Approach, Results)
- Avoid hardcoding layout inside MDsveX beyond simple components

---

## Results

- Faster iteration on content (edit `.svx`, commit, ship)
- Consistent presentation across projects
- Clearer storytelling for portfolio reviewers

**What I’d improve next**

- Add a `content`/`body` rendering pipeline for richer components (charts, image galleries)
- Add a “Next/Previous project” footer for better navigation

---

## Links

<Button href="https://example.com" target="_blank" rel="noreferrer">
  Visit Live Demo ↗
</Button>
