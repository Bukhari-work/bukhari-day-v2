<script lang="ts">
	import { page } from "$app/state"; // <--- 1. New import

	let {
		title = "Full Stack Data Analyst",
		description = "Build reliable data pipelines and dashboards that turn chaotic user behavior into clear strategy.",
		image = "/og-default.png",
		type = "website",
	} = $props();

	const siteUrl = "https://bukhari.day";

	const absoluteImageUrl = $derived(image.startsWith("http") ? image : `${siteUrl}${image}`);

	let currentUrl = $derived(`${siteUrl}${page.url.pathname}`);
	let pageTitle = $derived(`${title} | Ahmad Bukhari`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={currentUrl} />

	<meta property="og:type" content={type} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={absoluteImageUrl} />
	<meta property="og:site_name" content="Ahmad Bukhari" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteImageUrl} />
</svelte:head>
