import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	try {
		// Dynamic import: Vite sees this string template and knows to look in $content
		const writing = await import(`$content/writings/${params.slug}.md`);

		return {
			content: writing.default, // The actual markdown content (converted to a Svelte component)
			meta: writing.metadata, // The frontmatter (title, date, etc.)
		};
	} catch (e) {
		// If the file doesn't exist, show a 404
		error(404, `Could not find writing ${params.slug}`);
	}
};
