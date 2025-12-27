// src/lib/utils/posts.ts
import type { Post } from "$lib/types";

export async function getPosts() {
  // 1. Vite "Glob" import - this is the magic.
  // It finds all .md files in the content/posts folder.
  const paths = import.meta.glob("$content/writings/*.md", { eager: true });

  const posts: Post[] = [];

  // 2. Loop through the files and format the data
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    // The 'metadata' comes from the YAML frontmatter at the top of the MD file
    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const post = { ...metadata, slug } as Post;

      // Only show published posts
      if (post.published) {
        posts.push(post);
      }
    }
  }

  // 3. Sort by date (newest first)
  posts.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

  return posts;
}
