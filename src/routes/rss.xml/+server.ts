import { getWritings } from "$lib/utils/writings";

export const GET = async () => {
	const writings = await getWritings();
	const siteUrl = "https://www.bukhari.day";
	const feedUrl = `${siteUrl}/rss.xml`;

	const render = (writings: any[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
	<title>Ahmad Bukhari</title>
	<description>Full Stack Data Analyst based in Banjarmasin, ID.</description>
	<link>${siteUrl}</link>
	<atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
	<language>en-us</language>
	<copyright>Copyright ${new Date().getFullYear()}, Ahmad Bukhari</copyright>
	<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
	${writings
		.map(
			(writing) => `
		<item>
			<title>${writing.title}</title>
			<link>${siteUrl}/writings/${writing.slug}</link>
			<guid isPermaLink="true">${siteUrl}/writings/${writing.slug}</guid>
			<description>${writing.description}</description>
			<pubDate>${new Date(writing.date).toUTCString()}</pubDate>
		</item>
	`
		)
		.join("")}
</channel>
</rss>`;

	const xml = render(writings);

	return new Response(xml, {
		headers: {
			"Cache-Control": "max-age=0, s-maxage=3600",
			"Content-Type": "application/xml",
		},
	});
};
