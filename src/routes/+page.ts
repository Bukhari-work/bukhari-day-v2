import { getFeaturedProjects } from "$lib/utils/projects";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	const featuredProjects = await getFeaturedProjects();
	// Use .slice(0, 3) if you want to limit to top 3
	return { featuredProjects: featuredProjects.slice(0, 2) };
};
