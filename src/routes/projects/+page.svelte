<script lang="ts">
	import type { PageData } from "./$types";
	import SEO from "$lib/components/SEO.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";

	let { data }: { data: PageData } = $props();
</script>

<SEO
	title="Projects"
	description="A collection of web development projects, case studies, and experiments built with SvelteKit and Tailwind."
/>

<div class="container py-12">
	<header class="mb-12 max-w-prose space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Projects</h1>
		<p class="text-muted-foreground text-xl">
			A collection of things I've built. Some are side projects, some are case studies, and
			others are just for fun.
		</p>
	</header>

	{#if data.projects.length > 0}
		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each data.projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	{:else}
		<div class="text-muted-foreground rounded-lg border border-dashed p-12 text-center">
			<p>No writings found. Check back later!</p>
		</div>
	{/if}
</div>
