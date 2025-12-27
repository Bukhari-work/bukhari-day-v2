import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
	try {
		// Dynamic import: Vite sees this string template and knows to look in $content
		const post = await import(`$content/writings/${params.slug}.md`);
		// Note: You might need to adjust the ../ path depending on exactly where your alias points,
		// but typically aliases inside dynamic imports can be finicky.
		// PRO TIP: Using the relative path is often safer for dynamic imports in Vite.
		// If your alias works, you can try: import(`$content/posts/${params.slug}.md`)

		return {
			content: post.default, // The actual markdown content (converted to a Svelte component)
			meta: post.metadata, // The frontmatter (title, date, etc.)
		};
	} catch (e) {
		// If the file doesn't exist, show a 404
		error(404, `Could not find post ${params.slug}`);
	}
};
