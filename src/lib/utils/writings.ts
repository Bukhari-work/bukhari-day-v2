// src/lib/utils/writings.ts
import type { Writing } from "$lib/types";

export async function getWritings() {
	// 1. Vite "Glob" import  finds all .md files in the content/writings folder.
	const paths = import.meta.glob("$content/writings/*.md", { eager: true });

	const writings: Writing[] = [];

	// 2. Loop through the files and format the data
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split("/").at(-1)?.replace(".md", "");

		// The 'metadata' comes from the YAML frontmatter at the top of the MD file
		if (file && typeof file === "object" && "metadata" in file && slug) {
			const metadata = file.metadata as Omit<Writing, "slug">;

			const writing = {
				...metadata,
				slug,
				// SAFETY FIX: If tags is missing, default to empty array
				tags: metadata.tags || [],
			} as Writing;

			if (writing.published) {
				writings.push(writing);
			}
		}
	}

	// 3. Sort by date (newest first)
	writings.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return writings;
}
