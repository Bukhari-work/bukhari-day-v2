/// <reference types="vite/client" />
import type { Project } from "$lib/types";

export async function getProjects() {
	// 1. Read all files in content/projects
	const paths = import.meta.glob("$content/projects/*.md", { eager: true });

	const projects: Project[] = [];

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split("/").at(-1)?.replace(".md", "");

		if (file && typeof file === "object" && "metadata" in file && slug) {
			const metadata = file.metadata as Omit<Project, "slug">;
			// Combine frontmatter with the slug
			projects.push({ ...metadata, slug } as Project);
		}
	}

	// Optional: Sort by year or "featured" status if you want
	return projects;
}

// Helper for the Homepage
export async function getFeaturedProjects() {
	const projects = await getProjects();
	return projects.filter((p) => p.featured);
}
