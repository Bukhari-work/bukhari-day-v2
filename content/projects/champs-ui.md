---
title: "CHAMPS UI Landing Site"
slug: "champs-ui-portal"
summary: "Engineered a high-performance, multilingual web presence for the Center for Health Administration and Policy Studies at the Faculty of Public Health, Universitas Indonesia."
role: "Frontend Developer & Consultant"
year: "2025"
tech: ["Astro", "Tailwind CSS", "i18n", "Static Site Generation"]
links:
  - label: "Live Site"
    url: "https://www.champs-ui.org"
thumbnail: "/projects/champs-ui_thumbnail.webp"
highlights:
  - "Delivered a dual-language (English/Indonesian) static portal optimized for global accessibility."
  - "Architected a zero-JS frontend using Astro, achieving perfect 100 Lighthouse performance scores."
  - "Structured complex bilingual navigation mapping to support extensive research publications."
featured: true
---

<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
</script>

## Executive Summary

The Center for Health Administration and Policy Studies (CHAMPS) at the Faculty of Public Health, Universitas Indonesia, required a highly professional and accessible digital platform to publish their research, policy briefs, and institutional updates. 

Operating as the lead developer and consultant, I delivered a statically generated portal using Astro. The architecture prioritized absolute performance and seamless bilingual support (English and Indonesian), ensuring critical public health research is instantly accessible to both local policymakers and international organizations.

---

## The Challenge

Academic and research institutions often struggle with bloated content management systems that slow down page loads and frustrate users. For CHAMPS, the requirements were strict:
1. **Uncompromised Performance:** The site had to load instantly, even on constrained mobile networks, to ensure equitable access to health data.
2. **Bilingual Architecture:** The platform needed robust `i18n` support, not just for content, but for SEO metadata and navigation routing across both English and Indonesian locales.
3. **Scalable Content:** Researchers needed a frictionless way to publish papers without breaking the site's layout or requiring constant developer intervention.

---

## Technical Architecture

I selected **Astro** as the foundational framework. Its default zero-JavaScript output was the perfect fit for a highly text-and-document-heavy research portal.

### High-Performance Static Generation
By shipping raw HTML instead of massive JavaScript bundles, the site achieves perfect 100s across Google PageSpeed Insights. Tailwind CSS was utilized to build a clean, authoritative UI that maintains strict visual consistency across hundreds of pages without the overhead of heavy runtime CSS-in-JS libraries.

### Advanced i18n & Navigation Data
Handling two languages natively required a predictable and strictly typed data structure. For the complex site routing, I architected the `headerNav` as an array of objects rather than a single monolithic map. This approach made it incredibly efficient to iterate over the navigation items, dynamically injecting the correct locale prefixes (`/en/` or `/id/`) while keeping the component logic exceptionally clean and scalable as new site sections are added.

### Content Management
I engineered a custom CMS integration that allows the CHAMPS team to author content easily. This keeps the authoring process straightforward for non-technical staff while allowing the Astro build step to heavily optimize the final output.

---

## Business Impact

* **Global Reach:** The optimized bilingual SEO strategy significantly improved the discoverability of UI's public health research on an international scale.
* **Accessibility:** The lightweight, statically generated pages ensure that critical policy information is accessible to all users, regardless of bandwidth limitations.
* **Operational Independence:** The intuitive content architecture allows the research staff to publish new findings autonomously without relying on continuous technical support.
