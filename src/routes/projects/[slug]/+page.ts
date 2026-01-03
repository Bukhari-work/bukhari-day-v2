import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	try {
		const project = await import(`$content/projects/${params.slug}.md`);

		return {
			content: project.default, // The actual markdown content (converted to a Svelte component)
			meta: project.metadata, // The frontmatter (title, date, etc.)
		};
	} catch (e) {
		error(404, `Could not find project ${params.slug}`);
	}
};
