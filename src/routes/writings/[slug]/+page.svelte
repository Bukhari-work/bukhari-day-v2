<script lang="ts">
	import type { PageData } from "./$types";
	import SEO from "$lib/components/SEO.svelte";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";

	import { ArrowLeft } from "@lucide/svelte";

	let { data }: { data: PageData } = $props();

	// Force Time Zone parsing to prevent SSR hydration mismatches
	let formattedDate = $derived(
		new Intl.DateTimeFormat("en-US", {
			timeZone: "Asia/Makassar",
			year: "numeric",
			month: "long",
			day: "numeric",
		}).format(new Date(data.meta.date))
	);

	let isoDate = $derived(new Date(data.meta.date).toISOString());
</script>

<SEO title={data.meta.title} description={data.meta.description} type="article" />

<article class="container py-12 lg:max-w-4xl">
	<nav class="mb-8 hidden md:block">
		<Button
			variant="ghost"
			href="/writings"
			class="text-muted-foreground hover:text-foreground hover:bg-background -ml-4 gap-2 pl-4 transition-colors"
		>
			<ArrowLeft class="h-4 w-4" />
			Back to Writings
		</Button>
	</nav>

	<header class="mb-10 flex flex-col items-center gap-4 text-center">
		<h1 class="text-4xl font-extrabold tracking-tight text-balance lg:text-5xl">
			{data.meta.title}
		</h1>

		<div class="text-muted-foreground flex items-center gap-2 font-mono text-sm">
			<time datetime={isoDate}>{formattedDate}</time>
		</div>

		{#if data.meta.tags && data.meta.tags.length > 0}
			<div class="flex flex-wrap justify-center gap-2">
				{#each data.meta.tags as tag (tag)}
					<Badge variant="secondary" class="text-xs font-normal">
						#{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</header>

	<Separator class="my-8" />

	<section
		class="prose prose-sm md:prose-base dark:prose-invert prose-headings:leading-none prose-li:leading-normal prose-h2:text-primary prose-headings:text-balance mx-auto max-w-3xl min-w-0 text-pretty"
	>
		<data.content />
	</section>
</article>
