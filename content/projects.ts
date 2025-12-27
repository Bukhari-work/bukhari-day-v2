// Use a relative path to go back into src
import type { Project } from "$lib/types";

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    slug: "portfolio-v1",
    summary:
      "A modern, accessible personal website built with SvelteKit and Tailwind CSS v4. Features a markdown blog and dynamic project showcase.",
    role: "Solo Developer",
    year: "2025",
    tech: ["SvelteKit", "Tailwind v4", "shadcn-svelte", "TypeScript"],
    link: {
      label: "GitHub",
      url: "https://github.com/yourusername/portfolio",
    },
    featured: true,
  },
  {
    title: "Company Dashboard",
    slug: "company-dashboard",
    summary:
      "An internal analytics dashboard for visualizing sales data. Implemented complex data grids and authentication.",
    role: "Frontend Lead",
    year: "2024",
    tech: ["Svelte", "Chart.js", "Supabase"],
    link: {
      label: "Case Study",
      url: "#",
    },
    featured: true,
  },
  {
    title: "Task Manager App",
    slug: "task-manager",
    summary:
      "A productivity tool based on the Eisenhower Matrix method. focused on keyboard accessibility and local-first state.",
    role: "Full Stack",
    year: "2024",
    tech: ["React", "Next.js", "Prisma"],
    link: {
      label: "Live Demo",
      url: "#",
    },
    featured: false,
  },
];

// Helper Functions

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
