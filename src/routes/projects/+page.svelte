<script lang="ts">
	import type { PageData } from "./$types";
	import ProjectCard from "$lib/components/ProjectCard.svelte";

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Projects | Your Name</title>
	<meta
		name="description"
		content="A showcase of my software engineering projects and experiments."
	/>
</svelte:head>

<div class="container py-12">
	<header class="mb-12 max-w-2xl space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">Projects</h1>
		<p class="text-muted-foreground text-xl">
			A collection of things I've built. Some are side projects, some are case studies, and
			others are just for fun.
		</p>
	</header>

	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each data.projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
