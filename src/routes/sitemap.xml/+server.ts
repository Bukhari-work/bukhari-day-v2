import { getProjects } from "$lib/utils/projects"; // <--- Update import
import { getWritings } from "$lib/utils/writings";

export async function GET() {
	const site = "https://www.bukhari.day";

	// Update to await both functions
	const projects = await getProjects();
	const writings = await getWritings();

	const pages = ["about", "projects", "writings"];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
		)
		.join("")}
  ${projects
		.map(
			(project) => `
  <url>
    <loc>${site}/projects/${project.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
		)
		.join("")}
  ${writings
		.map(
			(writing) => `
  <url>
    <loc>${site}/writings/${writing.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
		)
		.join("")}
</urlset>`;

	return new Response(sitemap, {
		headers: { "Content-Type": "application/xml" },
	});
}
