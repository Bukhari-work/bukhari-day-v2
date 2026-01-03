<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";

	import { ArrowLeft } from "@lucide/svelte";

	let { data } = $props();

	// Format date nicely
	let formattedDate = $derived(
		new Date(data.meta.date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		})
	);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<article class="container max-w-4xl py-10 md:py-16">
	<nav class="mb-8">
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
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
			{data.meta.title}
		</h1>

		<div class="text-muted-foreground flex items-center gap-2 font-mono text-sm">
			<time datetime={data.meta.date}>{formattedDate}</time>
		</div>

		{#if data.meta.tags}
			<div class="flex gap-2">
				{#each data.meta.tags as tag}
					<Badge variant="secondary" class="rounded-md px-2 py-0 text-xs font-normal">
						#{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</header>

	<Separator class="my-8" />

	<section
		class="prose dark:prose-invert prose-headings:leading-none prose-li:leading-normal mx-auto max-w-3xl min-w-0"
	>
		<data.content />
	</section>
</article>
