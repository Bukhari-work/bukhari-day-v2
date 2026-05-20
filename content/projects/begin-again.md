---
title: "Begin Again Coffee"
slug: "begin-again-coffee-platform"
summary: "Engineered an end-to-end platform for a local coffee business, unifying a lightweight marketing site, a custom kiosk POS, and a real-time analytics dashboard."
role: "Full Stack Engineer"
year: "2025–2026"
tech: ["SvelteKit", "Svelte 5", "shadcn-svelte","Tailwind v4", "Supabase", "PostgreSQL"]
link:
  label: "Live Site"
  url: "https://beginagain.work"
thumbnail: "/projects/begin-again_thumbnail.webp"
highlights:
  - "Shipped a cohesive platform serving public marketing, internal kiosk operations, and business management."
  - "Engineered a touch-optimized POS interface using Svelte 5 runes for instantaneous state updates."
  - "Built a real-time management dashboard powered by PostgreSQL materialized views for instant COGS tracking."
featured: true
---

<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
</script>

## Executive Summary

Begin Again Coffee required a modern digital infrastructure to support its entire business lifecycle—from acquiring customers to processing orders and analyzing financial health. To avoid the fragmentation of using disjointed off-the-shelf software, I architected a unified platform. 

This single SvelteKit codebase powers three distinct operational domains: a highly accessible **Marketing Site**, a custom **Point-of-Sale (POS) Kiosk**, and a real-time **Management Dashboard**. By deeply integrating the frontend UI with a robust PostgreSQL backend on Supabase, the business achieved frictionless daily operations and immediate financial clarity.

---

## The Challenge

Local coffee shops are often forced into generic software that solves only one part of the puzzle. The project required solving three distinct problems simultaneously without accumulating massive technical debt:
1. **Public Face:** A fast-loading, easily updatable marketing site to drive foot traffic.
2. **Internal Operations:** A lag-free, kiosk interface capable of handling custom menu logic (e.g., accurately treating a "Vietnam Drip" as a filter/immersion hybrid, not an espresso).
3. **Business Management:** An admin layer to track inventory, calculate Cost of Goods Sold (COGS), and audit daily shifts without manual spreadsheet data entry.

---

## Core Features & Experience

### The Marketing Site (Customer Experience)
Designed as the public entry point, focusing on performance and content management.
* **Content Workflow:** Leverages MDsveX for clean, editorial updates without touching layout code.
* **Consistent UI:** Built with reusable Tailwind v4 primitives (Buttons, Badges, Cards) to ensure high Lighthouse scores and zero visual layout shifts.

<figure class="my-8 overflow-hidden rounded-xl border bg-muted shadow-sm">
  <img 
    src="/projects/begin-again_marketing.webp" 
    alt="The public-facing marketing site for Begin Again Coffee" 
    class="w-full object-cover" 
    loading="lazy" 
  />
  <figcaption class="border-t p-3 text-center text-sm text-muted-foreground">
    The marketing landing page optimized for fast mobile loading.
  </figcaption>
</figure>

### The Kiosk POS (Staff Experience)
Designed exclusively for staff operations, optimizing for speed and complex order permutations.
* **Reactive State Management:** Relies entirely on Svelte 5's reactivity model (`$state`, `$derived`, `$effect`) to power product configuration modals and instantly tally cart updates.
* **Touch-Optimized UI:** Interface elements and hit areas are scaled specifically for kiosk form factors in a fast-paced physical environment.

<figure class="my-8 overflow-hidden rounded-xl border bg-muted shadow-sm">
  <img 
    src="/projects/begin-again_pos.webp" 
    alt="Touch-optimized POS order entry screen" 
    class="w-full object-cover" 
    loading="lazy" 
  />
  <figcaption class="border-t p-3 text-center text-sm text-muted-foreground">
    The custom kiosk interface handling complex menu logic and rapid order entries.
  </figcaption>
</figure>

### The Management Dashboard (Admin Experience)
A secure, role-gated environment for business oversight and analytics.
* **Real-time Financials:** Surfaces daily revenue, shift performance, and COGS instantly.
* **Actionable Insights:** Transforms raw ledger data into scannable data tables and charts, allowing management to adjust inventory ordering on the fly.

<figure class="my-8 overflow-hidden rounded-xl border bg-muted shadow-sm">
  <img 
    src="/projects/begin-again_dashboard.webp" 
    alt="Management dashboard showing real-time COGS and shift data" 
    class="w-full object-cover" 
    loading="lazy" 
  />
  <figcaption class="border-t p-3 text-center text-sm text-muted-foreground">
    The admin dashboard aggregating transaction data for real-time business intelligence.
  </figcaption>
</figure>

---

## Technical Architecture (Deep Dive)

The system's reliability hinges on a shared, unified codebase and a deeply customized operational database that safely serves all three interfaces.

### System Unification
The marketing site, POS, and dashboard exist within a single SvelteKit application. This allows for shared UI primitives and utility functions while utilizing layout groups to strictly isolate administrative and operational routes behind Supabase Authentication.

#### Database & Operational Integrity
Built on PostgreSQL (PG18) via Supabase, I utilized `postgres.js` for highly performant, raw SQL data fetching and mutations. The data layer is designed for strict accounting integrity:

* **The Immutable Ledger:** I implemented database-level audit triggers to guarantee that transaction records generated by the POS cannot be accidentally or maliciously overwritten. 
* **Materialized Views for Analytics:** To keep the Management Dashboard queries highly performant, I configured materialized views that dynamically calculate and track the COGS in real time.
* **Operational Indexing Strategy:** I deliberately retained a dedicated `shift` column in the orders table. While technically redundant alongside the `created_at` timestamp, it drastically simplifies end-of-day operational queries and provides highly optimized indexing for the dashboard's shift-based reporting.

<figure class="bg-card flex flex-col overflow-hidden rounded-xl border shadow-sm">
  <a 
    href="/projects/begin-again_schema-graph.svg" 
    target="_blank" 
    rel="noopener noreferrer"
    class="group relative block overflow-hidden p-4"
  >
    <img 
      src="/projects/begin-again_schema-graph_preview.webp" 
      alt="Supabase SQL Schema Graph Preview" 
      loading="lazy" 
      class="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01] bg-muted-foreground rounded-md" 
    />
    <div class="absolute right-6 top-6">
      <Badge variant="secondary" class="shadow-sm">View Full Vector (7.4 MB)</Badge>
    </div>
  </a>
  <figcaption class="border-t p-3 text-center text-sm text-muted-foreground">
    Entity-Relationship Diagram generated via Supabase. Click to open the full high-res vector schema.
  </figcaption>
</figure>

---

## Business Impact

* **Reduced Overhead:** Consolidating customer acquisition, order processing, and analytics into a single platform eliminated multiple external software subscriptions.
* **Operational Velocity:** Staff process complex custom orders faster using a UI explicitly tailored to their workflow.
* **Financial Clarity:** The immutable ledger and real-time materialized views grant management instant, accurate reads on business health and inventory costs directly from the dashboard.
