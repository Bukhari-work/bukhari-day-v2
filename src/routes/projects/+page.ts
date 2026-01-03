import { getProjects } from "$lib/utils/projects";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	const projects = await getProjects();
	return { projects };
};
